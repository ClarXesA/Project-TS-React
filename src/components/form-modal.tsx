import { useState } from "react";

interface FormModalProps {
  isOpen: Boolean;
  onClose: () => void;
  onSave: (title: string, desc: string) => void;
}

const FromModal: React.FC<FormModalProps> = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSave = () => {
    onSave(title, desc);
    setTitle("");
    setDesc("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-blue-600/25 border-purple-800 border-4 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add Task</h2>
        <input
          type="text"
          placeholder="Title"
          className="border rounded w-full py-2 px-3 mb-2 bg-blue-500/10 border-purple-800 focus:border-purple-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="border rounded w-full py-2 px-3 mb-2 bg-blue-500/10 border-purple-800 focus:border-purple-500"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-500/50 text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500/50 text-white py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FromModal;
