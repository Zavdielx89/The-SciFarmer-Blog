import Image from "next/image";
import Link from "next/link";
import logo from "../public/icons8-farm-64.png";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src={logo}
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>The SciFarmer</h1>
      </div>
      <div>
        <Link
          href="http://www.google.com"
          className="px-5 py-3 test-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full"
        >
          Check Out Google.com
        </Link>
      </div>
    </header>
  );
}

export default Header;
