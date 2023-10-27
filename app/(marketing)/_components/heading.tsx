"use client";

import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { ArrowRight } from "lucide-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your ideas, documents & plans. Unified. Welcome to <span className="underline">Nexa Vault</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Nexa Vault is the connected workspace where <br />
                better, faster work happens.
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}
            {isAuthenticated && !isLoading && (
                <Button asChild>
                    <Link href="/documents">
                        Enter NexaVault
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Get NexaVault free
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </SignInButton>
            )}
        </div>
    )
}