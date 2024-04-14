import { API_ROUTES } from "@/src/lib/constants/routes";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    const accessToken = cookies().get("accessToken");
    if (!accessToken) {
        throw new Error('Access token not found'); 
    }
    try {
      const response = await fetch(API_ROUTES.GET_ACCOUNT, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "Authorization": accessToken.value,
        },
      });
      if (response.ok) {
        const resJson = await response.json();
        return NextResponse.json({
            success: true,
            message: resJson,
          });
      }
      else {
        console.log(response);
        return NextResponse.json({
            success: false,
            message: "get user ไม่ได้",
          });
      }
    } catch (error) {
      throw error;
    }
  };