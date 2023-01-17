import React from "react";

const Table = ({ data }) => {
  //executing delete function according to item id
  function handleDeleteClick(id) {
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        //refreshes page after delete
        document.location.reload();
        console.log("deleted!");
      });
  }
  //sorting data alphabetically from a to z
  const sortedData = data.sort((a, b) =>
    a.description.toUpperCase() < b.description.toUpperCase() ? 1 : -1
  );
  return (
    <table className="table table-striped table-hover p-3">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/*mapping the data*/}
        {sortedData.map((transaction, index) => {
          return (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button
                  className="remove"
                  onClick={() => handleDeleteClick(transaction.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
