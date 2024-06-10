import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { Form, FormGroup } from "react-bootstrap";


const Index = ({ change, submit, openVisible, setOpenVisible }) => {
    
  return (
    <Rodal visible={openVisible} onClose={() => setOpenVisible(false)}>
      <h3 className="mb-1">Add Task</h3>
      <Form className="w-100" onSubmit={submit}>
        <FormGroup className="  w-100 ">
          <Form.Control
            className="mb-3 w-100"
            type="text"
            placeholder="FullName"
            name="firstname"
            onChange={change}
          />

          <select class="form-select" onChange={change} name="option">
            <option value="option">Select Option</option>
            <option value="pending">pending</option>
            <option value="inprog">inprog</option>
            <option value="complete">complete</option>
          </select>

          <div className="d-flex justify-content-end mt-3 gap-2">
            <button
              className="btn btn-danger "
              onClick={() => setOpenVisible(false)}
            >
              Close
            </button>
            <button
              className="btn btn-success "
              type="submit"
              onSubmit={submit}
            >
              Add
            </button>
          </div>
        </FormGroup>
      </Form>
    </Rodal>
  );
};

export default Index;
