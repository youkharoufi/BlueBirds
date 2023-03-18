import http from '../Redux-Store/http-common';


const getAll = () => {
    return http.get("/birds");
}

const create = (data) => {
    return http.post("/birds", data);
}

const update = (data) => {
    return http.put('/birds', data);
}

const remove = (id) => {
    return http.delete(`/birds/${id}`);
} 


const BirdsService = {
    getAll,
    create,
    update,
    remove
}

export default BirdsService;