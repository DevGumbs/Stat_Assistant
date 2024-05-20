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
import styles from "@/styles/indexStyles.module.css";


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
    <div id="indexContainer">
      <Script src='https://js.stripe.com/v3/' />
      <div className="flex justify-around m-[50px]">            
        {
          showNba && 
          <div onClick={() => {setShowNba(!showNba); setShowNfl(false)}}>
            <Image
              className="ballIcon"
              src={isDarkMode ? basketballIconWhite : basketballIconBlack}
              alt="alt"
              width="200"
              height="200"
              
            />
          </div>
        }
        {
          !showNba && 
          <div onClick={() => {setShowNba(!showNba); setShowNfl(false)}}>
            <Image
              className="ballIcon"
              src={isDarkMode ? basketballIconWhite : basketballIconBlack}
              alt="alt"
              width="150"
              height="150"
              
            />
          </div>
        } 
        {
          showNfl &&
          <div onClick={() => {setShowNfl(!showNfl); setShowNba(false)}}>
            <Image
              className="ballIcon"
              src={isDarkMode ? footballIconWhite : footballIconBlack}
              alt="alt"
              width="200"
              height="200"
              
            />
          </div>
        }  
        {
          !showNfl &&
          <div onClick={() => {setShowNfl(!showNfl); setShowNba(false)}}>
            <Image
              className=""
              src={isDarkMode ? footballIconWhite : footballIconBlack}
              alt="alt"
              width="150"
              height="150"
              
            />
          </div>
        }                   
      </div>
      {
        !showNba && !showNfl &&
        <div className="text-center">
            <p className="text-2xl">Make every bet count by reviewing players&apos; and teams&apos; recent stats. It&apos;s the winning strategy!</p>
            <div>
              {
               user?.isSubscriber &&
                <p className="my-[15px] text-lg bg-yellow-300 w-[10%] m-auto">
                  Subscribed
                </p>
              }
              {
                !user?.isSubscriber &&
                <p
                  className="my-[15px] text-lg underline"
                  onClick={async () => {handleJoinButtonClick(user, stripePublicKey)}}
                >
                  Subscribe here
                </p>
              }
              {
                !user?.isSubscriber &&
                <div>
                  <p className="text-xs">*for non subscribers, an active&nbsp; 
                  <a href='https://sportsdata.io/' target="blank" >
                    SportsData.io
                  </a> api key is required.
                  </p>
                  <div className="flex justify-center">
                    <Image
                      className=""
                      src={isDarkMode ? infoIconWhite : infoIconBlack}
                      alt="alt"
                      width="20"
                      height="20"
                      onClick={handleOpenModal}
                    />
                  </div>
                </div>
              }
              <p className="mt-[15px]">Get started by clicking a league above.</p>
            </div>
        </div>
      }
      <div>
        {
          showDisclaimer &&          
          <DisclaimerModal isOpen={showDisclaimer} onClose={handleCloseModal} />
        }
      </div>
      <div className={styles.index_sportDisplay}>
        {
          showNba &&
          <NbaComponent user={user} apiKeyForSubscriber={apiKeyForSubscriber} stripeKey={stripePublicKey}/>
        }
        {
          showNfl &&
          <NflComponent />
        }
        {}
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