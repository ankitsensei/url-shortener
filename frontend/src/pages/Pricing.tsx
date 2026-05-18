import Navbar from "../components/Navbar";
import Silk from "../component/Silk";

const Pricing = () => {
  return (
    <div className="w-full h-screen">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={5}
          scale={1}
          color="#ffffff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="relative z-10 h-screen">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-1/2 w-full">
          <p className="text-7xl text-white/30">It's absolutely free</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
