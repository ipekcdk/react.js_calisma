import React, { useState, useEffect } from "react";

//useEffect kullanımı
// Componentin herhangibir anda ekranda görünmesi "mount", kaldırılması da "unmount" olarak adlandırılır. örn;kullanıcıların listesini görmek istiyorsak, web soket bağlantısı oluşturmak istiyorsak, asenkron bir görev çalıştırmak istiyorsak

function Counter2() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    console.log("Bir state değişti.");
  });

  useEffect(() => {
    console.log("Component mount edildi.");
  }, []);

  useEffect(() => {
    console.log("Count state değişti.");
  }, [count]);

  useEffect(() => {
    setInterval(() => {
      console.log("interval");
      setCount(count + 1);
    }, 1000);
  }, []);

  return <div>Counter2</div>;
}

export default Counter2;
