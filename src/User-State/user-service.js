

import http from '../Redux-Store/http-common';


const register = (data) => {
    return http.post("/account/register", data);
}

const login = (data) => {
    return http.post("/account/login", data);
}


const UserService = {
    login,
    register
}

export default UserService;
