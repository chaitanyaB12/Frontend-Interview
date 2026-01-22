import type { ReactNode } from "react";
import Header from "../components/blog/layout/Header";
import Footer from "../components/blog/layout/Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-1">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-12 gap-6 px-6 py-6">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
