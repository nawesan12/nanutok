export default function RecommendedHashtag() {
    return(
        <>
        <section className="recommended">
            <header>
                <div className="hashtag_logo">
                    #
                </div>
                <div className="hashtag">
                    hashtag
                </div>
            </header>
            <section className="list-of-recommended">
                <article className="video"></article>
                <article className="video"></article>
                <article className="video"></article>
                <article className="video"></article>
                <article className="video"></article>
                <article className="video"></article>
                <article className="video"></article>
                <article className="video"></article>
                <article className="video"></article>
                <article className="video"></article>
            </section>
        </section>

        <style jsx>{`
            .recommended {
                width:100vw;
                height:40vh;
                margin-top:1rem;
            }

            header {
                border-bottom: 1px solid #ddd;
                border-top: 1px solid #ddd;
                height:4.5rem;
                width:100vw;
                display:flex;
                align-items:center;
            }

            .hashtag_logo {
                font-weight:500;
                font-size:2rem;
                border-radius:50%;
                height:3rem;
                width:3rem;
                background:#fff;
                border:1px dashed black;
                text-align:center;
                margin: 0 1rem;
            }

            .hashtag {
                font-weight:500;
            }

            .list-of-recommended {
                height:30vh;
                margin:0 auto;
                display:flex;
                overflow:scroll;
            }

            .video {
                height:100%;
                min-width:8rem;
                background:#eee;
                margin:0 .3rem;
            }
        `}</style>
        </>
    )
}