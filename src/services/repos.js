import http from 'services/http'

const listRepos = (user) => {
    return http.get(`/users/${user}/repos`)
}

const listLanguages = (user, repo) => {
    return http.get(`/repos/${user}/${repo}/languages`)
}

export default {
    listRepos,
    listLanguages
}