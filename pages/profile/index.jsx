import Head from 'next/head'
import ProfileResume from '../../components/ProfileResume'

export default function Profile() {

    const user = {
        username: 'habaneropicantito',
        profilePicture: 'https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1659918152569861~c5_100x100.jpeg?x-expires=1641873600&x-signature=cwPJ9%2Bv0EYFaOyN7HK1ThWimEKU%3D',
        statistics: {
            posts: 10,
            followers: 12,
            following: 6,
            likes:3000
        },
        description: 'bang bang bang',
        email: 'nawesan12@gmail.com',
        password:'12345678'
    }

    return(
        <>
        <Head>
        <title>@{user.username} - NanuTok</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <ProfileResume user={user}/>
        
        </>
    )
}