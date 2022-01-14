export default function ChatBox({lastMessage, user}) {
    return(
        <>
        <a href="#"><article className="chat_box">
            <div className="user_image">
                <div className="image">

                </div>
            </div>
            <div className="message_info">
                <p className="username">username</p>
                <span className="message">Lorem ipsum dolem sit amet</span>
                <span className="message_hour">21:30</span>
            </div>
        </article></a>
        <style jsx>{`
            .chat_box {
                padding:.2rem 0;
                width:100vw;
                height:4.5rem;
                display:grid;
                grid-template-columns: 5rem 1fr;
                margin-top:.3rem;
            }

            .user_image {
                display:flex;
                align-items:center;
                justify-content:center;
            }

            .image {
                border-radius:50%;
                height:3.8rem;
                width:3.8rem;
                background:#ccc;
            }

            .username {
                margin:0 .3rem;
                font-weight:500;
            }

            .message {
                display:block;
                margin: 0 .3rem;
                color:#777;
                font-size:.95rem;
            }

            .message_hour {
                display:block;
                float:right;
                color:#aaa;
                margin: 0 1rem;
            }
        `}</style>
        </>
    )
}