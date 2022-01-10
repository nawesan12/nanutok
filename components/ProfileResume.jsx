import ProfileVideos from './ProfileVideos';

export default function ProfileResume({user}) {
    return(
        <>
        <header className="profile_settings">
            <div>
            <span><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="9" cy="7" r="4" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 11h6m-3 -3v6" />
            </svg></span>
            </div>
            
            <h4>@{user.username} <span>▼</span></h4>

            <div>
                <span><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
                </svg></span>
            </div>
        </header>
        <section className="profile_info">
            <div className="user_info">
            <div className="profile_picture"></div>
            <span className="profile_username">@{user.username}</span>
            </div>
            
            
            <div className="profile_statistics">
                <div className="item">
                    <p>{user.statistics.following.toString()}</p>
                    <span>Following</span>
                </div>
                <span className="separation">|</span>
                <div className="item">
                    <p>{user.statistics.followers.toString()}</p>
                    <span>Followers</span>
                </div>
                <span className="separation">|</span>
                <div className="item">
                    <p>{user.statistics.likes.toString()}</p>
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

            <p>{user.description}</p>
        </section>

        <ProfileVideos />

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

            .profile_settings div span {
                margin-left:.5rem;
            }

            .profile_settings {
                height:8vh;
            }

            .profile_info {
                height:40vh;
                width:100vw;
                display:flex;
                flex-direction:column;
                justify-content:space-evenly;
                align-items:center;
                padding-bottom:.5rem;
                border-bottom: 1px solid #ccc;
            }    

            .user_info {
                display:flex;
                flex-direction:column;
                align-items:center;
            }

            .profile_picture {
                height:5rem;
                width:5rem;
                border-radius:50%;
                background:url(${user.profilePicture});
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
                width:17vw;
            }

            .item p {
                font-weight:bold;
            }

            .item span {
                font-size:.9rem;
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

            .separation {
                font-weight:200;
                color:#ccc;
                margin:.5rem 0;
                font-size:.8rem;
            }
        `}</style>       

        </>
    )
}