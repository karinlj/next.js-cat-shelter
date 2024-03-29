import Link from "next/link";
import Image from "next/image";
import CatItem from "./CatItem";
import Tree from "../../public/tree.png";

const getCats = async () => {
  // delay to imitate loading
  await new Promise((resolve) => setTimeout(resolve, 500));

  const url = "http://localhost:4000/cats";
  const res = await fetch(url, {
    next: {
      revalidate: 0, //use 0 to not use cache (opt out) - Cannot apply Static Rendering
    },
  });
  return res.json();
};

const CatList = async () => {
  const catsData = await getCats();
  return (
    <div>
      <p style={{ margin: "0.5rem 0" }}>
        At the moment we have{" "}
        <span className="cats-number">{catsData.length}</span> beautiful cats at
        the Shelter.
      </p>
      <p style={{ margin: "0.1rem 0 1.5rem 0" }}>
        <Image
          src={Tree}
          alt="Tree"
          width={30}
          quality={100}
          placeholder="blur"
        />{" "}
        <span style={{ verticalAlign: "super" }}>= Outdoor cat</span>
      </p>

      <ul>
        {catsData.map((cat) => {
          return (
            <Link href={`/cats/${cat.id}`}>
              <CatItem item={cat} />
            </Link>
          );
        })}

        {catsData.length === 0 && (
          <p>There are no cats at the Shelter at the moment.</p>
        )}
      </ul>
    </div>
  );
};
export default CatList;
