import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()
    return (    
        <>
            <h1> {router.query.handler}</h1>
        </>
    )
}