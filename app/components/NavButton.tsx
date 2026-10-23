import Link from "next/link";

export default function NavButton(props: { label: string, path: string}) {
    const {label, path} = props;
    
    return (
        <Link className="navButton" href={path}>{label}</Link>
    )
}