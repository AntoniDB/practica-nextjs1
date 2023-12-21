import { NextResponse } from "next/server";

export async function GET(){//consultando todos los datos

    const req = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await req.json()

    return NextResponse.json(data)
}

export async function POST(){//recogiendo datos de la solicitud post y el body 
    const data = await request.json()
    console.log(data)

    return NextResponse.json({message: "creando datos"})
}