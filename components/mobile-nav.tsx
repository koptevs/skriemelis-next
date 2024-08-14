import React from "react";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignOutButton,
    UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

const NavContent = () => {
    return (
        <div className="mt-8 flex flex-col items-center justify-between gap-8">
            <SheetClose asChild>
                <Link className="" href="/">
                    Home
                </Link>
            </SheetClose>
            <SheetClose asChild>
                <Link className="" href="/landing">
                    Landing
                </Link>
            </SheetClose>
            <SheetClose asChild>
                <ModeToggle />
            </SheetClose>
        </div>
    );
};

const MobileNav = () => {
    return (
        <div className="sm:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                    <SheetClose asChild>
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2"
                        >
                            <Image
                                src="/images/site-logo.png"
                                width={23}
                                height={23}
                                alt="Site Logo"
                            />
                            <div className="py-2 font-bold">
                                SK-
                                <span className="text-orange-600">NEXT</span>
                            </div>
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <NavContent />
                    </SheetClose>
                    <div className="mt-3 flex flex-col gap-3">
                        <SignedOut>
                            <SheetClose asChild>
                                <Button
                                    asChild
                                    // className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent"
                                >
                                    <Link href="/sign-in">
                                        <span>Sign In</span>
                                    </Link>
                                </Button>
                                {/* <SignInButton /> */}
                            </SheetClose>
                            <SheetClose asChild>
                                <Button
                                    asChild
                                    // className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent"
                                >
                                    <Link href="/sign-up">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                                {/* <SignInButton /> */}
                            </SheetClose>
                        </SignedOut>
                        <SignedIn>
                            {/* <Link href="/sign-out">Sign out</Link> */}
                            <SignOutButton>
                                <SheetClose asChild>
                                    <Button>Sign Out</Button>
                                </SheetClose>
                            </SignOutButton>
                        </SignedIn>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;
