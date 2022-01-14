import VideoReactions from "./VideoReactions"

export default function NanuTok() {

    const video = {
        username:'nawesan12',
        description: 'Soy la descripcion del video',
        url: 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
        audio: '',
        audioName:'nombre del audio',
        audioAutor: 'autor del audio',
        likes:500,
        comments: [1, 2, 3],
        createdAt: ''
    }

    return(
        <>
            <section className="nanutok">
                <div className="video_container">
                    <video src={video.url} object-fit="cover" autoPlay muted loop/>
                </div>
                <article className="info">
                    <h5>@{video.username}</h5>
                    <p>{video.description}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-music" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="6" cy="17" r="3"/>
                    <circle cx="16" cy="17" r="3"/>
                    <polyline points="9 17 9 4 19 4 19 17"/>
                    <line x1="9" y1="8" x2="19" y2="8"/>
                    </svg>
                    <marquee className="audio_info">{video.audioName + ' - ' + video.audioAutor}</marquee>
                </article>
            </section>
            <VideoReactions likes={video.likes} comments={video.comments} user={video.username}/>

            {/*<Image src="/images/nanutok.jpg" layout="fill" objectFit="cover" alt="NanuTok"/>
                <article className="info">
                    <h5>@{`nawesan12`}</h5>
                    <p>{`Hola bebu uwu estamos en un tiktok, en nuestro propio tiktok AAAAA`}</p>
                </article>*/}

            <style jsx>{`
                .nanutok {
                    width:100vw;
                    height:92vh;
                    position:relative;
                }    

                .video_container {
                    display:flex;
                    justify-content:center;
                }

                .info {
                    position:absolute;
                    z-index:10;
                    bottom:8vh;
                    width:70vw;
                    margin: .5rem;
                    color:white;
                    max-height:20vh;
                }

                p {
                    font-size:.9rem;
                }

                h5 {
                    font-weight:500;
                    margin-bottom:.8rem;
                }

                video {
                    height:92vh;
                }

                .audio_info {
                    margin-top:.8rem;
                    width:40vw;
                }
            `}</style>
        </>
    )
}