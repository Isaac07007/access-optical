import BannerImage from "../components/BannerImage";
import FileDownload from "../components/FileDownload";

export default function PatientForms() {
    return (
        <div className="patientForms">
            <BannerImage/>
            <h2 style={{ fontSize: "1.7em", margin: "0 auto 0.3em"}}>Patient Forms</h2>
            <div style={{ display: "grid", gridTemplateRows: "repeat(7, auto)", gap: 5}}>
                <FileDownload src="/welcome_form.pdf" label="Welcome Form"/>
                <FileDownload src="/access_medical_insurance_intake_copy.pdf" label="Access Optical Medical Signature Page"/>
                <FileDownload src="/dry_eye_history_and_intake_form.pdf" label="Dry Eye History & Intake Form"/>
                <FileDownload src="/hippa_privacy_notice.pdf" label="HIPPA Privacy Notice"/>
                <FileDownload src="/medicare_short_hcfa.pdf" label="Medicare Form"/>
                <FileDownload src="/access_optical__chart_notes.pdf" label="Acess Optical Chart/Notes"/>
                <FileDownload src="/health_insurance_claim_form.pdf" label="Health Insurance Claim"/>
            </div>
        </div>
    )
}