import React, { useState } from "react";

//useState object kullanımı

function User2() {
  const [user, setUser] = useState({ name: "İpek", surname: "Çıdık" });
  return (
    <div>
      <h2>User2</h2>
      {user.name} {user.surname}
      <br />
      <br />
      <div>
        {/* ...user objesi içerisindeki tüm verileri alır sonra üzerinde değişiklik yapar. en son hangisi yazıldıysa o öncekini ezer.      ...user yerine ...prev de yazabilirim.*/}
        <button onClick={() => setUser({ ...user, name: "Gönül" })}>
          İsmi değiştir
        </button>
        <button onClick={() => setUser({ ...user, surname: "Cömert" })}>
          Soyismi değiştir
        </button>
      </div>
    </div>
  );
}

export default User2;
