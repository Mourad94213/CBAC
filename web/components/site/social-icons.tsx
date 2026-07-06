import type { SVGProps } from "react";
import { association } from "@/lib/data/site";
import { cn } from "@/lib/utils";

/** Glyphe officiel Instagram (vraie marque, non décoratif). */
export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/** Glyphe officiel Facebook. */
export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

/** Liens réseaux sociaux du club (Instagram + Facebook), prêts pour header/footer. */
export function SocialIcons({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  const links = [
    {
      label: `Instagram ${association.socials.instagram.handle}`,
      href: association.socials.instagram.url,
      Icon: InstagramIcon,
    },
    {
      label: `Facebook ${association.socials.facebook.handle}`,
      href: association.socials.facebook.url,
      Icon: FacebookIcon,
    },
  ];
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {links.map(({ label, href, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="grid h-10 w-10 place-items-center rounded-full border border-noir-line text-craie-soft transition-colors duration-300 hover:border-or hover:text-or"
        >
          <Icon className={cn("h-[18px] w-[18px]", iconClassName)} />
        </a>
      ))}
    </div>
  );
}
