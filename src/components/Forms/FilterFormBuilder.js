import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './FilterFormBuilder.css';
function FilterFormBuilder() {
  const [filterCriteria, setFilterCriteria] = useState([
    {
      name: 'Test Name',
      checkboxes: [
        { name: 'checkbox1', checked: false },
        { name: 'checkbox2', checked: false },
        { name: 'checkbox3', checked: false },
      ],
    },
    {
      name: 'Test Name 2',
      checkboxes: [
        { name: 'checkbox1', checked: false },
        { name: 'checkbox2', checked: false },
        { name: 'checkbox3', checked: false },
      ],
      date: [{ name: 'Acquire date', value: new Date() }],
    },
  ]);
  console.log(filterCriteria);
  const handleCheckboxChange = (section, checkboxName) => {
    setFilterCriteria((prevCriteria) =>
      [...prevCriteria].map((sectionData) => {
        if (sectionData.name === section) {
          return {
            ...sectionData,
            checkboxes: sectionData.checkboxes.map((checkbox) => {
              if (checkbox.name === checkboxName) {
                return {
                  ...checkbox,
                  checked: !checkbox.checked,
                };
              }
              return checkbox;
            }),
          };
        }
        return sectionData;
      })
    );
  };
  const handleDateChange = (section, date, selectedDate) => {
    setFilterCriteria((prevCriteria) =>
      [...prevCriteria].map((sectionData) => {
        if (sectionData.name === section) {
          return {
            ...sectionData,
            date: sectionData.date.map((dateData) => {
              if (dateData.name === date.name) {
                return {
                  ...dateData,
                  value: selectedDate,
                };
              }
              return dateData;
            }),
          };
        }
        return sectionData;
      })
    );
  };

  const handleSubmit = () => {
    // Use filterCriteria to perform actions
    console.log(filterCriteria);
  };
  return (
    <div className='filter-form'>
      {Object.entries(filterCriteria).map(([sectionKey, sectionData]) => {
        return (
          <div key={sectionKey} className='section'>
            <h3>{sectionData.name}</h3>
            <div className='checkbox-grid'>
              {sectionData.checkboxes.map((checkbox) => (
                <div className='grid-container'>
                  <label key={checkbox.name} className='checkbox-label'>
                    <input
                      type='checkbox'
                      checked={checkbox.checked}
                      onChange={() =>
                        handleCheckboxChange(sectionData.name, checkbox.name)
                      }
                    />
                    {checkbox.name}
                  </label>
                </div>
              ))}
            </div>
            {sectionData.date
              ? sectionData.date.map((date) => (
                  <div className='date-picker-section'>
                    <DatePicker
                      className='react-datepicker'
                      key={date.name}
                      name={date.name}
                      onChange={(selectedDate) =>
                        handleDateChange(sectionData.name, date, selectedDate)
                      }
                      value={date.value}
                      format='dd/MM/yyyy'
                    />
                  </div>
                ))
              : null}
          </div>
        );
      })}

      <button onClick={handleSubmit}>Apply Filter</button>
    </div>
  );
}
export default FilterFormBuilder;
