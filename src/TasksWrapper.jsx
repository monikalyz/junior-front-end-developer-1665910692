import BusinessContext from "./BusinessContext";
import YourTasks from "./YourTasks";
import mark from "./img/mark.svg";

const TasksWrapper = () => {

    const usertasks = [
        {
            id: 1,
            type: "text",
            title: "Application Setup",
            status: "complited",
            arrayOfBusinessContexts: []
        },
        {   id: 2,
            type: "text",
            status: "complited",
            title: "Static Book List",
            arrayOfBusinessContexts: []
        },
        {   id: 3,
            type: "text",
            status: "complited",
            title: "Administration Panel",
            arrayOfBusinessContexts: []
        },
        {   id: 4,
            type: "text",
            status: "active",
            title: "Connect Admin with Frontend",
            arrayOfBusinessContexts: []
        },
        {   id: 5,
            type: "text",
            status: "blocked",
            title: "Book Review Feature",
            arrayOfBusinessContexts: []
        }      
    ]

    return ( 
        <div className="wrapper">
            <div className="your-tasks">
                <h2>YOUR TASKS</h2>
                <div className="all-tasks">
                {usertasks.map((task) => (
                    <YourTasks 
                        key={task.id}
                        {...task}
                    />
                ))}
                </div>
            </div>
            <div className="business-context">
                <div className="context-header">
                    <div className="title-part">
                        <img src={mark} alt="mark-icon"/>
                        <h2>BUSINESS CONTEXT</h2>
                    </div>
                </div>
                    <BusinessContext />
            </div>
        </div>
     );
}
 
export default TasksWrapper;