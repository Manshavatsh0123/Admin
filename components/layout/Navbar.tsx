import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-regular-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm border-b border-gray-200">
            <div className="px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-10 py-4 px-2">
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="w-5 h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 cursor-pointer"
                    />

                    <Image
                        src="/images/AdminLogo.png"
                        alt="Persistent Learning"
                        width={140}
                        height={50}
                        priority
                    />
                </div>

                {/* Right section */}
                <div className="flex items-center gap-2 text-black">
                    <span>Welcome Admin!</span>
                    <FontAwesomeIcon
                        icon={faCircleUser}
                        className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6"
                    />
                </div>

            </div>
        </nav>
    )
}