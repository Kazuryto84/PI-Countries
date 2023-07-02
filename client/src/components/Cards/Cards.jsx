import {useSelector} from "react-redux";
import Paginate from './Paginate/Paginate';
import Card from "./Card/Card";
import style from './Cards.module.css';

export default function Cards(){

    const {showCountries, numPage} = useSelector(state => state);
    let from = (numPage - 1) * 10;
    let to = numPage * 10;
    let viewCountries = showCountries.slice(from, to);

    return (
        <div className={style.contains} >

            <div className={style.cards}>
            {
                    viewCountries && viewCountries.map(country => <Card 
                    key={country.id}
                    id={country.id}
                    flag={country.flag}
                    name={country.name}
                    continent={country.continent}
                />)
                }
            </div>

            <div className={style.paginate} >
                <Paginate />
            </div>

        </div>
    );
};