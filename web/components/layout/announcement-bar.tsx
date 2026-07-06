import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { announcement } from "@/lib/data/site";

export function AnnouncementBar() {
  return (
    <div className="bg-bleu text-craie">
      <div className="container-wide flex items-center justify-center gap-2 py-2 text-center text-[12.5px] font-medium">
        <span>{announcement}</span>
        <Link
          href="/adhesion"
          className="hidden items-center gap-1 font-semibold text-or-soft underline-offset-4 hover:underline sm:inline-flex"
        >
          S&apos;inscrire
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}
