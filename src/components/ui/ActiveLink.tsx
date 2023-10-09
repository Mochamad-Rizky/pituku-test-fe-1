"use client";

import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type ActiveLinkProps = LinkProps & {
  className?: string;
  activeClassName: string;
};

const ActiveLink = ({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const currentRoute = usePathname();

  return (
    <Link
      {...props}
      className={cn(
        className,
        currentRoute === props.href ? activeClassName : "",
      )}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
