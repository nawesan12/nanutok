import Link from 'next/link'

export default function Header() {
    return(
        <>
            <header>
                <span>
                    Live
                </span>
                <div className="category">
                    <span>
                        Siguiendo
                    </span> 
                    <span>
                        Para ti
                    </span>
                </div>
                <span>
                    Lupita
                </span>
            </header>

            <style jsx>{`
                header {
                    width:100vw;
                    height:8vh;
                    background:#222;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    position:fixed;
                    top:0;
                    left:0;
                    z-index:1;
                    color:#fff;
                }
            `}</style>
        </>
    )
}