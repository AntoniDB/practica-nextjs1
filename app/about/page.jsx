"use client"

import { useRouter } from "next/navigation";

const PageAbout = () => {

    const router = useRouter()

    return(
        <>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi earum nemo id nihil sapiente maiores unde. Natus nobis, quos, veritatis architecto repudiandae eveniet nam, ipsum soluta sequi possimus quaerat?</p>
            <button onClick={() => {
                alert('HOla mundito')
                router.push('/')
            }}>Ir a inicio</button>
        </>
    )
}
export default PageAbout