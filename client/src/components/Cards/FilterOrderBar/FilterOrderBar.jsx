import {useDispatch, useSelector} from "react-redux";
import {orderCountriesId, orderCountriesPopulation, 
    filterCountriesContinent, filterCountriesActivity, resetCountries, 
    reloadPaginate} from "../../../redux/actions/actions";
import style from './FilterOrderBar.module.css';
import { useState } from "react";

export default function FilterOrderBar(){

    const dispatch = useDispatch();
    const [filterContinent, setFilterContinent] = useState("filter");
    const {allContinents, allActivities} = useSelector(state => state);
    

    const handleChange = (event) =>{

        if(event.target.name === "id") 
            dispatch(orderCountriesId(event.target.value));

        else if(event.target.name === "population") 
            dispatch(orderCountriesPopulation(event.target.value));

        else if (event.target.name === "continent")
        {
           
            dispatch(filterCountriesContinent(event.target.value));
            setFilterContinent(event.target.value);
        }

        else if(event.target.name === "activity") 
            dispatch(filterCountriesActivity(event.target.value));

        return dispatch(reloadPaginate());
    };

    const resetFilters = () => {

        dispatch(resetCountries());

        setFilterContinent("filter");

        return dispatch(reloadPaginate());
    };

    return (
        <div className={style.contains} >

            <div className={style.options} >
                <label >Sort Alphabetic:</label>
                <select name="id" onChange={handleChange} >
                    <option disabled  value="sort" >Sort by:</option>
                    <option value="A">Ascendent</option>
                    <option value="D">Descendent</option>
                </select>

            </div>

            <div className={style.options} >
                <label >Sort Population:</label>
                <select name="population" onChange={handleChange} >
                    <option disabled  value="sort" >Sort by:</option>
                    <option value="A">Ascendent</option>
                    <option value="D">Descendent</option>
                </select>
            </div>
            
            <div className={style.options} >
                <label >Filter Continent:</label>
                <select name="continent"  onChange={handleChange} >
                    <option defaultValue={filterContinent}>Select Continent</option> 
                    {allContinents.map((continent, index) => 
                        <option key={index} value={continent} >{continent}</option>)}
                </select>

                    </div>
                    
            <div className={style.options} >
                <label>Filter Activity:</label>
                <select name="activity"  onChange={handleChange} >
                    <option defaultValue={filterContinent}>Select Continent</option>
                    { allActivities.map((activity,index) => 
                        <option key={index} value={activity.name} >{activity.name}</option>)}
                </select>
                    </div>

            <button className={style.button} onClick={resetFilters}>All</button>

        </div>
    );
};