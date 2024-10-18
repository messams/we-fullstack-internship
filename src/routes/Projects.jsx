import ProjectCard from '../components/ProjectCard'
import  projectsData  from '../data'
const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h2 className="sec-title">Projects</h2>
            <div className="projects-container ">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        {...project}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects