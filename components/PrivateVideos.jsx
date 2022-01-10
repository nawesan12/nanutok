export default function PrivateVideos({display, videos}) {
    if(videos.length === 0) {
        return(
            <>
            <div className={display === true ? 'no_videos active' : 'no_videos'}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock-access" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                    <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                    <rect x="8" y="11" width="8" height="5" rx="1" />
                    <path d="M10 11v-2a2 2 0 1 1 4 0v2" />
                </svg>
                <h3>No private videos</h3>
            </div>
            <style jsx>{`

                .no_videos {
                    display: none;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 30vh;
                }

                h3 {
                    display:block;
                    width:100vw;
                    text-align:center;
                }

                .active {
                    display:flex;
                }
            `}</style>
            </>
        )
    } else {
        videos.map(video => (
            <div className="video_container" key={video.id}>soy un video</div>
        ))
    }
}