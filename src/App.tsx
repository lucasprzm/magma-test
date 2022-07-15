import DemandControl from "./components/DemandControl";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen">
      <div className="h-[60px]">
        <Header />
      </div>
      <div className="flex flex-row h-full">
        <Sidebar />
        <DemandControl />
      </div>
    </div>
  );
}

export default App;
