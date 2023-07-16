import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TableView from './components/tableview';
import AddForm from './components/addform';
import Update from './components/update'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TableView />} />
        <Route path="/addform" element={<AddForm />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;

