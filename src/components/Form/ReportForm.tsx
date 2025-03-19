import { useDispatch, useSelector } from 'react-redux';
import useFetchItems from '../../hooks/useFetchUnits';
import './ReportForm.css';
import { RootState } from '../../redux/store';
import { UnitsState, selectUnit } from '../../redux/unitsSlice';
import { ChangeEvent, useState } from 'react';

function ReportForm() {

  useFetchItems();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    unit: '', 
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (name === 'unit') {
      dispatch(selectUnit(value));
    }
  };

  const { units } = useSelector<RootState, UnitsState>((state) => state.unitsReducer);
  const defaultDateValue = new Date().toISOString().split('T')[0];

  function generateReport(data: FormData) {
    console.log(data);
  }

  return (
    <form action={generateReport} className="report-form">
      <h1>Route report</h1>
      <div className="fields">
        <label className="required">Vehicle number</label>
        <select name="unit" required value={formData.unit} onChange={handleChange}>
          <option hidden value="">Select vehicle</option>
          {units.map((unit) => (
            <option key={unit.unit_id}>
              {unit.number}
            </option>
          ))}
        </select>
        <label>Period</label>
        <label className="secondary">From
          <input name="date-from" type="date" />
        </label>
        <label className="secondary">Till
          <input name="date-till" type="date" defaultValue={defaultDateValue} />
        </label>
      </div>
    </form>
  )
}

export default ReportForm
