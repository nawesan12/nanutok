import VideoReactions from './VideoReactions';
import Header from './Header';

export default function NanuTok() {
    return(
        <>
            <Header />
            <section className="reproducer">
                <h2>aca va un tiktok uwu</h2>
            </section>
            <VideoReactions/>
            <style jsx>{`
                section {
                    width:100vw;
                    height:88vh;
                    position:fixed;
                    top:0;
                    background:#222;
                    color:white;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
            `}</style>
        </>
    )
}