import React from 'react';

const Portfolio = () => {
  // Define an array of project data
  const projects = [
    {
      title: 'Project 1',
      image: 'path-to-project1-image.jpg',
      deployedLink: 'link-to-project1-deployed-app',
      githubLink: 'link-to-project1-github-repo'
    },
    {
      title: 'Project 2',
      image: 'path-to-project2-image.jpg',
      deployedLink: 'link-to-project2-deployed-app',
      githubLink: 'link-to-project2-github-repo'
    },
    {
      title: 'Project 3',
      image: 'path-to-project3-image.jpg',
      deployedLink: 'link-to-project3-deployed-app',
      githubLink: 'link-to-project3-github-repo'
    },
    // Add more projects as needed
    {
      title: 'Project 4',
      image: 'path-to-project4-image.jpg',
      deployedLink: 'link-to-project4-deployed-app',
      githubLink: 'link-to-project4-github-repo'
    },
    {
      title: 'Project 5',
      image: 'path-to-project5-image.jpg',
      deployedLink: 'link-to-project5-deployed-app',
      githubLink: 'link-to-project5-github-repo'
    },
    {
      title: 'Project 6',
      image: 'path-to-project6-image.jpg',
      deployedLink: 'link-to-project6-deployed-app',
      githubLink: 'link-to-project6-github-repo'
    }
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {/* Map through the projects array and render each project */}
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <p>
              <a href={project.deployedLink}>Deployed Application</a> | <a href={project.githubLink}>GitHub Repository</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
