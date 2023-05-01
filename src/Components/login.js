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
    return <div>Welcome to the Planner App
        <br /><br />
        The main screen will show you
        your events and tasks for the day.
        <br /><br />
        You can press the + button
        to dedicate a block of time for
        a certain task.
        <br /><br />
        Clicking on an event or task
        will give you details about it.
        <br /><br />
        This planner uses your Google
        Calendar and Tasks to identify
        your events and tasks.
        Your data never leaves your
        neither your browser nor your
        Google account.
        <br /><br />
        {button}
    </div>;
};

export default Login;