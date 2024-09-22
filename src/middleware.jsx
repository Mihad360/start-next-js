import { NextResponse } from "next/server"

const user = false;

export const middleware = (request) => {
    const cookies = request.cookies.get('token')
    const coo = 'next-superhero'
    if(!cookies || cookies.value !== coo){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard', '/service']
}