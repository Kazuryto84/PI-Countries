import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { countryDetail, resetDetail } from '../../redux/actions/actions';
import style from './DetailPage.module.css';

export default function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const volver = () => {
    dispatch(resetDetail());
    navigate('/home');
  }

  useEffect(() => {
    dispatch(countryDetail(id));
  }, []);

  const { countryDetails } = useSelector(state => state);
  const { activities, flag } = countryDetails;

  return (
    <div className={style.container}>
      <div className={style.background}>
        {flag && (
          <div className={style.flagContainer}>
            <img className={style.flag} src={flag} alt="Country Flag" />
          </div>
        )}
        <h2>{countryDetails.name}</h2>
        <h2>Continent: {countryDetails.continent}</h2>
        <h2>Capital: {countryDetails.capital}</h2>
        <h2>Sub Region: {countryDetails.sub_region}</h2>
        <h2>Area size: {countryDetails.area}</h2>
        <h2>Population: {countryDetails.population}</h2>
        <h2>Activities: {Array.isArray(activities) && activities.length !== 0 ?
          activities.map((activity, index) =>
            <div key={index} >
              <h3>Name: {activity.name}</h3>
              <h3>Difficulty: {activity.difficulty}</h3>
              <h3>Duration: {activity.duration}</h3>
              <h3>Season: {activity.season}</h3>
            </div>
          ) : "There are no activities"}</h2>
      </div>
      <button onClick={volver}>Home</button>
    </div>
  );
}