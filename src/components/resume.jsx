import "./../styles/resume.css"
import { Fragment } from "react";



function Resume(prop) {

    let PersonalInfo = prop.PersonalInfo;
    let Experience = prop.Experience;
    let Projects = prop.Projects;
    let Education = prop.Education;
    let Skills = prop.Skills;

    return (
        <div className="Resume">

            <div className="personalInfo">
                <h2 className="name">{PersonalInfo.name}</h2>
                <div className="rrow">
                    <h4>{PersonalInfo.phone}</h4>
                    <a href="mailto:moofk2002@gmail.com">{PersonalInfo.email}</a>
                    {PersonalInfo.social.map((v, ix) => {
                        if (ix != PersonalInfo.social.length - 1) {
                            return (
                                <a href={v.link} key={v.id}>{v.name}</a>
                            )
                        }
                    })}
                </div>
                {PersonalInfo.summary.trim() != "" && <>
                    <h3>Summary</h3>
                    <hr />
                    <p>{PersonalInfo.summary}</p>
                </>}
            </div>
            {Experience[0].title != "" && <> <h3>Experinces</h3> <hr /> </>}
            {Experience.map((v, ix) => {
                let data = (
                    <Fragment key={v.id}>
                        <div className="rrow">
                            <h3 >{v.title}</h3>
                            <h3 className="sl">{v.date.from}</h3>
                            <h3 >{v.date.to}</h3>
                        </div>
                        {v.points.split('\n').map((vv, ixx) => {
                            if (vv == "") return null;
                            return <p key={ixx}>{"•" + " "} {vv} </p>
                        }
                        )}
                    </Fragment>
                )
                return data;
            })}

            {Projects[0].title != "" && <> <h3>Projects</h3> <hr /> </>}
            {Projects.map((v, ix) => {
                let data = (
                    <Fragment key={v.id}>
                        <div className="rrow">
                            <h3 >{v.title}</h3>
                            <a href={v.link} className="sl">{v.link != "" && "preview"} </a>
                        </div>
                        <p>{v.des}</p>
                    </Fragment>
                )
                return data;
            })}

            {Education[0].college != "" && <> <h3>Education</h3> <hr /> </>}
            {Education.map((v, ix) => {
                let data = (
                    <Fragment key={v.id}>
                        <div className="rrow">
                            <h3 >{v.college}</h3>
                            <p className="sl">{v.start}</p>
                            <p>{v.end}</p>
                        </div>
                        <p>{v.degree}</p>
                    </Fragment>
                )
                return data;
            })}

            {Skills[0].title != "" && <> <h3>Skills</h3> <hr /> </>}

            {Skills.map((v, ix) => {
                let data = (
                    <Fragment key={v.id}>
                        <div className="rrow">
                            <h3>{v.title != "" ? ("• " + v.title) : ""}</h3>
                            <p>{v.list}</p>
                        </div>
                    </Fragment>
                )
                return data;
            })}

        </div>


    )
}


export { Resume }