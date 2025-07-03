import React from "react";
import { useState, useEffect } from "react"
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth/next";
import { GetServerSidePropsContext } from 'next';
import { handleJoinButtonClick } from "../lib/stripeUtil";
import { getUser } from "../lib/data"
import { User, ActivePlayer, ActiveTeam } from "@/types"
import { useMode } from '@/components/ModeContext/ModeContext';
import Script from 'next/script'
import Image from "next/image";
import activeNbaPlayers from "@/mockData/activePlayers";
import activeNbaTeams from "@/mockData/activeTeams";
import NbaComponent from "@/components/NbaComponent/NbaComponent";
import NflComponent from "@/components/NflComponent/NflComponent";
import DisclaimerModal from "@/components/DisclaimerModal/DisclaimerModal";
import infoIconBlack from "@/public/icons/infoIcon-black.svg";
import infoIconWhite from "@/public/icons/infoIcon-white.svg";
import basketballIconBlack from "@/public/icons/newBasketballIcon-black.svg";
import basketballIconWhite from "@/public/icons/newBasketballIcon-white.svg";
import footballIconBlack from "@/public/icons/newFootballIcon-black.svg";
import footballIconWhite from "@/public/icons/newFootballIcon-white.svg";


interface ComponentProps {
  user: User;
  activeNbaPlayers: ActivePlayer; 
  activeNbaTeams: ActiveTeam; 
  apiKeyForSubscriber: string;
  stripeKey: string;
}

const Index:React.FC<ComponentProps> = ({user, apiKeyForSubscriber, stripeKey}) => {  
  const [showNba, setShowNba] = useState(false);
  const [showNfl, setShowNfl] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [stripePublicKey, setStripePublicKey] = useState(''); 
  const { isDarkMode } = useMode();
 
  useEffect(() => {
    async function fetchStripePublicKey() {      
      setStripePublicKey(stripeKey);
    }
    fetchStripePublicKey();
  }, [stripeKey]);

  const handleOpenModal = () => {
    setShowDisclaimer(true);
  };

  const handleCloseModal = () => {
    setShowDisclaimer(false);
  };
  
  return (
    <div id="indexContainer" className="min-h-screen flex flex-col items-center justify-start py-8 px-2">
      <Script src='https://js.stripe.com/v3/' />
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 mt-4 sm:mt-8 mb-8 sm:mb-12 w-full">
        <div
          className="transition-transform transform hover:scale-105 sm:hover:scale-110 cursor-pointer shadow-lg rounded-full p-2 sm:p-4 border-4 border-blue-700 w-32 h-32 sm:w-auto sm:h-auto flex items-center justify-center"
          onClick={() => {setShowNba(!showNba); setShowNfl(false)}}
        >
          <Image
            className="ballIcon rounded-full object-cover"
            src={isDarkMode ? basketballIconWhite : basketballIconBlack}
            alt="Basketball Icon"
            width={showNba ? 120 : 90}
            height={showNba ? 120 : 90}
          />
        </div>
        <div
          className="transition-transform transform hover:scale-105 sm:hover:scale-110 cursor-pointer shadow-lg rounded-full p-2 sm:p-4 border-4 border-red-700 w-32 h-32 sm:w-auto sm:h-auto flex items-center justify-center"
          onClick={() => {setShowNfl(!showNfl); setShowNba(false)}}
        >
          <Image
            className="ballIcon rounded-full object-cover"
            src={isDarkMode ? footballIconWhite : footballIconBlack}
            alt="Football Icon"
            width={showNfl ? 120 : 90}
            height={showNfl ? 120 : 90}
          />
        </div>
      </div>
      {
        !showNba && !showNfl &&
        <div className="max-w-2xl w-full mx-auto shadow-xl rounded-xl p-4 sm:p-8 text-center border-t-8 border-blue-700 dark:border-yellow-400">
          <p className="text-2xl sm:text-3xl font-extrabold text-blue-900 dark:text-yellow-400 mb-2 sm:mb-4">Make every bet count!</p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 mb-4 sm:mb-6">Review players&apos; and teams&apos; recent stats. It&apos;s the winning strategy!</p>
          <div>
            {
              user?.isSubscriber &&
              <p className="my-2 sm:my-4 text-base sm:text-lg font-semibold text-yellow-900 rounded-full px-4 sm:px-6 py-1 sm:py-2 inline-block shadow">Subscribed</p>
            }
            {
              !user?.isSubscriber &&
              <button
                className="my-2 sm:my-4 text-base sm:text-lg font-semibold underline text-blue-700 hover:text-blue-900 dark:text-yellow-400 dark:hover:text-yellow-300 transition-colors"
                onClick={async () => {handleJoinButtonClick(user, stripePublicKey)}}
              >
                Subscribe here
              </button>
            }
            {
              !user?.isSubscriber &&
              <div className="mt-1 sm:mt-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">*for non subscribers, an active&nbsp;
                  <a href='https://sportsdata.io/' target="_blank" className="underline text-blue-700 dark:text-yellow-400 hover:text-blue-900 dark:hover:text-yellow-300">SportsData.io</a> api key is required.
                </p>
                <div className="flex justify-center mt-1 sm:mt-2">
                  <Image
                    className="cursor-pointer"
                    src={isDarkMode ? infoIconWhite : infoIconBlack}
                    alt="Info Icon"
                    width="20"
                    height="20"
                    onClick={handleOpenModal}
                  />
                </div>
              </div>
            }
            <p className="mt-4 sm:mt-6 text-xs sm:text-base text-gray-600 dark:text-gray-300">Get started by clicking a league above.</p>
          </div>
        </div>
      }
      <div>
        {
          showDisclaimer &&
          <DisclaimerModal isOpen={showDisclaimer} onClose={handleCloseModal} />
        }
      </div>
      <div className="w-full max-w-5xl mt-8">
        {
          showNba &&
          <NbaComponent user={user} apiKeyForSubscriber={apiKeyForSubscriber} stripeKey={stripePublicKey}/>
        }
        {
          showNfl &&
          <NflComponent />
        }
      </div>
    </div>
  )
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apiKeyForSubscriber = process.env.SPORTS_DATA_NBA_API_KEY 
  const stripeKey = process.env.STRIPE_PUBLIC_KEY

  const session = await getServerSession(context.req, context.res, authOptions);
  let user: User | null = null;

  if (!session) {
    user = JSON.parse(JSON.stringify(user));
  } else {
    user = await getUser(session.user.email);
    user = JSON.parse(JSON.stringify(user));
  }

  // const activeNbaPlayers = await fetch(`https://api.sportsdata.io/v3/nba/scores/json/PlayersActiveBasic?key=${apiKey}`)
  // .then(response => {  
  //   return response.json()
  // })
  // .then(activeNbaPlayers => {    
  //   return activeNbaPlayers
  // }) 
  // .catch(error => {
  //   console.log('Error status', error.response.status)
  //   console.log(error.response.data)
  // })

  // const activeNbaTeams = await fetch(`https://api.sportsdata.io/v3/nba/scores/json/AllTeams?key=${apiKey}`)
  // .then(response => {  
  //   return response.json()
  // })
  // .then(activeNbaTeams => {    
  //   return activeNbaTeams
  // }) 
  // .catch(error => {
  //   console.log('Error status', error.response.status)
  //   console.log(error.response.data)
  // })  
  
  return {
    props: {
      user,
      apiKeyForSubscriber,
      stripeKey,
      activeNbaPlayers,
      activeNbaTeams
    }
  }
};

export default Index;