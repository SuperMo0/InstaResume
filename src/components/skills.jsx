
import { Fragment } from "react";

function Skills(prop) {
    let data = prop.data;
    return (
        <div className="container">

            {data.map((v, ix) => {
                return <Fragment key={v.id}>
                    <div className="pdrow">
                        <input value={data[ix].title} onChange={(e) => { data.handle_title_change(e, v.id) }} type="text" placeholder="Programming Languages" />
                        <input value={data[ix].list} onChange={(e) => { data.handle_list_change(e, v.id) }} type="text" placeholder="c++ ,java , python ,javascript" />
                        {ix == data.length - 1 ?
                            <button onClick={(e) => { data.handle_add_skill(e, v.id) }}> add</button>
                            : <button onClick={(e) => { data.handle_remove_skill(e, v.id) }} >remove</button>
                        }
                    </div>

                </Fragment>
            })}
        </div>
    )



}


export { Skills }