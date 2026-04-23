import * as React from 'react';
import { useEffect } from 'react';

export interface IExperinceProps {
}

export default function Experince(props: IExperinceProps) {
    const experienceData = [
        {
            role: 'Tech Delivery Director / Front-End Lead',
            company: 'Accolite (Nasdaq Client)',
            period: 'Jan 2025 - Nov 2025',
            points: [
                "Developed and maintained scalable front-end modules for analytics and reporting platforms.",
                "Implemented micro-frontend architecture for modular development and independent deployments.",
                "Integrated real-time financial data APIs with strong performance and reliability standards.",
                "Reduced application load time by 25% through focused optimization initiatives.",
            ],
        },
        {
            role: 'Front-End Engineer',
            company: 'Accolite (MSCI Client)',
            period: 'Dec 2025 - Present',
            points: [
                "Built reusable React.js + TypeScript components for risk, ESG, and index analytics dashboards.",
                "Integrated large-scale financial datasets and backend APIs for data-heavy interfaces.",
                "Optimized rendering performance for complex views and improved user responsiveness.",
                "Improved stability and regression coverage using Jest and React Testing Library.",
            ],
        },
        {
            role: 'Associate Consultant',
            company: 'GlobalLogic (A Hitachi Group Company)',
            period: 'May 2022 - Dec 2024',
            points: [
                "Developed clean and scalable feature implementations with production-focused quality.",
                "Strengthened testing and quality through robust unit/integration coverage.",
                "Drove R&D and performance improvements across critical product components.",
            ],
        },
        {
            role: 'Software Engineer',
            company: 'Unity Technologies',
            period: 'Apr 2021 - May 2022',
            points: [
                "Delivered full lifecycle engineering from requirements through deployment.",
                "Built high-performance components using React.js, TypeScript, Node.js, and Express.js.",
                "Collaborated on precision oncology-focused solutions with Guardant Health.",
            ],
        },
        {
            role: 'Senior Software Engineer',
            company: 'IMSS',
            period: 'Dec 2019 - Mar 2021',
            points: [
                "Designed and implemented fintech solutions for Allianz.",
                "Built reusable UI components with React.js, Redux, and Material UI.",
                "Improved engineering quality through consistent reviews and best practices.",
            ],
        },
        {
            role: 'Software Engineer',
            company: 'IQVIA',
            period: 'May 2017 - Nov 2019',
            points: [
                "Developed healthcare applications focused on reliability and delivery excellence.",
                "Managed end-to-end implementation from design through deployment.",
            ],
        },
    ];

    useEffect(() => {
        // Add a delay to show each item one by one
        const itemTimeouts = [] as any;
        const items = document.querySelectorAll('.experience-item');

        items.forEach((item, index) => {
            const timeoutId = setTimeout(() => {
                    item.classList.add('visible');
            }, 500 * (index + 10)); // Delay increases with each item

            itemTimeouts.push(timeoutId);
        });

        // Cleanup the timeouts when the component unmounts
        return () => {
            itemTimeouts.forEach((timeoutId) => clearTimeout(timeoutId));
        };
    }, []);
    
    const jsx = React.useMemo(() => <div className='experince' id='experince'>
        <h1>Experience</h1>
        {experienceData.map((exp) => (
            <div className="experience-item" key={`${exp.company}-${exp.period}`}>
                <h4 className='rb-right'>{exp.role}</h4>
                <label>{exp.company}</label>
                <div className='rb-time'>{exp.period}</div>
                <ul>
                    {exp.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
            </div>
        ))}
    </div>, [])
    return jsx;
}
