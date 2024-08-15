import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

const GlobalSearch = () => {
    return (
        <div className="relative w-full max-w-[600px] max-lg:hidden">
            <div className="bg-light-800 dark:dark-gradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
                <Image
                    src="/images/search.svg"
                    alt="search"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                />
                <Input
                    type="text"
                    placeholder="Search"
                    className="no-focus placeholder:text-light-400 dark:placeholder:text-light-500 text-dark-400 dark:text-light-700 border-none text-[16px] font-normal leading-[22.4px] shadow-none outline-none"
                />
                {/* </div> */}
            </div>
        </div>
    );
};

export default GlobalSearch;
