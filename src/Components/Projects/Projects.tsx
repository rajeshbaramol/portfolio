import React from 'react';

interface IProjectsProps {}

interface ProjectItem {
    title: string;
    domain: string;
    stack: string;
    impact: string;
    description: string;
}

const projects: ProjectItem[] = [
    {
        title: 'Nasdaq Analytics Platform',
        domain: 'Capital Markets / FinTech',
        stack: 'React.js, TypeScript, Micro Frontends, Jest, RTL',
        impact: 'Reduced application load time by 25%',
        description:
            'Designed and delivered modular analytics/reporting interfaces with real-time data integration, accessibility improvements, and production-grade testing.',
    },
    {
        title: 'MSCI Risk & ESG Dashboards',
        domain: 'Risk Intelligence',
        stack: 'React.js, TypeScript, Redux, AG-Grid, REST APIs',
        impact: 'Improved responsiveness for data-heavy workflows',
        description:
            'Built reusable UI architecture for complex risk and ESG visualizations, optimized rendering paths, and improved reliability for enterprise users.',
    },
    {
        title: 'Healthcare Product Engineering',
        domain: 'Healthcare / Precision Oncology',
        stack: 'React.js, Node.js, Express.js, Testing Automation',
        impact: 'Faster feature delivery with stable quality gates',
        description:
            'Implemented high-performance product modules and end-to-end delivery practices with strong quality validation in cross-functional teams.',
    },
];

const Projects: React.FunctionComponent<IProjectsProps> = () => {
    return (
        <section className="projects-container" id="projects">
            <div className="title">
                <h3>Featured Work</h3>
            </div>
            <p className="subtitle">
                Select projects highlighting architecture depth, product impact, and delivery leadership.
            </p>

            <div className="projects-grid">
                {projects.map((project) => (
                    <article key={project.title} className="project-card">
                        <p className="domain">{project.domain}</p>
                        <h4>{project.title}</h4>
                        <p className="description">{project.description}</p>
                        <p className="stack">
                            <span>Stack:</span> {project.stack}
                        </p>
                        <p className="impact">
                            <span>Outcome:</span> {project.impact}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
