import "./../styles/InputForm.css"
import { Dropdown } from "./dropdown"
import { PersonalDetails } from "./personalDetails"
import { Experience } from "./Experince"
import { Projects } from "./projects"
import { Education } from "./education"
import { Skills } from "./skills"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"

function InputForm(prop) {

    let handle_download = function () {

        let print = document.querySelector(".Resume");
        let clone = print.cloneNode(true);
        clone.style["width"] = "800px";
        clone.style["min-height"] = "900px";
        document.body.appendChild(clone);
        html2canvas(clone, {
            useCORS: true,
            scale: 2,
        }).then((canvas) => {
            let image = canvas.toDataURL("Image/png");
            console.log(canvas.height);

            let doc = new jsPDF({
                orientation: "p",
                unit: "px",
                hotfixes: ["px_scaling"],
                format: [canvas.width / 2 + 20, canvas.height / 2 + 20],
            });
            doc.addImage(image, 10, 10, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 20);
            doc.save("ok.pdf");
        }
        )

        clone.remove();

    }

    return (
        <div className="InputForm">
            <Dropdown title="Personal Info" data={prop.PersonalInfo} events={prop.Pevents} Form={PersonalDetails}></Dropdown>
            <Dropdown title="Eexperience" data={prop.Experience} Form={Experience}></Dropdown>
            <Dropdown title="Projects" data={prop.Projects} Form={Projects}></Dropdown>
            <Dropdown title="Education" data={prop.Education} Form={Education}></Dropdown>
            <Dropdown title="Skills" data={prop.Skills} Form={Skills}></Dropdown>
            <button className="download" onClick={handle_download}>Download</button>
        </div>

    )
}

export { InputForm }