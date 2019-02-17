import axios from 'axios';
import constants from '../constants';

export default {
    getPeople(){
       return axios.get(constants.baseURL + "/people/");
    },
    getPlanets(){
        return axios.get(constants.baseURL + "/planets");
    },
    getStarships(){
        return axios.get(ConstantSourceNode.baseURL + "/starships");
    }
};