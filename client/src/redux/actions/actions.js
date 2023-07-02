import axios from 'axios';
import {GET_ALL_COUNTRIES, RESET_COUNTRIES, COUNTRY_DETAIL, RESET_DETAIL, SEARCH_COUNTRIES, 
    GET_ALL_ACTIVITIES, CREATE_ACTIVITY, ORDER_COUNTRIES_ID, ORDER_COUNTRIES_POPULATION, 
    FILTER_COUNTRIES_CONTINENT, FILTER_COUNTRIES_ACTIVITY, NEXT_PAGE, PREV_PAGE, FIRST_PAGE, 
    LAST_PAGE, RELOAD_PAGINATE} from "./types";
    
const endPoint = "http://localhost:3001";

export const getAllCountries = () => {
    return async (dispatch) => {
        try{
            const {data} = await axios(`${endPoint}/countries/`);
            if(data) return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data
            });
        }catch(error){window.alert(error.message)}
    };
};

export const resetCountries = () => {
    return {type: RESET_COUNTRIES};
};

export const countryDetail = (id) => {
    return async (dispatch) => {
        try{
            const {data} = await axios(`${endPoint}/countries/${id}`);
            
            return dispatch({
                type: COUNTRY_DETAIL,
                payload: data
            });

        }catch(error){window.alert(error.message)};
    };
};

export const resetDetail = () => {return {type: RESET_DETAIL}};

export const searchCountries = (name) => {
    return async (dispatch) => {
        try{
            const {data} = await axios(`${endPoint}/countries/name?name=${name}`);
            
            if(data) return dispatch({
                type: SEARCH_COUNTRIES,
                payload: data
            });
        }catch(error){window.alert(error.message)};
    };
};

export const getAllActivities = () => {
    try{
        return async (dispatch) => {
            const {data} = await axios(`${endPoint}/activities/`);

            if(data) return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: data
            });
        };
    }catch(error){window.alert(error.message)};
};

export const createActivity = (activity) => {
    return async (dispatch) => {
        try{
            const {data} = await axios.post(`${endPoint}/activities/`, activity);

            if(data) return dispatch({
                type: CREATE_ACTIVITY,
                payload: data
            });
        }catch(error){window.alert(error.message)};
    };
};

export const orderCountriesId = (order) => {
    return {
        type: ORDER_COUNTRIES_ID,
        payload: order
    };
};

export const orderCountriesPopulation = (order) => {
    return {
        type: ORDER_COUNTRIES_POPULATION,
        payload: order
    };
};

export const filterCountriesContinent = (filter) => {
    return {
        type: FILTER_COUNTRIES_CONTINENT,
        payload: filter
    };
};

export const filterCountriesActivity = (filter) => {
    return {
        type: FILTER_COUNTRIES_ACTIVITY,
        payload: filter
    };
};

export const firstPage = () => {
    return {type: FIRST_PAGE};
};

export const lastPage = () => {
    return {type: LAST_PAGE};
};

export const nextPage = () => {
    return {type: NEXT_PAGE};
};

export const prevPage = () => {
    return {type: PREV_PAGE};
};

export const reloadPaginate = () => {
    return {type: RELOAD_PAGINATE};
};