import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="shelter-section">
        {" "}
        <h1>The Cat Shelter Next.</h1>
        <p>
          Panther kitty yet bobcat so siberian and grimalkin. Grimalkin burmese
          norwegian forest but persian bobcat burmese. Manx tom or manx birman
          but grimalkin. American bobtail. Manx. Thai leopard but panther thai
          for panther. Tabby cheetah maine coon savannah. Ocicat. Tom munchkin
          so egyptian mau malkin and puma for egyptian mau. Turkish angora.{" "}
        </p>
        <h3>
          Go to <Link href="/cats">Cat List</Link>
        </h3>
      </main>
    </>
  );
}
