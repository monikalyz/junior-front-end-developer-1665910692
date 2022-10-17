import arrow from "./img/arrow.svg";
import check from "./img/check.svg";
import lock from "./img/lock.svg";


const YourTasks = (props) => {

    const { title, status } = props;

    return ( 
        <>
                <div className="task-title">
                    {status === "complited" ? <img src={check} alt="arrow-icon"/> : null || status === "active" ? <img src={arrow} alt="arrow-icon"/> : null || status === "blocked" ?  <img src={lock} alt="arrow-icon"/> : null}
                
                    <h3>
                        {title}
                    </h3>
                </div>
        </>
     );
}
 
export default YourTasks;