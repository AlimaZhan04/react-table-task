import React from "react";

const Table = (props) => {
  return (
    <div>
      <table border={2}>
        <tr>
          <th>name</th>
          <th>SurName</th>
          <th>days</th>
          <th>SeleryPerDays</th>
          <th>Total</th>
        </tr>

        {props.employees.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>
              <input value={item.days} type="text" />
            </td>
            {/* {item.days} */}
            <td>
              <input value={item.salaryPerDay} type="text" />
              {/* {item.salaryPerDay} */}
            </td>
            <td>
              <input type="text" value={item.days * item.salaryPerDay} />
            </td>
          </tr>
        ))}

        <input type="text" placeholder="days" />
        <input type="text" placeholder="perDays" />
      </table>
    </div>
  );
};

export default Table;
