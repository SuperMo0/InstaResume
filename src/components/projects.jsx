
import "./../styles/projects.css"
import { Fragment } from 'react';

function Projects(prop) {
    let projects = prop.data;
    return (
        <div className="projects container">
            {projects.map((val, ix) => {
                if (ix == projects.length - 1) {
                    return (
                        <Fragment key={val.id}>
                            <hr />
                            <div className="pdrow">
                                <p>Title</p>
                                <input type="text" value={projects[ix].title} onChange={projects.handle_title_change} />
                            </div>
                            <div className="pdrow">
                                <p>Link</p>
                                <input type="text" value={projects[ix].link} onChange={projects.handle_link_change} />
                            </div>
                            <h3>Description</h3>
                            <textarea value={projects[ix].points} className="tarea" onChange={projects.handle_des_change} ></textarea>
                            <button onClick={projects.handle_project_add}> add</button>
                        </Fragment>
                    )
                }
                else {
                    return (
                        <Fragment key={val.id}>
                            <div className="pdrow">
                                <h4>{val.title}</h4>
                                <button id="sbutton" onClick={() => { projects.handle_remove_project(val.id) }}>remove</button>
                            </div>
                        </Fragment>
                    )
                }

            })}


        </div>)



}

export { Projects }