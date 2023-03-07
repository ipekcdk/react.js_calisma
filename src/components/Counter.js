/* STATE (DURUM) */

// Componentin durumu. Componentin ifade ettiği, içerisinde barındırdığı verilerle beraber ekranda bize sunmuş olduğu bir takım görüntüler vardır. Bu görüntüler istediğimiz gibi elimizdeki veriye bağlı olarak değişebiliyor. Bu elimizdeki veri de zaman içerisinde değiştirilebilir. Kısacası ekranda değişme potansiyeli olan bütün veriler birer state olarak ifade edilir. Component içerisindeki herhangibir state güncellendiği anda o component baştan aşağı render edilir.

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);
  //veri tipi (ismi, count'un değerini değiştirmede kullanılan fonksiyon) = useState(başlangıç değeri)
  return (
    <div>
      <h1>count</h1>
      <button onClick={() => setCount(count + amount)}> arttır </button>
      {/* count'un ifade ettiği son değeri istersem böyle de alabilirim */}
      <button onClick={() => setCount((prev) => prev + amount)}>arttır</button>

      <hr />

      <div>Arttırma: +{amount}</div>
      <button onClick={() => setAmount(1)}>+1</button>
      <button onClick={() => setAmount(3)}>+3</button>
      <button onClick={() => setAmount(10)}>+10</button>
    </div>
  );
}

export default Counter;
