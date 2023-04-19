import Link from "next/link";

const NavItem = ({ text, href, active }) => {
    return (
      <Link href={href}
          className={`${
            active ? "text-red-500" : "text-gray-400" 
          }`}>
          {text}
      </Link>
    );
  }
  export default NavItem;