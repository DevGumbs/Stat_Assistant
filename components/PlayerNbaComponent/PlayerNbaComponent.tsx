import React from 'react';
import { useState, useEffect } from "react"
import { ActivePlayer, PlayerStat } from "@/types";
import PlayerStatsDisplay from "@/components/PlayerStatsDisplay/PlayerStatsDisplay";
import AveragesDisplay from "@/components/AveragesDisplay/AveragesDisplay";

interface ComponentProps {
  activePlayers: ActivePlayer[];
  apiKey: string;
}

const PlayerNbaComponent:React.FC<ComponentProps> = ({activePlayers, apiKey}) => {  
  const [position, setPosition] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [playersByPosition, setPlayersByPosition] = useState<ActivePlayer[]>([]);
  const [playerStats, setPlayerStats] = useState<PlayerStat[]>([]);
  const [showLastGame, setShowLastGame] = useState(true)
  const [showLast3Games, setShowLast3Games] = useState(false)
  const [showLast5Games, setShowLast5Games] = useState(false)

  useEffect(() => {    
    if (position !== "") {
      const filteredPlayers = activePlayers.filter(
        (player: ActivePlayer) => player.Position === position
      );
      setPlayersByPosition(filteredPlayers);
    }
  }, [position, activePlayers]);

  return (
    <div className="">
      <div className="text-center">
        <div>
          <div className="text-2xl my-[20px] underline">Find a Player</div>
          <div className="">
            <label>Position: </label>
            <select 
            className="border border-1 border-black"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setPosition(e.target.value)                
                const filteredPlayers = activePlayers.filter((player: ActivePlayer) => {return player.Position === position})                
                setPlayersByPosition(filteredPlayers)
              }}
              value={position}
            >
              <option value=""></option>
              <option value="PG">(1) PG</option>
              <option value="SG">(2) SG</option>
              <option value="SF">(3) SF</option>
              <option value="PF">(4) PF</option>
              <option value="C">(5) C</option>
            </select>
          </div>
        </div>
        <div className="">
          {
            position !== "" &&
            <div className="mt-[25px] mb-[10px]">
              <label>Enter Player Name:&nbsp;</label>
              <input 
                className="border border-1 border-black"
                type="text"
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSearchTerm(e.target.value)                
                }}
              />            
            </div>
          }
          {
            searchTerm !== "" && 
            <div id="playerList" className="max-h-[400px] overflow-y-auto border border-1 border-black w-[25%] m-auto">{
            playersByPosition.map((player: ActivePlayer, index: number) => (
              (player.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) || player.LastName.toLowerCase().includes(searchTerm.toLowerCase())) &&
              <div className="mb-[25px]" key={index}
              >              
                {`${player.FirstName} ${player.LastName}`} 
                <span>
                  <button
                    className="border border-1 border-black p-1 rounded-lg ml-[10px]"
                    onClick={async () => {
                      await fetch(`/api/getPlayerStats?playerId=${player.PlayerID}&apiKey=${apiKey}`, {                
                        headers: {
                          "Content-Type": "application/json",
                        },
                        method: "GET",
                      })
                      .then(response => {                                    
                        return response.json()
                      })
                      .then(data => {                
                        setPlayerStats(data)
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
          }</div>
          }
        </div>
      </div>      
      <div>
        {
          playerStats.length > 0 &&
          <div className="">
            <div className="text-center my-[50px] mx-auto underline">Player: <span>{playerStats[0].Name}</span></div>
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
      <div>
          { playerStats.length > 0 && showLastGame &&
          <div>            
            <PlayerStatsDisplay playerStats={playerStats[0]} gameNum={1}/>
            <AveragesDisplay playerStats={playerStats.slice(0, 1)}/>
          </div>
          }     
          { playerStats.length > 0 && showLast3Games &&
            <div>
              <div className="flex justify-evenly flex-wrap">
                <PlayerStatsDisplay playerStats={playerStats[0]} gameNum={1}/>
                <PlayerStatsDisplay playerStats={playerStats[1]} gameNum={2}/>
                <PlayerStatsDisplay playerStats={playerStats[2]} gameNum={3}/>
              </div>
              <div>
                <AveragesDisplay playerStats={playerStats.slice(0, 3)}/>
              </div>
            </div>
          }
          { playerStats.length > 0 && showLast5Games &&
          <div>
            <div className="flex justify-evenly flex-wrap">
              <PlayerStatsDisplay playerStats={playerStats[0]} gameNum={1}/>
              <PlayerStatsDisplay playerStats={playerStats[1]} gameNum={2}/>
              <PlayerStatsDisplay playerStats={playerStats[2]} gameNum={3}/>
              <PlayerStatsDisplay playerStats={playerStats[3]} gameNum={4}/>
              <PlayerStatsDisplay playerStats={playerStats[4]} gameNum={5}/>            
            </div>
            <div>
              <AveragesDisplay playerStats={playerStats}/>
            </div>
          </div>
          }
        </div>      
    </div>
  )
};

export default PlayerNbaComponent;