import image from "../assets/profile-pic.jpeg"
import { Link } from 'react-router-dom'

const Profile = () => (
    <section className="profile">
        <div className="pic">
            <div className="outer-diamond"></div>
            <div className="second-diamond"></div>
            <div className="mask-diamond">
                <img src={image} alt="profile-pic" />
            </div>
        </div>
        <div className="summary">
            <h2>Monyrath BUNTOUN</h2>
            <br />
            <p>
                I am an <mark><a href="https://www.aupp.edu.kh/faculty/monyrath-buntoun/" target="_blank">Instructor at American University of Phnom Penh</a></mark>. 
                My main interests lies in <strong>Natural Language Processing, particularly in low-resource languages, and leveraging open weight models for Computing Education. </strong>
                Before moving to academia, I also have experiences in Front-end Web Development.
            </p>
            <br />
            <p>
                As a women in tech, I am very passionate in making computing education accessible to women and other underrepresented groups.
                In addition, I am committed to developing digital talents in Cambodia through <mark><Link to="/teaching">teaching</Link></mark>, <mark><Link to="/community-services">mentoring, and public engagement</Link></mark>.
            </p>           
        </div>
    </section>
)

export default Profile