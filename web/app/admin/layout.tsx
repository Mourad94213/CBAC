import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backoffice",
  robots: { index: false, follow: false },
};

/** Coquille du backoffice — hors parcours public, jamais indexée. */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="container-wide py-12 lg:py-16">{children}</div>;
}
