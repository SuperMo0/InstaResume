
import { InputForm } from "./InputForm"
import { Resume } from "./resume";
import { useState } from "react";
function App() {
    const [PersonalInfo, setPersonalInfo] = useState({ name: "", email: "", phone: "", social: [{ name: "Github", link: "", id: crypto.randomUUID() }], summary: "" });
    const [Experience, setExperience] = useState([{ title: "", date: { from: "", to: "" }, points: "", id: crypto.randomUUID() }]);
    const [Projects, setProjects] = useState([{ link: "", title: "", des: "", id: crypto.randomUUID() }]);
    const [Education, setEducation] = useState([{ college: "", degree: "", start: "", end: "", id: crypto.randomUUID() }]);
    const [Skills, setSkills] = useState([{ title: "", list: "", id: crypto.randomUUID() }]);


    let personalInfoEvents = {};
    personalInfoEvents.handle_name_change = function (e) {
        setPersonalInfo({ ...PersonalInfo, name: e.target.value });
    }
    personalInfoEvents.handle_email_change = function (e) {
        setPersonalInfo({ ...PersonalInfo, email: e.target.value });
    }
    personalInfoEvents.handle_phone_change = function (e) {
        setPersonalInfo({ ...PersonalInfo, phone: e.target.value });
    }
    personalInfoEvents.handle_social_name_change = function (e) {

        let new_social = Array.from(PersonalInfo.social);
        new_social[new_social.length - 1].name = e.target.value;
        setPersonalInfo({ ...PersonalInfo, social: new_social });
    }
    personalInfoEvents.handle_social_link_change = function (e) {
        let new_social = Array.from(PersonalInfo.social);
        new_social[new_social.length - 1].link = e.target.value;
        setPersonalInfo({ ...PersonalInfo, social: new_social });
    }

    personalInfoEvents.handle_social_add = function () {
        setPersonalInfo({ ...PersonalInfo, social: [...PersonalInfo.social, { name: "", link: "", id: crypto.randomUUID() }] });
    }

    personalInfoEvents.handle_social_remove = function (id) {
        let new_social = Array.from(PersonalInfo.social);
        new_social = new_social.filter(v => (v.id != id));
        setPersonalInfo({ ...PersonalInfo, social: new_social });
    }
    personalInfoEvents.handle_summary_change = function (e) {
        setPersonalInfo({ ...PersonalInfo, summary: e.target.value });
    }
    Experience.handle_date_from_change = function (e) {
        let new_ex = [...Experience];
        new_ex[new_ex.length - 1].date.from = e.target.value;
        setExperience(new_ex);
    }

    Experience.handle_date_to_change = function (e) {
        let new_ex = [...Experience];
        new_ex[new_ex.length - 1].date.to = e.target.value;
        setExperience(new_ex);
    }
    Experience.handle_title_change = function (e) {
        let new_ex = [...Experience];
        new_ex[new_ex.length - 1].title = e.target.value;
        setExperience(new_ex);
    }

    Experience.handle_points_change = function (e) {
        let new_ex = [...Experience];
        new_ex[new_ex.length - 1].points = e.target.value;
        setExperience(new_ex);
    }

    Experience.handle_experience_add = function () {
        let ix = Experience.length + 1;
        setExperience([...Experience, { title: "", date: { from: "", to: "" }, points: "", id: crypto.randomUUID() }]);
    }
    Experience.handle_remove_ex = function (id) {
        let new_ex = Experience.filter((v, ix) => v.id != id);
        setExperience(new_ex);
    }

    Projects.handle_title_change = function (e) {
        let new_projects = [...Projects];
        new_projects[Projects.length - 1].title = e.target.value;
        setProjects(new_projects);
    }
    Projects.handle_des_change = function (e) {
        let new_projects = [...Projects];
        new_projects[Projects.length - 1].des = e.target.value;
        setProjects(new_projects);
    }

    Projects.handle_project_add = function (e) {
        let new_projects = [...Projects, { link: "", title: "", des: "", id: crypto.randomUUID() }];
        setProjects(new_projects);
    }

    Projects.handle_remove_project = function (id) {
        let new_projects = Projects.filter(v => v.id != id);
        setProjects(new_projects);
    }

    Projects.handle_link_change = function (e) {
        let new_projects = [...Projects];
        new_projects[Projects.length - 1].link = e.target.value;
        setProjects(new_projects);
    }

    Education.handle_college_change = function (e) {
        let new_education = [...Education];
        new_education[Education.length - 1].college = e.target.value;
        setEducation(new_education);
    }

    Education.handle_degree_change = function (e) {
        let new_education = [...Education];
        new_education[Education.length - 1].degree = e.target.value;
        setEducation(new_education);
    }

    Education.handle_start_change = function (e) {
        let new_education = [...Education];
        new_education[Education.length - 1].start = e.target.value;
        setEducation(new_education);
    }

    Education.handle_end_change = function (e) {
        let new_education = [...Education];
        new_education[Education.length - 1].end = e.target.value;
        setEducation(new_education);
    }

    Education.handle_add_edu = function (e) {
        let new_education = [...Education, { college: "", degree: "", start: "", end: "", id: crypto.randomUUID() }];
        setEducation(new_education);
    }

    Education.handle_remove_edu = function (id) {
        let new_education = Education.filter(v => v.id != id);
        setEducation(new_education);
    }

    Skills.handle_title_change = function (e, id) {

        let new_skills = Skills.map(v => {
            if (v.id != id) return v;
            else {
                v.title = e.target.value;
                return v;
            }
        })
        setSkills(new_skills);
    }

    Skills.handle_list_change = function (e, id) {
        let new_skills = Skills.map(v => {
            if (v.id != id) return v;
            else {
                v.list = e.target.value;
                return v;
            }
        })

        setSkills(new_skills);
    }

    Skills.handle_add_skill = function (e, id) {
        let new_skills = [...Skills, { title: "", list: "", id: crypto.randomUUID() }];
        setSkills(new_skills);
    }

    Skills.handle_remove_skill = function (e, id) {
        let new_skills = Skills.filter(v => v.id != id);
        setSkills(new_skills);
    }

    return (
        <>
            <InputForm Pevents={personalInfoEvents} PersonalInfo={PersonalInfo} Experience={Experience} Projects={Projects} Education={Education} Skills={Skills} > </InputForm>
            <Resume PersonalInfo={PersonalInfo} Experience={Experience} Projects={Projects} Education={Education} Skills={Skills}></Resume>
        </>
    )
}

export { App };