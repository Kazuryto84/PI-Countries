import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Navigate.module.css";

export default function NavigateBar(){
    return (
        <div className={style.contains} >
            <div >
                <Link className={style.Link} to="/home">
                    <div>
                      <button className={style.botonhome}>Home</button>  
                    </div>
                </Link>
            </div>

            <div className={style.Search} > 
                <SearchBar />
            </div>

            <div >
                <Link className={style.Link} to="/activity">
                    <div>
                   <button className={style.botoncreate}>Create activity</button> 
                    </div>
                </Link>
            </div>
        </div>
    );
};