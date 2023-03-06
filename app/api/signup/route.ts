import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

type Body = {
    email: string
}

export async function POST(request: Request) {
    const body: Body = await request.json()
    console.log(body)
  try {
    // should return null if user does not exist
    const data = await db.user.findUnique({
      where: {
        email: body.email
      }
    })
    console.log(data)
    if (data === null){
        console.log("no user found with that email...")
        console.log("creating new user...")
      const newUser = await db.user.create({
        data: {
          email: body.email
        },
        select: {
          id: true
        }
      })
      console.log(newUser)
      return NextResponse.json(newUser)
    } else {
        console.log("This email already exists in database")
      return NextResponse.json({message: "We already have this email!"})
    }
  } catch (error){
    console.error("error on find unique email", error)
    NextResponse.json({message: "Unable to create new user!"})
  }
}