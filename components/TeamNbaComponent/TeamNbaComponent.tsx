import React from 'react';
import { useState } from "react"
import { ActiveTeam, TeamStat } from '@/types';
import TeamsStatsDisplay from "@/components/TeamsStatsDisplay/TeamsStatsDisplay";
import TeamAveragesDisplay from "@/components/TeamAveragesDisplay/TeamAveragesDisplay";

interface ComponentProps {
  activeNbaTeams: ActiveTeam[];
  apiKey: string;
}

const TeamNbaComponent:React.FC<ComponentProps> = ({activeNbaTeams, apiKey}) => {  
  const [searchTerm, setSearchTerm] = useState("");  
  const [teamStats, setTeamStats] = useState<TeamStat[]>([]);
  const [showLastGame, setShowLastGame] = useState(true)
  const [showLast3Games, setShowLast3Games] = useState(false)
  const [showLast5Games, setShowLast5Games] = useState(false) 

  return (
    <div className="">
      <div className="text-center">
        <div>
          <div className="text-2xl mb-[10px] underline">Find a Team</div>
          <div id="team_positionSelection" className="">
            <div className="mt-[25px] mb-[10px]">
              <label>Enter Team:&nbsp;</label>
              <input 
                className="border border-1 border-black"
                type="text"
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSearchTerm(e.target.value)                
                }}
              />            
            </div>
            {
            searchTerm !== "" && 
            <div id="teamList" className="max-h-[400px] overflow-y-auto border border-1 border-black w-[25%] m-auto">{
            activeNbaTeams.map((team: ActiveTeam, index: number) => (
              (team.City.toLowerCase().includes(searchTerm.toLowerCase()) || team.Name.toLowerCase().includes(searchTerm.toLowerCase())) &&
              <div className="mb-[10px]" key={index}
              >              
                {`${team.City} ${team.Name} (${team.Key})`} 
                <span className="ml-[10px]">
                  <button
                    className="border border-1 border-black p-1 rounded-lg ml-[10px]"
                    onClick={async () => {
                      await fetch(`/api/getTeamStats?teamId=${team.TeamID}&apiKey=${apiKey}`, {                
                        headers: {
                          "Content-Type": "application/json",
                        },
                        method: "GET",
                      })
                      .then(response => {          
                        return response.json()
                      })
                      .then(data => {                
                        setTeamStats(data)
                      }) 
                      .catch(error => {
                        console.log('Error status', error.response.status)
                        console.log(error.response.data)
                      })                       
                        setSearchTerm("")               
                      }}
                  >
                    select
                  </button>
                </span>
              </div>
            ))
          }
        </div>
        }
        </div>
          <div>
          {
          teamStats.length > 0 &&
          <div className="">
            <div className="text-center my-[50px] mx-auto underline">Team: <span>{teamStats[0].Name}</span></div>
            <div className="flex justify-around">
              {
                showLastGame && 
                <div className="text-xl underline" onClick={() => {setShowLastGame(!showLastGame); setShowLast3Games(false); setShowLast5Games(false)}}>Last Game</div>
              }
              {
                !showLastGame && 
                <div onClick={() => {setShowLastGame(!showLastGame); setShowLast3Games(false); setShowLast5Games(false)}}>Last Game</div>
              }

              {
                showLast3Games && 
                <div className="text-xl underline" onClick={() => {setShowLast3Games(!showLast3Games); setShowLastGame(false); setShowLast5Games(false)}}>Last 3 Games</div>
              }
              {
                !showLast3Games && 
                <div onClick={() => {setShowLast3Games(!showLast3Games); setShowLastGame(false); setShowLast5Games(false)}}>Last 3 Games</div>
              }

              {
                showLast5Games && 
                <div className="text-xl underline" onClick={() => {setShowLast5Games(!showLast5Games); setShowLastGame(false); setShowLast3Games(false)}}>Last 5 Games</div>
              }
              {
                !showLast5Games && 
                <div onClick={() => {setShowLast5Games(!showLast5Games); setShowLastGame(false); setShowLast3Games(false)}}>Last 5 Games</div>
              }             
            </div>
          </div>       
        }
          </div>
        </div>
      </div> 
      <div>
          { teamStats.length > 0 && showLastGame &&
          <div>
            <TeamsStatsDisplay teamStats={teamStats[0]} gameNum={1}/>
            <TeamAveragesDisplay teamStats={teamStats.slice(0, 1)}/>
          </div>
          }     
          { teamStats.length > 0 && showLast3Games &&
            <div>
              <div className="flex justify-evenly flex-wrap">
                <TeamsStatsDisplay teamStats={teamStats[0]} gameNum={1}/>
                <TeamsStatsDisplay teamStats={teamStats[1]} gameNum={2}/>
                <TeamsStatsDisplay teamStats={teamStats[2]} gameNum={3}/>
              </div>
              <div>
                <TeamAveragesDisplay teamStats={teamStats.slice(0, 3)}/>
              </div>
            </div>
          }
          { teamStats.length > 0 && showLast5Games &&
          <div>
            <div className="flex justify-evenly flex-wrap">
              <TeamsStatsDisplay teamStats={teamStats[0]} gameNum={1}/>
              <TeamsStatsDisplay teamStats={teamStats[1]} gameNum={2}/>
              <TeamsStatsDisplay teamStats={teamStats[2]} gameNum={3}/>
              <TeamsStatsDisplay teamStats={teamStats[3]} gameNum={4}/>
              <TeamsStatsDisplay teamStats={teamStats[4]} gameNum={5}/>            
            </div>
            <div>
              <TeamAveragesDisplay teamStats={teamStats}/>
            </div>
          </div>
          }
        </div>     
    </div>
  )
};

export default TeamNbaComponent;