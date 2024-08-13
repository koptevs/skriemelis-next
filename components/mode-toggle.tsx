"use client";

import * as React from "react";
import { Moon as MoonIcon, Sun as SunIcon, Computer } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                asChild
                // className="text-red-500 focus:bg-slate-100/10 data-[state=open]:bg-orange-200 dark:data-[state=open]:bg-orange-400"
            >
                <Button variant="outline" size="icon" className="">
                    <SunIcon className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 md:h-[1.2rem] md:w-[1.2rem]" />
                    <MoonIcon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 md:h-[1.2rem] md:w-[1.2rem]" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                // className="flex flex-col items-center rounded-none border-8 border-orange-700 bg-amber-500 font-bold"
            >
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    className="flex w-full justify-between px-3"
                >
                    <SunIcon className="h-[1rem] w-[1rem] rotate-0 transition-all dark:-rotate-90 md:h-[1.2rem] md:w-[1.2rem]" />
                    <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    className="flex w-full justify-between px-3"
                >
                    <MoonIcon className="h-[1rem] w-[1rem] rotate-90 transition-all dark:rotate-0 md:h-[1.2rem] md:w-[1.2rem]" />
                    <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    className="flex w-full justify-between px-3"
                >
                    <Computer className="h-[1rem] w-[1rem] rotate-90 transition-all dark:rotate-0 md:h-[1.2rem] md:w-[1.2rem]" />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
