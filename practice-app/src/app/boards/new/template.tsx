import React from "react";
import { IChildrenProps } from "../template";

export default function BoardsTemplate({ children }: IChildrenProps) {
  console.log("[render]: boards/new/template");
  return (
    <>
      <div style={{ backgroundColor: "yellow", marginBottom: "2rem" }}>
        BoardsNewTemplate으로 감싸집니다.
      </div>
      {children}
      <div style={{ backgroundColor: "yellow", marginTop: "2rem" }}>
        BoardsNewTemplate으로 감싸집니다.
      </div>
    </>
  );
}
