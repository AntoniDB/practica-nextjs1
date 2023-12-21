import { NextResponse } from 'next/server'

export async function GET(request, {params}){

    //cuando url contienen https://jsonplaceholder.typicode.com/users/1?nombre=a&apellido=b ------- ejemplo
    const {searchParams} = new URL(request.url) //consultando datos en la url
    console.log(searchParams.get("nombre"))
    console.log(searchParams.get("apellidos"))


    const ref = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`) //consultando datos especificos
    const data = await ref.json()
    return NextResponse.json(data)
}

