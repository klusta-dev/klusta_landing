import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Login — Klusta",
  description: "Sign in to your Klusta account to manage bookings and listings.",
};

export default function LoginPage() {
  return (
    <PageLayout title="Login">
      <div className="max-w-md mx-auto px-6 lg:px-10 py-12">
        <p className="text-text-muted mb-8">
          Sign in to manage your shortlet bookings and listings.
        </p>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block font-medium text-text-dark text-sm mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium text-text-dark text-sm mb-1.5">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-lg bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-text-muted">
          Don&apos;t have an account?{" "}
          <Link href="/contact" className="text-accent font-medium hover:underline">
            Get in touch
          </Link>
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center text-accent font-medium hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
