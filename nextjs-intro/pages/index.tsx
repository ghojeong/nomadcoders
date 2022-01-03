import type { NextPage } from "next";
import Head from "next/head";
import Seo from "../components/Seo";

const Home: NextPage = () => {
  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">Home</h1>
    </div>
  );
};

export default Home;
