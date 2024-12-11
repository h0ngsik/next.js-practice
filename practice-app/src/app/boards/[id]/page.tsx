"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

export default function BoardsDetailPage() {
  const segment = useSelectedLayoutSegment();
  console.log(segment);
  return <div>BoardsDetailPage</div>;
}
