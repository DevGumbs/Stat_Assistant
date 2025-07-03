import React from 'react';
import dateFormat from "dateformat";
import { PlayerStat } from '@/types';

interface ComponentProps {
  playerStats: PlayerStat;
  gameNum: number;
}

const PlayerStatsDisplay:React.FC<ComponentProps> = ({playerStats, gameNum}) => {
  return (
    <div className="text-xl mt-10 w-full max-w-xl mx-auto shadow-lg rounded-xl p-6 border-l-8 border-blue-700 dark:border-yellow-400">
      <div className="text-center mb-4">
        <p className="text-3xl font-extrabold text-blue-700 dark:text-yellow-400">Game {gameNum}</p>
      </div>
      <div className="text-center my-8">
        <div className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-200">Game Date: <span className="font-normal">{dateFormat(playerStats.Day, "dddd, mmmm dd, yyyy")}</span></div>
        <div className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-200">Opponent: <span className="font-normal">{playerStats.Opponent}</span></div>
        <div className="mb-6 text-lg font-semibold text-gray-700 dark:text-gray-200">Location: <span className="font-normal">{playerStats.HomeOrAway}</span></div>
        <div className="flex flex-wrap justify-center gap-6 my-4">
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">Points</div>
            <div>{playerStats.Points}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">Assists</div>
            <div>{playerStats.Assists}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">Steals</div>
            <div>{playerStats.Steals}</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 my-4">
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">FG Made</div>
            <div>{playerStats.FieldGoalsMade}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">FG Attempts</div>
            <div>{playerStats.FieldGoalsAttempted}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">FG %</div>
            <div>{playerStats.FieldGoalsPercentage}%</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 my-4">
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">2pt Made</div>
            <div>{playerStats.TwoPointersMade}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">2pt Attempts</div>
            <div>{playerStats.TwoPointersAttempted}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">2pt %</div>
            <div>{playerStats.TwoPointersPercentage}%</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 my-4">
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">3pt Made</div>
            <div>{playerStats.ThreePointersMade}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">3pt Attempts</div>
            <div>{playerStats.ThreePointersAttempted}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">3pt %</div>
            <div>{playerStats.ThreePointersPercentage}%</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 my-4">
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">Off. Rebounds</div>
            <div>{playerStats.OffensiveRebounds}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">Def. Rebounds</div>
            <div>{playerStats.DefensiveRebounds}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">Total Rebounds</div>
            <div>{playerStats.Rebounds}</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 my-4">
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">Blocks</div>
            <div>{playerStats.BlockedShots}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">Turn Overs</div>
            <div>{playerStats.Turnovers}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">Double Double</div>
            <div>{playerStats.DoubleDoubles}</div>
          </div>
          <div className="rounded-lg p-4 shadow text-center">
            <div className="font-bold text-blue-700 dark:text-yellow-400">Triple Double</div>
            <div>{playerStats.TripleDoubles}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PlayerStatsDisplay;