export const sections = [
    {   
        id: 'intro',
        title: 'print(Fae())',
        component: 'IntroSection',
        body: `I’m someone who’s driven to build things that matter—and I bring that energy into every space I work in.

        I approach software engineering with equal parts curiosity and precision. Whether I’m diving into a new codebase or architecting a long-term solution, I move with intention. I ask sharp questions, learn fast, and follow through. I’m drawn to problems that don’t have obvious answers and environments where real impact is made through thoughtfulness, not just speed.

        My skillset is flexible, but my mindset is consistent: I care about clarity, momentum, and making meaningful contributions. I believe in building with empathy—for the team, for the product, and for the people on the other side of the experience. I’m the kind of engineer who makes things work, keeps things moving, and helps others do the same.

        I’m not here to coast—I’m here to create. If you’re looking for someone who leads with initiative, adapts quickly, and leaves things better than they were found, we’re probably aligned.`
    },
    {
        id: 'values',
        title: 'for value in core_values:',
        component: 'ValuesSection',
        values: [
            {
                title: 'Intentionality',
                caption: 'I don’t build just to build. I build what matters.'
            },
            {
                title: 'Clarity',
                caption: 'In code, communication, and direction.'
            },
            {
                title: 'Resilience',
                caption: 'I’ll figure it out, even when the docs are terrible.'
            },
            {
                title: 'Adaptability',
                caption: 'I learn fast, and I like new challenges.'
            },
            {
                title: 'Empathy',
                caption: 'For teammates, users, and future developers.'
            },
            {
                title: 'Kindness',
                caption: 'I bring curiosity and care into every interaction.'
            },
            {
                title: 'Autonomy',
                caption: 'I take initiative and follow through.'
            },
            {
                title: 'Humility',
                caption: 'I know what I know. I’m excited to learn what I don’t.'
            },
            {
                title: 'Reliable',
                caption: 'I want to be someone others can count on.'
            },
            {
                title: 'Curiosity',
                caption: 'I ask “why” until things make sense.'
            },
            {
                title: 'Ingenuity',
                caption: 'I love clever, elegant solutions to gnarly problems.'
            },
            {
                title: 'Impact',
                caption: 'I want my work to matter—to someone, somewhere.'
            },
            {
                title: 'Depth',
                caption: 'I go beyond surface-level fixes. I want to understand.'
            },
            {
                title: 'Momentum',
                caption: ' I’m wired to keep moving forward.'
            },
        ]
    },
    {
        id: 'skills',
        title: 'Const skillsAndTools = [',
        component: 'SkillsSection',
        skills: [
            {
                type: 'Backend',
                languages: ['Python', 'Java', 'JavaScript', 'SQL'],
                frameworks: ['Flask', 'Node.js'],
                tools: ['PostgreSQL', 'MySQL', 'Pycharm'],
            },
            {
                type: 'Frontend',
                languages: ['JavaScript', 'HTML', 'CSS'],
                frameworks: ['React', 'Bootstrap', 'Tailwind CSS'],
                tools: ['VS Code',  'Git'],
            },
            {
                type: 'DevOps',
                tools: ['Docker'],
            },
            {
                type: 'AI/ML',
                tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LlamaIndex'],
                frameworks: ['OpenAI'],
            },
            {
                type: 'Testing',
                tools: ['Playwright'],
            },
            {
                type: 'Tools & Utilities',
                tools: ['Git', 'VS Code', 'phpMyAdmin', 'XAMPP'],
                frameworks: ['RESTful APIs'],
            },
        ]
    },
    {
        id: 'experience',
        title: `cd Epitome/Experience
git log --pretty`,
        component: 'ExperienceSection',
        timeline: [
            {
                date: '',
                title: '',
                company: '',
                duties: [
                ]
            }
        ]
    },
    // {
    //     id: 'philosophy',
    //     title: 
    //     `class Philosphy:
    // def think(self):`,
    //     component: 'PhilosophySection',
    //     body: ''
    // },
    {
        id: 'resume',
        title: 'return Resume;',
        component: 'ResumeSection',
        resumeUrl: '',
        body: ''
    },
]