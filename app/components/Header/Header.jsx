"use client";
import "./_header.scss";
import "../../styles/globals.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import NewLogo from "../../../public/cat_shelter_logo.png";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="upper">
        <div>
          <Image
            src={NewLogo}
            alt="Cat Shelter Logo"
            width={80}
            quality={100}
            placeholder="blur"
          />
        </div>
        <nav>
          <Link
            href="/"
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>

          <Link
            href="/cats"
            className={`nav-link ${pathname === "/cats" ? "active" : ""}`}
          >
            Our Cats{" "}
          </Link>

          <Link
            href="/cats/add"
            className={`nav-link ${pathname === "/cats/add" ? "active" : ""}`}
          >
            Add New Cat{" "}
          </Link>

          <Link
            href="/cats/strays"
            className={`nav-link ${
              pathname === "/cats/strays" ? "active" : ""
            }`}
          >
            Strays
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
