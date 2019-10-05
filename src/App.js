import React, { useEffect, useState } from 'react';
import 'App.css';

import avatar from 'assets/avatar.png'
import Chart from 'components/chart';
import GitReposService from 'services/repos'
import GitUserService from 'services/users'
import ProjectInfo from 'components/project-info';
import Contact from 'components/contact';
import PackageDescription from 'components/package-description'

function App() {

	// #region Variables
	const [repos, setRepos] = useState([])
	const [user, setUser] = useState({})
	// #endregion

	// #region Fetch data
	useEffect(() => {
		const findUser = async () => {
			let { data } = await GitUserService.findUser(process.env.REACT_APP_USERNAME)
			const { data: { info_contacts, skill_level } } = await GitReposService.getArchive(process.env.REACT_APP_USERNAME)

			data = {
				...data,
				name: data.name.split(' ').reverse().join('/'),
				info_contacts,
				skill_level
			}
			setUser(data)
		}
		findUser()
	}, [])

	useEffect(() => {
		const getRepoList = async () => {
			const { data } = await GitReposService.listRepos(process.env.REACT_APP_USERNAME)
			setRepos(data)
		}
		getRepoList()
	}, [])
	// #endregion

	// #region Render project
	const renderProject = ({ language, full_name, created_at, html_url, id, stargazers_count }) => {
		return (
			<ProjectInfo
				key={id}
				language={language}
				repoName={full_name}
				createdAt={created_at}
				repoLink={html_url}
				startCount={stargazers_count}
			/>
		)
	}
	// #endregion

	// #region Render Contanct
	const renderContact = ({ label, from, link }, index) => {
		return <Contact
			key={`${index}-${link}`}
			label={label}
			from={from}
			href={link}
		/>
	}
	// #endregion

	return (
		<div className="container responsive">
			{
				user ?
					<>
						<aside className="side-bar">
							<div className="header">
								<div className="chart">
									<Chart data={user.skill_level} />
								</div>
								{
									user &&
									<a href={user.html_url}>
										<img
											src={user.avatar_url || avatar}
											alt={user.name}
											className="avatar responsive" />
									</a>
								}
							</div>
							{
								user &&
								<div className="info-list">
									<Contact
										name
										label={user.login}
										from={user.name}
										ariaLabel={user.bio}
										href=""
									/>
									{
										user.info_contacts &&
										user.info_contacts.map(renderContact)
									}
								</div>
							}
							<div className="bio">
								<PackageDescription fullName="Matheus Pantoja Filgueira" age="22" />
							</div>
						</aside>
						<main className="content">
							{
								repos.length !== 0
									? repos.map(renderProject)
									: <span className="loader green" data-color='#ccc'></span>
							}
						</main>
					</>
					: <span className="loader"></span>
			}
		</div>
	);
}

export default App;
