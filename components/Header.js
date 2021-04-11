import { FaRegCalendarAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center text-white py-3 border-b border-gray-300 w-full justify-center bg-gray-800 shadow-lg">
      <FaRegCalendarAlt className="h-12 text-4xl mr-4" />
      <h1 className="text-3xl font-bold">I'm booking you.</h1>
    </div>
  );
};

export default Header;
