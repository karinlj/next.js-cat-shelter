const getCats = async () => {
  const url = "http://localhost:4000/cats";
  const res = await fetch(url, {
    next: {
      // revalidate: 30, //get new data after 30 sec
      revalidate: 0, //use 0 to not use cache
    },
  });

  return res.json();

  //   fetch("http://localhost:4000/cats")
  //     .then((res) => res.json())
  //     .then((resData) => {
  //       console.log("resData: ", resData);
  //     });
};

const CatList = async () => {
  const catsData = await getCats();
  console.log("catsData: ", catsData);
  return (
    <div>
      <p>catlist</p>

      <ul>
        {catsData.map((cat) => {
          return (
            <li key={cat.id}>
              <h2> {cat.name}</h2>
              <p> {cat.description.slice(0, 100)}...</p>
            </li>
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
