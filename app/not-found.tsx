import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-16 text-center">
      <h1 className="mb-4 text-4xl font-bold">Coming Soon</h1>
      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        We're working on something special for this page. 
        Check back soon to discover more about our organic tiger nut milk.
      </p>
      <Link
        href="/"
        className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Return Home
      </Link>
    </div>
  );
}
