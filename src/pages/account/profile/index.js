import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import { MdFlipCameraIos } from "react-icons/md";

import profile from "../../../images/pf.png";
import { getSession, signOut } from "next-auth/react";

export default function Profile({ userData }) {
  const router = useRouter();

  return (
    <div className="flex justify-center w-screen h-screen items-center bg-gray-900">
      <div className="lg:w-1/2 lg:h-80vh bg-white rounded-lg shadow relative">
        <AiOutlineClose
          className="float-right m-3 cursor-pointer hover:scale-150 transition-all relative"
          size={32}
          onClick={() => router.back()}
        />
        <div className="left-0 right-0">
          <div className="relative w-52 h-52  m-auto ">
            <Image
              className="w-full h-full rounded-full absolute border-2 -top-12"
              src={profile}
              alt="userphoto"
            />
            <MdFlipCameraIos
              size={32}
              className="absolute right-1 opacity-80 rounded-md bg-gray-200 top-24"
            />
            <label
              htmlFor="dropzone-file"
              className="absolute flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer -top-12 "
            >
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <div className=" flex flex-col w-full items-center">
            <span className="font-bold text-2xl">{userData.name}</span>
            <span className=" text-xl">{userData.email}</span>
            <button
              onClick={() =>
                signOut({
                  callbackUrl: "/",
                })
              }
              type="button"
              className="mt-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              signOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
Profile.getLayout = function () {
  return <>{Profile()}</>;
};

export async function getServerSideProps(context) {
  let datas = [];
  const session = await getSession(context);
  console.log(session)
  await fetch(`http://127.0.0.1:8000/api/profile`, {
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
    console.log({datas})

  return {
    props: {
      userData: datas,
    },
  };
}
