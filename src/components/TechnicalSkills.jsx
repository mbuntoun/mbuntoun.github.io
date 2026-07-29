import pytorch from "../assets/tech-stacks/Pytorch_logo.png"
import huggingface from "../assets/tech-stacks/hf_logo.png"
import sklearn from "../assets/tech-stacks/Scikit_learn_logo.svg"
import spacy from "../assets/tech-stacks/SpaCy_logo.svg"

import reactLogo from "../assets/tech-stacks/react_logo.svg"
import sassLogo from "../assets/tech-stacks/Sass_Logo.svg"
import expressLogo from "../assets/tech-stacks/express_logo.png"
import mySQLLogo from "../assets/tech-stacks/MySQL_logo.png"

import python from "../assets/tech-stacks/Python_logo.svg"
import java from "../assets/tech-stacks/Java_Logo.png"
import cPlusPlus from "../assets/tech-stacks/C++_Logo.svg"
import gitLogo from "../assets/tech-stacks/Git_logo.svg"
import latex from "../assets/tech-stacks/LaTeX_logo.svg"

const TechnicalSkills = () => {
    const data = [
        {
            "title": "Machine Learning",
            "stacks": "Natural Language Processing (NLP): Open Weight LLMs for Computing Education, Low-resource Languages",
            "frameworks": [
                { "src": spacy, "name": "spaCy" },
                { "src": sklearn, "name": "scikit-learn" },
                { "src": pytorch, "name": "PyTorch" },
                { "src": huggingface, "name": "Hugging Face" },
                
            ]
        },
        {
            "title": "Web Development",
            "stacks": "Frontend (HTML, CSS, JavaScript), Backend (Node.js)",
            "frameworks": [
                { "src": reactLogo, "name": "React" },
                { "src": sassLogo, "name": "Sass" },
                { "src": expressLogo, "name": "Express" },
                { "src": mySQLLogo, "name": "MySQL" }
            ]
        },
        {
            "title": "Others",
            "stacks": "Programming Languages: Python, JAVA, C++",
            "frameworks": [
                { "src": python, "name": "Python" },
                { "src": java, "name": "Java" },
                { "src": cPlusPlus, "name": "C++" },
                { "src": gitLogo, "name": "Git" },
                { "src": latex, "name": "LaTeX" }
            ]
        }
    ]

    return (
        <section className="technical-skills">
            <h2>Technical Skills</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <h3>{item.title}</h3>
                        <p><mark>{item.stacks}</mark></p>
                        <div className="frameworks">
                            {item.frameworks && item.frameworks.map((framework, i) => (
                                <img key={i} src={framework.src} alt={framework.name} />
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default TechnicalSkills