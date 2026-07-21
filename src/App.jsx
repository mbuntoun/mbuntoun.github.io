import { Routes, Route } from 'react-router-dom'
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import Teaching from "./pages/Teaching"
// import Community from "./pages/Community"

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teaching" element={<Teaching />} />
      {/* <Route path="/community-services" element={<Community />} /> */}
    </Routes>
  </>
)


export default App
