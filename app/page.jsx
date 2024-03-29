import Head from "next/head";
import Hugo from "../public/hugo_play.jpg";
import Two from "../public/filip_lo.jpg";
import Mini from "../public/vilda2.jpg";
import Image from "next/image";
import Link from "next/link";
import "./styles/variables.scss";

export default function Home() {
  const nextStyle = {
    color: "#fff",
    fontSize: "1.7rem",
    marginLeft: "1rem",
  };
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="shelter-home">
        <h1 data-testid="title">
          The Cat Shelter. <span style={nextStyle}>(Next.js)</span>
        </h1>
        <section className="home-section">
          <p>
            Every life counts - Welcome to make a difference with us! The Cat
            Shelter is a registered, non-profit association, Together with
            volunteers, we rescue homeless cats. Veterinary care is paid for by
            donations that go to efforts to save lives.
          </p>
          <Image
            className="home-img"
            src={Hugo}
            alt="Playing cat"
            width={200}
            quality={100}
            placeholder="blur"
          />
        </section>

        <section className="home-section">
          <p>
            Panther kitty yet bobcat so siberian and grimalkin. Grimalkin
            burmese norwegian forest but persian bobcat burmese. Manx tom or
            manx birman but grimalkin. American bobtail. Manx. Thai leopard but
            panther thai for panther. Tabby cheetah maine coon savannah. Ocicat.
            Tom munchkin so egyptian mau malkin and puma for egyptian mau.
            Turkish angora.{" "}
          </p>
          <Image
            className="home-img"
            src={Two}
            alt="Two cats"
            width={200}
            quality={100}
            placeholder="blur"
          />
        </section>
        <section className="home-section">
          <p>
            Show belly cats woo i show my fluffy belly but it is a trap! if you
            pet it i will tear up your hand. Whatever growl at dogs in my sleep.
            Scratch me there, elevator butt. You are a captive audience while
            sitting on the toilet, pet me please stop looking at your phone and
            pet me fooled again thinking the dog likes me caticus cuteicus.
          </p>
          <Image
            className="home-img"
            src={Mini}
            alt="Crazy cat"
            width={200}
            quality={100}
            placeholder="blur"
          />
        </section>

        <Link href="./cats" className="link-button ">
          See All Our Cats
        </Link>
      </main>
    </>
  );
}
