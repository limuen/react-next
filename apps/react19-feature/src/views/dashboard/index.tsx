import Banner from "./components/Banner";
import Immersive from "./components/Immersive";
import GithubGisucs from "./components/GithubGisucs";
import LearanBefore from "./components/LearanBefore";
import EfficientLearn from "./components/EfficientLearn";
import MainContent from "./components/MainContent";
const Dashboard: React.FC = () => {
  return (
    <div className="relative pt-16">
      <div>
        <Banner />
        <Immersive />
        <LearanBefore />
        <EfficientLearn />
        <MainContent />
        <GithubGisucs />
      </div>
    </div>
  );
};

export default Dashboard;
