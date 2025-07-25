import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  // Save todos to localStorage every time they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { todo, isCompleted: false }]);
    setTodo("");
  };

  const handleDelete = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  const handleEdit = (index) => {
    const newTask = prompt("Edit your task:", todos[index].todo);
    if (newTask && newTask.trim() !== "") {
      const updated = todos.map((item, i) =>
        i === index ? { ...item, todo: newTask } : item
      );
      setTodos(updated);
    }
  };

  const handleCheckBox = (index) => {
    const updated = todos.map((item, i) =>
      i === index ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updated);
  };

  return (
    <>
      <div className='bg-zinc-800 h-screen w-full'>
        <Navbar />
        <div className='relative h-full w-full'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-xl shadow-zinc-400 bg-zinc-500 px-8 py-14 min-w-2xl hover:py-20 duration-500'>
            <div className='top-bar'>
              <h2 className='font-bold text-xl mb-4'>Task To Do.</h2>
              <div className='flex border rounded-2xl overflow-hidden'>
                <input
                  onChange={handleChange}
                  value={todo}
                  className='w-full px-3 py-2 shadow outline-none'
                  type="text"
                  placeholder='Write your task...'
                />
                <button
                  onClick={handleAdd}
                  className='px-4 py-2 bg-black text-zinc-400 hover:px-6 transition-all duration-500'
                >
                  Add
                </button>
              </div>

              <div className='mt-7 space-y-4'>
                {todos.length > 0 && <h2 className='font-bold text-lg'>Your List:</h2>}

                {todos.map((item, index) => (
                  <div key={index} className='flex justify-between items-center gap-3'>
                    <div className='flex gap-2 items-center'>
                      <input
                        onChange={() => handleCheckBox(index)}
                        type="checkbox"
                        checked={item.isCompleted}
                      />
                      <div className='flex justify-center items-center px-3 py-2 rounded-2xl text-white bg-black'>
                        <span className={item.isCompleted ? "line-through" : ""}>{item.todo}</span>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => handleEdit(index)}
                        className='px-3 py-2 mx-1 rounded-2xl bg-black text-zinc-500 hover:px-4 duration-500'
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className='px-2 py-2 mx-1 rounded-2xl bg-black text-zinc-500 hover:px-4 duration-500'
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
