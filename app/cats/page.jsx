import { Suspense } from "react";
import CatList from "./CatList";
import Loading from "../loading";

const Cats = () => {
  return (
    <main>
      <h1>All cats at the Shelter.</h1>

      <Suspense fallback={<Loading />}>
        {" "}
        <CatList />
      </Suspense>
    </main>
  );
};

export default Cats;
