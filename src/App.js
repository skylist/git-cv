import React, { useEffect, useState } from 'react';
import 'App.css';

import avatar from 'assets/avatar.png'
import Chart from 'components/chart';
import GitReposService from 'services/repos'
import GitUserService from 'services/users'
import ProjectInfo from 'components/project-info';
import Contact from 'components/contact';

import DataProcess from 'utils/graph-process-data'

function App() {

	const [repos, setRepos] = useState([])
	const [user, setUser] = useState({})

	useEffect(() => {
		const findUser = async () => {
			const { data } = await GitUserService.findUser(process.env.REACT_APP_USERNAME)
			setUser(data)
			console.log(data)
		}
		findUser()
	}, [])

	useEffect(() => {
		const getRepoList = async () => {
			const { data } = await GitReposService.listRepos(process.env.REACT_APP_USERNAME)
			setRepos(data)

			//console.log(await DataProcess.graphData())
		}
		getRepoList()
	}, [])

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

	return (
		<div className="container">
			<aside className="side-bar">
				<div className="header">
					<div className="chart">
						<Chart />
					</div>
					{
						user &&
						<img
							src={user.avatar_url || avatar}
							alt={user.name}
							className="avatar" />
					}
				</div>
				<div className="info-list">
					{/* <span className="index">
						src > index.js
					</span> */}

					<Contact
						name
						label="SkyList"
						from="Pantoja/Matheus"
						ariaLabel="Hello, I’m Matheus. I’m a developer living in São Paulo, SP, Brasil. I am a fan of Code and music. I’m also interested in cats and video games."
						href=""
					/>
					<Contact
						label="LinkedIn"
						from="Linkedin.com"
						href="https://www.linkedin.com/in/matheus-pantoja/"
					/>
					<Contact
						label="About"
						from="About.me"
						href="https://about.me/matheuspantoja"
					/>
					<Contact
						label="Style"
						from="Instagram.com"
						href="https://instagram.com/matheuspantoja"
					/>
					<Contact
						label="Mail"
						from="Gmail.com"
						href="mailto:matheus.pantoja97@gmail.com"
					/>
				</div>
				<div className="bio">

				</div>
			</aside>
			<main className="content">
				{
					repos.length !== 0 &&
					repos.map(renderProject)
				}
			</main>
		</div>
	);
}

export default App;
