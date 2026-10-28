import BannerImage from "../components/BannerImage";
import StaffProfile from "../components/StaffProfile";

export default function PracticePage() {
    return (
        <div className="ourPractice"
            style={{
                padding: "15px 0"
            }}
        >
            <BannerImage/>
            <div
                className="staffMembers"
                style={{
                    paddingTop: 15
                }}
            >
                <StaffProfile
                    name="Jared Bohn"
                    position="Optician"
                    description="Following in the family footsteps, Jared began his optical career very early on. During his grade school days, he remembers joining his father, Dr. Bohn, at work on Saturdays. Although he was mostly catering to odd tasks around the office, at the same time he received an invaluable education at his father's side. Twelve years later, in 1992, Jared graduated from his ophthalmic dispensing program, at which time Jared was successfully licensed in the state's of New York, Florida, and Arizona. Jared is also certified by the American Board of Opticianry, and the National Contact Lens Examination. Jared, like his father, specializes in the rare art of personal attention. It is his pledge to follow his father's teachings of combining personal attention, professionalism, and price. The perfect blend in providing the utmost care for all his patients."
                />
            </div>
        </div>
    )
}