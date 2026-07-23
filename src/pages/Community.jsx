import CommunityComponent from "../components/CommunityComponent"

const Community = () => {
    const invitedTalks = [
        {
            "date": "July 2026",
            "topic": "Developing Future-Ready AI Skills While Building Responsibly",
            "role": "Keynote speakers and panelists",
            "organizer": "Tech for Kids Academy",
            "program": "Pie & AI: Phnom Penh - AI for the Next Generation"
        },
        {
            "date": "January 2026",
            "topic": "AI Unlocked: How Artificial Intelligence is Shaping the Future",
            "role": "Guest Speaker",
            "organizer": "Digital Community of Cambodia (DCC)",
            "program": "Digital Connect Webinar"
        },
        {
            "date": "October 2025",
            "topic": "Artificial Intelligence & Data Science",
            "role": "Guest Speaker",
            "organizer": "The U.S. Ambassador's Youth Council (USAYC) & AMT Scholars",
            "program": "Jumneanh – Road to University"
        }
    ]

    const events = [
        {
            "date": 2026,
            "role": "Judge",
            "organizer": "Empowering Youth in Cambodia",
            "program": "Scratch Game Creation Challenge"
        },
        {
            "date": "2017-2025",
            "role": "Technical Judge & former Technical Mentor",
            "organizer": "Tech for Kids Academy",
            "program": "Technovation Girls Cambodia"
        },
        {
            "date": 2022,
            "role": "Technical Judge & former Technical Mentor",
            "organizer": "Tech for Kids Academy",
            "program": "Kid-Kathon"
        },
        {
            "date": 2022,
            "role": "Technical Mentor",
            "organizer": "Institute of Technology Cambodia",
            "program": "Techno Innovation Challenge"
        },
        {
            "date": 2019,
            "role": "STEM Pro Sister (Technical Mentor for university students)",
            "organizer": "STEM Education Organization for Cambodia",
            "program": "STEM Sister Cambodia"
        }
    ]

    return (
        <main>
            <CommunityComponent sectionTitle="Invited Talks" data={invitedTalks} />
            <CommunityComponent sectionTitle="Other Events" data={events} />
        </main>
    )
}

export default Community