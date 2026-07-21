import { Link } from 'react-router-dom';

const Navigation = () => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/courses">Courses</Link>
                </li>
                <li>
                    <Link to="/community-services">Community</Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Navigation