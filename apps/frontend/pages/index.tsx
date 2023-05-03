import { useEffect } from "react";

import { NextPage } from "next";
import { useRouter } from "next/router";

const IndexPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/buy");
  }, []);

  return null;
};

export default IndexPage;
