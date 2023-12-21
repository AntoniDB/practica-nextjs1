import Link from "next/link"

const NotFound = () =>{
    return(
        <section>
            <h1>404</h1>
            <p>Página no encontrada</p>
            <Link href="/">
                Volver a la pagina de inicio
            </Link>
        </section>
    )
}
export default NotFound