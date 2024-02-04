"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();
  return (
    <>
      {session.data?.user ? (
        <h2>
          <b>Client :</b>You are currently Signed In!
        </h2>
      ) : (
        <h2>
          <b>Client :</b>You are currently Signed Out!
        </h2>
      )}
    </>
  );
}
