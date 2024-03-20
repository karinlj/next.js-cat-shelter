import "./_header.scss";
import "../../styles/globals.scss";
import Link from "next/link";
import Image from "next/image";
import NewLogo from "../../../public/cat_shelter_logo.png";

const Header = () => {
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
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/cats" className="nav-link">
            Our Cats
          </Link>
          <Link href="/cats/add" className="nav-link">
            Add New Cat
          </Link>
        </nav>

        {/* <button className="login">Login</button> */}
      </div>

      <div className="lower">
        {/* {!isLoggedIn && path !== "/login" && (
          <StyledLink href="/login">Login</StyledLink>
        )}

        {isLoggedIn && path !== "/login" && (
          <StyledButton onClick={handleLogout}>Logout</StyledButton>
        )}

        {path === "/login" && <StyledLink href="/">Back to Home</StyledLink>} */}
      </div>
    </header>
  );
};

export default Header;
