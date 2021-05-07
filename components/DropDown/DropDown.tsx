import React, { useState } from "react";
import styles from "./styles";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import employees from "../../Data/Employees";

export default function DropDown() {
  const [selectedValue, setSelectedValue] = useState(employees[0]);
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={styles.dropDown}
        itemStyle={styles.text}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {employees.map((employee) => {
          return (
            <Picker.Item
              key={employee.id}
              label={`${employee.firstName} ${employee.lastName}`}
              value={`${employee.id}`}
            />
          );
        })}
      </Picker>
    </View>
  );
}

// export default function DropDown() {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     { label: "Apple", value: "apple" },
//     { label: "Banana", value: "banana" },
//   ]);

//   return (
//     <DropDownPicker
//       open={open}
//       value={value}
//       items={items}
//       setValue={setValue}
//       setItems={setItems}
//       setOpen={setOpen}
//       style={styles.dropDown}
//       // containerStyle={styles.container}
//       dropDownContainerStyle={styles.dropDownContainer}
//       // dropDownDirection={"BOTTOM"}
//     />
//   );
// }
