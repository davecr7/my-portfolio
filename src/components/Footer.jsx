
function Footer() {
  return (
    <footer className="footer">
      <h3>MyPortfolio</h3>

      <p>Built with passion by Dave.</p>

      <a
        href="https://github.com/davecr7"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>

      <p>
        © {new Date().getFullYear()} Dave. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
