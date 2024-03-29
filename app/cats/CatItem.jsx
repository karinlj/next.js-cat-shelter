import Image from "next/image";
import Cat from "../../public/cat_small.png";
import Tree from "../../public/tree.png";
import "./_catitem.scss";

const CatItem = ({ item }) => {
  return (
    <li className="list-item" key="{item.id}">
      <header>
        <div>
          <Image src={Cat} alt="Cat Image" width={30} quality={100} />
          <span>{item.name}</span>
        </div>
        <div>
          {item.goOutside && (
            <Image src={Tree} alt="Tree" width={30} quality={100} />
          )}
        </div>
      </header>
      <p>
        {" "}
        {item.description.length <= 100
          ? item.description
          : item.description.slice(0, 150) + "..."}
      </p>
    </li>
  );
};

export default CatItem;
