import {Link} from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage(){

    return (

        <div className={style.contenedor} >

            <h1 className={style.titulo}>COUNTRIES APP</h1>
            <img className={style.imagen} src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/03/mapa-paises-felices-infelices-2023-te-va-sorprender-2992494.jpg?tf=3840x" alt="world map" />
            <div >
                <Link className={style.boton} to="/home">
                    
                         INGRESAR
                    
                </Link>
                <Link to="https://github.com/Kazuryto84">
                <footer className={style.footer}> GitHub </footer>
                </Link >
            </div>
            
        </div>
        );
    }

