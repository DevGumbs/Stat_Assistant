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
    <div className="w-full max-w-2xl mx-auto shadow-xl rounded-xl p-6 md:p-10 border-t-8 border-blue-700 dark:border-yellow-400 mt-4">
      <div className="text-center">
        <div>
          <div className="text-2xl my-6 font-bold text-blue-900 dark:text-yellow-400 underline">Find a Player</div>
          <div className="mb-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center">
            <label className="font-semibold">Position: </label>
            <select 
              className="border border-gray-400 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:bg-gray-700 dark:text-white"
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
            {position !== "" && (
              <>
                <label className="font-semibold sm:ml-4 mt-2 sm:mt-0">Player Name:&nbsp;</label>
                <input 
                  className="border border-gray-400 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:bg-gray-700 dark:text-white"
                  type="text"
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchTerm(e.target.value)
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div>
          {
            position !== "" &&
            <div id="playerList" className="max-h-[400px] overflow-y-auto border border-blue-700 dark:border-yellow-400 w-full md:w-1/2 m-auto rounded-lg p-2 mt-2 shadow">
              {
                playersByPosition.map((player: ActivePlayer, index: number) => (
                  (player.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) || player.LastName.toLowerCase().includes(searchTerm.toLowerCase())) &&
                  <div className="mb-6 flex items-center justify-between" key={index}>
                    <span className="font-semibold text-blue-900 dark:text-yellow-400">{`${player.FirstName} ${player.LastName}`}</span>
                    <button
                      className="border border-blue-700 dark:border-yellow-400 text-blue-900 dark:text-yellow-400 px-3 py-1 rounded-lg ml-4 transition"
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
                  </div>
                ))
              }
            </div>
          }
        </div>
      </div>
      <div>
        {
          playerStats.length > 0 &&
          <div className="mt-10">
            <div className="text-center mb-8 text-xl font-bold underline text-blue-900 dark:text-yellow-400">Player: <span>{playerStats[0].Name}</span></div>
            <div className="flex justify-around mb-6">
              {
                showLastGame &&
                <div className="text-lg font-semibold underline text-blue-700 dark:text-yellow-400 cursor-pointer" onClick={() => {setShowLastGame(!showLastGame); setShowLast3Games(false); setShowLast5Games(false)}}>Last Game</div>
              }
              {
                !showLastGame &&
                <div className="cursor-pointer" onClick={() => {setShowLastGame(!showLastGame); setShowLast3Games(false); setShowLast5Games(false)}}>Last Game</div>
              }
              {
                showLast3Games &&
                <div className="text-lg font-semibold underline text-blue-700 dark:text-yellow-400 cursor-pointer" onClick={() => {setShowLast3Games(!showLast3Games); setShowLastGame(false); setShowLast5Games(false)}}>Last 3 Games</div>
              }
              {
                !showLast3Games &&
                <div className="cursor-pointer" onClick={() => {setShowLast3Games(!showLast3Games); setShowLastGame(false); setShowLast5Games(false)}}>Last 3 Games</div>
              }
              {
                showLast5Games &&
                <div className="text-lg font-semibold underline text-blue-700 dark:text-yellow-400 cursor-pointer" onClick={() => {setShowLast5Games(!showLast5Games); setShowLastGame(false); setShowLast3Games(false)}}>Last 5 Games</div>
              }
              {
                !showLast5Games &&
                <div className="cursor-pointer" onClick={() => {setShowLast5Games(!showLast5Games); setShowLastGame(false); setShowLast3Games(false)}}>Last 5 Games</div>
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