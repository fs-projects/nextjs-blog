import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";
export default async function Home() {
  const session = await auth();
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "400px",
          marginBottom: "30px",
        }}
      >
        <form action={actions.signIn}>
          <Button type="submit">Sign In</Button>
        </form>
        <form action={actions.signOut}>
          <Button type="submit">Sign Out</Button>
        </form>
      </div>
      <div>
        <h1>
          <i>
            <u>Status of User Session from Server Side</u>
          </i>
        </h1>
        {session?.user ? (
          <h2>
            <b>Server :</b>You are currently Signed In!
          </h2>
        ) : (
          <h2>
            <b>Server :</b>You are currently Signed Out!
          </h2>
        )}
        <br />
        <h1>
          <i>
            <u>Status of User Session from Client Side</u>
          </i>
        </h1>
        <Profile />
      </div>
    </>
  );
}
