import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="Page Not Found" />
      <div className="text-center">
        <h2 className="text-2xl font-bold inline-block my-8 p-3">
          Urr... how did you get here?
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
