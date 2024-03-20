import { notFound } from "next/navigation";
import "./CatDetails.scss";
import Cat from "../../../public/cat_small_white.png";
import Image from "next/image";

export const dynamicParams = true;

export const generateStaticParams = async () => {
  const url = "http://localhost:4000/cats";
  const res = await fetch(url);
  const cats = await res.json();

  return cats.map((cat) => {
    return { id: cat.id.toString() };
  });
};

const getCat = async (id) => {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = "http://localhost:4000/cats/" + id;
  const res = await fetch(url, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }
  return res.json();
};

//params automatically from the props
//params.id from what I call my folder
const CatDetails = async ({ params }) => {
  // const id = params.id;
  const cat = await getCat(params.id);
  return (
    <main className="cat-details">
      <h1>
        <span>
          {" "}
          <Image
            src={Cat}
            alt="Cat Image"
            width={40}
            quality={100}
            placeholder="blur"
          />
        </span>{" "}
        {cat.name} <span className="cat-details-id">[ {cat.id} ] </span>
      </h1>

      <p>{cat.description}</p>
    </main>
  );
};

export default CatDetails;
