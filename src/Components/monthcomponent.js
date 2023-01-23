import React from "react";
//import { useNavigate, createSearchParams } from "react-router-dom";
import '../Assets/Styles/monthcomponent.css';
import Calendar from "./calendar";
const MonthComponent = (props) => {
    //const navigate = useNavigate();
    const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    const yr = 2023;
    for (let i = 0; i < monthNames.length; i++)
    {
        let holder = monthNames[i];
        monthNames[i] = <div className = "month">    
            <button className = "monthButton" onClick={() => {   
                const params = { month: String(holder), year: 2023 }; // i'll add a drop down for year later
              //  console.log(params);
              /*  navigate({
                    pathname: '/month',
                    search: `?${createSearchParams(params)}`,
                });
                */

                props.root.render(<div>
                    <MonthComponent root = {props.root} />
                    <Calendar root = {props.root} month = {String(holder)} year = {yr}/>

                </div>);
            }
            }>{holder}</button>
        </div>;
    }
    console.log(234);
    return  <div id="monthList">
        {monthNames}
        <button id = "monthListToggle" onClick = {(e) => {
            console.log(e.target.innerHTML);
            if (e.target.innerHTML === "+")
            {
                console.log(1);
                if (document.getElementById("calendar"))
                {
                    document.getElementById("calendar").classList.remove("calendaroff");
                    document.getElementById("calendar").classList.add("calendaron");
        
                }
            }
            else
            {
                console.log(2);
                document.getElementById("calendar").classList.remove("calendaron");
                document.getElementById("calendar").classList.add("calendaroff");
            }
            for (let i = 0; i < e.target.parentElement.children.length - 1; i++)
            {
                if (e.target.parentElement.children[i].children[0].classList.contains("on"))
                {
                    
                    e.target.parentElement.children[i].children[0].classList.add("off");
                    e.target.parentElement.children[i].children[0].classList.remove("on");
                    e.target.innerHTML = "+";
                    e.target.parentElement.children[i].parentElement.style.maxWidth = "0%";
                    e.target.parentElement.children[i].style.maxHeight = "0";
                  //  document.getElementById("calendar").style.marginLeft = "8%";
                }
                else
                {
                    e.target.parentElement.children[i].children[0].classList.add("on");
                    e.target.parentElement.children[i].children[0].classList.remove("off");
                    e.target.innerHTML = "-";
                    e.target.parentElement.children[i].parentElement.style.maxWidth = "15%";
                    e.target.parentElement.children[i].style.maxHeight = "15%";

                  //  document.getElementById("calendar").style.marginLeft = "15%";
                }
            }
        }}>+
        </button>
    </div>

};

export default MonthComponent;