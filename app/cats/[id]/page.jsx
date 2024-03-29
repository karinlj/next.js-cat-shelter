import { notFound } from "next/navigation";
import "./CatDetails.scss";
import Cat from "../../../public/cat_small_white.png";
import Image from "next/image";

//If the user wants to se a page that is not made yet, Next will try to fetch the data if it exists and create a page.
export const dynamicParams = true; //=false => Next will return a 404 if the user wants to se a page that is not made yet

//Performance: Static Rendering - Next likes to serve u from cache when possible, fetch-requests and pages.
//Pages rendered during build-stge in advance to HTML-pages and served up t CDN.
//Dynamic Rendering - pages need to be redered when they are requested. Cache = 0
//How can Next know which id:s there are to create pages for??
//1: Dynamic rendering from the route parameter
//2. Tell Next in advace all the id:s there is (generateStaticParams() gets exported from the file), make pages and routes in advance.

export const generateStaticParams = async () => {
  const url =
    "https://json-server-vercel-54h43r8i2-karinljs-projects.vercel.app/cats";
  const res = await fetch(url);
  const cats = await res.json();

  return cats.map((cat) => {
    //return array of objects where every object represents every page or route we need.
    return { id: cat.id.toString() };
  });
};

const getCat = async (id) => {
  const url =
    "https://json-server-vercel-54h43r8i2-karinljs-projects.vercel.app/cats/" +
    id;
  const res = await fetch(url, {
    next: {
      revalidate: 60, //get new data after 60 sec
    },
  });
  if (!res.ok) {
    //manually serve up the 404
    notFound();
  }
  return res.json();
};

//params automatically from the props
//params.id from what I call my folder
const CatDetails = async ({ params }) => {
  const cat = await getCat(params.id);

  return (
    <main className="cat-details">
      <header className="cat-details-header">
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
      </header>

      <p>{cat.description}</p>
    </main>
  );
};

export default CatDetails;
