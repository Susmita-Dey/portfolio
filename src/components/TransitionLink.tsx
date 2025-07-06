"use client";

import { animatePageOut } from "@/utils/animations";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  href: string;
  label: string;
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if external link
    const isExternal =
      /^https?:\/\//.test(href) && !href.includes(window.location.hostname);
    if (isExternal) {
      e.preventDefault();
      window.open(href, "_blank");
      return;
    }
    if (pathname !== href) {
      e.preventDefault();
      animatePageOut(href, router);
    }
  };

  return (
    <Link
      className="text-lg font-mono dark:text-white text-neutral-900 hover:text-primary hover:dark:text-primary"
      href={href}
      onClick={handleClick}
      prefetch={true}
    >
      {label}
    </Link>
  );
};

export default TransitionLink;
