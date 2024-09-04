import ToggleDark from "./components/ToggleDark";

function App() {
  return (
    <div className="dark:bg-slate-700 bg-blue-100 flex justify-center items-center w-screen h-screen">
      <ToggleDark />
    </div>
  );
}

export default App;
