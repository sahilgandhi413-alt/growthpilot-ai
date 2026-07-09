import type { ReactNode } from "react";
import PageBackground from "./PageBackground";

interface Props {
  children: ReactNode;
}

export default function PageLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <PageBackground />

      <main className="relative mx-auto max-w-[1800px] px-10 py-10 space-y-10">

        {children}

      </main>

    </div>
  );
}