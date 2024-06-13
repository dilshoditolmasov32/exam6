import CardBtn from "../../cardAdd";
import "./index.css";
const Index = () => {
  return (
    <div className="container">
      <div className="task_page">
        <CardBtn title={"Pending"} />
        <CardBtn title={"Inprog"} />
        <CardBtn title={"Complete"} />
      </div>
    </div>
  );
};

export default Index;
