
import "./../styles/experience.css"
import { Fragment } from 'react';


function Experience(prop) {
    let experience = prop.data;
    return (
        <div className="Experience container">
            {experience.map((val, ix) => {
                if (ix == experience.length - 1) {
                    return (
                        <Fragment key={val.id}>
                            <hr />
                            <div className="pdrow">
                                <p>Title</p>
                                <input type="text" value={experience[ix].title} onChange={experience.handle_title_change} />
                            </div>
                            <div className="pdrow">
                                <p>Start</p>
                                <input type="date" value={experience[ix].date.from} onChange={experience.handle_date_from_change} />
                            </div>
                            <div className="pdrow">
                                <p>End</p>
                                <input type="date" value={experience[ix].date.to} onChange={experience.handle_date_to_change} />
                            </div>
                            <h3>Bullet Points (each new line represent point)</h3>
                            <textarea value={experience[ix].points} className="tarea" onChange={experience.handle_points_change} ></textarea>
                            <button onClick={experience.handle_experience_add}> add</button>
                        </Fragment>
                    )
                }
                else {
                    return (
                        <Fragment key={val.id}>
                            <div className="pdrow">
                                <h4>{val.title}</h4>
                                <h4>{val.date.from}</h4>
                                <h4>{val.date.to}</h4>
                                <button id="sbutton" onClick={() => { experience.handle_remove_ex(val.id) }}>remove</button>
                            </div>
                        </Fragment>
                    )
                }

            })}


        </div>)



}

export { Experience }