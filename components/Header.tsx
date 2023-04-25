import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://img.icon8.com/arcade/512/farm.png"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>The SciFarmer</h1>
      </div>
      <div></div>
    </header>
  );
}

export default Header;