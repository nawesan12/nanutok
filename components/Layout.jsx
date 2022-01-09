export default function Layout({ children }) {
    return(
        <>
            {children}
            <nav className="navigation">
                <div className="link">
                    hola
                </div>
                <div className="link">
hola
                </div>
                <div className="link">
hola
                </div>
                <div className="link">
hola
                </div>
                <div className="link">
hola
                </div>
            </nav>
            <style jsx>{`
                .navigation {
                    position:fixed;
                    bottom:0;
                    width:100vw;
                    height:12vh;
                    background:#292929;
                    display:flex;
                    justify-content:space-around;
                    align-items:center;
                    border-top:3px solid #ccc;
                    color:white;
                }    
            `}</style>
        </>
    )
}