import Banner from "@/components/banner";
import Body from "@/components/indexpage/body";

//images
import banner from "../images/banner.png";
import Layout from "@/components/layout";
import Image from "next/image";

export default function Home({ universitiesData, provincesData, universityTypes }) {
  return (
    <Layout icon={`/icon.png`} title={"ទំព័រដើម"}>
      <Banner name={"FIND UNIVERSITY"} text={"ស្វាគមន៍មកកាន់"}>
        <Image src={banner} alt="banner" loading="eager" priority={true} />
      </Banner>
      <Body universitiesData={universitiesData} provincesData={provincesData} universityTypes={universityTypes} />
    </Layout>
  );
}

//static fetch Data
export async function getStaticProps() {
  let universitiesData = [];
  let apiProvinces = [];
  let universityTypes = [];

  let api = "http://127.0.0.1:8000/api";
  //fetch data of university
  await fetch(`${api}/universities`)
    .then((res) => res.json())
    .then((res) => {
      universitiesData = res.data;
    })
    .catch((error) => console.log(error));

  await fetch(`${api}/provinces`)
    .then((res) => res.json())
    .then((res) => {
      apiProvinces = res.data;
    })
    .catch((error) => console.log(error));

  await fetch(`${api}/university_types`)
    .then((res) => res.json())
    .then((res) => {
      universityTypes = res.data;
    })
    .catch((error) => console.log(error));

  return {
    props: {
      universitiesData: universitiesData,
      provincesData: apiProvinces,
      universityTypes: universityTypes,
    },
  };
}
