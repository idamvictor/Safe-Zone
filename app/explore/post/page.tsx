import PostPageComponent from "@/components/post-page";
import React, { Suspense } from "react";

function postPage() {
  return (
    <section>
      <Suspense>
        <PostPageComponent />
      </Suspense>
    </section>
  );
}

export default postPage;
