import { Suspense } from "react";
import CatList from "./CatList";
import Loading from "../loading";

const Cats = () => {
  return (
    <main>
      <h1 style={{ marginBottom: "0" }}>Our Cats at the Shelter.</h1>

      <Suspense fallback={<Loading />}></Suspense>
      <CatList />
    </main>
  );
};

export default Cats;
