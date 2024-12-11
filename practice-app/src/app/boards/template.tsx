import React from "react";

export interface IChildrenProps {
  children: React.ReactNode;
}

export default function BoardsTemplate({ children }: IChildrenProps) {
  console.log("[render]: boards/template");
  return (
    <>
      <div style={{ backgroundColor: "pink", marginBottom: "2rem" }}>
        BoardsTemplate으로 감싸집니다.
      </div>
      {children}
      <div style={{ backgroundColor: "pink", marginTop: "2rem" }}>
        BoardsTemplate으로 감싸집니다.
      </div>
    </>
  );
}
