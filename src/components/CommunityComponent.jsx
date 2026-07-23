const CommunityComponent = (props) => (
    <section className="community">
        <h2>{props.sectionTitle}</h2>
        <br />
        <ul>
            {props.data.map((community, index) => (
                <li key={index}>
                    <p>{community.date && `[${community.date}]`} <strong>{community.topic && community.topic}{community.topic && community.role ? " | " : null}{community.role && community.role}</strong></p>
                    <p><b>Program:</b> {community.program}</p>
                    <p><b>Organizer:</b> {community.organizer}</p>
                </li>
            ))}
        </ul>
    </section>
)

export default CommunityComponent