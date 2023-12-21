import CardPost from '../../components/Cards/CardPost'

async function loadPost(){
    const ref = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await ref.json();
    return data
}

async function PostPage(){

    const datos = await loadPost()    

    return(
        <>
            <h1>Posts</h1>
            <div style={{display:'flex', flexWrap:'wrap'}}>
            {datos.map((response, index) => <div key={index} style={{ border: '1px solid black', padding: '5px', margin: '5px', maxWidth: '300px'}}>
                <CardPost response={response} />
            </div>)}
            </div>
        </>
        
        
    )
}
export default PostPage
