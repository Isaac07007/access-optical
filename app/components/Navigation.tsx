import Dropdown from "./Dropdown";
import NavButton from "./NavButton";

export default function Navigation() {
    return (
        <div id="navigation">
            <div className="navOptions">
                <Dropdown
                    label={"Our Practice"}
                    items={[
                    {id: 0, path:"/", text:"Our Services"},
                    {id: 1, path:"/", text:"Patient Forms"},
                    {id: 2, path:"/", text:"Locations"},
                    {id: 3, path:"/", text:"Coupons"}
                    ]}
                />
                <NavButton
                    label="Request an Eye Exam"
                    path="/"
                />
                <NavButton
                    label="Vernon Gantry"
                    path="/"
                />
            </div>
            
        </div>
    )
}