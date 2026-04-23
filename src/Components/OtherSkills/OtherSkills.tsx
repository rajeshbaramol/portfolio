import React from 'react';
import Chip from '@mui/material/Chip';

interface IOtherSkillsProps { }

interface SkillGroup {
    title: string;
    skills: string[];
}

const skillsData: SkillGroup[] = [
    {
        title: 'Frontend',
        skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
    },
    {
        title: 'UI & State',
        skills: ['Material UI', 'Tailwind CSS', 'Redux', 'MobX', 'Storybook', 'AG-Grid'],
    },
    {
        title: 'Testing',
        skills: ['Jest', 'React Testing Library', 'Enzyme'],
    },
    {
        title: 'Backend & Data',
        skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Firebase'],
    },
    {
        title: 'AI & LLM',
        skills: ['OpenAI API', 'LangChain', 'Codex', 'Opus', 'Sonnet'],
    },
    {
        title: 'DevOps & Cloud',
        skills: ['Docker', 'Kubernetes (Basics)', 'AWS', 'Azure', 'GitHub Actions', 'Jenkins'],
    },
];

const OtherSkills: React.FunctionComponent<IOtherSkillsProps> = (props) => {
    return (
        <section id="other" className="other">
            <h1>Tech Stack</h1>
            <p className="subtitle">Core technologies and delivery tooling I work with:</p>
            <div className="skill-groups">
                {skillsData.map((group) => (
                    <article key={group.title} className="skill-group">
                        <h3>{group.title}</h3>
                        <div className="chip-row">
                            {group.skills.map((skill) => (
                                <Chip
                                    key={skill}
                                    label={skill}
                                    variant="outlined"
                                    className="skill-chip"
                                />
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default OtherSkills;
