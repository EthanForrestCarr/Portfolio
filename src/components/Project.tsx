import "./Project.css"

type ProjectProps = {
    title: string;
    imageUrl: string;
    deployedUrl: string;
    githubUrl: string;
  };
  
  function Project({ title, imageUrl, deployedUrl, githubUrl }: ProjectProps) {
    return (
      <div>
        <img className="portfolioImages" src={imageUrl} alt={`${title} screenshot`} />
        <h3>{title}</h3>
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Application</a>
        <br />
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    );
  }
  
  export default Project;