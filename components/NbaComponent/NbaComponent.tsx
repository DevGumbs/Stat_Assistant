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
    <div className="">
      <div>
        {
          !showPlayers && !showTeams && 
          <div>
            <div className="text-center text-2xl mt-[50px]">Whether you&apos;re betting on a team or a player, make sure you&apos;re informed on their recent stats</div>
            <div className="flex justify-center mt-[40px]">
              <Image
                className=""
                src={isDarkMode ? infoIconWhite : infoIconBlack}
                alt="alt"
                width="20"
                height="20"
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
              <p                 
                className="text-center mt-[10px]"
              >
                <span className="underline" onClick={() => {handleJoinButtonClick(user, stripeKey)}}>Suscribe here</span> to use without an API Key.
              </p>
              <p className="text-center mt-[25px]">OR</p>
              </div>
            }
            <p className="text-center mt-[25px]">
              - 
              { !user?.isSubscriber &&
                <span> enter your API key and </span> 
              }
              &nbsp;click a bet type to get started -
            </p>
          </div>
        }
      </div>
      {
        !user?.isSubscriber && 
        <div>
          <div className="text-center mt-[45px]">
            <label>Enter SportsData.io API Key:&nbsp;</label>
            <input 
              type="text"
              className="border border-1 border-black"
              value={apiKey}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setApiKey(e.target.value)}}/>
          </div>
          <p className="w-[35%] text-center mx-auto mb-[45px] text-xxs">* you can enter &apos;test&apos; for an API Key to demo the process and receive mock data<br/>
            for player: Bradley Beal or Team: Phoenix Suns *</p>          
        </div>
      }
      
      <div className="flex justify-around">
        <div className="">
          {
            showPlayers &&
            <div className="p-3 text-xl border border-1 rounded-lg" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }} onClick={() => {setShowPlayers(!showPlayers); setShowTeams(false)}}>Player Bet</div>
          }
          {
            !showPlayers &&
            <div className="p-3 border border-1 rounded-lg" onClick={() => {loadPlayers(apiKey)}}>Player Bet</div>
          }
        </div>
        <div className="">
          {
            showTeams &&
            <div className="p-3 text-xl border border-1 rounded-lg" onClick={() => {setShowTeams(!showTeams); setShowPlayers(false)}}>Team Bet</div>
          }
          {
            !showTeams &&
            <div className="p-3 border border-1 rounded-lg" onClick={() => {loadTeams(apiKey)}}>Team Bet</div>
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