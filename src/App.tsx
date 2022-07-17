import DemandControl from "./components/DemandControl";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <div className="h-[60px]">
        <Header />
      </div>
      <div className="flex flex-row">
        <Sidebar />
        <DemandControl />
      </div>
    </div>
  );
}

export default App;
