import { Route, Routes } from "react-router-dom";
import Create from "./Crud/Create";
import Read from "./Crud/Read";
import Edit from "./Crud/Edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
