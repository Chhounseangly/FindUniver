import Image from "next/image";
import { useRouter } from "next/router";
import { MdFlipCameraIos } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

import profile from "../../images/pf.png";
import { getSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Profile({ userData }) {
  const [edit, setEdit] = useState(true);
  const router = useRouter();

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <form>
      {edit && (
        <button
          onClick={handleEdit}
          className="rounded p-2 float-right bg-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2transition-all ease-out duration-300"
        >
          Edit
        </button>
      )}

      <div className="relative w-52 h-52  m-auto ">
        <Image
          className="w-full h-full rounded-full absolute border-2 "
          src={profile}
          alt="userphoto"
        />
        {/* <MdFlipCameraIos
          size={32}
          className="absolute right-1 opacity-80 rounded-md bg-gray-200 top-24"
        /> */}
        <label
          htmlFor="dropzone-file"
          className="absolute flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer -top-12 "
        >
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      <label
        htmlFor="name"
        className="block text-gray-700 select-none py-2 px-1"
      >
        Name
      </label>
      <input
        className={`text-xl w-full
        p-2 border-b-[1px] `}
        type="text"
        value={userData?.name}
        id="name"
        name="name"
        maxLength="20"
        disabled={edit ? true : false}
      />

      <label
        htmlFor="email"
        className="block text-gray-700 select-none py-4 pb-2 px-1"
      >
        Email
      </label>

      <input
        className="text-xl w-full p-2 border-b-[1px]"
        type="text"
        value={'userData?.email'}
        id="email"
        name="email"
        // readOnly={false}
        // disabled={edit}
      />
      {edit ? (
        <button
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
          type="button"
          className="mt-5 rounded p-2  bg-blue-500 hover:bg-blue-500  text-white hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-300"
        >
          Sign out
        </button>
      ) : (
        <div className="float-right mt-5 flex gap-2">
          <button
            onClick={handleEdit}
            className="rounded p-2  bg-gray-400  hover:bg-gray-500  text-white hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-300"
          >
            Cancel
          </button>
          <button className="rounded p-2  bg-blue-500 hover:bg-blue-500   text-white hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-300">
            Save
          </button>
        </div>
      )}
    </form>
  );
}
Profile.getLayout = function () {
  return <>{Profile()}</>;
};

// export async function getServerSideProps(context) {
//   let datas = [];
//   const session = await getSession(context);
//   await fetch(`http://127.0.0.1:8000/api/profile`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${session?.user.token}`,
//     },
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       datas = res.data;
//     })
//     .catch((error) => console.log(error));
//     console.log({datas})

//   return {
//     props: {
//       userData: datas,
//     },
//   };
// }
