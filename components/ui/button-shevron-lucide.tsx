"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

type Props = { children: React.ReactNode };
const ButtonShevronLucide = ({ children }: Props) => {
    const [up, setUp] = useState(false);
    const toggleIcon = () => (up ? setUp(false) : setUp(true));
    return (
        <Button
            className={cn("pl-5 text-lg", {
                "bg-slate-400 hover:bg-slate-400": up === true,
            })}
            onClick={toggleIcon}
        >
            {children}
            <ChevronDown
                className={cn("text-red-00 ml-2 size-4", {
                    hidden: up === true,
                })}
                strokeWidth={4}
            />
            <ChevronUp
                className={cn("ml-2 size-4", {
                    hidden: up !== true,
                })}
                strokeWidth={4}
            />
        </Button>
    );
};

export default ButtonShevronLucide;
