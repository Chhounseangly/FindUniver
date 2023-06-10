import Body from "@/components/indexpage/body";

//images
import Layout from "@/components/layout";
import Image from "next/image";

export default function Home({
  universitiesData,
  provincesData,
  universityTypes,
}) {
  return (
    <Layout icon={`/icon.png`} title={"ទំព័រដើម"}>
      <div className="md:p-4">
        <div className="md:border-b-2 border-slate-600 shadow-inner  drop-shadow-xl shadow-indigo-500/40 flex flex-col  md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-900 py-6 px-6 md:py-12 lg:px-12">
          <div className=" flex flex-col gap-2 justify-start md:w-1/2">
            <h1 className="text-3xl lg:text-4xltext-gray-800 dark:text-white font-khBtB ">
              ស្វាគមន៍មកកាន់
            </h1>
            <p className="text-base lg:text-xl text-gray-800 dark:text-white mt-2 font-khBtB">
              FIND UNIVERSITY
            </p>
          </div>
          <div className=" md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
            <Image
              className="h-auto w-auto"
              // src="https://res.cloudinary.com/dlb5onqd6/image/upload/v1685355652/find_university/szmy3zb22x6oks4ktbzi.png"
              width={600}
              height={500}
              src="/banner.png"
              alt="images of find university"
              priority
            />
          </div>
        </div>
      </div>
      <Body
        universitiesData={universitiesData}
        provincesData={provincesData}
        universityTypes={universityTypes}
      />
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

  //fetch data of provinces
  await fetch(`${api}/provinces`)
    .then((res) => res.json())
    .then((res) => {
      apiProvinces = res.data;
    })
    .catch((error) => console.log(error));

  //fetch data of university_types
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
