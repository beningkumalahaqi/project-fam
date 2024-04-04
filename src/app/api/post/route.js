import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request) {
  
    //get detail post
    const posts = await db.posts.findMany({
        include: {
          users: {
            select: {
              name: true,
            },
          },
        },
        orderBy: {
          id: 'desc',
        }
      });
  
    if (!posts) {
      //return response JSON
      return NextResponse.json(
        {
          sucess: true,
          message: "Detail Data Post Not Found!",
          data: null,
        },
        {
          status: 404,
        }
      );
    }
  
    //return response JSON
    return NextResponse.json(
      {
        sucess: true,
        message: "Detail Data Post",
        data: posts,
      },
      {
        status: 200,
      }
    );
  }

  export const POST = async (request) =>{
    const body = await request.json()
    const product = await db.posts.create({
        data: {
          title: body.title,
          content: body.content,
          userId: body.userId
        }
    });
    return NextResponse.json(product, {status: 201});
}