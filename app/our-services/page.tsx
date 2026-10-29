import BannerImage from "../components/BannerImage";

export default function ServicesPage() {
    return (
        <div className="ourServices"
            style={{
                padding: "15px 0"
            }}
        >
            <BannerImage/>
            <div>
                <h2>Our Services</h2>
                <p>Full comprehensive eye examination, diagnosis and treatment of ocular disease, glaucoma and cataract screening. Complete contact lens services including all specialty lens products. Co-management for laser and cataract surgeries. Frame styling to compliment your lifestyle. Outside prescriptions welcome.</p>
            </div>
            <hr/>
            <div>
                <p style={{
                    fontSize: "large"
                }}>
                    Facilities and Equipment
                </p>
                <p>
                    Eye Examinations<br/>
                    Glasses<br/>
                    Sunglasses<br/>
                    Contact Lenses<br/>
                    State of the Art Facilities<br/>
                    1 Hour Service Available
                </p>
            </div>
            <hr/>
            <div>
                <p style={{
                    fontSize: "large"
                }}>
                    Types of Payment Accepted
                </p>
                <p>
                    We accept Cash, American Express, Master Card, Visa, Discover, and ATM Debit.<br/>
                    <br/>
                    Sign up Today for Care Credit by GE to pay over 6 months with ZERO interest!
                </p>
            </div>
            <hr/>
            <div>
                <p style={{
                    fontSize: "large"
                }}>
                    Insurance Plans
                </p>
                <p>
                    We participate with Medicare, Medicaid, We gladly accept all discount plans, most union &amp insurance plans, including T.O.H., Eyemed, UFT, Metlife, Cigna, Verizon, JJ Newman, and many more..... Check with our staff if you have other types of coverage.
                </p>
            </div>
            <hr/>
            <div>
                <p style={{
                    fontSize: "large"
                }}>
                    Languages Spoken
                </p>
                <p>
                    Our staff speaks English and Spanish.
                </p>
            </div>
            {/* <hr/>
            <div>
                <p style={{
                    fontSize: "large"
                }}>
                    EyeGlass Guide
                </p>
                <p>
                    EyeGlass Guide will help you better understand the many lens choices available to you. This on-line tool will guide you through a series of questions about you, your lifestyle and your specific eyewear needs. At the end, you'll receive eyewear suggestions specifically tailored to meet your needs. <i>EyeGlass Guide is brought to you by Transitions.</i>
                </p>
            </div>
            <hr/>
            <div>
                <p style={{
                    fontSize: "large"
                }}>
                    Photochromic Demonstrations
                </p>
                <p>
                    View an instant demonstration of Transitions photochromic technology. See how lenses darken and fade back to clear to provide continual visual comfort and protection. <i>Demonstrations brought to you by Transitions.</i>
                </p>
            </div> */}
        </div>
    )
}