import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

function Header() {
    return (
        <header className="flex p-2 justify-between sticky top-0 bg-white z-50 items-center shadow-md">
            <div className="flex space-x-2 items-center">
                <a href="/">
                    <Image
                        src={logo}
                        alt="logo"
                        height={100}
                        width={100}
                    />
                </a>
                <div>
                    <h1 className="font-bold">
                        The Aesthetic{" "}
                        <span className="text-violet-500">AI</span> Image
                        Generator{" "}
                    </h1>
                    <h2 className="text-xs">
                        Powered by DALL·E 2, Chat GTP & Microsoft Azure
                    </h2>
                </div>
            </div>
            <div className="flex text-xs md:text-base divide-x items-center text-grey-500">
                <Link
                    href="/about"
                    className="px-2 font-light text-right"
                >
                    About
                </Link>
                <Link
                    href="https://github.com/jakubfronczyk/ai-powered-image-generator"
                    className="px-2 font-light text-right"
                >
                    Github Repo
                </Link>
            </div>
        </header>
    );
}

export default Header;
