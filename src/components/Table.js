import React from "react";

const Table = ({ data }) => {
  return (
    <table className="table table-striped table-hover p-3">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {/*mapping the data*/}
        {data.map((transaction, index) => {
          return (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
