export default function StaffProfile(props: {name: string; position: string; description: string}) {
    const { name, position, description } = props;
    return (
        <div className="staffProfile">
            <h2>{`${name}, ${position}`}</h2>
            <p>{description}</p>
        </div>
    )
}