import http from 'services/http'
import axios from 'axios'

const listRepos = (user) => {
    return http.get(`/users/${user}/repos`)
}

const listLanguages = (user, repo) => {
    return http.get(`/repos/${user}/${repo}/languages`)
}

const getArchive = (user) => {
    return axios.get(`https://raw.githubusercontent.com/${user}/${user}-data-cv/master/data.json`)
}

export default {
    listRepos,
    listLanguages,
    getArchive
}