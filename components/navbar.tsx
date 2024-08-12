import React from "react";
// import { ModeToggle } from "./mode-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-between p-6">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>{" "}
            <div className="flex gap-4">
                <Link className="self-center" href="/">
                    Home
                </Link>
                <Link className="self-center" href="/landing">
                    Landing
                </Link>
                <ModeToggle />
            </div>
        </div>
    );
};

export default Navbar;
