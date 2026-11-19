
function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-card">
        <h3>Study Track</h3>
        <p>
          A student-focused website designed
          to help students organize their
          learning and study activities.
        </p>

<a
  href="https://github.com/davecr7/study-track"
  target="_blank"
  rel="noopener noreferrer"
>
  View Project on GitHub
</a>

        <span>HTML | CSS | JavaScript</span>
      </div>

      <div className="project-card">
        <h3>Personal Portfolio</h3>
        <p>
          My personal digital CV showcasing
          my education, skills and projects.
        </p>
        <span>React | CSS | JavaScript</span>
      </div>
    </section>
  )
}

export default Projects
