export default function LikedVideos({display, videos}) {
    if (display) {
        return (
        <div className="liked-videos" style={{marginBottom:'8vh', display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
            {videos.map((video, index) => (
                <div className="liked-video-container" key={index} style={{width:'33vw'}} >
                    <iframe
                        style={{background:'#ddd', width:'32vw', height:'55vw'}}	
                        src={video.url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <div className="liked-video-info" style={{float:'right', position:'relative', bottom:'3.5vh', right:'1.5vh'}}>
                        <p>{video.views}</p>
                    </div>
                </div>
            ))}
        </div>
        );
    } else {
        return null;
    }
}