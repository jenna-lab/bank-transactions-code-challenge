import React, { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";
import Search from "./Search";

function Container1() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  //fetching from the db.json
  useEffect(() => {
    fetch("http://localhost:8001/transactions?q=" + search)
      .then((res) => res.json())
      .then((res) => {
        //setting the response to transaction useState
        setTransactions(res);
      });
  }, [search]);

  //executing search on user input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <Form />
      <Table data={transactions} />
    </div>
  );
}
export default Container1;
