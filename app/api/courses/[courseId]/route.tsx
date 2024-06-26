import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
export async function PATCH(
    req:Request,
    {params}:{params:{courseId:string}}
){
    try {
        const {userId} = auth();
        const {courseId} = params;
        const values = await req.json()
            console.log(courseId)
        if(!userId) return new NextResponse("Unatherized",{status:401})

        const course = await db.course.update({
            where:{
                id: courseId,
                userId
            },data:{
                ...values
            }
        })
        return NextResponse.json(course)
    } catch (err) {
        console.log(err)
        return new NextResponse("Internal Server Error",{status:500})
    }
}