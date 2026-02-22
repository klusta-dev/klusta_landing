import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <main className="min-h-screen bg-section-light">
      <Header />
      <div className="max-w-7xl mx-auto min-h-screen overflow-visible">
        {title && (
          <div className="border-b border-gray-100">
            <div className="max-w-3xl mx-auto px-6 lg:px-10 py-10">
              <h1 className="font-sans text-3xl sm:text-4xl text-text-dark tracking-tight">
                {title}
              </h1>
            </div>
          </div>
        )}
        {children}
        <Footer />
      </div>
    </main>
  );
}
