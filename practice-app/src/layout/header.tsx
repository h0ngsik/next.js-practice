"use client";
import { IChildrenProps } from "@/app/boards/template";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

export default function Header({ children }: IChildrenProps) {
  const segment = useSelectedLayoutSegment();
  console.log(segment);
  return (
    <div>
      Header
      {children}
    </div>
  );
}
