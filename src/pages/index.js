import Banner from "@/components/banner";
import Body from "@/components/indexpage/body";

//images
import banner from "../images/banner.png";
import Layout from "@/components/layout";
import Image from "next/image";

export default function Home({ universitiesData, api }) {
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
  let api = 'http://127.0.0.1:8000/api'
  //fetch data of university
  await fetch(`${api}/universities`)
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
