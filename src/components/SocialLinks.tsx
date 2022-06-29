
// est-ce que mettre les data en context est pertinent...?
const SocialLinks = () => {
  const projectList: [] = []

  return (
    <div className="social__container--footer">
        <a
          href="https://twitter.com/erischon"
          className="home__social--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/ericschonhofen/"
          className="home__social--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </a>
        <a
          href="https://github.com/erischon"
          className="home__social--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </a>
      </div>
  )
}

export default SocialLinks
