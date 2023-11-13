// import DaisyNav from "./components/DaisyNav/DaisyNav"

import BarChart from "./components/BarChart/BarChart"
import NavBar from "./components/DaisyNav/NavBar/NavBar"
import LineChart from "./components/LineChart/LineChart"
import PiChart from "./components/PiChart/PiChart"
import PriceOptions from "./components/PriceOptions/PriceOptions"

function App() {

  return (
    <>
      {/* <DaisyNav/> */}
      <NavBar/>
      <h1 className="text-3xl bg-rose-700 text-center text-white font-bold py-10">Price Options</h1>
      <PriceOptions/>
      <LineChart/>
      <BarChart/>
      <PiChart/>
    </>
  )
}

export default App
