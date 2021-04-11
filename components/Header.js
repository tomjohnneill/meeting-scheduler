import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center text-white py-3 border-b border-gray-300 w-full justify-between bg-gray-800 shadow-lg px-8">
      <div className="flex items-center">
        <FaRegCalendarAlt className="h-12 text-4xl mr-4" />
        <h1 className="text-3xl font-bold">I'm booking you.</h1>
      </div>
      <div className="hidden md:block">
        <Link href="/create">
          <button className="other-button">Create your own</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
