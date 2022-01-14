export default function SearchHeader() {
    return(
        <>
        <header className="search_bar_header">
            <div className="search_bar">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                <input type="text" placeholder="Buscar"/>
            </div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-scan" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
                    <path d="M4 17v1a2 2 0 0 0 2 2h2" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v1" />
                    <path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>
        </header>
        <style jsx>{`
            .search_bar_header {
                height:10vh;
                width:100vw;
                display:flex;
                align-items:center;
                justify-content:space-around;
                padding:0 .5rem;
                position:fixed;
                background:#fff;
            }

            .search_bar {
                width:85%;
                height:2.5rem;
                background:#aaa;
                display:flex;
                align-items:center;
                justify-content:space-around;
                border-radius:1rem;
            }

            input {
                width:85%;
                height:100%;
                border:none;
                outline:none;
                background:none;
            }

            button {
                background:none;
                outline:none;
                border:none;
            }
        `}</style>
        </>
    )
}