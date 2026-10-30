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
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.6633744995675!2d-73.54652202377207!3d40.659350240836844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27eb11b32a1fb%3A0x6bec6ddfd6d4789a!2sAccess%20Optical!5e0!3m2!1sen!2sus!4v1793368985924!5m2!1sen!2sus" 
                width={600}
                height={450}
                style={{border: 0}}
                // allowfullscreen="" 
                loading="lazy" 
                // referrerpolicy="strict-origin-when-cross-origin"
            />
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