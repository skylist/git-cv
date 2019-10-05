import React from 'react';
import "components/package-description/style.css"

const PackageDescription = ({ fullName, age, scripts, devDependecies }) => {
    const formatedAge = age.split('').join('.')
    const renderItem = (item, index, { length }) => {
        const key = Object.keys(item).toString()
        const value = item[key]
        return (
            <div key={`${index}`}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="key">"{key}"</span>: <span className="value">"{value}"</span>
                {index + 1 < length ? ',' : ''}
                <br />
            </div>
        )
    }

    return (
        <div className="package responsive">
            <span className="label responsive">
                Package description
            </span>
            &#123; <br />
            &nbsp;<span className="key">"name"</span> : <span className="value">"{fullName}"</span>, <br />
            &nbsp;<span className="key">"version"</span>: <span className="value">"{formatedAge}.+"</span>, <br />
            &nbsp;<span className="key">"scripts"</span>: &#123; <br />
            {scripts.map(renderItem)}
            &nbsp;&nbsp;&#125;, <br />
            &nbsp;<span className="key">"devDependencies"</span>: &#123; <br />
            {devDependecies.map(renderItem)}
            &nbsp;&nbsp;&#125;<br />
            &#125;
        </div>
    );
}

PackageDescription.defaultProps = {
    scripts: [
        { "start": "node alarm -at 8:00am" },
        { "dev": "node fulltime.js" }
    ],
    devDependecies: [
        { "coffe": "freshly ground" },
        { "soda": "cold" },
        { "hamburguer": "doubled cheeseburguer" },
        { "music": "all" }
    ]
}

export default PackageDescription