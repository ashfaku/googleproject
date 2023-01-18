import MonthComponent from '../Components/monthcomponent';
import Calendar from '../Components/calendar';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from '../Components/notfound'
function App() {
  return (
    <Router>
        <Routes>
            <Route exact path = "/" element = {<div>
                                                  <MonthComponent />
                                                </div>} />
            <Route exact path = "/month" element = {<div>
                                                      <MonthComponent />
                                                      <Calendar />
                                                    </div>} />
            <Route path = "*" element = {<NotFound />} />
          
        </Routes>
    </Router>
  );
  // change /month route to be a CalendarView object... need a centralized object to pass everything down from lol
  // if you wanna manually navigate between each url, go to like http://localhost:5000/#/month to see the 456s, and
  // http://localhost:5000/#/anythingElse to see NotFound page
}

export default App;
