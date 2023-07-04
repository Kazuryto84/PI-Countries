import {Link} from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage(){

    return (

        <div className={style.contenedor} >

            <h1 className={style.titulo}>Bienvenidos a la APP Countries</h1>
            <img className={style.imagen} src="https://res.cloudinary.com/dxgfa8mob/image/upload/v1687905148/PI%20Countries/thumb-1920-400645_csi3wl.jpg" alt="world map" />
            <div >
                <Link className={style.boton} to="/home">
                    
                         Home Page
                    
                </Link>
                <Link to="https://github.com/Kazuryto84">
                <footer className={style.footer}> GitHub </footer>
                </Link >
            </div>
            
        </div>
    );
}

