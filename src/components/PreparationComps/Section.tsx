"use client";

import React from "react";

export default function Section({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const classNameStyle = `${className}`;
  return <div className={classNameStyle}>{children}</div>;
}
