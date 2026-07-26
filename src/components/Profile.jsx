import image from "../assets/profile-pic.jpeg" 

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
                I am an Instructor at American University of Phnom Penh. 
                My main interests lies in <strong>Natural Language Processing, particularly in low-resource languages, and leveraging open weight models for Computing Education. </strong>
                Before moving to academia, I also have experiences in Front-end Web Development.
            </p>
            <br />
            <p>
                As a women in tech, I am very passionate in making computing education accessible to women and other underrepresented groups.
                In addition, I am committed to developing digital talents in Cambodia through teaching, mentoring, and public engagement.
            </p>           
        </div>
    </section>
)

export default Profile