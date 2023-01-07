import React from "react";
import './monthcomponent.css';
const MonthComponent = (props) => {
    const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    for (let i = 0; i < monthNames.length; i++)
    {
        let holder = monthNames[i];
        monthNames[i] = <div className = "month">    
            <button className = "monthButton" onClick={() => {
                    console.log(holder);
                }
            }>{monthNames[i]}</button>
        </div>;
    }
    return  <div id="monthList">
        {monthNames}
        <button id = "monthListToggle" onClick = {(e) => {
            for (let i = 0; i < e.target.parentElement.children.length - 1; i++)
            {
                if (e.target.parentElement.children[i].children[0].classList.contains("on"))
                {
                    
                    e.target.parentElement.children[i].children[0].classList.add("off");
                    e.target.parentElement.children[i].children[0].classList.remove("on");
                    e.target.innerHTML = "+";
                    e.target.parentElement.children[i].parentElement.style.maxWidth = "0%";
                }
                else
                {
                    e.target.parentElement.children[i].children[0].classList.add("on");
                    e.target.parentElement.children[i].children[0].classList.remove("off");
                    e.target.innerHTML = "-";
                    e.target.parentElement.children[i].parentElement.style.maxWidth = "15%";
                }
            }
        }}>+
        </button>
    </div>

};

export default MonthComponent;