import React from 'react'
import './Header.css'


const Header = () => {
    return (
        // Header
        <div className="header">
            <div className='logoContainer'>
                <img src='assets/logo-02.png' className='bagLogo' alt='' />
            </div>


            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src='assets/search.png' className='searchIcon' alt='' />
                </div>
                <input className='searchInput' placeholder='Search'/>
            </div>
            <div className='headerItems'>

                <a class="active" href="#about">About</a>
                <a href="#governance">Governance</a>
                <a href="#claim">Claim</a>
                <a href="#proposal">Proposal</a>

            </div>

            <div className='headerSocials'>
                <div className='headerDiscord'>
                    <img src='assets/discord.png' className='discordIcon' alt='' href=''/>
                </div>
                <div className='headerTwitter'>
                    <img src='assets/twitter.png' className='twitterIcon' alt='' href=''/>
                </div>
                {/* <div className='headerInstagram'>
                    <img src='assets/instagram.png' className='instagramIcon' />
                </div> */}
            </div>
        </div> 
        // BagFace List
    )
}

export default Header
