const Education = () => {
    const data = [
        {
            "university": "Syracuse University",
            "url": "http://syracuse.edu/",
            "location": "Syracuse, NY, United States",
            "graduation": "May 2021",
            "degree": "M.Sc in Computer Science",
            "gpa": 3.7,
            "courses": ["Natural Language Processing", "Ethics of Machine Learning", "Principles of Social Media and Data Mining", "Computer Vision", "Introduction to Artificial Intelligence", "Foundations of Big Data", "Design and Analysis of Algorithms"]
        },
        {
            "university": "Royal University of Phnom Penh",
            "url": "https://www.rupp.edu.kh/",
            "location": "Phnom Penh, Cambodia",
            "graduation": "June 2018",
            "degree": "B.Sc in Computer Science and Engineering",
            "gpa": 3.5,
            "courses": ["Algorithms and Data Structure", "Software Engineering", "Object-Oriented Analysis, Design and Programming", "Java"]
        },
        {
            "university": "Institute of Foreign Languages",
            "url": "https://www.rupp.edu.kh/academics/faculties_and_institutes/institute_of_foreign_languages",
            "location": "Phnom Penh, Cambodia",
            "graduation": "August 2017",
            "degree": "B.A in English for Professional Communication",
            "gpa": 3.57,
            "courses": ["Introduction to Research Methods", "Proposal Writing", "Report Writing", "Literature Studies", "Intercultural Communication"]
        }
        
    ]

    return (
        <section className="education">
            <h2>Education</h2>
            <ul>
                {data.map((edu, index) => (
                    <li key={index}>
                        <h4><a href={edu.url} target="_blank">{edu.university}</a> | {edu.location}</h4>
                        <p><strong>{edu.degree}</strong> | {edu.graduation}</p>
                        <p><strong>CGPA: {edu.gpa}/4.0</strong></p>
                        <p><b>Courses:</b> {edu.courses.join(", ")}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Education