import Link from "next/link";
import React from "react";

export default function ASlotDetailPage() {
  return (
    <div
      className="px-2 py-10"
      style={{ width: "100%", height: "auto", backgroundColor: "lightskyblue" }}
    >
      ASlotDetailPage
      <br />
      <Link href="/slot">돌아가기</Link>
    </div>
  );
}
