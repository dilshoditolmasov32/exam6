import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { Form, Button } from "react-bootstrap";

const TaskModal = ({
  change,
  submit,
  openVisible,
  setOpenVisible,
  editData,
}) => {
  return (
    <Rodal visible={openVisible} onClose={() => setOpenVisible(false)}>
      <h3 className="mb-1">Add Task</h3>
      <Form className="w-100" onSubmit={submit}>
        <Form.Group className="mb-3 w-100">
          <Form.Control
            type="text"
            placeholder="FullName"
            name="firstname"
            defaultValue={editData.firstname || ""}
            onChange={change}
          />
        </Form.Group>

        <Form.Group className="mb-3 w-100">
          <Form.Select
            defaultValue={editData.option || "option"}
            onChange={change}
            name="option"
          >
            <option value="option" disabled>
              Select Option
            </option>
            <option value="pending">Pending</option>
            <option value="inprog">In Progress</option>
            <option value="complete">Complete</option>
          </Form.Select>
        </Form.Group>

        <div className="d-flex justify-content-end mt-3 gap-2">
          <Button variant="danger" onClick={() => setOpenVisible(false)}>
            Close
          </Button>
          <Button variant="success" type="submit">
            Add
          </Button>
        </div>
      </Form>
    </Rodal>
  );
};

export default TaskModal;
