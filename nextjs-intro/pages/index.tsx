import type { NextPage } from "next";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <h1 className="active">Home</h1>
      <style jsx>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Home;
