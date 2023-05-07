import Banner from "@/components/indexpage/banner";
import Body from "@/components/indexpage/body";
import Seletes from "@/components/indexpage/selete";

//images
import logo from "../images/logo.png";
import banner from "../images/banner.png";
import { getSession, useSession } from "next-auth/react";
import Layout from "@/components/layout";
import { useEffect } from "react";

export default function Home({ userData, universitiesData }) {
  const images = [{ logo: logo, banner: banner }];
  const { data: session } = useSession();

  return (
    <>
      <Layout session={userData} title={"ទំព័រដើម"}>
        <Banner images={images} />
        <Seletes />
        <Body session={session} universitiesData={universitiesData} />
      </Layout>
    </>
  );
}

//serverside fetch Data
export async function getServerSideProps(context) {
  let datas = [];
  let universitiesData = [];
  const session = await getSession(context);

  //fetch data of user account
  await fetch(`http://127.0.0.1:8000/api/user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      datas = res.data;
    })
    .catch((error) => console.log(error));

  //fetch data of university
  await fetch(`http://127.0.0.1:8000/api/universities`)
    .then((res) => res.json())
    .then((res) => {
      universitiesData = res.data;
    })
    .catch((error) => console.log(error));
  //if (not log in)
  if (!session) {
    return {
      props: {
        universitiesData: universitiesData,
      },
    };
  }
  //if (log in)
  return {
    props: {
      userData: datas,
      universitiesData: universitiesData,
    },
  };
}
