export default function ProfileResume(props) {
    return(
        <>
        <header className="profile_settings">
                
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
        </section>
        <section className="profile_videos">
            <header className="videos_header">

            </header>
        </section>
        </>
    )
}