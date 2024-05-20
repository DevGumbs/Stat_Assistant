import React from 'react';
import dateFormat from "dateformat";
import { PlayerStat } from '@/types';

interface ComponentProps {
  playerStats: PlayerStat;
  gameNum: number;
}

const PlayerStatsDisplay:React.FC<ComponentProps> = ({playerStats, gameNum}) => {
  return (
    <div className="text-xl mt-[35px]">
      <div className="text-center">
        <p className="text-3xl" >Game {gameNum}</p>
      </div>
      <div className="text-center mt-[25px] mb-[75px]">
        <div>Game Date: <span>{dateFormat(playerStats.Day, "dddd, mmmm dd, yyyy")}</span></div>
        <div>Opponent: <span>{playerStats.Opponent}</span></div>
        <div>Loacation: <span>{playerStats.HomeOrAway}</span></div>

        <div className="flex justify-center my-[25px]">
          <div className="mx-[15px]">Points: <span>{playerStats.Points}</span></div>
          <div className="mx-[15px]">Assists: <span>{playerStats.Assists}</span></div>
          <div className="mx-[15px]">Steals: <span>{playerStats.Steals}</span></div>
        </div>
        
        <div className="flex justify-center my-[25px]">
          <div className="mx-[15px]">FG Made: <div>{playerStats.FieldGoalsMade}</div></div>
          <div className="mx-[15px]">FG Attempts: <div>{playerStats.FieldGoalsAttempted}</div></div>              
          <div className="mx-[15px]">FG %: <div>{playerStats.FieldGoalsPercentage}%</div></div>
        </div>
        <div className="flex justify-center my-[25px]">
          <div className="mx-[15px]">2pt Made: <div>{playerStats.TwoPointersMade}</div></div>
          <div className="mx-[15px]">2pt Attempts: <div>{playerStats.TwoPointersAttempted}</div></div>
          <div className="mx-[15px]">2pt %: <div>{playerStats.TwoPointersPercentage}%</div></div>
        </div>
        <div className="flex justify-center my-[25px]">
          <div className="mx-[15px]">3pt Made: <div>{playerStats.ThreePointersMade}</div></div>
          <div className="mx-[15px]">3pt Attempts: <div>{playerStats.ThreePointersAttempted}</div></div>
          <div className="mx-[15px]">3pt %: <div>{playerStats.ThreePointersPercentage}%</div></div>
        </div>
        <div className="flex justify-center my-[25px]">
          <div className="mx-[15px]">Off. Rebounds: <div>{playerStats.OffensiveRebounds}</div></div>
          <div className="mx-[15px]">Def. Rebounds: <div>{playerStats.DefensiveRebounds}</div></div>
          <div className="mx-[15px]">Total Rebounds: <div>{playerStats.Rebounds}</div></div>
        </div>            
        
        <div>Blocks: <span>{playerStats.BlockedShots}</span></div>
        <div>Turn Overs: <span>{playerStats.Turnovers}</span></div>
        <div>Double Double: <span>{playerStats.DoubleDoubles}</span></div>
        <div>Triple Double: <span>{playerStats.TripleDoubles}</span></div>
      </div>
    </div>
  )
};

export default PlayerStatsDisplay;