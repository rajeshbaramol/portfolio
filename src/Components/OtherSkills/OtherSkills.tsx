import React, { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface IOtherSkillsProps { }

const chipsData = [
    [
        { label: 'HTML', color: 'primary' },
        { label: 'CSS', color: 'success' },
        { label: 'JavaScript (ES6+)', color: 'success' },
        { label: 'TypeScript', color: 'success' },
    ],
    [
        { label: 'React JS', color: 'primary' },
        { label: 'Next JS', color: 'success' },
        { label: 'Node JS', color: 'primary' },
        { label: 'Express JS', color: 'success' },
    ],
    [
        { label: 'Material UI', color: 'primary' },
        { label: 'AntD', color: 'success' },
        { label: 'Kendo UI', color: 'primary' },
    ],
    [
        { label: 'Jest', color: 'primary' },
        { label: 'React testing library', color: 'success' },
        { label: 'Emzyme', color: 'primary' },
    ],
    [
        { label: 'Redux', color: 'primary' },
        { label: 'MobX', color: 'success' },
        { label: 'Thunk/ Saga', color: 'primary' },
    ],
    [
        { label: 'Sql', color: 'primary' },
        { label: 'Oracle', color: 'success' },
        { label: 'Mango', color: 'primary' },
    ],
    [
        { label: 'Webpack', color: 'primary' },
        { label: 'GIT', color: 'primary' },
    ],
];

const OtherSkills: React.FunctionComponent<IOtherSkillsProps> = (props) => {
    const [visibleChips, setVisibleChips] = useState<boolean>(true);
    useEffect(() => {
        setInterval(() => {
            setVisibleChips((pre) => !pre)
        }, 5000)
    }, []);
    return (
        <Stack spacing={1} alignItems="center" id="other" className="other">
            <h1>Tech Stack</h1>
            <p className="subtitle">Here are some of the technologies I work with:</p>
            {chipsData.map((group, groupIndex) => (
                <Stack key={groupIndex} direction="row" spacing={1}>
                    {group.map((chip, chipIndex) => (
                        <Chip
                            key={chipIndex}
                            label={chip.label}
                            color={chip.color as any}
                            className={`animated-chip ${visibleChips ? 'visible' : ''}`}
                        />
                    ))}
                </Stack>
            ))}
        </Stack>
    );
};

export default OtherSkills;
