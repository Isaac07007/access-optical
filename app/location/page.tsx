import { GoogleMapsEmbed } from "@next/third-parties/google"

function mapHider() {
    if (process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY) {
        return (
            <GoogleMapsEmbed
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?  process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY : ""}
                height={300}
                width="100%"
                mode="place"
                q="2169+Merrick+Rd,Merrick,NY+11566"
            />
        )
    } else {
        return (
            <div className="mapHidden"></div>
        )
    }
}

export default function LocationPage() {
    return (
        <div className="location">
            <div style={{
                display: "grid",
                gridTemplateColumns: "2fr 3fr"
            }}>
                <p style={{
                    alignContent: "center"
                }}>
                    <strong>Access Optical</strong>
                    <br/>
                    2169 Merrick Road
                    <br/>
                    Merrick, NY 11566
                    <br/>
                    <br/>
                    MERRICK SQUARE
                    <br/>
                    <br/>
                    <strong>Phone:</strong>
                    &nbsp;
                    <a href="tel:516-223-1616">516-223-1616</a>
                    <br/>
                    <strong>Fax:</strong>
                    &nbsp;
                    516-223-8590
                    <br/>
                    <strong>Email:</strong>
                    &nbsp;
                    <a href="mailto:support@accessoptical.net">support@accessoptical.net</a>
                    <br/>
                    <br/>
                    Appointments Accepted / Not Required
                </p>
                {mapHider()}
            </div>
        </div>
    )
}