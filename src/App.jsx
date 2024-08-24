import { useEffect, useState } from "react";
import "./App.css";
import { InputForm } from "./components/InputForm";
import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList";
import  Search  from "./components/Search"; // Import Search コンポーネントをインポート

function App() {
  const [taskList, setTaskList] = useState([]);
  const [filteredTask, setFilteredTask] = useState([]); // State name をfilteredTaskに変更

  /* taskListが変更されるたびにfilteredTaskの更新をする */
  useEffect(() => {
    setFilteredTask(taskList);
  }, [taskList]);

  const handleSearch = (query) => {
    const filtered = taskList.filter((task) => 
      task.text.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTask(filtered);
  };

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={filteredTask} setTaskList={setTaskList} /> {/* State name をfilteredTaskに変更 */}
      <Search onSearch={handleSearch}/>
    </div>
  );
}

export default App;
