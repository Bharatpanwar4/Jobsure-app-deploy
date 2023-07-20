import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/dashboard/SharedLayout"
import Stats from "./pages/dashboard/Stats";
import AllJobs from "./pages/dashboard/AllJobs"
import AddJob from "./pages/dashboard/AddJob"
import Profile from "./pages/dashboard/Profile"
import ProtectedRoute from "./pages/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute>
          <SharedLayout/>
        </ProtectedRoute>}>
          <Route index element={<Stats />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />x
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
