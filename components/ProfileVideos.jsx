import { useState } from 'react'

import PersonalVideos from './PersonalVideos'
import LikedVideos from './LikedVideos'
import PrivateVideos from './PrivateVideos'

export default function ProfileVideos({ videos }) {

    const [activePersonalVideos, setActivePersonalVideos] = useState(true)
    const [activeLikedVideos, setActiveLikedVideos] = useState(false)
    const [activePrivateVideos, setActivePrivateVideos] = useState(false)
     
    const openPersonalVideos = () => {
        setActivePersonalVideos(true)
        setActiveLikedVideos(false)
        setActivePrivateVideos(false)
    }

    const openLikedVideos = () => {
        setActivePersonalVideos(false)
        setActiveLikedVideos(true)
        setActivePrivateVideos(false)
    }

    const openPrivateVideos = () => {
        setActivePersonalVideos(false)
        setActiveLikedVideos(false)
        setActivePrivateVideos(true)
    }

    return(
        <>
        <header>
            <div><button onClick={openPersonalVideos}
                         className={activePersonalVideos  === true || 
                         activeLikedVideos === false && activePrivateVideos === false ? 'button_active' : ''} ><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-grid" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="6" height="6" rx="1" />
            <rect x="14" y="4" width="6" height="6" rx="1" />
            <rect x="4" y="14" width="6" height="6" rx="1" />
            <rect x="14" y="14" width="6" height="6" rx="1" />
            </svg></button></div>
            <div><button onClick={openLikedVideos} className={activeLikedVideos === true ? 'button_active' : ''}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg></button></div>
            <div><button onClick={openPrivateVideos} className={activePrivateVideos === true ? 'button_active' : ''}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <circle cx="12" cy="16" r="1" />
            <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
            </svg></button></div>
        </header>
        <section className="profile_videos">
            <PersonalVideos display={activePersonalVideos} videos={videos.personalVideos}/>
            <LikedVideos display={activeLikedVideos} videos={videos.likedVideos}/>
            <PrivateVideos display={activePrivateVideos} videos={videos.privateVideos} />
        </section>

        <style jsx>{`
            header {
                width:100vw;
                height:6vh;
                border-bottom:1px solid #ccc;
                display:flex;
                justify-content:space-around;
                align-items:center;
            }    

            header div {
                display:flex;
                align-items:center;
            }

            button {
                height:6vh;
                border:none;
                outline:none;
                background:none;
                border-bottom:2px solid transparent;
            }

            .button_active {
                border-bottom:2px solid #000;
            }
        `}</style>
        </>
    )
}