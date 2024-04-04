import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request) {
  
    //get detail post
    const users = await db.users.findMany()
  
    if (!users) {
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
        data: users,
      },
      {
        status: 200,
      }
    );
  }

  