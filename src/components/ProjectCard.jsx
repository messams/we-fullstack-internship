import PropTypes from 'prop-types';
const ProjectCard = ({ title, category, link, source }) => {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <div className='categories' >
                {category.map((cat, index) => (
                    <div className='category'
                        key={index}>
                        {cat === "HTML" && <img src="https://skillicons.dev/icons?i=html" width="30" height="30" alt="HTML Icon" />}
                        {cat === "CSS" && <img src="https://skillicons.dev/icons?i=css" width="30" height="30" alt="CSS Icon" />}
                        {cat === "JavaScript" && <img src="https://skillicons.dev/icons?i=javascript" width="30" height="30" alt="JavaScript Icon" />}
                        {cat === "React" && <img src="https://skillicons.dev/icons?i=react" width="30" height="30" alt="React Icon" />}
                        {cat === "jQuery" && <img src="https://skillicons.dev/icons?i=jquery" width="30" height="30" alt="jQuery Icon" />}
                        {cat === "Bootstrap" && <img src="https://skillicons.dev/icons?i=bootstrap" width="30" height="30" alt="Bootstrap Icon" />}
                    </div>
                ))}
            </div>
            <a href={link} > <span className='link-demo'>Live Preview {`->`}</span>  </a>
            <a href={source} target="_blank" className='git-hub-ico'>
                <img src="https://skillicons.dev/icons?i=github" width="30" height="30" alt="" />
            </a>
        </div >
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string,
    source: PropTypes.string
};

export default ProjectCard;