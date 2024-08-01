import ToDoCard from "../components/to-do-card";
import FormModal from "../components/form-modal";
import { useState } from "react";

interface ToDo {
    title: string;
    desc: string;
}

const ToDoList : React.FC = () => {

  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [formModalOpen, setFormModalOpen] = useState(false);

  const addToDo = (title: string, desc: string) => {
    setToDos([...toDos, { title, desc }]);
  }

  const deleteToDo = (index: number) => {
    setToDos(toDos.filter((_, i) => i !== index));
  }

  const editToDo = (index : number) =>{
    setToDos(toDos.map((toDo, i) => i === index ? { ...toDo, desc: "edited" } : toDo));
  }

  return (
    <>
      <header className="bg-gradient-to-r from-purple-600 to-blue-800 witdh-100 py-4 px-2 flex justify-center mb-8">
        <h1 className="text-3xl text-gray-100 font-bold">To Do List</h1>
      </header>
      <main className="m-12">
        <div>
          <button className="bg-gradient-to-r from-purple-600 to-blue-800 witdh-100 py-3 px-2 rounded" onClick={() => setFormModalOpen(true)}>Add Task</button>
        </div>
        <div className="mt-4 w-full flex justify-start flex-wrap gap-6">
            {toDos.map((toDo, index) => (
              <ToDoCard
                key={index}
                title={toDo.title}
                desc={toDo.desc}
                onDelete={() => deleteToDo(index)}
                onEdit={() => editToDo(index)}
              />
            ))}
        </div>
      </main>
      {
        formModalOpen && <FormModal
          isOpen={formModalOpen}
          onClose={() => setFormModalOpen(false)}
          onSave={addToDo}
        />
      }
    </>
  );
};

export default ToDoList;
