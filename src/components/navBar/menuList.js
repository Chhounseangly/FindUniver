import Link from "next/link";
const { useRouter } = require("next/router");


// menuList
export default function Menu() {
  const menuList = [
  { name: "ទំព័រដើម", href: "/" },
  { name: "មុខជំនាញ", href: "/major" },
  { name: "ណែនាំមុខជំនាញ", href: "/recommendation" },
  { name: "អំពីយើង", href: "/aboutus" },
];
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
            } font-khBtB`}
            href={menuList.href}
          >
            {menuList.name}
          </Link>
        </li>
      ))}
    </>
  );
}
