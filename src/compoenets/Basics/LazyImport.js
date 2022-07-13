import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("./Home"));

export const LazyImport = () => {
  return (
    <div>
      <Suspense fallback={<div>Page is Loading...</div>}>
        <section>
          <Home />
          {/* <Contacts /> */}
        </section>
      </Suspense>
    </div>
  );
};
