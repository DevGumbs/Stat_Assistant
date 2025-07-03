import React from 'react';
import { useState } from "react"
import { handleJoinButtonClick } from "../../lib/stripeUtil";
import { User } from "@/types"
import { useMode } from '@/components/ModeContext/ModeContext';
import Image from 'next/image';
import PlayerNbaComponent from "@/components/PlayerNbaComponent/PlayerNbaComponent"
import TeamNbaComponent from "@/components/TeamNbaComponent/TeamNbaComponent"
import DisclaimerModal from '@/components/DisclaimerModal/DisclaimerModal';
import infoIconBlack from "@/public/icons/infoIcon-black.svg";
import infoIconWhite from "@/public/icons/infoIcon-white.svg";

interface ComponentProps {
  user: User;
  apiKeyForSubscriber: string;
  stripeKey: string;
}

const NbaComponent:React.FC<ComponentProps> = ({user, apiKeyForSubscriber, stripeKey}) => { 
  const [apiKey, setApiKey] = useState('') 
  const [activeNbaPlayers, setActiveNbaPlayers] = useState([])
  const [activeNbaTeams, setActiveNbaTeams] = useState([])
  const [showPlayers, setShowPlayers] = useState(false)
  const [showTeams, setShowTeams] = useState(false)
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const { isDarkMode } = useMode();

  const handleOpenModal = () => {
    setShowDisclaimer(true);
  };

  const handleCloseModal = () => {
    setShowDisclaimer(false);
  };
  
  async function loadPlayers(key: string) {
    if(!user?.isSubscriber && !apiKey) {
      alert("API Key Required")
      return
    } 
     
    const goodKey = user?.isSubscriber ? apiKeyForSubscriber : key    
    
    await fetch(`/api/getActiveNbaPlayers?apiKey=${goodKey}`, {                
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
    .then(response => {      
      return response.json()
    })
    .then(data => {  
      if ('status' in data) {
        alert(data.message)
        return
      } else {
        setActiveNbaPlayers(data)
        setShowPlayers(!showPlayers)
        setShowTeams(false)
      }      
    }) 
    .catch(error => {      
      console.log('Error status', error.response.status)
      console.log(error.response.data)
    }) 
  }   

  async function loadTeams(key: string) {
    if(!user?.isSubscriber && !apiKey) {
      alert("API Key Required")
      return
    } 
     
    const goodKey = user?.isSubscriber ? apiKeyForSubscriber : key   

    await fetch(`/api/getActiveNbaTeams?apiKey=${goodKey}`, {                
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
    .then(response => {           
      return response.json()
    })
    .then(data => { 
      if ('status' in data) {
        alert(data.message)
        return
      } else {
        setActiveNbaTeams(data)
        setShowTeams(!showTeams)
        setShowPlayers(false)
      }     
    }) 
    .catch(error => {
      console.log('Error status', error.response.status)
      console.log(error.response.data)
    }) 
  }

  return (
    <div className="w-full max-w-3xl mx-auto shadow-xl rounded-xl p-3 sm:p-6 md:p-10 border-t-8 border-blue-700 dark:border-yellow-400 mt-2 sm:mt-4">
      <div>
        {
          !showPlayers && !showTeams &&
          <div>
            <div className="text-center text-lg sm:text-2xl font-bold text-blue-900 dark:text-yellow-400 mt-2 sm:mt-6 mb-1 sm:mb-2">Whether you&apos;re betting on a team or a player, make sure you&apos;re informed on their recent stats</div>
            <div className="flex justify-center mt-2 sm:mt-4">
              <Image
                className="cursor-pointer"
                src={isDarkMode ? infoIconWhite : infoIconBlack}
                alt="Info Icon"
                width="24"
                height="24"
                onClick={handleOpenModal}
              />
            </div>
            {
              showDisclaimer &&
              <DisclaimerModal isOpen={showDisclaimer} onClose={handleCloseModal} />
            }
            {
              !user?.isSubscriber &&
              <div>
                <p className="text-center mt-4">
                  <span className="underline text-blue-700 dark:text-yellow-400 cursor-pointer hover:text-blue-900 dark:hover:text-yellow-300" onClick={() => {handleJoinButtonClick(user, stripeKey)}}>Subscribe here</span> to use without an API Key.
                </p>
                <p className="text-center mt-6 text-gray-500 dark:text-gray-400">OR</p>
              </div>
            }
            <p className="text-center mt-6 text-base text-gray-600 dark:text-gray-300">
              - { !user?.isSubscriber && <span>enter your API key and </span> }click a bet type to get started -
            </p>
          </div>
        }
      </div>
      {
        !user?.isSubscriber &&
        <div>
          <div className="text-center mt-10">
            <label className="font-semibold">Enter SportsData.io API Key:&nbsp;</label>
            <input 
              type="text"
              className="border border-gray-400 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:bg-gray-700 dark:text-white"
              value={apiKey}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setApiKey(e.target.value)}}/>
          </div>
          <p className="w-full md:w-1/2 text-center mx-auto mb-10 text-xs text-gray-500 dark:text-gray-400 mt-2">* you can enter &apos;test&apos; for an API Key to demo the process and receive mock data<br/>
            for player: Bradley Beal or Team: Phoenix Suns *</p>
        </div>
      }
      <div className="flex flex-col md:flex-row justify-around gap-6 mt-6 mb-4">
        <div>
          {
            showPlayers ?
            <div className="p-3 text-xl border-2 border-blue-700 dark:border-yellow-400 rounded-lg text-blue-900 dark:text-yellow-900 font-bold shadow cursor-pointer mb-2" onClick={() => {setShowPlayers(!showPlayers); setShowTeams(false)}}>Player Bet</div>
            :
            <div className="p-3 border-2 border-blue-700 dark:border-yellow-400 rounded-lg text-blue-900 dark:text-yellow-400 font-semibold shadow cursor-pointer mb-2 transition" onClick={() => {loadPlayers(apiKey)}}>Player Bet</div>
          }
        </div>
        <div>
          {
            showTeams ?
            <div className="p-3 text-xl border-2 border-red-700 dark:border-yellow-400 rounded-lg text-red-900 dark:text-yellow-900 font-bold shadow cursor-pointer mb-2" onClick={() => {setShowTeams(!showTeams); setShowPlayers(false)}}>Team Bet</div>
            :
            <div className="p-3 border-2 border-red-700 dark:border-yellow-400 rounded-lg text-red-900 dark:text-yellow-400 font-semibold shadow cursor-pointer mb-2 transition" onClick={() => {loadTeams(apiKey)}}>Team Bet</div>
          }
        </div>
      </div>
      <div>
        {
          showPlayers &&
          <PlayerNbaComponent activePlayers={activeNbaPlayers} apiKey={apiKey}/>
        }
        {
          showTeams &&
          <TeamNbaComponent activeNbaTeams={activeNbaTeams} apiKey={apiKey}/>
        }
      </div>
    </div>
  )
};

export default NbaComponent;