"use client";
import React from "react";
// import { cookies } from "next/headers";

function Signout({ coc }: any) {
  // const cookieStore = cookies();
  //   console.log({ cookieStore: cookieStore.get('next-auth.session-token') });

  return (
    <li
      //   onClick={() => cookies().delete("next-auth.session-token")}
      onClick={() => coc}
      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    >
      SignOut
    </li>
  );
}

export default Signout;
