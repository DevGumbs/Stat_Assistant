import React from 'react';
import { useState, useEffect } from "react";
import { TeamStat } from "@/types"

interface ComponentProps {
  teamStats: TeamStat[];
}

const AveragesDisplay: React.FC<ComponentProps> = ({teamStats}) => {  
  const [totalGames] = useState(teamStats.length)
  const [avgPoints, setAvgPoints] = useState(0)
  const [avgFgAtt, setAvgFgAtt] = useState(0)
  const [avgFgMade, setAvgFgMade] = useState(0)
  const [avgFgPercent, setAvgFgPercent] = useState(0)
  const [avg2PtAtt, setAvg2PtAtt] = useState(0)
  const [avg2PtMade, setAvg2PtMade] = useState(0)
  const [avg2PtPercent, setAvg2PtPercent] = useState(0)
  const [avg3PtAtt, setAvg3PtAtt] = useState(0)
  const [avg3PtMade, setAvg3PtMade] = useState(0)
  const [avg3PtPercent, setAvg3PtPercent] = useState(0)
  const [avgOffRebound, setAvgOffRebound] = useState(0)
  const [avgDefRebound, setAvgDefRebound] = useState(0)
  const [avgTotalRebounds, setAvgTotalRebounds] = useState(0)
  const [avgAssists, setAvgAssists] = useState(0)
  const [avgSteals, setAvgSteals] = useState(0)
  const [avgBlocks, setAvgBlocks] = useState(0)
  const [avgTurnOvers, setAvgTurnOvers] = useState(0)

  useEffect(() => { 
    let pts: number = 0;
    let fgAtt: number = 0;
    let fgMade: number = 0;
    let fgPercent: number = 0;
    let _2PtAtt: number = 0;
    let _2PtMade: number = 0;
    let _2PtPercent: number = 0;
    let _3PtAtt: number = 0;
    let _3PtMade: number = 0;
    let _3PtPercent: number = 0;
    let offReb: number = 0;
    let defReb: number = 0;
    let totalReb: number = 0;
    let assists: number = 0;
    let steals: number = 0;
    let blocks: number = 0;
    let tos: number = 0;

    switch(totalGames) {
      case 1:
        pts = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.Points, 0)/totalGames).toFixed(2))   
        setAvgPoints(pts)
        fgAtt = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.FieldGoalsAttempted, 0)/totalGames).toFixed(2))
        setAvgFgAtt(fgAtt)
        fgMade = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.FieldGoalsMade, 0)/totalGames).toFixed(2))       
        setAvgFgMade(fgMade)
        fgPercent = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.FieldGoalsPercentage, 0)/totalGames).toFixed(2))
        setAvgFgPercent(fgPercent)
        _2PtAtt = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.TwoPointersAttempted, 0)/totalGames).toFixed(2))      
        setAvg2PtAtt(_2PtAtt)
        _2PtMade = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.TwoPointersMade, 0)/totalGames).toFixed(2))       
        setAvg2PtMade(_2PtMade)
        _2PtPercent = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.TwoPointersPercentage, 0)/totalGames).toFixed(2))        
        setAvg2PtPercent(_2PtPercent)
        _3PtAtt = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.ThreePointersAttempted, 0)/totalGames).toFixed(2))        
        setAvg3PtAtt(_3PtAtt)
        _3PtMade = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.ThreePointersMade, 0)/totalGames).toFixed(2))        
        setAvg3PtMade(_3PtMade)
        _3PtPercent = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.ThreePointersPercentage, 0)/totalGames).toFixed(2))        
        setAvg3PtPercent(_3PtPercent)
        offReb = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.OffensiveRebounds, 0)/totalGames).toFixed(2))        
        setAvgOffRebound(offReb)
        defReb = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.DefensiveRebounds, 0)/totalGames).toFixed(2))         
        setAvgDefRebound(defReb)
        totalReb = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.Rebounds, 0)/totalGames).toFixed(2))         
        setAvgTotalRebounds(totalReb)
        assists = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.Assists, 0)/totalGames).toFixed(2))        
        setAvgAssists(assists)
        steals = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.Steals, 0)/totalGames).toFixed(2))        
        setAvgSteals(steals)
        blocks = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.BlockedShots, 0)/totalGames).toFixed(2))         
        setAvgBlocks(blocks)
        tos = parseFloat((teamStats.slice(0,1).reduce((total: number, stats: TeamStat) => total + stats.Turnovers, 0)/totalGames).toFixed(2))         
        setAvgTurnOvers(tos)
        break;
      case 3:  
        pts = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.Points, 0)/totalGames).toFixed(2))     
        setAvgPoints(pts)
        fgAtt = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.FieldGoalsAttempted, 0)/totalGames).toFixed(2))
        setAvgFgAtt(fgAtt)
        fgMade = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.FieldGoalsMade, 0)/totalGames).toFixed(2))        
        setAvgFgMade(fgMade)
        fgPercent = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.FieldGoalsPercentage, 0)/totalGames).toFixed(2))
        setAvgFgPercent(fgPercent)
        _2PtAtt = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.TwoPointersAttempted, 0)/totalGames).toFixed(2))       
        setAvg2PtAtt(_2PtAtt)
        _2PtMade = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.TwoPointersMade, 0)/totalGames).toFixed(2))        
        setAvg2PtMade(_2PtMade)
        _2PtPercent = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.TwoPointersPercentage, 0)/totalGames).toFixed(2))        
        setAvg2PtPercent(_2PtPercent)
        _3PtAtt = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.ThreePointersAttempted, 0)/totalGames).toFixed(2))        
        setAvg3PtAtt(_3PtAtt)
        _3PtMade = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.ThreePointersMade, 0)/totalGames).toFixed(2))        
        setAvg3PtMade(_3PtMade)
        _3PtPercent = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.ThreePointersPercentage, 0)/totalGames).toFixed(2))        
        setAvg3PtPercent(_3PtPercent)
        offReb = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.OffensiveRebounds, 0)/totalGames).toFixed(2))        
        setAvgOffRebound(offReb)
        defReb = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.DefensiveRebounds, 0)/totalGames).toFixed(2))         
        setAvgDefRebound(defReb)
        totalReb = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.Rebounds, 0)/totalGames).toFixed(2))         
        setAvgTotalRebounds(totalReb)
        assists = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.Assists, 0)/totalGames).toFixed(2))        
        setAvgAssists(assists)
        steals = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.Steals, 0)/totalGames).toFixed(2))        
        setAvgSteals(steals)
        blocks = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.BlockedShots, 0)/totalGames).toFixed(2))         
        setAvgBlocks(blocks)
        tos = parseFloat((teamStats.slice(0,3).reduce((total: number, stats: TeamStat) => total + stats.Turnovers, 0)/totalGames).toFixed(2))         
        setAvgTurnOvers(tos)
        break;
      case 5:   
        pts = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.Points, 0)/totalGames).toFixed(2))     
        setAvgPoints(pts)
        fgAtt = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.FieldGoalsAttempted, 0)/totalGames).toFixed(2))
        setAvgFgAtt(fgAtt)
        fgMade = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.FieldGoalsMade, 0)/totalGames).toFixed(2))        
        setAvgFgMade(fgMade)
        fgPercent = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.FieldGoalsPercentage, 0)/totalGames).toFixed(2))
        setAvgFgPercent(fgPercent)
        _2PtAtt = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.TwoPointersAttempted, 0)/totalGames).toFixed(2))       
        setAvg2PtAtt(_2PtAtt)
        _2PtMade = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.TwoPointersMade, 0)/totalGames).toFixed(2))        
        setAvg2PtMade(_2PtMade)
        _2PtPercent = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.TwoPointersPercentage, 0)/totalGames).toFixed(2))        
        setAvg2PtPercent(_2PtPercent)
        _3PtAtt = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.ThreePointersAttempted, 0)/totalGames).toFixed(2))       
        setAvg3PtAtt(_3PtAtt)
        _3PtMade = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.ThreePointersMade, 0)/totalGames).toFixed(2))        
        setAvg3PtMade(_3PtMade)
        _3PtPercent = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.ThreePointersPercentage, 0)/totalGames).toFixed(2))        
        setAvg3PtPercent(_3PtPercent)
        offReb = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.OffensiveRebounds, 0)/totalGames).toFixed(2))        
        setAvgOffRebound(offReb)
        defReb = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.DefensiveRebounds, 0)/totalGames).toFixed(2))         
        setAvgDefRebound(defReb)
        totalReb = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.Rebounds, 0)/totalGames).toFixed(2))        
        setAvgTotalRebounds(totalReb)
        assists = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.Assists, 0)/totalGames).toFixed(2))        
        setAvgAssists(assists)
        steals = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.Steals, 0)/totalGames).toFixed(2))        
        setAvgSteals(steals)
        blocks = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.BlockedShots, 0)/totalGames).toFixed(2))         
        setAvgBlocks(blocks)
        tos = parseFloat((teamStats.reduce((total: number, stats: TeamStat) => total + stats.Turnovers, 0)/totalGames).toFixed(2))         
        setAvgTurnOvers(tos)
        break;
    }    
  }, [teamStats, totalGames]);
  
  return ( 
    <div className="w-full max-w-xl mx-auto shadow-lg rounded-xl p-6 border border-gray-300 dark:border-gray-600 border-l-8 border-l-red-700 dark:border-l-yellow-400 mt-6">
      <div>
        <h4 className="text-center text-xl font-bold text-red-700 dark:text-yellow-400 mb-4">{teamStats[0].Name}&apos;s averages over the last {totalGames} game(s)</h4>
      </div>
      <div className="divide-y divide-red-200 dark:divide-yellow-200">
        <div className="flex flex-wrap justify-evenly my-4">
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">Points: <span className="font-normal">{avgPoints}</span></div>
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">Assists: <span className="font-normal">{avgAssists}</span></div>
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">Steals: <span className="font-normal">{avgSteals}</span></div>
        </div>
        <div className="flex flex-wrap justify-evenly my-4">
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">FG Made: <span className="font-normal">{avgFgMade}</span></div>
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">FG Attempts: <span className="font-normal">{avgFgAtt}</span></div>
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">FG Percentage: <span className="font-normal">{avgFgPercent}%</span></div>
        </div>
        <div className="flex flex-wrap justify-evenly my-4">
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">2pt Made: <span className="font-normal">{avg2PtMade}</span></div>
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">2pt Attempts: <span className="font-normal">{avg2PtAtt}</span></div>
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">2pt Percentage: <span className="font-normal">{avg2PtPercent}%</span></div>
        </div>
        <div className="flex flex-wrap justify-evenly my-4">
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">3pt Made: <span className="font-normal">{avg3PtMade}</span></div>
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">3pt Attempts: <span className="font-normal">{avg3PtAtt}</span></div>
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">3pt Percentage: <span className="font-normal">{avg3PtPercent}%</span></div>
        </div>
        <div className="flex flex-wrap justify-evenly my-4">
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">Off. Rebounds: <span className="font-normal">{avgOffRebound}</span></div>
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">Def. Rebounds: <span className="font-normal">{avgDefRebound}</span></div>
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">Total Rebounds: <span className="font-normal">{avgTotalRebounds}</span></div>
        </div>
        <div className="flex flex-wrap justify-evenly my-4">
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">Blocks: <span className="font-normal">{avgBlocks}</span></div>
          <div className="text-center font-semibold text-red-700 dark:text-yellow-400">Turn Overs: <span className="font-normal">{avgTurnOvers}</span></div>
        </div>
      </div>
    </div>
  )
};

export default AveragesDisplay;