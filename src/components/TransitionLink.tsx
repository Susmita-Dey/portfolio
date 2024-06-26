"use client";

import { animatePageOut } from "@/utils/animations";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  href: string;
  label: string;
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname != href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button
      className="text-lg font-mono dark:text-white text-neutral-900 hover:text-primary hover:dark:text-primary"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TransitionLink;
