import { React, useEffect } from "react";
import MonthComponent from "../Components/monthcomponent";
const Login = (props) => {
    const button = <button onClick={() => {

        window.signIn(() => {
            props.root.render(<div>
                <MonthComponent root={props.root} />

            </div>)
        });
    }} id="loginB">Sign in With Google</button>;
    return <div>
        {button}
    </div>;
};

export default Login;