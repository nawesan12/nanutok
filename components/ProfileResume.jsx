export default function ProfileResume(props) {
    return(
        <>
        <header className="profile_settings">
            <span><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg></span>
            <h4>@{`username`} <span>▼</span></h4>
            <span><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
            <circle cx="12" cy="5" r="1" />
            </svg></span>
        </header>
        <section className="profile_info">
            <div className="profile_picture">

            </div>
            <span className="profile_username">@{`username`}</span>
            
            <div className="profile_statistics">
                <div className="item">
                    <p>50</p>
                    <span>Following</span>
                </div>
                <div className="item">
                    <p>800</p>
                    <span>Followers</span>
                </div>
                <div className="item">
                    <p>3k</p>
                    <span>Likes</span>
                </div>
            </div>

            <div className="profile_options">
                <span className="edit">Edit Profile</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </svg></span>
            </div>
        </section>
        <section className="profile_videos">
            <header className="videos_header">
                videos header
            </header>
        </section>

        <style jsx>{`

            .profile_settings {
                display:flex;
                justify-content:space-between;
                align-items:center;
                padding:0 1rem;
                border-bottom:1px solid #ccc;
            }

            .profile_settings span {
                font-size:.7rem;
            }

            .profile_settings {
                height:8vh;
            }

            .profile_info {
                height:38vh;
                width:100vw;
                display:flex;
                flex-direction:column;
                justify-content:space-evenly;
                align-items:center;
            }    

            .profile_picture {
                height:5rem;
                width:5rem;
                border-radius:50%;
                background:url('https://picsum.photos/100/100');
            }

            .profile_username {
                font-weight:500;
            }

            .profile_statistics {
                display:flex;
                width:100vw;
                justify-content:center;
                text-align:center;
            }

            .item {
                margin:0 1rem;
            }

            .item p {
                font-weight:bold;
            }

            .profile_options {
                display:flex;
                justify-content:center;
                width:100vw;
            }

            .profile_options span {
                padding:.4rem .5rem;
                margin:.1rem;
                border:1px solid #ccc;
                font-size:.9rem;
                font-weight:500;
                line-height:0;
                display:flex;
                align-items:center;
            }

            .profile_options .edit {
                padding:.4rem 1.2rem;
            }
        `}</style>       

        </>
    )
}