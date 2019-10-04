import React from 'react';
import 'components/contact/style.css'

const Contact = ({ name, label, from, ariaLabel, href }) => {
    return (
        <span
            className={`import ${name ? 'tooltip' : ''}`}
            aria-label={ariaLabel}>
            <strong>import</strong> <a href={href}>{label}</a>
            <strong className="tab">from</strong> '{from}'
        </span>
    );
}
export default Contact
