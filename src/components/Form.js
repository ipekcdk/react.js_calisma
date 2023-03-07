import React, { useState } from "react";

// form compenenti üzerinde inputlara girilmiş olan verileri nasıl state üzerinde tutabiliriz?

function Form() {
  //     --tek bir state ve fonksiyondan yönetmek istersek--
  //   const [form, setForm] = useState({ name: "", gender: "0" });
  //   const handleChange = (e) => {
  //     setForm({...form, name: e.target.value });
  //   };

  const [name, setName] = useState("");
  const [gender, setGender] = useState("0");
  return (
    <div>
      <div>
        <div> İsim</div>
        <input
          placeholder="İsim"
          value={name} //form.name diye çağırmam gerekir
          onChange={(event) => setName(event.target.value)} //handleChange fonksiyonu yazılmalı.
        />
        <div> Soyisim</div>
        <input placeholder="Soyisim" />

        <strong>{name}</strong>
        <strong>{gender === "0" ? "Erkek" : "Kadın"}</strong>
      </div>

      <br />
      <br />
      <div>
        Cinsiyet:
        <select
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value="0">Erkek</option>
          <option value="1">Kadın</option>
        </select>
      </div>
    </div>
  );
}

export default Form;
