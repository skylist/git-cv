import GitReposService from 'services/repos'
const user = process.env.REACT_APP_USERNAME

const getRepoList = async () => {
    const { data } = await GitReposService.listRepos(user)
    return data.map(repo => repo.name)
}

const concatReposAndLanguages = async () =>{
    let repos = {}
    const repoList = await getRepoList()
    console.log(repoList)

    repoList.forEach(async repo => {
        const { data } = await GitReposService.listLanguages(user, repo.name)
        const currentRepo = { repo: repo.name, ...data }
    });

    return {}
}

export default {
    graphData: concatReposAndLanguages
}

