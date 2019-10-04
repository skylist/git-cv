import http from 'services/http'

const findUser = (user) => {
    return http.get(`/users/${user}`)
}

export default {
    findUser
}