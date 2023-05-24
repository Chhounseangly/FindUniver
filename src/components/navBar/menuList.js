import Link from "next/link";
const { useRouter } = require("next/router");


// menuList
export default function Menu({menuList}) {
  const router = useRouter();
  return (
    <>
      {menuList.map((menuList, index) => (
        <li key={index}>
          <Link
            className={`${
              router.pathname === menuList.href
                ? "text-[#FF6A3D]"
                : "text-white  hover:text-[#FF6A3D]"
            } font-kh`}
            href={menuList.href}
          >
            {menuList.name}
          </Link>
        </li>
      ))}
    </>
  );
}

