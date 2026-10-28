import Link from "next/link";
import Dropdown from "./Dropdown";
import NavButton from "./NavButton";

export default function Navigation() {
    return (
        <div id="navigation">
            <div className="navOptions">
                <Dropdown
                    label={"Our Practice"}
                    items={[
                    {id: 0, path:"/our-practice", text:"About Us"},
                    {id: 1, path:"/", text:"Our Services"},
                    {id: 2, path:"/", text:"Patient Forms"},
                    {id: 3, path:"/", text:"Our Location"}
                    ]}
                />
                <Link
                    className="navButtonImportant"
                    href={"https://book2.getweave.com/39368aef-05de-4b5d-8c14-f61fcecc458a/request-appointment"}
                >
                    Request an Eye Exam
                </Link>
                <NavButton
                    label="Vernon Gantry"
                    path="/"
                />
            </div>
        </div>
    )
}