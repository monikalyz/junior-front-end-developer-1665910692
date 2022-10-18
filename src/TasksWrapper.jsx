import BusinessContext from "./BusinessContext";
import YourTasks from "./YourTasks";
import mark from "./img/mark.svg";

const TasksWrapper = () => {

    const now = new Date();
    const day = now.getDate()
    const month = now.toLocaleDateString('en',{
        month: 'short',
        
    })

    const usertasks = [
        {
            id: 1,
            type: "text",
            title: "Application Setup",
            status: "complited",
            arrayOfBusinessContexts: [ 
                {
                    id: 1,
                    title: "Lorem ipsum dolor sit amet.", 
                    content: "Praesent elementum facilisis leo vel fringilla est. Eget nunc scelerisque viverra mauris. Et malesuada fames ac turpis egestas integer. Non sodales neque sodales ut etiam sit amet nisl. Donec pretium vulputate sapien nec sagittis. Ac turpis egestas maecenas pharetra convallis posuere morbi.", 
                    author: "Salma Hayek", 
                    created_at:`${month} ${day}`, 
                    status: "new"
                }, 
                {
                    id: 2, 
                    title: "Nisi vitae suscipit.", 
                    content: "Eget mauris pharetra et ultrices neque ornare aenean. Est velit egestas dui id ornare arcu odio ut sem. Volutpat ac tincidunt vitae semper quis lectus nulla at. Dignissim sodales ut eu sem. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Amet purus gravida quis blandit turpis. ", 
                    author: "Teresa Zimmer", 
                    created_at:`${month} ${day}`, 
                    status: "active"
                }, 
                {
                    id: 3, 
                    title: "Sed libero enim sed faucibus.", 
                    content: "Diam volutpat commodo sed egestas egestas fringilla phasellus. Elementum sagittis vitae et leo. Tortor posuere ac ut consequat semper viverra nam libero. A arcu cursus vitae congue mauris rhoncus aenean. Est ultricies integer quis auctor. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est.", 
                    author: "Sue Doe", 
                    created_at:`${month} ${day}`, 
                    status: "inactive"
                }
            ]
        },
        {   id: 2,
            type: "text",
            status: "complited",
            title: "Static Book List",
            arrayOfBusinessContexts: [
                {
                    id: 1, 
                    title: "Lorem ipsum dolor sit amet.", 
                    content: "Praesent elementum facilisis leo vel fringilla est. Eget nunc scelerisque viverra mauris. Et malesuada fames ac turpis egestas integer. Non sodales neque sodales ut etiam sit amet nisl. Donec pretium vulputate sapien nec sagittis. Ac turpis egestas maecenas pharetra convallis posuere morbi.", 
                    author: "Salma Hayek", 
                    created_at:`${month} ${day}`, 
                    status: "new"
                }, 
                {
                    id: 2, 
                    title: "Nisi vitae suscipit.", 
                    content: "Eget mauris pharetra et ultrices neque ornare aenean. Est velit egestas dui id ornare arcu odio ut sem. Volutpat ac tincidunt vitae semper quis lectus nulla at. Dignissim sodales ut eu sem. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Amet purus gravida quis blandit turpis. ", 
                    author: "Teresa Zimmer", 
                    created_at:`${month} ${day}`, status: "active"
                }, 
                {
                    id: 3, 
                    title: "Sed libero enim sed faucibus.", 
                    content: "Diam volutpat commodo sed egestas egestas fringilla phasellus. Elementum sagittis vitae et leo. Tortor posuere ac ut consequat semper viverra nam libero. A arcu cursus vitae congue mauris rhoncus aenean. Est ultricies integer quis auctor. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est.", 
                    author: "Sue Doe", 
                    created_at:`${month} ${day}`, 
                    status: "inactive"
                }
            ]
        },
        {   id: 3,
            type: "text",
            status: "complited",
            title: "Administration Panel",
            arrayOfBusinessContexts: [
                {
                    id: 1, 
                    title: "Lorem ipsum dolor sit amet.", 
                    content: "Praesent elementum facilisis leo vel fringilla est. Eget nunc scelerisque viverra mauris. Et malesuada fames ac turpis egestas integer. Non sodales neque sodales ut etiam sit amet nisl. Donec pretium vulputate sapien nec sagittis. Ac turpis egestas maecenas pharetra convallis posuere morbi.", 
                    author: "Salma Hayek", 
                    created_at:`${month} ${day}`, 
                    status: "new"
                }, 
                {   
                    id: 2, 
                    title: "Nisi vitae suscipit.", 
                    content: "Eget mauris pharetra et ultrices neque ornare aenean. Est velit egestas dui id ornare arcu odio ut sem. Volutpat ac tincidunt vitae semper quis lectus nulla at. Dignissim sodales ut eu sem. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Amet purus gravida quis blandit turpis. ", 
                    author: "Teresa Zimmer", 
                    created_at:`${month} ${day}`, status: "active"
                }, 
                {
                    id: 3, 
                    title: "Sed libero enim sed faucibus.", 
                    content: "Diam volutpat commodo sed egestas egestas fringilla phasellus. Elementum sagittis vitae et leo. Tortor posuere ac ut consequat semper viverra nam libero. A arcu cursus vitae congue mauris rhoncus aenean. Est ultricies integer quis auctor. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est.", 
                    author: "Sue Doe", 
                    created_at:`${month} ${day}`, 
                    status: "inactive"
                }
            ]
        },
        {   id: 4,
            type: "text",
            status: "active",
            title: "Connect Admin with Frontend",
            arrayOfBusinessContexts: [ 
                {
                    id: 1, 
                    title: "Lorem ipsum dolor sit amet.", 
                    content: "Praesent elementum facilisis leo vel fringilla est. Eget nunc scelerisque viverra mauris. Et malesuada fames ac turpis egestas integer. Non sodales neque sodales ut etiam sit amet nisl. Donec pretium vulputate sapien nec sagittis. Ac turpis egestas maecenas pharetra convallis posuere morbi.", 
                    author: "Salma Hayek", 
                    created_at:`${month} ${day}`, 
                    status: "new"
                }, 
                {
                    id: 2, 
                    title: "Nisi vitae suscipit.", 
                    content: "Eget mauris pharetra et ultrices neque ornare aenean. Est velit egestas dui id ornare arcu odio ut sem. Volutpat ac tincidunt vitae semper quis lectus nulla at. Dignissim sodales ut eu sem. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Amet purus gravida quis blandit turpis. ", 
                    author: "Teresa Zimmer", 
                    created_at:`${month} ${day}`, 
                    status: "active"
                }, 
                {
                    id: 3, 
                    title: "Sed libero enim sed faucibus.", 
                    content: "Diam volutpat commodo sed egestas egestas fringilla phasellus. Elementum sagittis vitae et leo. Tortor posuere ac ut consequat semper viverra nam libero. A arcu cursus vitae congue mauris rhoncus aenean. Est ultricies integer quis auctor. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est.", 
                    author: "Sue Doe", 
                    created_at:`${month} ${day}`, 
                    status: "inactive"
                }
            ]
        },
        {   id: 5,
            type: "text",
            status: "blocked",
            title: "Book Review Feature",
            arrayOfBusinessContexts: [
                {
                    id: 1, 
                    title: "Lorem ipsum dolor sit amet.", 
                    content: "Praesent elementum facilisis leo vel fringilla est. Eget nunc scelerisque viverra mauris. Et malesuada fames ac turpis egestas integer. Non sodales neque sodales ut etiam sit amet nisl. Donec pretium vulputate sapien nec sagittis. Ac turpis egestas maecenas pharetra convallis posuere morbi.", 
                    author: "Salma Hayek", 
                    created_at:`${month} ${day}`, 
                    status: "new"
                }, 
                {
                    id: 2, 
                    title: "Nisi vitae suscipit.", 
                    content: "Eget mauris pharetra et ultrices neque ornare aenean. Est velit egestas dui id ornare arcu odio ut sem. Volutpat ac tincidunt vitae semper quis lectus nulla at. Dignissim sodales ut eu sem. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Amet purus gravida quis blandit turpis. ", 
                    author: "Teresa Zimmer", 
                    created_at:`${month} ${day}`, 
                    status: "active"
                }, 
                {
                    id: 3, 
                    title: "Sed libero enim sed faucibus.", 
                    content: "Diam volutpat commodo sed egestas egestas fringilla phasellus. Elementum sagittis vitae et leo. Tortor posuere ac ut consequat semper viverra nam libero. A arcu cursus vitae congue mauris rhoncus aenean. Est ultricies integer quis auctor. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est.", 
                    author: "Sue Doe", 
                    created_at:`${month} ${day}`, 
                    status: "inactive"
                }
            ]
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
                    {usertasks.map((task) => (
                    <BusinessContext 
                        key={task.id}
                        {...task}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default TasksWrapper;