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
                ? "text-red-500"
                : "text-white  hover:text-red-500"
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

