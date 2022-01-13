import { useState } from 'react';

export default function VideoReactions(props) {

    const [like, setLike] = useState(false);
    const [likeAmount, setLikeAmount] = useState(props.likes)
    const [commentAmount, setCommentAmount] = useState(props.comments)

    const likeVideo = () => {
        setLike(!like)
        like === false ? setLikeAmount(props.likes + 1) : setLikeAmount(props.likes)
    }

    return(
        <>
            <div className="reactions">
                <div className="profilelogo">
                    
                </div>
                <div className="like">
                    <svg onClick={likeVideo} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke={like === false ? '#fff' : '#ff6060'} fill={like === false ? '#fff' : '#ff6060'} strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                    <span>{likeAmount.toString()}</span>
                </div>
                <div className="comments" onClick={() => alert('le diste al boton de ver los comentarios')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle-2" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                        <line x1="12" y1="12" x2="12" y2="12.01"/>
                        <line x1="8" y1="12" x2="8" y2="12.01" />
                        <line x1="16" y1="12" x2="16" y2="12.01" />
                    </svg>
                    <span>{commentAmount.length.toString()}</span>
                </div>
                <div className="share" onClick={() => alert('le diste al boton de compartir video')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-forward-up" width="48" height="48" viewBox="0 0 24 24" strokeWidth="3" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1" />
                    </svg>
                </div>
                <div className="audio">
                    <div className="image">
                    </div>
                </div>
            </div>
            <style jsx>{`
                .reactions {
                    position:fixed;
                    bottom:8vh;
                    margin:.5rem;
                    right:0;
                    height:50vh;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-around;
                    text-align:center;
                    color:white;
                    z-index:1;
                }    

                .profilelogo {
                    width:3rem;
                    height:3rem;
                    border-radius:50%;
                    background:#000000;
                    border:.15rem solid #ffffff;
                    display:flex;
                    position:relative;
                    background:url('/images/profile.jpg') no-repeat center center;
                }

                .profilelogo::after {
                    content:'+';
                    position:absolute;
                    bottom:-.5rem;
                    left:30%;
                    width:1.2rem;
                    height:1.2rem;
                    background:#ff5050;
                    border-radius:50%;
                    font-weight:bold;
                    display:grid;
                    place-items:center;
                    line-height:0;
                }

                .like {
                    display:flex;
                    flex-direction:column;
                    font-size:.8rem;
                    font-weight:500;
                }

                .comments {
                    display:flex;
                    flex-direction:column;
                    font-size:.8rem;
                    font-weight:500;
                }

                .audio {
                    background:#555;
                    width:2.8rem;
                    height:2.8rem;
                    border-radius:50%;
                    border:.12rem solid #000;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }

                .audio .image {
                    width:1rem;
                    height:1rem;
                    background:#ffffff;
                    border-radius:50%;
                    position:relative;
                    animation: spin 5s linear infinite;
                    background:url('https://picsum.photos/100/100');
                }

                @keyframes spin {
                    from {transform:rotate(0deg);}
                    to {transform:rotate(360deg);}
                }
            `}</style>
        </>
    )
}

