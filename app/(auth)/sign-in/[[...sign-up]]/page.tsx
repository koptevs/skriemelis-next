import React from "react";
import { SignIn } from "@clerk/nextjs";

const Page = () => {
    return (
        <div>
            <p>Sign in page</p>
            <SignIn
                appearance={{
                    elements: {
                        socialButtonsBlockButton: "",
                        socialButtonsBlockButtonText: "text-lg",
                        socialButtonsProviderIcon: "",
                        formButtonPrimary: "bg-indigo-700 h-[35px] text-sm", // "bg-slate-500 hover:bg-slate-400 text-sm",
                        footer: "",
                    },
                }}
            />
        </div>
    );
};

export default Page;
