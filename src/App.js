import {BrowserRouter,Route,Routes} from "react-router-dom";

import Home from "./Home";
import Coworkings from "./Coworkings";
import CreateCoworking from "./CreateCoworking";
import CoworkingDetail from "./CoworkingDetail";
import UpdateCoworking from "./UpdateCoworking";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/coworkings" element={<Coworkings />} />
                    <Route path="/create-coworking" element={<CreateCoworking/>}/>
                    <Route path="/coworkings/:id" element={<CoworkingDetail />} />
                    <Route path="/coworkings/:id/update" element={<UpdateCoworking />} />
                </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
