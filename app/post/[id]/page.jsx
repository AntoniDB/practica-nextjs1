import PostPage from "../page";
import { Suspense } from "react";

async function loadPost(props){
    const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${props}`);
    const data = req.json()
    return data
}


async function pagePost({params}) {

const datapost = await  loadPost(params.id)
console.log(datapost)

    return(
        <>
            <h1>{datapost.id}. {datapost.title}</h1>
            <p>{datapost.body}</p>
            <hr/>
            <Suspense fallback={<h5>Cargando posts...</h5>}>
                <PostPage/>
            </Suspense>
        </>
    )
}
export default pagePost