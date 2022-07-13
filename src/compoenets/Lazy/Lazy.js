import React, { Suspense } from "react";

export default function Lazy() {
  const Dump = React.lazy(() => import("./compoenets/PRACTICE/Dump"));
  return (
    <>
      <Suspense fallback={<h1>error</h1>}>
        <Dump />
      </Suspense>
    </>
  );
}
