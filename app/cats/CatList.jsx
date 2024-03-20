import Link from "next/link";
import CatItem from "./CatItem";

const getCats = async () => {
  // delay to imitate loading
  //   await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = "http://localhost:4000/cats";
  const res = await fetch(url, {
    next: {
      revalidate: 0, //get new data after 30 sec
      //   revalidate: 0, //use 0 to not use cache
    },
  });
  return res.json();
};

const CatList = async () => {
  const catsData = await getCats();
  console.log("catsData: ", catsData);
  return (
    <div>
      <ul>
        {catsData.map((cat) => {
          return (
            <Link href={`/cats/${cat.id}`}>
              <CatItem item={cat} />
              {/* <li key={cat.id}>
                <h2> {cat.name}</h2>
                <p> {cat.description.slice(0, 100)}...</p>
              </li> */}
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
