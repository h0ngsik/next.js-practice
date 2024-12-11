"use client";
import React, { useState } from "react";

export default function BoardsPage() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => (prev += 1));
  };
  return (
    <>
      <div>이곳은 [게시글 - 목록] 페이지입니다. {count}</div>
      <button onClick={handleCount}>눌러!</button>
    </>
  );
}
