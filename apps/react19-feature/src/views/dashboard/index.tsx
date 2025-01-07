import Banner from "./components/Banner";
import Immersive from "./components/Immersive";

const Dashboard: React.FC = () => {
  return (
    <div className="relative pt-16">
      <div>
        <Banner />
        <Immersive />
      </div>
    </div>
  );
};

export default Dashboard;
