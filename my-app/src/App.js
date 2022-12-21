import Backdrop from './components/Backdrop';
import Modal from './components/Modal';
import Todo from './components/Todo';
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="learn react" />
      <Todo text="learn Node" />
      <Todo text="learn MongoDB" />
      {/* <Modal />
      <Backdrop /> */}
    </div>
  );
}

export default App;
