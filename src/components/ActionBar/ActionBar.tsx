import { useSelector } from "react-redux";
import { UnitsState } from "../../redux/unitsSlice";
import { RootState } from "../../redux/store";

function ActionBar() {

  const { selected } = useSelector<RootState, UnitsState>((state) => state.unitsReducer);

  function generateReport() {
    console.log('Generate report for', selected);
  }

  return (
    <div className="action-bar">
      <button disabled={!selected} onClick={generateReport}>Generate</button>
    </div>
  )
}

export default ActionBar
