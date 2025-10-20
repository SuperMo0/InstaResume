import "./../styles/dropdown.css";
import { useState } from "react";
import upArrow from './../assets/upArrow.svg';
import downArrow from './../assets/downArrow.svg';

function Dropdown({ events, data, title, Form }) {

    const [active, setactive] = useState(false);
    let handleArrowClick = function () { setactive(!active) }
    let head = (<div className="dropdown" tabIndex={1}>
        <h1>{title}</h1>
        {active && <img src={upArrow} alt="" onClick={handleArrowClick} />}
        {!active && <img src={downArrow} alt="" onClick={handleArrowClick} />}
    </div>)
    if (!active)
        return head;
    else {
        return (
            <>
                {head}
                <Form events={events} data={data} ></Form>
            </>
        )
    }
}
export { Dropdown };