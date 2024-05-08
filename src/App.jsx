import './App.css';
import RotasUrl from './routes/route';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-modal"

Modal.setAppElement(document.body);

function App() {
  return (
      <RotasUrl />
  );
}

export default App;


