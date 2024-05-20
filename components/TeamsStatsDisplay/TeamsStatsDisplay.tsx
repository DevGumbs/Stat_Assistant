import React from 'react';
import dateFormat from "dateformat";
import { TeamStat } from '@/types';

interface ComponentProps {
  teamStats: TeamStat;
  gameNum: number;
}

const TeamStatsDisplay:React.FC<ComponentProps> = ({teamStats, gameNum}) => {
  return (
    <div className="text-xl mt-[35px]">
      <div className="text-center">
        <p className="text-3xl" >Game {gameNum}</p>
      </div>   
      <div className="text-center my-[75px]">
        <div>Game Date: <span>{dateFormat(teamStats.Day, "dddd, mmmm dd, yyyy")}</span></div>
        <div>Opponent: <span>{teamStats.Opponent}</span></div>
        <div>Loacation: <span>{teamStats.HomeOrAway}</span></div>

        <div className="flex justify-center my-[25px]">
          <div className="mx-[15px]">Points: <span>{teamStats.Points}</span></div>
          <div className="mx-[15px]">Assists: <span>{teamStats.Assists}</span></div>
          <div className="mx-[15px]">Steals: <span>{teamStats.Steals}</span></div>
        </div>
        
        <div className="flex justify-center my-[25px]">
          <div className="mx-[15px]">FG Made: <div>{teamStats.FieldGoalsMade}</div></div>
          <div className="mx-[15px]">FG Attempts: <div>{teamStats.FieldGoalsAttempted}</div></div>              
          <div className="mx-[15px]">FG %: <div>{teamStats.FieldGoalsPercentage}%</div></div>
        </div>
        <div className="flex justify-center my-[25px]">
          <div className="mx-[15px]">2pt Made: <div>{teamStats.TwoPointersMade}</div></div>
          <div className="mx-[15px]">2pt Attempts: <div>{teamStats.TwoPointersAttempted}</div></div>
          <div className="mx-[15px]">2pt %: <div>{teamStats.TwoPointersPercentage}%</div></div>
        </div>
        <div className="flex justify-center my-[25px]">
          <div className="mx-[15px]">3pt Made: <div>{teamStats.ThreePointersMade}</div></div>
          <div className="mx-[15px]">3pt Attempts: <div>{teamStats.ThreePointersAttempted}</div></div>
          <div className="mx-[15px]">3pt %: <div>{teamStats.ThreePointersPercentage}%</div></div>
        </div>
        <div className="flex justify-center my-[25px]">
          <div className="mx-[15px]">Off. Rebounds: <div>{teamStats.OffensiveRebounds}</div></div>
          <div className="mx-[15px]">Def. Rebounds: <div>{teamStats.DefensiveRebounds}</div></div>
          <div className="mx-[15px]">Total Rebounds: <div>{teamStats.Rebounds}</div></div>
        </div>
        
        
        <div>Blocks: <span>{teamStats.BlockedShots}</span></div>
        <div>Turn Overs: <span>{teamStats.Turnovers}</span></div>
      </div>
    </div>
  )
};

export default TeamStatsDisplay;