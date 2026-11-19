import profile from '../images/profile.jpg'

function Hero() {
  return (
    <section className="hero">
      <div
      className="hero-image">
        <img src={profile}
        alt="My profile" />
        </div>
      class
      <div className="hero-text">
        <h3>Hello, I'm</h3>

        <h1>David Akintayo</h1>

        <h2>Frontend Developer</h2>

        <p>
          I'm a passionate aspiring software developer
          who enjoys building websites and learning new
          technologies.
        </p>

        <div className="hero-buttons">
  <a href="#projects">
    View My Projects
  </a>

  <a href="/my-cv.pdf" download>
    Download CV
  </a>
</div>
      </div>
    </section>
  )
}

export default Hero
