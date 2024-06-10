import { useState } from "react";
import { MdDeleteOutline, MdModeEdit } from "react-icons/md";
import Rodal from "../modal"
import { nanoid } from "nanoid";
import "../pages/tasks/index.css";
import { NavLink } from "react-router-dom";

const Index = ({ title }) => {
  const [openVisible, setOpenVisible] = useState(false);
  const [inputData, setInputData] = useState({});
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const id = nanoid();
    const nanoId = { ...inputData, id };
    data.push(nanoId);
    setData([...data]);
    setOpenVisible(false);
    e.target.reset();
  }

  const handleDeleteClick = (id) => {
    const new_user = data.filter((el) => el.id !== id);
    setData(new_user);
  };

  return (
    <div className="form_elements">
      <form className="form-control p-4  w-100 ">
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
        {data?.map((item, index) => (
          <li key={index}>
            <span>{item.firstname}</span>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteClick(item.id)}
            >
              <MdDeleteOutline />
            </button>
            <NavLink to={`update/${item.id}`}>
              <button className="btn btn-info">
                <MdModeEdit />
              </button>
            </NavLink>
          </li>
        ))}
      </ul>

      <Rodal
        submit={handleSubmit}
        change={handleChange}
        openVisible={openVisible}
        setOpenVisible={setOpenVisible}
      />
    </div>
  );
};

export default Index;
