"use client"


import Link from "next/link"
import { useParams } from "next/navigation"

const CardPost = ({response}) => {

const params = useParams()
console.log(params)

    return (
        <>
            <Link href={`/post/${response.id}`} style={{color:'#50517B'}}><h2>{response.id}. {response.title}</h2></Link>
            <p>{response.body}</p>
            <h6>{response.userId}</h6>
            <button onClick={()=>{alert("Tu si ah")}}>Botón</button>            
        </>
    )
}
export default CardPost