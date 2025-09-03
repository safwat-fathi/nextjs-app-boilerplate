"use server";

import { revalidateTag } from "next/cache";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { User } from "@/types/models/user.model";

export async function onLoginAction(data: User, remember = false) {
  const expires = remember
    ? new Date(Date.now() + 1000 * 60 * 60 * 24 * 30) // if user checked remember me, set cookie to expire in 30 days
    : new Date(Date.now() + 1000 * 60 * 60); // else cookie expires in 1 hr

  await setCookieAction("token", data.token, { expires });
}

// export async function onRefreshAction(value: string) {
//   cookies().set({
//     name: "token",
//     value: value,
//     httpOnly: true,
//     ...(remember && {
//       expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
//     }), // if user checked remember me, set cookie to expire in 30 days
//     path: "/",
//   })

//   redirect("/")
// }

export async function setCookieAction(
  name: string,
  data: any,
  options: Partial<ResponseCookie> = {},
) {
  cookies().set({
    name,
    value: JSON.stringify(data),
    httpOnly: true,
    path: "/",
    ...options,
  });
}

export async function getCookieAction(name: string) {
  return cookies().get(name);
}

export async function onLogoutAction() {
  cookies().delete("token");
}

export async function getTokenAction() {
  const token = cookies().get("token");

  return token?.value;
}

export async function revalidate(key: string) {
  revalidateTag(key);
}

export async function appRedirect(route: string) {
  redirect(route);
}
