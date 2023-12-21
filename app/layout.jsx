import NavBar from "../components/NavBar/NavBar"
import {Architects_Daughter} from 'next/font/google'

export const metadata ={
  title: "Mi tienda con practica NextJs",
  description: "Esta es la pagina principal de mi tienda",
  keywords: "tienda, online, comercio"
}

const architec = Architects_Daughter({
  weight : ["400"],
  styles : ["italic", "normal"],
  subsets : ["latin"]
})

export default function RootLayout({ children }) {
 return (
    <html lang="en">      
      <body className={architec.className}>        
        <NavBar />
        {children}
      </body>
    </html>
  )
}
