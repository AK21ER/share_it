import React from "react";

function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
            <div className="relative">
                {/* Outer glowing ring */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />

                {/* Main spinner */}
                <div className="relative size-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin transition-all duration-300" />
            </div>

            <div className="flex flex-col items-center space-y-2">
                <h2 className="text-xl font-bold text-primary font-mono tracking-wider animate-pulse">
                    Socially
                </h2>
                <p className="text-sm text-muted-foreground animate-pulse delay-75">
                    Loading your feed...
                </p>
            </div>
        </div>
    );
}

export default Loading;
