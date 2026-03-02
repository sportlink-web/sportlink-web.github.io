import { Link } from "wouter";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold sm:text-2xl">Terms & Conditions</h1>
          <Link
            href="/"
            className="inline-flex w-fit items-center rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            Back to Home
          </Link>
        </div>
        <iframe
          title="SportLink Terms and Conditions"
          src="/terms-and-conditions.html"
          className="h-[calc(100vh-130px)] w-full rounded-md border border-border bg-white"
        />
      </div>
    </main>
  );
}
