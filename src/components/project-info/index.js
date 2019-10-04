import React from 'react';
import 'components/project-info/style.css'
import star from 'assets/icons/favicon.svg'

const ProjectInfo = ({ language, repoName, children, createdAt, repoLink, startCount = 0 }) => {
    const lang = language ? language.replace('#', 'sharp').replace(/\+/g, 'p').toLowerCase() : 'document'
    return (
        <div className="project-container">
            {children}
            <div className="header">
                <div className="repo-info">
                    <div className="repo-language">
                        <img
                            className="icon"
                            src={require(`assets/icons/${lang}.svg`)}
                            alt={repoName}
                        />
                        <span className="name">{repoName}.{lang}</span>
                    </div>
                    <span className="created-at">
                        Created at: {createdAt}
                    </span>
                </div>

                <div className="more-info">
                    <a href={repoLink} target="_blank" rel="noopener noreferrer" className="repo-link"></a>

                    <div className="stargazers-count">
                        <img className="icon" src={star} alt="" />
                        <span className="count">{startCount}</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProjectInfo