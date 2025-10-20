import "./../styles/personalDetails.css"

function PersonalDetails({ events, data }) {
    let PersonalInfo = data;
    return (
        <div className="PersonalDetails container">
            <div className="pdrow">
                <p>Name </p>
                <input name="name" value={PersonalInfo.name} onChange={events.handle_name_change} type="text" placeholder="Full Name" />
            </div>
            <div className="pdrow">
                <p>Email </p>
                <input name="email" value={PersonalInfo.email} onChange={events.handle_email_change} type="email" placeholder="example@gmail.com" />
            </div>
            <div className="pdrow">
                <p>Phone</p>
                <input name="tel-local" value={PersonalInfo.phone} onChange={events.handle_phone_change} type="text" placeholder="Phone Number" />
            </div>
            <hr />
            <h3>add Social Links</h3>
            {PersonalInfo.social.map((element, index) => {
                if (index == PersonalInfo.social.length - 1) {
                    return (<div key={element.id} className="pdrow">
                        <input className="s_input" value={element.name} onChange={events.handle_social_name_change} type="text" placeholder="Social media Name" />
                        <input className="s_input" value={element.link} onChange={events.handle_social_link_change} type="text" placeholder="https://example.com" />
                        <button onClick={events.handle_social_add}>Add </button>
                    </div>)
                }
                else {
                    return (<div key={element.id} className="pdrow">
                        <p>{element.name}</p>
                        <button onClick={() => { events.handle_social_remove(element.id) }}>remove</button>
                    </div>)
                }
            })}
            <hr />
            <h3>Personal Summary</h3>
            {
                <textarea value={PersonalInfo.psummary} onChange={events.handle_summary_change} className="tarea"></textarea>
            }




        </div>




    )
}


export { PersonalDetails }