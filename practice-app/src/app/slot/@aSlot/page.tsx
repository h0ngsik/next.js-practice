import Link from "next/link";
import React from "react";

export default function ASlot() {
  return (
    <div
      className="px-2 py-10"
      style={{ width: "100%", height: "auto", backgroundColor: "lightgreen" }}
    >
      {"["}ASlot{"]"} 영역입니다.
      <br />
      <Link href={"/slot/aSlotDetail"}>상세 페이지로 이동하기</Link>
      <br />
      <Link href={"/slot/aSlotEdit"}>수정 페이지로 이동하기</Link>
    </div>
  );
}
