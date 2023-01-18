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
                                                  <Calendar />
                                                </div>} />
            <Route exact path = "/hmm" element = {<div>456s</div>} />
            <Route path = "*" element = {<NotFound />} />
          
        </Routes>
    </Router>
  );
  // if you wanna manually navigate between each url, go to like http://localhost:5000/#/hmm to see the 456s, and
  // http://localhost:5000/#/anythingElse to see NotFound page
}

export default App;
