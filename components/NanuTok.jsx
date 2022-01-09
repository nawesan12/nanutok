import Image from 'next/image'

export default function NanuTok() {
    return(
        <>
            <section className="nanutok">
                <Image src="/images/nanutok.jpg" layout="fill" objectFit="cover" alt="NanuTok"/>
            </section>

            <style jsx>{`
                .nanutok {
                    width:100vw;
                    height:90vh;
                    position:relative;
                }    
            `}</style>
        </>
    )
}