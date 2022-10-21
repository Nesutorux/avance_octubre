//Si funciona no lo muevan//
import * as React from "react";
import { Checkbox } from "@mui/material";
import "/src/view/css/tablas_pro_seg.css";
import MUIDataTable from "mui-datatables";
import { Icon } from "atomize";

function TablaSeguimiento1() {
  const columns = ["Name", "Title", "Location", "Age", "Salary"];
  const data = [
    ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
    ["Blake Duncan", "Business Management Analyst", "San Diego", 65, "$94,000"],
    ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
    ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
    ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
    ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
    ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
    ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
    ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
    ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
    ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
    [
      "Addison Navarro",
      "Business Management Analyst",
      "New York",
      50,
      "$295,000"
    ],
    ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
    ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
    ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
    ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
    ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
    ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
    ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
    ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
    ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
    ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000"],
    ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
    ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
    [
      "Gabby Strickland",
      "Business Process Consultant",
      "Scottsdale",
      26,
      "$45,000"
    ],
    ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]
  ];
  const options = {
    filterType: "dropdown",
    responsive: "scroll"
  };
  return <MUIDataTable data={data} columns={columns} options={options} />;
}

function TablaSeguimiento2() {
  const columns = ["Name", "Title", "Location", "Age", "Salary"];
  const data = [
    ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
    ["Blake Duncan", "Business Management Analyst", "San Diego", 65, "$94,000"],
    ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
    ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
    ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
    ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
    ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
    ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
    ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
    ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
    ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
    [
      "Addison Navarro",
      "Business Management Analyst",
      "New York",
      50,
      "$295,000"
    ],
    ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
    ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
    ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
    ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
    ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
    ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
    ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
    ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
    ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
    ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000"],
    ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
    ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
    [
      "Gabby Strickland",
      "Business Process Consultant",
      "Scottsdale",
      26,
      "$45,000"
    ],
    ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]
  ];
  const options = {
    filterType: "dropdown",
    responsive: "scroll"
  };
  return <MUIDataTable data={data} columns={columns} options={options} />;
}

function TablaSeguimiento3() {
  const columns = ["Name", "Title", "Location", "Age", "Salary"];
  const data = [
    ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
    ["Blake Duncan", "Business Management Analyst", "San Diego", 65, "$94,000"],
    ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
    ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
    ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
    ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
    ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
    ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
    ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
    ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
    ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
    [
      "Addison Navarro",
      "Business Management Analyst",
      "New York",
      50,
      "$295,000"
    ],
    ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
    ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
    ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
    ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
    ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
    ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
    ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
    ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
    ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
    ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000"],
    ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
    ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
    [
      "Gabby Strickland",
      "Business Process Consultant",
      "Scottsdale",
      26,
      "$45,000"
    ],
    ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]
  ];
  const options = {
    filterType: "dropdown",
    responsive: "scroll"
  };
  return <MUIDataTable data={data} columns={columns} options={options} />;
}

function SeccionTabla2() {
  return (
    <div>
      <div className="union1">
        <div className="cir1" />
        <div className="text-seccion">Proveedor</div>
      </div>
      <div className="union2">
        <div className="cir2" />
        <div className="text-seccion">Cliente</div>
      </div>
      <div className="union2">
        <div className="cir3" />
        <div className="text-seccion">Cotizacion</div>
      </div>
    </div>
  );
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function NotiTabla2() {
  return (
    <div>
      <div className="scroll-notificacion2">
        <br />
        <div className="unionnoti1">
          <Icon name="Alert" color="white" className="cir4" />
          <div className="text-seccion">Mensaje de Notificacion</div>
          <Checkbox {...label} className="checkbox" />
        </div>
        <div className="unionnoti2">
          <Icon name="Alert" color="white" className="cir4" />
          <div className="text-seccion">Mensaje de Notificacion</div>
          <Checkbox {...label} className="checkbox" />
        </div>
        <div className="unionnoti2">
          <Icon name="Alert" color="white" className="cir4" />
          <div className="text-seccion">Mensaje de Notificacion</div>
          <Checkbox {...label} className="checkbox" />
        </div>
        <div className="unionnoti2">
          <Icon name="Alert" color="white" className="cir4" />
          <div className="text-seccion">Mensaje de Notificacion</div>
          <Checkbox {...label} className="checkbox" />
        </div>
        <div className="unionnoti2">
          <Icon name="Alert" color="white" className="cir4" />
          <div className="text-seccion">Mensaje de Notificacion</div>
          <Checkbox {...label} className="checkbox" />
        </div>
        <div className="unionnoti2">
          <Icon name="Alert" color="white" className="cir4" />
          <div className="text-seccion">Mensaje de Notificacion</div>
          <Checkbox {...label} className="checkbox" />
        </div>
      </div>
    </div>
  );
}

function TablaSeg() {
  return (
    <div>
      <br />
      <div className="tablero">
        <div className="scroll-tablas">
          <br />
          <div>
            <TablaSeguimiento1 />
            <br />
            <div>
              <TablaSeguimiento2 />
              <br />
              <div>
                <TablaSeguimiento3 />
              </div>
            </div>
          </div>
        </div>
        <div className="seccion2">
          <SeccionTabla2 />
          <div className="notificacion-tabla2">
            <NotiTabla2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablaSeg;
