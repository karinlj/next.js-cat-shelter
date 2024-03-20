// import { Suspense } from "react";
import CatList from "./CatList";
import Link from "next/link";
// import Loading from "../loading";

const Cats = () => {
  return (
    <main>
      <h1>Our Cats at the Shelter.</h1>
      {/* <Suspense fallback={<Loading />}> */}
      {/* </Suspense> */}

      <CatList />
    </main>
  );
};

export default Cats;
