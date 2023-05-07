import Layout from "@/components/layout";
import { getSession } from "next-auth/react";

function AboutUs({ userData }) {
  return (
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 font-khBtB">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 ">
              គោលបំណង
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              FUND UNIVERSITY គឺជា
              វេបសាយបង្កើតឡើងតម្រូវទៅលើសិស្សដែរទើបនឹងបញ្ចប់ថ្នាក់ទី១២ក៏ដូចជាទៅកាន់អ្នកដែលចង់ដឹងនៅព័ត៏មានសាលាសកលដែលមានក្នុងប្រទេសកម្ពុជាផងដែរ។
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              បង្កើតដោយក្រុមនិស្សិត
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              FUND UNIVERSITY គឺជា
              វេបសាយបង្កើតឡើងតម្រូវទៅលើសិស្សដែរទើបនឹងបញ្ចប់ថ្នាក់ទី១២ក៏ដូចជាទៅកាន់អ្នកដែលចង់ដឹងនៅព័ត៏មានសាលាសកលដែលមានក្នុងប្រទេសកម្ពុជាផងដែរ។
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <h1 className="text-center font-bold text-2xl">សមាជិកក្រុម</h1>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  alt="Alexa featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                  alt="Alexa featured Img"
                />
                <p className="font-medium text-md leading-5 text-gray-800 mt-4">
                  CHHOUN SEANGLY
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                  alt="Olivia featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                  alt="Olivia featured Img"
                />
                <p className="font-medium text-md leading-5 text-gray-800 mt-4">
                  MUNY ROTH
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                  alt="Liam featued Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                  alt="Liam featued Img"
                />
                <p className="font-medium text-md leading-5 text-gray-800 mt-4">
                  REN CHEARIKA
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                  alt="Elijah featured img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                  alt="Elijah featured img"
                />
                <p className="font-medium text-md leading-5 text-gray-800 mt-4">
                  SENG VUTTHEA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ({ userData }) => 
( 
  <Layout title={"អំពីយើង"} session={userData} >
  <AboutUs/>
 </Layout>
)

export async function getServerSideProps(context) {
  let datas = [];
  const session = await getSession(context);
  if (!session) {
    return {
      props: {
      },
    };
  }
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

  return {
    props: {
      userData: datas,
    },
  };
}

