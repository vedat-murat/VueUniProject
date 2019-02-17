import axios from 'axios';
import constant from '../constants';

export default {
    getPeopleRequest(){
       return axios.get(constant.baseURL + "/people");
    },
    getPlanetsRequest(){
        return axios.get(constant.baseURL + "/planets");
    },
    getStarshipsRequest(){
        return axios.get(constant.baseURL + "/starships");
    }
};