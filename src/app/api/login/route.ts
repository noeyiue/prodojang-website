import { API_ROUTES } from "@/src/lib/constants/routes";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const response = await fetch(API_ROUTES.POST_LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const resJson = await response.json();

  if (response.ok === true) {
    cookies().set(
      "accessToken",
      resJson.token,
      {
        httpOnly: true,
        maxAge: 24 * 60 * 60,
      }
    );
    // cookies().set('refreshToken', resJson.refreshToken, {
    //   httpOnly: true,
    //   maxAge: 24 * 60 * 60,
    // });

    delete resJson.accessToken;
    delete resJson.refreshToken;
    return NextResponse.json({
      success: true,
      message: "เข้าสู่ระบบสำเร็จ",
    });
  }
  return NextResponse.json({
    success: false,
    message: "ชื่อผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง",
  });
}
