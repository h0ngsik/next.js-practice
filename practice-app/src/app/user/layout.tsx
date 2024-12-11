import React from "react";
import { IChildrenProps } from "../boards/template";

export default function UserLayout({ children }: IChildrenProps) {
  console.log("[render]: user/layout");
  return (
    <>
      <div style={{ backgroundColor: "pink", marginBottom: "2rem" }}>
        UserLayout으로 감싸집니다.
      </div>
      {children}
      <div style={{ backgroundColor: "pink", marginTop: "2rem" }}>
        UserLayout으로 감싸집니다.
      </div>
    </>
  );
}
