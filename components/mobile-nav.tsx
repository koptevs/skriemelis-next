import React from "react";
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
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

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
                    <SheetHeader>
                        <SheetTitle>Switch Mode</SheetTitle>

                        <SheetDescription>
                            <ModeToggle />
                        </SheetDescription>
                    </SheetHeader>
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
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;
