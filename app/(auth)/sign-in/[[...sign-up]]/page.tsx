import React from "react";
import { SignIn } from "@clerk/nextjs";

const Page = () => {
    return (
        <div>
            <p>Sign in page</p>
            <SignIn />
        </div>
    );
};

export default Page;
