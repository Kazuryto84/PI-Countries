import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {createActivity} from "../../redux/actions/actions";
import validation from "../../validation";
import style from './FormPage.module.css';
import {getAllCountries} from '../../redux/actions/actions';

export default function FormPage(){

    const [selectState, setSelectState] = useState("")
    const dispatch = useDispatch();
    const {allCountries} = useSelector(state => state);
    const [error, setError] = useState([]);
    const [activity, setActivity] = useState({
        name: "",
        difficulty: 0,
        duration: 0,
        season: "",
        countryID: []
    });



    const handleChange = (event) => {
        setError(validation({
            ...activity, 
            [event.target.name]: event.target.value
        }));
        setSelectState(event.target.value)
        setActivity({
            ...activity, 
            [event.target.name]: event.target.value
        });
    };

    const handleCountries = (event) => {

        setError(validation({
            ...activity, 
            [event.target.name]: event.target.value
        }));
       
        setActivity({
            ...activity,
            countryID: [...activity.countryID, event.target.value]
            });
    };

    const closeCountry = (event) => {
        setActivity({
            ...activity,
            countryID: activity.countryID.filter(country => country !== event.target.value)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSelectState("")
        if(Object.values(error).length === 0){
            dispatch(createActivity(activity));
            setActivity({
                name: "", 
                difficulty: 0, 
                duration: 0, 
                season: "", 
                countryID: ""
            });
            setError({});
        }else window.alert("Please complete the formularity to submit an Activity");
    };

    useEffect(() => {
        dispatch(getAllCountries());
    }, []);

    return (
        <div className={style.contains} >
            
            <form onSubmit={handleSubmit} >

                <div className={style.form} >
                    
                    <h2>Create an Activity</h2>

                    <label >Name:</label>
                    <input name="name"  type="text" onChange={handleChange} />
                    {error.name ? <div className={style.error} >{error.name}</div>: null}

                    <label >Difficulty:</label>
                    <select name="difficulty" defaultValue={selectState}onChange={handleChange} >
                        <option value={selectState} >Select difficulty</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    {error.difficulty ? <div className={style.error} >{error.difficulty}</div> : null}

                    <label >Duration (Hours)</label>
                    <input name="duration" value={activity.duration} type="number" onChange={handleChange} />
                    {error.duration ? <div className={style.error} >{error.duration}</div> : null}

                    <label >Season</label>
                    <select name="season" defaultValue={""} onChange={handleChange} >
                        <option value="" >Select season</option>
                        <option value="Verano">Summer</option>
                        <option value="Otoño">Autumn</option>
                        <option value="Invierno">Winter</option>
                        <option value="Primavera">Spring</option>
                    </select>
                    {error.season ? <div className={style.error} >{error.season}</div> : null}

                    <label >Country/Countries</label>
                    <select name="countryID"  onChange={handleCountries} >
                        <option value="" >Select Country</option>
                        {allCountries.map((country, index) => 
                            <option key={index} value={country.id}>{country.name}</option>)}
                    </select>
                    {error.countryID ? <div className={style.error} >{error.countryID}</div> : null}
                    
                    <div className={style.tag} >
                {activity.countryID && allCountries.map(country => 
                    activity.countryID.includes(country.id) ?
                        <div key={country.id} >
                            <button className={style.button} value={country.id} onClick={closeCountry}>X</button>
                            {country.name}
                        </div> : null)}
                    </div>
                
                    {activity.name !== "" && Object.values(error).length === 0 ? 
                        <button className={style.button} type="submit">Submit</button>
                        : null}

                </div>
            </form>
        </div>
    );
};