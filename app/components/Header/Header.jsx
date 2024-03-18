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

        <button className="login">Login</button>
      </div>

      <div className="lower">
        <Link href="/" className="login-link">
          Dashboard
        </Link>
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
