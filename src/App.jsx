import React, { useState } from "react";

const App = () => {
  const [form, setForm] = useState({ myname: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const files = e.target.files;
    setForm({ ...form, [name]: value });
    const filesArray = [...files];
    console.log("files", files);
    console.log("filesArray", filesArray);

    const generatedUrl = URL.createObjectURL(files[0]); 
    console.log(generatedUrl)
  };

  console.log(form);

  const obj = ["daya", "rahul"];

  console.log(...obj);
  return (
    <div>
      <input type="text" name="myname" onChange={handleChange} />
      <input type="file" multiple onChange={handleChange} />
    </div>
  );
};

export default App;
