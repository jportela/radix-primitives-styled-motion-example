import Head from "next/head";
import MenuDropdown from "./menu-dropdown";

export default function Home() {
  return (
    <div>
      <Head>
        <title>radix-primitives-styled-motion-example</title>
      </Head>

      <main>
        <h1>Radix Primitives with styled-components and framer-motion</h1>
        <h2>Menu Dropdown</h2>
        <MenuDropdown />
      </main>
    </div>
  );
}
