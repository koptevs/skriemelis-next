import React from "react";
// import { ModeToggle } from "./mode-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./mobile-nav";

const Navbar = () => {
    return (
        <nav className="fixed z-50 flex w-full items-center justify-between bg-background p-2 shadow-md shadow-iky/10 dark:shadow-none">
            <Link href="/" className="flex items-center justify-center gap-1">
                <Image
                    src="/images/site-logo.png"
                    alt="Site Logo"
                    width={20}
                    height={20}
                />
                <div className="py-2 font-bold max-sm:hidden">
                    SK-
                    <span className="text-orange-600">NEXT</span>
                </div>
            </Link>
            <div className="flex self-center font-bold tracking-wider sm:text-2xl">
                GLOBAL SEARCH
            </div>
            <div className="max-sm:hidden">
                <div className="flex items-center justify-between gap-2 md:gap-4">
                    <Link className="px-1 py-2" href="/">
                        Home
                    </Link>
                    <Link className="px-1 py-2 pr-2" href="/landing">
                        Landing
                    </Link>
                    <ModeToggle />
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "h-7 w-7",
                                },
                            }}
                        />
                    </SignedIn>
                </div>
            </div>
            <MobileNav />
        </nav>
    );
};

export default Navbar;
