import Image from "next/image"
import Link from "next/link"

export default function Logo() {
    return (
        <Link href={"/"}>
            <Image
                alt="Access Optical Logo"
                src={"/access_woman.png"}
                width={264}
                height={100}
                loading="eager"
            />
        </Link>
        
    )
}