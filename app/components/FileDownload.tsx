import iconPDF from "@/public/pdf.png";
import iconFile from "@/public/file.png";
import Image from "next/image";

export default function FileDownload({ src, label }: {src: string, label: string}) {
    return (
        <div className="fileDownload" style={{ float: "none"}}>
            <a title={label} href={src}>
                <Image
                    src={src.endsWith(".pdf") ? iconPDF : iconFile}
                    alt={label}
                    style={{ float: "left", margin: "0 15px 15px 0" }}
                />
            </a>
            <div style={{ display: "grid", gridTemplateRows: "auto auto"}}>
                <p>
                    <b style={{ color: "#8e8e8e" }}>{label}</b>
                </p>
                <p>
                    <a title={`Download File: ${label}`} href={src} style={{ fontWeight: "bold", color: "#5199a8"}}>Download File</a>
                </p>
            </div>
        </div>
    )
}