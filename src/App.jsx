import { Sun, Globe, Map, Droplets, Wind } from 'lucide-react';
import slider from './assets/slider.png';
import tempGraph from './assets/tempGraph.png';

function App() {

  return (
    <div className="w-full h-screen bg-[#CCF6FF] flex flex-col items-center justify-between p-8">
      <div>
        <img src={slider} />
      </div>

      <div className="self-start">
        <div className="flex gap-4">
          <Droplets />
          <h1>Precipitation: 0in</h1>
        </div>
        <div className="flex gap-4">
          <Wind />
          <h1>Wind Conditions: 2mph</h1>
        </div>
      </div>

      <div className="w-[350px] h-[350px] rounded-full bg-[#FFFACD] flex flex-col items-center justify-center">
        <Sun size="60" />
        <h1 className="text-[100px]">72°F</h1>
        <h3 className="text-[24px]">High: 83°F</h3>
        <h3 className="text-[24px]">Low: 64°F</h3>
      </div>

      <div>
        <img src={tempGraph} />
      </div>

      <div className="flex items-center justify-center gap-8">
        <Globe size="40" />
        <h1 className="text-3xl">Philadelphia</h1>
        <Map size="40" />
      </div>
    </div>
  )
}

export default App
