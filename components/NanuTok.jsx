import Image from 'next/image'

export default function NanuTok() {
    return(
        <>
            <section className="nanutok">
                <Image src="/images/nanutok.jpg" layout="fill" objectFit="cover" alt="NanuTok"/>
                <article className="info">
                    <h5>@{`nawesan12`}</h5>
                    <p>{`Hola bebu uwu estamos en un tiktok, en nuestro propio tiktok AAAAA`}</p>
                </article>
            </section>

            <style jsx>{`
                .nanutok {
                    width:100vw;
                    height:90vh;
                    position:relative;
                }    

                .info {
                    position:absolute;
                    z-index:10;
                    bottom:0;
                    width:70vw;
                    margin:1.5rem .5rem;
                    color:white;
                    max-height:20vh;
                }

                p {
                    font-size:.9rem;
                }

                h5 {
                    font-weight:500;
                    margin-bottom:.8rem;
                }
            `}</style>
        </>
    )
}