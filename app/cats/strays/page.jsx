import CatItem from "../CatItem";

const Strays = () => {
  //mock to show reuse of cat item component
  const strays = [
    {
      id: "500",
      name: "Black Cat",
      date: "2024-02-29",
      description:
        "Cat ipsum dolor sit amet, i rule on my back you rub my tummy i bite you hard. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.",
      goOutside: false,
    },
    {
      id: "501",
      name: "Grey Cat",
      date: "2024-02-29",
      description:
        "Cat ipsum dolor sit amet, catto munch salmono. Purr like an angel licks your face so sleep in the bathroom sink but hell is other people yet oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap get video posted to internet for chasing red dot.",
      goOutside: false,
    },
    {
      id: "502",
      name: "Tabby Cat",
      date: "2024-02-29",
      description:
        "Cat ipsum dolor sit amet. Get video posted to internet for chasing red dot. Suddenly go on wild-eyed crazy rampage ears back wide eyed yet sleep on my human's head so leave hair on owner's clothes and stuff and things.",
      goOutside: false,
    },
  ];
  return (
    <main>
      <h1>Stray cats in line for the Cat Shelter.</h1>

      <ul>
        {strays &&
          strays.map((stray) => {
            return <CatItem item={stray} />;
          })}
      </ul>
    </main>
  );
};

export default Strays;
