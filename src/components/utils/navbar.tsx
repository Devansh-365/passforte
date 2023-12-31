import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

export default async function Navbar() {
  //   const user = await getCurrentUser();

  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-[rgba(255, 255, 255, 0.08)] backdrop-blur-[12px]">
      <div className="max-w-[120rem] px-8 text-center h-12 flex">
        <Link className="flex items-center text-md" href="/">
          <Image src="/logo.svg" width={22} height={22} alt="logo" />
          <span className="ml-2 font-bold text-emerald-300">PassForte</span>
          {/* <Icons.logo className="mr-2 h-5 w-5" /> PassForte */}
        </Link>
        <div className="ml-auto flex h-full items-center space-x-3">
          <Link
            className={buttonVariants({
              size: "sm",
              className: "",
              variant: "ghost",
            })}
            href="/login"
          >
            Log in
          </Link>
          {/* <Link href="https://github.com/Devansh-365/biobeacon" target="_blank">
            <Icons.gitHub className="w-7 h-7 transition ease-in-out hover:scale-110" />
          </Link>
          {!user ? (
            <React.Fragment>
              <Link
                className={buttonVariants({
                  size: "sm",
                  className: "rounded-full mr-2 lg:mr-4",
                  variant: "ghost",
                })}
                href="/login"
              >
                Log in
              </Link>
              <Link
                className={buttonVariants({
                  size: "sm",
                  className: "rounded-full",
                })}
                href="/register"
              >
                Sign up
              </Link>
            </React.Fragment>
          ) : (
            <Link
              className={buttonVariants({
                size: "sm",
                className: "rounded-full",
              })}
              href="/dashboard"
            >
              Go to Dashboard
            </Link>
          )} */}
        </div>
      </div>
    </header>
  );
}
