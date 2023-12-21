import Link from "next/link"

const NavBar = () => {
    return(
        <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center', backgroundColor:'#DADBF7', padding:'20px', margin:'0px'}}>
            <h1>Práctica con NextJS</h1>
            <ul style={{display:'flex', gap:'10px', listStyle:'none'}}>
                <li>
                    <Link href='/'>Inicio</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/tienda'>Tienda</Link>
                </li>
                <li>
                    <Link href='/post'>Post</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar