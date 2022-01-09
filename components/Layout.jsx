import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
    
    const router = useRouter()
    
    return(
        <>
            {children}
            <nav className="navigation">
                <div className={router.pathname === '/' ? 'link active' : 'link'}>
                    <Link href="/"><a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="5 12 3 12 12 3 21 12 19 12" />
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                        </svg>    
                    </a></Link>
                    Inicio
                </div>
                <div className={router.pathname === '/search' ? 'link active' : 'link'}>
                    <Link href="/search"><a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </a></Link>
                    Buscar
                </div>
                <div className={router.pathname === '/create' ? 'link active' : 'link'}>
                    <Link href="/create"><a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-plus create" width="38" height="38" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <line x1="9" y1="12" x2="15" y2="12" />
                            <line x1="12" y1="9" x2="12" y2="15" />
                        </svg>
                    </a></Link>
                </div>
                <div className={router.pathname === '/inbox' ? 'link active' : 'link'}>
                    <Link href="/inbox"><a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="10" y1="14" x2="21" y2="3" />
                            <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                        </svg>    
                    </a></Link>
                    Inbox
                </div>
                <div className={router.pathname === '/profile' ? 'link active' : 'link'}>
                    <Link href="/profile"><a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="7" r="4" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>    
                    </a></Link>
                    Perfil
                </div>
            </nav>
            <style jsx>{`
                .navigation {
                    position:fixed;
                    bottom:0;
                    width:100vw;
                    height:10vh;
                    background:#292929;
                    display:flex;
                    justify-content:space-around;
                    align-items:center;
                    color:white;
                }    

                .link {
                    height:100%;
                    width:100%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    border-top:.3rem solid #333;
                    transition: all 0.2s ease-in-out;
                    flex-direction: column;
                    font-size:.8rem;
                }

                .active {
                    border-top:.3rem solid #ff5050;
                }

                .create {
                    transform:scale(1.5);
                    background: radial-gradient(circle, rgba(2,0,36,0.2) 0%, rgba(0,0,0,.4) 60%, rgba(41,41,41,.7) 85%);
                }
            `}</style>
        </>
    )
}