import Banner from "@/components/banner";
import Body from "@/components/indexpage/body";
import Seletes from "@/components/indexpage/selete";

//images
import banner from "../images/banner.png";
import Layout from "@/components/layout";
import Image from "next/image";

export default function Home({ universitiesData }) {
  return (
      <Layout
        icon={`/icon.png`}
        title={"ទំព័រដើម"}
      >
        <Banner name={"FIND UNIVERSITY"} text={"ស្វាគមន៍មកកាន់"}>
          <Image src={banner} alt="banner" loading="eager" priority={true} />
        </Banner>
        <Body universitiesData={universitiesData} />
      </Layout>
  );
}

//static fetch Data
export async function getStaticProps() {
  let universitiesData = [];

  //fetch data of university
  await fetch(`http://127.0.0.1:8000/api/universities`)
    .then((res) => res.json())
    .then((res) => {
      universitiesData = res.data;
    })
    .catch((error) => console.log(error));

  return {
    props: {
      universitiesData: universitiesData,
    },
  };
}
