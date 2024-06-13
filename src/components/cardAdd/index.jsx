import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { MdDeleteOutline, MdModeEdit } from "react-icons/md";
import Rodal from "../modal";
import { nanoid } from "nanoid";
import "../pages/tasks/index.css";

const Index = ({ title }) => {
  const [openVisible, setOpenVisible] = useState(false);
  const [inputData, setInputData] = useState({});
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [todos, setTodos] = useState([
    {
      id: 1,
      element: "",
      status: "Pending",
    },
    {
      id: 2,
      element: "",
      status: "Inprog",
    },
    {
      id: 3,
      element: "",
      status: "Complete",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editData) {
      setData((prev) =>
        prev.map((item) =>
          item.id === editData.id ? { ...item, ...inputData } : item
        )
      );
      toast.info("Task ma'lumotlari o'zgartirildi");
    }
    // const el=todos?.map((el, index)=>el=el.status)
    // console.log(el)
    else {
      const newTask = { ...inputData, id: nanoid() };
      setData((prev) => [...prev, newTask]);
      toast.success("Yangi task yaratildi");
    }

    setOpenVisible(false);
    setInputData({});
    setEditData(null);
  };

  const handleDeleteClick = (id) => {
    setData((prev) => prev.filter((el) => el.id !== id));
    toast.info("Task o'chirildi");
  };

  const handleEditClick = (item) => {
    setEditData(item);
    setInputData(item);
    setOpenVisible(true);
  };

  return (
    <div className="form_elements">
      <form className="form-control p-4 w-100">
        <h2>{title}</h2>
        <button
          type="button"
          className="btn text-white w-100 bg-primary mt-3"
          onClick={() => setOpenVisible(true)}
        >
          Add Card
        </button>
      </form>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <span>{item.firstname}</span>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteClick(item.id)}
            >
              <MdDeleteOutline />
            </button>
            <NavLink to="#">
              <button
                className="btn btn-info"
                onClick={() => handleEditClick(item)}
              >
                <MdModeEdit />
              </button>
            </NavLink>
          </li>
        ))}
      </ul>

      {openVisible && (
        <Rodal
          editData={inputData}
          submit={handleSubmit}
          change={handleChange}
          openVisible={openVisible}
          setOpenVisible={setOpenVisible}
        />
      )}
    </div>
  );
};

export default Index;
