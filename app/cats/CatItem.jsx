import Image from "next/image";
import NewLogo from "../../public/cat_shelter_logo.png";
import Cat from "../../public/cat_small.png";
import Tree from "../../public/tree.png";
import "./_catitem.scss";

const CatItem = ({ item }) => {
  return (
    <li className="list-item" key="{item.id}">
      <header>
        <div>
          <Image
            src={Cat}
            alt="Cat Image"
            width={30}
            quality={100}
            placeholder="blur"
          />
          <span>{item.name}</span>
        </div>
        <div>
          {item.goOutside && (
            <Image
              src={Tree}
              alt="Tree"
              width={30}
              quality={100}
              placeholder="blur"
            />
          )}
        </div>
      </header>
      <p> {item.description.slice(0, 100)}...</p>
    </li>
  );
};

export default CatItem;
