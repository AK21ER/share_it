export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-4">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
        <div className="relative size-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
      <p className="text-sm text-muted-foreground animate-pulse">Loading profile...</p>
    </div>
  );
}