import Header from "./components/Header";
import Dashboard from "./views/dashboard";
import Button from "@/components/Button";
const App: React.FC = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <Button primary>Button</Button>
    </>
  );
};

export default App;
