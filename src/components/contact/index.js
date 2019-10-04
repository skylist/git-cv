import React from 'react';
import 'components/contact/style.css'

const Contact = ({ name, label, from, ariaLabel, href }) => {
    return (
        <span
            className={`import import-responsive ${name ? 'tooltip responsive' : ''}`}
            aria-label={ariaLabel}>
            <strong className="responsive">import</strong> {href ? <a href={href}>{label}</a> : label }
            <strong className="tab responsive">from</strong> '{from}'
        </span>
    );
}
export default Contact
