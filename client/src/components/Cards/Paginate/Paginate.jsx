import {useDispatch, useSelector} from 'react-redux';
import {firstPage, lastPage, nextPage, prevPage} from '../../../redux/actions/actions';
import style from './Paginate.module.css';

export default function Paginate(){

    const dispatch= useDispatch();
    const {numPage, cantPages} = useSelector((state) => state);

    const next = () => dispatch(nextPage());
    const prev = () => dispatch(prevPage());
    const first = () => dispatch(firstPage());
    const last = () => dispatch(lastPage());

    return (
        <div className={style.contains} >

            {numPage > 1 ? 
                <div className={style.buttonDistance} >
                    <button className={style.button} onClick={first} >{`< First`}</button>
                </div> : 
                null}

            {numPage > 1 ? ( 
                <div className={style.buttonDistance}> 
                    <button className={style.button} onClick={prev}>{`< ${numPage - 1}`}</button>
                </div>) : null}

            <div className={style.number} >{numPage}</div>

            {numPage < cantPages ? <div className={style.buttonDistance}>
                <button className={style.button} onClick={next}>{`${numPage + 1} >`}</button>
                </div> : null}

            {numPage < cantPages ? 
                <div className={style.buttonDistance} >
                    <button className={style.button} onClick={last} >{`Last >`}</button>
                </div> : null}
        </div>
    );
};