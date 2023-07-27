import * as React from 'react';
import { useEffect, useState } from 'react';

export interface IExperinceProps {
}

export default function Experince(props: IExperinceProps) {

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
        <div className="experience-item">
            <h4 className='rb-right'>Software Engineer</h4>
            <label>GlobalLogic | May 2022 - present</label>
            <div className='rb-time'>Full Time</div>
            <p>
                Implementation of clean and efficient code for the new features: Writing
                code that is well-structured, modular, and follows best practices to
                ensure readability, maintainability, and performance.
                Unit test case coverage using Jest and react-testing library: Writing
                tests to verify the functionality of individual units 

                Module observation and performance optimization of components:
                Analyzing the performance of different modules or components in the
                application to identify bottlenecks and areas for improvement. This can
                involve profiling the code, identifying performance-intensive operations,
                and optimizing them to enhance overall performance.
                R&D for required places: Research and development activities to
                explore and identify solutions or technologies needed for specific
                requirements in the project. This can involve studying existing libraries,
                frameworks, or techniques, and evaluating their feasibility and suitability
                for the project.
            </p>
        </div>

        <div className="experience-item">
            <h4 className='rb-right'>Senior software engineer </h4>
            <label>Unify Technologies | Apr 2021 - Apr 2022</label>
            <div className='rb-time'>Full Time</div>
            <p>
                Guardant Health is a healthcare company that specializes in developing
                and commercializing precision oncology products and services. They
                focus on non-invasive cancer diagnostics and help healthcare providers
                and researchers make more informed treatment decisions. Guardant
                Health utilizes advanced genomic sequencing technology to analyze
                circulating tumor DNA (ctDNA) from a simple blood draw, enabling early
                cancer detection, monitoring treatment response, and conducting
                research in the field of oncology. Their products and services are
                designed to improve patient outcomes and contribute to advancements
                in personalized medicine.
            </p>
        </div>
        <div className="experience-item">
            <h4 className='rb-right'>Senior software engineer   </h4>
            <label>IMSS | Dec 2019 - Mar 2021</label>
            <div className='rb-time'>Full Time</div>
            <p>
                Alliance is a finance-based application that aims to provide users with
                comprehensive financial management solutions. It offers a range of
                features and functionalities to help individuals and businesses
                effectively manage their finances. This includes budgeting tools,
                expense tracking, bill payment reminders, financial goal setting,
                investment tracking, and more.
            </p>
        </div>
        <div className="experience-item">
            <h4 className='rb-right'>Software Engineer</h4>
            <label>IQVIA | May 2017 - Nov 2019</label>
            <div className='rb-time'>Full Time</div>
            <p>
                Rim Smart is a healthcare-based application designed to revolutionize
                the way healthcare services are delivered and accessed. It leverages
                smart technology and advanced data analytics to provide personalized
                and efficient healthcare solutions. Rim Smart offers features such as
                remote patient monitoring, appointment scheduling, electronic medical
                records management, medication reminders, and telehealth
                consultations.
            </p>
        </div>
    </div>, [])
    return jsx;
}
