import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Login — Klusta",
  description: "Sign in to your Klusta account to book shortlets or manage your listings.",
};

export default function LoginPage() {
  return (
    <PageLayout title="Login">
      <div className="max-w-md mx-auto px-6 lg:px-10 py-12">
        <p className="text-text-muted text-center mb-8">
          Sign in to book shortlets or manage your property listings.
        </p>
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-dark mb-1.5">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-lg bg-accent text-black font-medium hover:bg-accent-dark transition-colors"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-text-muted text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-accent font-medium hover:underline">
            Sign up
          </Link>
        </p>
        <p className="mt-4 text-center">
          <Link href="/contact" className="text-accent font-medium hover:underline text-sm">
            Need help? Contact us
          </Link>
        </p>
        <Link
          href="/"
          className="inline-flex items-center mt-10 text-text-muted hover:text-text-dark transition text-sm"
        >
          ← Back to home
        </Link>
      </div>
    </PageLayout>
  );
}
