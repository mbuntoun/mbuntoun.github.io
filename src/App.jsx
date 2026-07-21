import { Routes, Route } from 'react-router-dom'
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
// import Courses from "./pages/Courses"
// import Community from "./pages/Community"

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/courses" element={<Courses />} /> */}
      {/* <Route path="/community-services" element={<Community />} /> */}
    </Routes>
  </>
)


export default App
