import React, { useState } from "react";
import styles from "./styles";
import DropDownPicker from "react-native-dropdown-picker";

export default function DropDown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setValue={setValue}
      setItems={setItems}
      setOpen={setOpen}
    />
  );
}
