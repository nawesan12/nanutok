import Link from 'next/link'

export default function Header() {
    return(
        <>
            <header>
                <span>
                    <Link href="/live"><a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-tv" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="3" y="7" width="18" height="13" rx="2" />
                            <polyline points="16 3 12 7 8 3" />
                        </svg>
                    </a></Link>
                </span>
                <div className="category">
                    <span>
                        Siguiendo
                    </span> 
                    |
                    <span>
                        Para ti
                    </span>
                </div>
                <span>
                    <Link href="/search"><a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="26" height="26" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </a></Link>
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
                    padding:0 1rem;
                }

                .category span {
                    margin:.5rem;
                    font-weight:500;
                }
            `}</style>
        </>
    )
}