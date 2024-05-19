"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, "href">;
  trackEventTag?: string;
} & React.ComponentPropsWithRef<"a">;

export const UnstyledLink = React.forwardRef<
  HTMLAnchorElement,
  UnstyledLinkProps
>(
  (
    {
      children,
      href,
      openNewTab,
      className,
      onClick,
      trackEventTag,
      nextLinkProps,
      ...rest
    },
    ref
  ) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith("/") && !href.startsWith("#");

    if (!isNewTab) {
      return (
        <Link
          href={href}
          ref={ref}
          className={cn(
            "focus-visible:ring-primary focus-visible:ring-offset-background focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4",
            className
          )}
          onClick={(e) => {
            onClick && onClick(e);
          }}
          {...rest}
          {...nextLinkProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        {...rest}
        className={cn(
          "cursor-newtab",
          "focus-visible:ring-primary focus-visible:ring-offset-background focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4",
          className
        )}
        onClick={(e) => {
          onClick && onClick(e);
        }}
      >
        {children}
      </a>
    );
  }
);

export const UnderlineLink = React.forwardRef<
  HTMLAnchorElement,
  UnstyledLinkProps
>(({ children, className, ...rest }, ref) => {
  return (
    <UnstyledLink
      ref={ref}
      {...rest}
      className={cn(
        "animated-underline custom-link inline-flex items-center font-medium",
        "border-b border-dotted hover:border-black/0",
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
});

export const Links = {
  UnstyledLink,
  UnderlineLink,
} as const;
