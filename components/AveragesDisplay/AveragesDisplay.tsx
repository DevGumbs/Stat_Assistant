import React from 'react';
import { useState, useEffect } from "react";
import { PlayerStat } from "@/types"

interface ComponentProps {
  playerStats: PlayerStat[];
}

const AveragesDisplay: React.FC<ComponentProps> = ({playerStats}) => {  
  const [totalGames] = useState(playerStats.length)
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
  const [avgDoubleDouble, setAvgDoubleDouble] = useState(0)
  const [avgTripleDouble, setAvgTripleDouble] = useState(0)

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
    let dubDub: number = 0;
    let tripDub: number = 0;

    switch(totalGames) {
      case 1:
        pts = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.Points, 0)/totalGames).toFixed(2))     
        setAvgPoints(pts)
        fgAtt = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.FieldGoalsAttempted, 0)/totalGames).toFixed(2))
        setAvgFgAtt(fgAtt)
        fgMade = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.FieldGoalsMade, 0)/totalGames).toFixed(2))        
        setAvgFgMade(fgMade)
        fgPercent = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.FieldGoalsPercentage, 0)/totalGames).toFixed(2))
        setAvgFgPercent(fgPercent)
        _2PtAtt = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.TwoPointersAttempted, 0)/totalGames).toFixed(2))       
        setAvg2PtAtt(_2PtAtt)
        _2PtMade = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.TwoPointersMade, 0)/totalGames).toFixed(2))        
        setAvg2PtMade(_2PtMade)
        _2PtPercent = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.TwoPointersPercentage, 0)/totalGames).toFixed(2))        
        setAvg2PtPercent(_2PtPercent)
        _3PtAtt = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.ThreePointersAttempted, 0)/totalGames).toFixed(2))        
        setAvg3PtAtt(_3PtAtt)
        _3PtMade = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.ThreePointersMade, 0)/totalGames).toFixed(2))        
        setAvg3PtMade(_3PtMade)
        _3PtPercent = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.ThreePointersPercentage, 0)/totalGames).toFixed(2))        
        setAvg3PtPercent(_3PtPercent)
        offReb = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.OffensiveRebounds, 0)/totalGames).toFixed(2))        
        setAvgOffRebound(offReb)
        defReb = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.DefensiveRebounds, 0)/totalGames).toFixed(2))         
        setAvgDefRebound(defReb)
        totalReb = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.Rebounds, 0)/totalGames).toFixed(2))         
        setAvgTotalRebounds(totalReb)
        assists = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.Assists, 0)/totalGames).toFixed(2))        
        setAvgAssists(assists)
        steals = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.Steals, 0)/totalGames).toFixed(2))        
        setAvgSteals(steals)
        blocks = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.BlockedShots, 0)/totalGames).toFixed(2))         
        setAvgBlocks(blocks)
        tos = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.Turnovers, 0)/totalGames).toFixed(2))         
        setAvgTurnOvers(tos)
        dubDub = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.DoubleDoubles, 0)/totalGames).toFixed(2))         
        setAvgDoubleDouble(dubDub)
        tripDub = parseFloat((playerStats.slice(0,1).reduce((total: number, stats: PlayerStat) => total + stats.TripleDoubles, 0)/totalGames).toFixed(2))         
        setAvgTripleDouble(tripDub)
        break;
      case 3:  
        pts = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.Points, 0)/totalGames).toFixed(2))     
        setAvgPoints(pts)
        fgAtt = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.FieldGoalsAttempted, 0)/totalGames).toFixed(2))
        setAvgFgAtt(fgAtt)
        fgMade = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.FieldGoalsMade, 0)/totalGames).toFixed(2))        
        setAvgFgMade(fgMade)
        fgPercent = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.FieldGoalsPercentage, 0)/totalGames).toFixed(2))
        setAvgFgPercent(fgPercent)
        _2PtAtt = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.TwoPointersAttempted, 0)/totalGames).toFixed(2))       
        setAvg2PtAtt(_2PtAtt)
        _2PtMade = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.TwoPointersMade, 0)/totalGames).toFixed(2))        
        setAvg2PtMade(_2PtMade)
        _2PtPercent = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.TwoPointersPercentage, 0)/totalGames).toFixed(2))        
        setAvg2PtPercent(_2PtPercent)
        _3PtAtt = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.ThreePointersAttempted, 0)/totalGames).toFixed(2))        
        setAvg3PtAtt(_3PtAtt)
        _3PtMade = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.ThreePointersMade, 0)/totalGames).toFixed(2))        
        setAvg3PtMade(_3PtMade)
        _3PtPercent = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.ThreePointersPercentage, 0)/totalGames).toFixed(2))        
        setAvg3PtPercent(_3PtPercent)
        offReb = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.OffensiveRebounds, 0)/totalGames).toFixed(2))        
        setAvgOffRebound(offReb)
        defReb = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.DefensiveRebounds, 0)/totalGames).toFixed(2))         
        setAvgDefRebound(defReb)
        totalReb = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.Rebounds, 0)/totalGames).toFixed(2))         
        setAvgTotalRebounds(totalReb)
        assists = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.Assists, 0)/totalGames).toFixed(2))        
        setAvgAssists(assists)
        steals = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.Steals, 0)/totalGames).toFixed(2))        
        setAvgSteals(steals)
        blocks = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.BlockedShots, 0)/totalGames).toFixed(2))         
        setAvgBlocks(blocks)
        tos = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.Turnovers, 0)/totalGames).toFixed(2))         
        setAvgTurnOvers(tos)
        dubDub = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.DoubleDoubles, 0)/totalGames).toFixed(2))         
        setAvgDoubleDouble(dubDub)
        tripDub = parseFloat((playerStats.slice(0,3).reduce((total: number, stats: PlayerStat) => total + stats.TripleDoubles, 0)/totalGames).toFixed(2))         
        setAvgTripleDouble(tripDub)
        break;
      case 5:   
        pts = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.Points, 0)/totalGames).toFixed(2))     
        setAvgPoints(pts)
        fgAtt = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.FieldGoalsAttempted, 0)/totalGames).toFixed(2))
        setAvgFgAtt(fgAtt)
        fgMade = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.FieldGoalsMade, 0)/totalGames).toFixed(2))        
        setAvgFgMade(fgMade)
        fgPercent = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.FieldGoalsPercentage, 0)/totalGames).toFixed(2))
        setAvgFgPercent(fgPercent)
        _2PtAtt = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.TwoPointersAttempted, 0)/totalGames).toFixed(2))       
        setAvg2PtAtt(_2PtAtt)
        _2PtMade = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.TwoPointersMade, 0)/totalGames).toFixed(2))        
        setAvg2PtMade(_2PtMade)
        _2PtPercent = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.TwoPointersPercentage, 0)/totalGames).toFixed(2))        
        setAvg2PtPercent(_2PtPercent)
        _3PtAtt = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.ThreePointersAttempted, 0)/totalGames).toFixed(2))        
        setAvg3PtAtt(_3PtAtt)
        _3PtMade = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.ThreePointersMade, 0)/totalGames).toFixed(2))        
        setAvg3PtMade(_3PtMade)
        _3PtPercent = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.ThreePointersPercentage, 0)/totalGames).toFixed(2))        
        setAvg3PtPercent(_3PtPercent)
        offReb = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.OffensiveRebounds, 0)/totalGames).toFixed(2))        
        setAvgOffRebound(offReb)
        defReb = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.DefensiveRebounds, 0)/totalGames).toFixed(2))         
        setAvgDefRebound(defReb)
        totalReb = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.Rebounds, 0)/totalGames).toFixed(2))         
        setAvgTotalRebounds(totalReb)
        assists = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.Assists, 0)/totalGames).toFixed(2))        
        setAvgAssists(assists)
        steals = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.Steals, 0)/totalGames).toFixed(2))        
        setAvgSteals(steals)
        blocks = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.BlockedShots, 0)/totalGames).toFixed(2))         
        setAvgBlocks(blocks)
        tos = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.Turnovers, 0)/totalGames).toFixed(2))         
        setAvgTurnOvers(tos)
        dubDub = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.DoubleDoubles, 0)/totalGames).toFixed(2))         
        setAvgDoubleDouble(dubDub)
        tripDub = parseFloat((playerStats.reduce((total: number, stats: PlayerStat) => total + stats.TripleDoubles, 0)/totalGames).toFixed(2))         
        setAvgTripleDouble(tripDub)
        break;
    }    
  }, [playerStats, totalGames]);
  
  return ( 
    <div>
      <div>
        <h4 className="text-center">{playerStats[0].Name}&apos;s averages over the last {totalGames} game(s)</h4>
      </div>   
      <div className="border border-1 border-black w-[85%] m-auto">
        <div className="flex justify-evenly my-[20px] mx-auto">
          <div className="text-center">Points: <span>{avgPoints}</span></div>
          <div className="text-center">Assists: <span>{avgAssists}</span></div>
          <div className="text-center">Steals: <span>{avgSteals}</span></div>
        </div>      

        <div className="flex justify-evenly my-[10px] mx-auto">
          <div className="text-center">FG Made: <span>{avgFgMade}</span></div>
          <div className="text-center">FG Attempts: <span>{avgFgAtt}</span></div>
          <div className="text-center">FG Percentage: <span>{avgFgPercent}%</span></div>
        </div>

        <div className="flex justify-evenly my-[10px] mx-auto">
          <div className="text-center">2pt Made: <span>{avg2PtMade}</span></div>
          <div className="text-center">2pt Attempts: <span>{avg2PtAtt}</span></div>
          <div className="text-center">2pt Percentage: <span>{avg2PtPercent}%</span></div>
        </div>
        
        <div className="flex justify-evenly my-[10px] mx-auto">
          <div className="text-center">3pt Made: <span>{avg3PtMade}</span></div>
          <div className="text-center">3pt Attempts: <span>{avg3PtAtt}</span></div>
          <div className="text-center">3pt Percentage: <span>{avg3PtPercent}%</span></div>
        </div>
        
        <div className="flex justify-evenly my-[5px] mx-auto">
          <div className="text-center">Off. Rebounds: <span>{avgOffRebound}</span></div>
          <div className="text-center">Def Rebounds: <span>{avgDefRebound}</span></div>
          <div className="text-center">Total Rebounds: <span>{avgTotalRebounds}</span></div>
        </div>      
        
        <div className="flex justify-evenly mt-[15px] mx-auto">
          <div className="text-center">Blocks: <span>{avgBlocks}</span></div>
          <div className="text-center">Turnovers: <span>{avgTurnOvers}</span></div>         
        </div>
        <div>        
          <div className="flex justify-evenly m-[10px]">
            <div className="text-center">Double Doubles: <span>{avgDoubleDouble}</span></div>
            <div className="text-center">Triple Doubles: <span>{avgTripleDouble}</span></div>              
          </div>          
        </div>   
      </div>
    </div>
  )
};

export default AveragesDisplay;