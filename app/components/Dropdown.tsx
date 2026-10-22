import Link from "next/link";

interface DropdownItem {
    id: number;
    path: string;
    text: string;
}

export default function Dropdown(props: { label: string; items: DropdownItem[]; }) {
    const {label, items} = props;
    return (
        <div className="dropdown">
            <button className="dropbutton">{label}</button>
            <div className="dropdown-content">
                {items.map(
                    (item) => (
                        <Link key={item.id} href={item.path}>{item.text}</Link>
                    )
                )}
            </div>
        </div>
    )
}