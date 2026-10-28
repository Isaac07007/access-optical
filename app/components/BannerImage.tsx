import Image from "next/image"

export default function BannerImage() {
    return (
        <Image
            alt="Illustration of many women wearing glasses walking to the right"
            src={"/WebHeaderCropped.jpg"}
            width={640}
            height={164}
            style={{
                width: "100%"
            }}
        />
    )
}