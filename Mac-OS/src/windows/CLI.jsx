import React from 'react'
import '../styles/cli.scss'
import MacWindows from './MacWindows'
import Terminal from 'react-console-emulator';


const cvQuestions = [
    { id: 1, question: 'Tell me about yourself.', answer: 'I am a frontend React developer creating interactive portfolios and user-centric UI.' },
    { id: 2, question: 'What technologies do you use?', answer: 'React, JavaScript, CSS/SCSS, Git, Vite, responsive design and component architecture.' },
    { id: 3, question: 'How do you solve problems?', answer: 'I break problems into small tasks, test each step, and iterate quickly with feedback loops.' }
];
const CLI = () => {
    const commands = {
        echo: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        },
        about: {
            description: 'Show a short portfolio introduction.',
            usage: 'about',
            fn: () => 'Hi! I am Tanmay Verma, a React developer building creative web apps.'
        },
        skills: {
            description: 'List your core skills.',
            usage: 'skills',
            fn: () => 'Key skills: JavaScript, React, CSS, HTML, SCSS, Git, responsive UI.'
        },
        projects: {
            description: 'List highlighted projects in your portfolio.',
            usage: 'projects',
            fn: () => 'Featured: MacOS-style UI, Terminal emulator, Note taking app, Github dashboard.'
        },
        education: {
            description: 'Show your education background.',
            usage: 'education',
            fn: () => 'Education: BSc in Computer Science / Web development bootcamp - solid foundation in algorithms and modern JS frameworks.'
        },
        mission: {
            description: 'Describe your career mission and goals.',
            usage: 'mission',
            fn: () => 'Mission: Build delightful and accessible applications that users love, and continuously grow as a modern frontend engineer.'
        },
        links: {
            description: 'Show key portfolio links.',
            usage: 'links',
            fn: () => 'Links: github.com/tanmayverma | linkedin.com/in/tanmayverma | twitter.com/tanmayverma'
        },
        contact: {
            description: 'Show contact info.',
            usage: 'contact',
            fn: () => 'Contact: github.com/tanmayverma, linkedin.com/in/tanmayverma, tanmay@example.com'
        },
        cvquestion: {
            description: 'Show CV-style questions or answer a specific question by id.',
            usage: 'cvquestion [id]',
            fn: (...args) => {
                if (!args.length) return cvQuestions.map(q => `${q.id}. ${q.question}`).join('\n');
                const id = Number(args[0]);
                const q = cvQuestions.find(item => item.id === id);
                return q ? `${q.id}. ${q.question}\nAnswer: ${q.answer}` : `No question found for id ${args[0]}.`;
            }
        },
        ask: {
            description: 'Ask a random CV interview question.',
            usage: 'ask',
            fn: () => {
                const q = cvQuestions[Math.floor(Math.random() * cvQuestions.length)];
                return `${q.id}. ${q.question} (answer: cvquestion ${q.id})`;
            }
        },
        allCommands: {
            description: 'List all available commands.',
            usage: 'help',
            fn: () => Object.entries(commands).map(([key, value]) => `${key}: ${value.description}`).join('\n')
        }
    };

    return (
        <MacWindows>
            <div className="cli-window">
                <Terminal 
                    commands={commands}
                    welcomeMessage={"✨ Welcome to Tanmay Verma\'s interactive portfolio terminal! Type 'help' to see commands and explore my skills, projects, and CV stories."}
                    promptLabel={"tanmayverma:~$"} 
                />
            </div>
        </MacWindows>
    )
}

export default CLI
