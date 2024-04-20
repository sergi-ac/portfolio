import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>SERGIO ÁVILA</title>
        <meta name="description" content="SERGIO ÁVILA portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
            {children}
        <Footer />
      </main>
    </>
  );
}
