import React, { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";
import Search from "./Search";

function Container1() {
    const [transactions, setTransactions] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
      fetch("http://localhost:8001/transactions?q=" + search)
        .then((res) => res.json())
        .then((res) => {
          setTransactions(res);
        });
    }, [search]);
  