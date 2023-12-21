import Link from "next/link"

export const metadata ={
    title: "Tienda oficial",
    description: "Esta es la pagina principal de mi tienda",    
}

const LayoutTienda = ({children}) => {
    return(
        <>
        <nav>
            <h3>NavBar Tienda</h3>
                <ul>
                    <li><Link href='/tienda/categorias'>Categorias</Link></li>
                    <li><Link href='/tienda/categorias/computadoras'>Computadoras</Link></li>
                </ul>        
        </nav>
            {children}
        </>
    )
}
export default LayoutTienda