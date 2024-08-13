import Navbar from "@/components/navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative bg-background">
            <Navbar />
            <div className="flex pt-[56px]">
                <div className="w-[400px] p-6">Left sidebar</div>
                <div className="flex-col+ flex min-h-screen w-full px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
                    {children}
                </div>
                <div className="mx-auto w-[400px] p-6">Right sidebar</div>
            </div>
            Toaster
        </div>
    );
};

export default Layout;
