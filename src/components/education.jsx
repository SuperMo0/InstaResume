
import { Fragment } from "react";

import "./../styles/education.css"

function Education(prop) {
    let data = prop.data;

    return (
        <div className="education container">
            {data.map((v, ix) => {
                if (ix == data.length - 1) {
                    return <Fragment key={v.id}>
                        <hr />
                        <div className="pdrow">
                            <p>College</p>
                            <input value={data[ix].college} onChange={data.handle_college_change} type="text" />
                        </div>
                        <div className="pdrow">
                            <p>Degree</p>
                            <input value={data[ix].degree} onChange={data.handle_degree_change} type="text" />
                        </div>
                        <div className="pdrow">
                            <p>Start</p>
                            <input value={data[ix].start} onChange={data.handle_start_change} type="date" />
                        </div>
                        <div className="pdrow">
                            <p>End</p>
                            <input value={data[ix].end} onChange={data.handle_end_change} type="Date" />
                        </div>
                        <button onClick={data.handle_add_edu}> Add</button>
                    </Fragment>
                }
                else {
                    return (
                        <Fragment key={v.id}>
                            <div className="rrow">
                                <p>{v.college}</p>
                                <button onClick={() => { data.handle_remove_edu(v.id) }}>remove</button>
                            </div>
                        </Fragment>

                    )



                }


            })}

        </div>




    )



}


export { Education }