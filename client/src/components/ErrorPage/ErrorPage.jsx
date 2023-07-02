import style from './ErrorPage.module.css';

export default function ErrorPage(){
    return(
        <div className={style.contains} >
            <h1>Error 404</h1>
            <h4>The page you are trying to acces doesn't exist</h4>
        </div>
    );
}