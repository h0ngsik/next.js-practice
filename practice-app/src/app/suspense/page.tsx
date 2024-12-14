import React, { Suspense } from "react";
import Data from "../_components/data";
import ImageData from "../_components/image";
import ButtonBase from "@/commons/components/button";
import { ErrorBoundary } from "react-error-boundary";

export default function SuspensePage() {
  return (
    <>
      <Suspense
        fallback={<p className="px-5 py-5 bg-amber-300">데이터 로딩중...</p>}
      >
        <Data />
      </Suspense>

      <ErrorBoundary fallback={<p>에러입니다!</p>}>
        <Suspense fallback={<p>이미지 로딩중...</p>}>
          <ImageData />
        </Suspense>
      </ErrorBoundary>
      <ButtonBase />
    </>
  );
}
