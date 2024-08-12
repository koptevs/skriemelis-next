import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";

import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});
const playfair_display = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair-display",
});

export const metadata: Metadata = {
    title: "Skriemelis-Next",
    description: "Generated by create next app",
    icons: {
        icon: "/hat.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider
            appearance={{
                elements: {
                    headerTitle: "text-lg pb-2 text-indigo-600 uppercase",
                    headerSubtitle:
                        "text-[10px] pb-2 font-semibold text-indigo-600 uppercase",
                    socialButtonsBlockButton: "",
                    socialButtonsBlockButtonText: "font-bold text-indigo-700",
                    socialButtonsProviderIcon: "",
                    dividerText: "text-indigo-700",
                    formFieldLabelRow: "flex justify-center",
                    formFieldLabel: "text-indigo-700 tracking-4",
                    formButtonPrimary:
                        "bg-gradient-to-r from-violet-700 to-indigo-600", // "bg-slate-500 hover:bg-slate-400 text-sm",
                    footerActionLink: "text-indigo-700", // Sign up text
                },
            }}
        >
            {/* <html lang="en"> */}
            <html lang="en" className="dark">
                {/* <body className={inter.className}>{children}</body> */}
                <body
                    // className={`${inter.className} ${inter.variable} ${playfair_display.variable}`}
                    className={cn(
                        "min-h-screen bg-background font-inter antialiased",
                        inter.className,
                        inter.variable,
                        playfair_display.variable
                    )}
                >
                    {" "}
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
