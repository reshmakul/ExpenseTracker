
import Tracker from "./Tracker";
const OverviewComponent = ({ budget }) => {
  return (
    <div className="bg-primary">
      {budget}
      <Tracker budget={budget} />
    </div>
  );

};

export default OverviewComponent;
