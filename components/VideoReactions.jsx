import { useState } from 'react';

export default function VideoReactions() {
    return(
        <>
            <div className="reactions">
                <div className="profilelogo">
                    perfil
                    <span></span>
                </div>
                <div className="like">
                    like
                </div>
                <div className="comments">
                    comms
                </div>
                <div className="share">
                    share
                </div>
                <div className="audio">
                    audio
                </div>
            </div>
            <style jsx>{`
                .reactions {
                    position:fixed;
                    bottom:15vh;
                    right:0;
                    height:50vh;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-around;
                    text-align:center;
                    color:white;
                    z-index:1;
                }    
            `}</style>
        </>
    )
}

