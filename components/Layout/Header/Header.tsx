import React from 'react'
import { useSession } from "next-auth/react"
import { useMode } from '@/components/ModeContext/ModeContext';
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher"
import Link from "next/link"
import Image from "next/image"
import loginIcon from "@/public/icons/login_icon.svg"
import loginIconDM from "@/public/icons/login_icon_white.png"

const Header = () => {
  const { data: session } = useSession();
  const { isDarkMode } = useMode();

  return (    
      <div id="headerContainer" className="flex flex-col md:flex-row justify-between mx-[2rem] my-[3rem] items-center">  
        <div id="titleSpan" className="text-center">
          <Link href="/">
            <p className="text-5xl">Stats Assistant</p>
          </Link>          
        </div>  
        {
          session?.user &&
          <div className="flex mt-[1rem] md:mt-0">
            <Link href='/api/auth/signout'>
              <div id="loginContainer" className="flex items-center">                         
                <span>Sign Out</span>
                <span>
                  <Image 
                    className=""
                    src={isDarkMode ? loginIconDM : loginIcon}
                    alt="alt"
                    width="40"
                    height="40"
                  />
                </span> 
              </div>
            </Link>
            <div id="themeSpan" className="">
              <ThemeSwitcher /> 
            </div>
          </div> 
        }  
        {
          !session?.user &&
          <div className="flex">
            <Link href='/api/auth/signin'>
              <div id="loginContainer" className="flex items-center">                        
                <span>Login/Sign Up</span>
                <span>
                  <Image 
                    className=""
                    src={isDarkMode ? loginIconDM : loginIcon}
                    alt="alt"
                    width="40"
                    height="40"
                  />
                </span>  
              </div>
            </Link>
            <div id="themeSpan" className="">
              <ThemeSwitcher /> 
            </div>
          </div>
        }                          
      </div>    
  )
};

export default Header;