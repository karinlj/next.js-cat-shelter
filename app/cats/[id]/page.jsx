import { notFound } from "next/navigation";

export const dynamicParams = true;

export const generateStaticParams = async () => {
  const url = "http://localhost:4000/cats";
  const res = await fetch(url);
  const cats = await res.json();

  return cats.map((cat) => {
    return { id: cat.id };
  });
};

const getCat = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

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

const CatDetails = async ({ params }) => {
  const cat = await getCat(params.id);
  return (
    <main>
      <h1> Cat Details</h1>
      <nav>
        <h3>{cat.name}</h3>
      </nav>

      <p>{cat.description}</p>
    </main>
  );
};

export default CatDetails;
