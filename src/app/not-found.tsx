import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto px-6 lg:px-10 py-20 text-center">
        <p className="font-serif text-8xl sm:text-9xl text-accent/20 font-medium leading-none select-none">
          404
        </p>
        <h1 className="font-serif text-2xl sm:text-3xl text-text-dark tracking-tight mt-6">
          Page not found
        </h1>
        <p className="text-text-muted mt-4 max-w-md mx-auto">
          This shortlet might have been checked out. Head back home to find a place to stay or list your property.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center mt-10 px-8 py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
        >
          Back to home
        </Link>
      </div>
    </PageLayout>
  );
}
