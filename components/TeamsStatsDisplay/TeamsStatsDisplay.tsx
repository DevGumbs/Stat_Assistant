import React from 'react';
import dateFormat from "dateformat";
import { TeamStat } from '@/types';

interface ComponentProps {
  teamStats: TeamStat;
  gameNum: number;
}

const TeamStatsDisplay:React.FC<ComponentProps> = ({teamStats, gameNum}) => {
  return (
    <div className="text-xl mt-10 w-full max-w-xl mx-auto shadow-lg rounded-xl p-6 border-l-8 border-red-700 dark:border-yellow-400">
      <div className="text-center mb-4">
        <p className="text-3xl font-extrabold text-red-700 dark:text-yellow-400">Game {gameNum}</p>
      </div>
      <div className="text-center my-8">
        <div className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-200">Game Date: <span className="font-normal">{dateFormat(teamStats.Day, "dddd, mmmm dd, yyyy")}</span></div>
        <div className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-200">Opponent: <span className="font-normal">{teamStats.Opponent}</span></div>
        <div className="mb-6 text-lg font-semibold text-gray-700 dark:text-gray-200">Location: <span className="font-normal">{teamStats.HomeOrAway}</span></div>
        <div className="flex flex-wrap justify-center gap-6 my-4">
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">Points</div>
            <div>{teamStats.Points}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">Assists</div>
            <div>{teamStats.Assists}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">Steals</div>
            <div>{teamStats.Steals}</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 my-4">
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">FG Made</div>
            <div>{teamStats.FieldGoalsMade}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">FG Attempts</div>
            <div>{teamStats.FieldGoalsAttempted}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">FG %</div>
            <div>{teamStats.FieldGoalsPercentage}%</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 my-4">
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">2pt Made</div>
            <div>{teamStats.TwoPointersMade}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">2pt Attempts</div>
            <div>{teamStats.TwoPointersAttempted}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">2pt %</div>
            <div>{teamStats.TwoPointersPercentage}%</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 my-4">
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">3pt Made</div>
            <div>{teamStats.ThreePointersMade}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">3pt Attempts</div>
            <div>{teamStats.ThreePointersAttempted}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">3pt %</div>
            <div>{teamStats.ThreePointersPercentage}%</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 my-4">
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">Off. Rebounds</div>
            <div>{teamStats.OffensiveRebounds}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">Def. Rebounds</div>
            <div>{teamStats.DefensiveRebounds}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">Total Rebounds</div>
            <div>{teamStats.Rebounds}</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 my-4">
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">Blocks</div>
            <div>{teamStats.BlockedShots}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-red-700 dark:text-yellow-400">Turnovers</div>
            <div>{teamStats.Turnovers}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TeamStatsDisplay;