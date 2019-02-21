import axios from 'axios';
import constants from '../constants';

export default {
    getPeople(){
       return axios.get(constants.baseURL + "/people/");
    },
    getPeopleByName(searchValue){
        return axios.get(constants.baseURL + "/people?search=" + searchValue);
     },
    getPlanets(){
        return axios.get(constants.baseURL + "/planets");
    },
    getPlanetsByName(searchValue){
        return axios.get(constants.baseURL + "/planets?search=" + searchValue);
     },
    getStarships(){
        return axios.get(constants.baseURL + "/starships");
    },
    getStarshipsByName(searchValue){
        return axios.get(constants.baseURL + "/starships?search=" + searchValue);
     },
};