const Teaching = () => {
    const data = [
        {
            "title": "ITM 454 - Natural Language Processing",
            "concepts": "Text Classification, Sentiment Analysis, Transformers, NLP for Low-resource Languages (Khmer)"
        },
        {
            "title": "COSC 221 - Computer Science B",
            "concepts": "Intermediate to advanced Python Programming, Data Manipulation with Numpy and Pandas, Object Oriented Programming (OOP)"
        },
        {
            "title": "COSC 121 - Computer Science A",
            "concepts": "Elementary Python Programming, Variables, Conditional Statements, Loops, Functions, GUI"
        },
        {
            "title": "INFO 653 - Web Development III",
            "concepts": "Backend Development with Node.js, JWT Authentication, MySQL"
        },
        {
            "title": "INFO 251 - Web Development II",
            "concepts": "Frontend Web Development with JavaScript, API Integration, Events, ReactJS"
        },
        {
            "title": "INFO 250 - Web Development I",
            "concepts": "Introduction to Web with HTML and CSS, Semantic tags, Flexbox and Grid, Responsive Design, Basic Animation with keyframes"
        },
        {
            "title": "COSC 251 - Data Structure",
            "concepts": "Data Structure using Java, Arrays, Linked List, Binary Tree, Hash Table, Heaps, Graphs"
        }
        // To add more courses
        // SRAD, Java I, Computer Science Survey, ITEC
    ]

    return (
        <main className="courses">
            <h2>American University of Phnom Penh</h2>
            <br />
            <ul>
                {data.map((course, index) => (
                    <li key={index}>
                        <p><strong>{course.title}</strong></p>
                        <p><b>Concepts covered:</b> {course.concepts}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Teaching