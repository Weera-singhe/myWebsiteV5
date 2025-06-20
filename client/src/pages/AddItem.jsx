import React, { useEffect, useState } from "react";
import axios from "axios";
import { ITEMS_API_URL } from "../api/urls";

export default function AddItem() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    axios
      .get(ITEMS_API_URL)
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;

    axios
      .post(ITEMS_API_URL, { name: newItem })
      .then((res) => {
        setItems([...items, res.data]);
        setNewItem("");
      })
      .catch((err) => console.error("Error adding item:", err));
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Item List</h1>
      <form onSubmit={handleAddItem} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="New item name"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Add
        </button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
