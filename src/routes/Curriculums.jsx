import PropTypes from 'prop-types';

function Curriculum({ title, items, /* imageUrl */ }) {
    return (
        <div className="content">
            {/* Title */}
            <h3>{title}</h3>

            {/* Image for the icon */}
            {/* Uncomment if you want to use images */}
            {/* <img src={imageUrl} alt={`${title} Icon`} className="curriculum-icon" /> */}

            {/* Items list */}
            <div>
                {items.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </div>
        </div>
    );
}

Curriculum.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string.isRequired,
};

const Curriculums = () => {
    const curriculums = [
        {
            title: 'HTML',
            items: [
                'Introduction to HTML',
                'HTML Text and Links',
                'HTML Forms',
                'HTML Tables',
                'HTML5: New Tags and Features',
                'Audio and Video Tags in HTML5'
            ],
            imageUrl: 'https://skillicons.dev/icons?i=html'
        },
        {
            title: 'CSS',
            items: [
                'Introduction to CSS',
                'CSS Text and Fonts',
                'CSS Layout and Positioning',
                'CSS Transitions and Animations',
                'CSS Performance Optimization',
                'Intro to SCSS',
                'Bootstrap: Responsive Design and Grid System'
            ],
            imageUrl: 'https://skillicons.dev/icons?i=css'
        },
        {
            title: 'JavaScript',
            items: [
                'Intro to JavaScript',
                'JavaScript Syntax and Structure',
                'JavaScript Variables and Data Types',
                'JavaScript Operators and Expressions',
                'JavaScript Functions and Control Structures',
                'JavaScript DOM Manipulation',
                'AJAX',
                'ECMAScript 6 and Beyond',
                'JavaScript Security Best Practices',
                'JavaScript Performance Optimization',
                'JavaScript with 3rd Party Libraries',
                'How to Run JavaScript on a Server?'
            ],
            imageUrl: 'https://skillicons.dev/icons?i=js'
        },
        {
            title: 'React JS',
            items: [
                'Introduction to React',
                'React Components and Props',
                'React State Management (Redux & Use Context)',
                'React Forms and Validation',
                'React Routing and Navigation',
                'React Hooks and Advanced Topics',
                'React Best Practices and Performance',
                'Intro to React Ecosystem'
            ],
            imageUrl: 'https://skillicons.dev/icons?i=react'
        },
        {
            title: 'PHP',
            items: [
                'Introduction to PHP',
                'Client Side VS Server Side',
                'Installing PHP Environment Tools',
                'PHP Data Types and Variables',
                'PHP Operators',
                'Conditional Statements (If Else - Inline Condition)',
                'PHP Functions',
                'PHP Form Handling',
                'PHP Cookie Handling',
                'PHP Session Handling'
            ],
            imageUrl: 'https://skillicons.dev/icons?i=php'
        },
        {
            title: 'MYSQL',
            items: [
                'Intro to the History of Database',
                'DBMS, DB, and SQL',
                'Designing Database and ERD',
                'CRUD Operations',
                'Joins and Aggregation Functions',
                'Connecting PHP with MYSQL'
            ],
            imageUrl: 'https://skillicons.dev/icons?i=mysql'
        },
        {
            title: 'Laravel Framework',
            items: [
                'Introduction to Laravel',
                'Laravel MVC',
                'Laravel Routing and Controllers',
                'Laravel Sessions',
                'RESTful Web Services with Laravel',
                'Using AJAX with Laravel',
                'Middleware and Route Protection'
            ],
            imageUrl: 'https://skillicons.dev/icons?i=laravel'
        }
    ];
    return (
        <section className="curriculums" id="curriculums">
            <h2 className="sec-title">Content & Curriculums</h2>
            <div className="sec-content curriculums-content" id="curriculums-content">
                {curriculums.map((curriculum, index) => (
                    <Curriculum
                        key={index}
                        title={curriculum.title}
                        items={curriculum.items}
                        imageUrl={curriculum.imageUrl}
                    />
                ))}
            </div>
        </section>
    )
}

export default Curriculums