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
    <div className="w-full max-w-2xl mx-auto shadow-xl rounded-xl p-6 md:p-10 border-t-8 border-red-700 dark:border-yellow-400 mt-4">
      <div className="text-center">
        <div>
          <div className="text-2xl mb-4 font-bold text-red-700 dark:text-yellow-400 underline">Find a Team</div>
          <div id="team_positionSelection" className="mb-4">
            <div className="mt-6 mb-2">
              <label className="font-semibold">Enter Team:&nbsp;</label>
              <input 
                className="border border-gray-400 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-700 dark:bg-gray-700 dark:text-white"
                type="text"
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSearchTerm(e.target.value)
                }}
              />
            </div>
            {
              searchTerm !== "" &&
              <div id="teamList" className="max-h-[400px] overflow-y-auto border border-red-700 dark:border-yellow-400 w-full md:w-1/2 m-auto rounded-lg p-2 mt-2 shadow">
                {
                  activeNbaTeams.map((team: ActiveTeam, index: number) => (
                    (team.City.toLowerCase().includes(searchTerm.toLowerCase()) || team.Name.toLowerCase().includes(searchTerm.toLowerCase())) &&
                    <div className="mb-4 flex items-center justify-between" key={index}>
                      <span className="font-semibold text-red-700 dark:text-yellow-400">{`${team.City} ${team.Name} (${team.Key})`}</span>
                      <button
                        className="border border-red-700 dark:border-yellow-400 text-red-900 dark:text-yellow-400 px-3 py-1 rounded-lg ml-4 transition"
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
                    </div>
                  ))
                }
              </div>
            }
          </div>
          <div>
            {
              teamStats.length > 0 &&
              <div className="mt-10">
                <div className="text-center mb-8 text-xl font-bold underline text-red-700 dark:text-yellow-400">Team: <span>{teamStats[0].Name}</span></div>
                <div className="flex justify-around mb-6">
                  {
                    showLastGame &&
                    <div className="text-lg font-semibold underline text-red-700 dark:text-yellow-400 cursor-pointer" onClick={() => {setShowLastGame(!showLastGame); setShowLast3Games(false); setShowLast5Games(false)}}>Last Game</div>
                  }
                  {
                    !showLastGame &&
                    <div className="cursor-pointer" onClick={() => {setShowLastGame(!showLastGame); setShowLast3Games(false); setShowLast5Games(false)}}>Last Game</div>
                  }
                  {
                    showLast3Games &&
                    <div className="text-lg font-semibold underline text-red-700 dark:text-yellow-400 cursor-pointer" onClick={() => {setShowLast3Games(!showLast3Games); setShowLastGame(false); setShowLast5Games(false)}}>Last 3 Games</div>
                  }
                  {
                    !showLast3Games &&
                    <div className="cursor-pointer" onClick={() => {setShowLast3Games(!showLast3Games); setShowLastGame(false); setShowLast5Games(false)}}>Last 3 Games</div>
                  }
                  {
                    showLast5Games &&
                    <div className="text-lg font-semibold underline text-red-700 dark:text-yellow-400 cursor-pointer" onClick={() => {setShowLast5Games(!showLast5Games); setShowLastGame(false); setShowLast3Games(false)}}>Last 5 Games</div>
                  }
                  {
                    !showLast5Games &&
                    <div className="cursor-pointer" onClick={() => {setShowLast5Games(!showLast5Games); setShowLastGame(false); setShowLast3Games(false)}}>Last 5 Games</div>
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