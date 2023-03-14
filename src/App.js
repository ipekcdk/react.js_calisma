//import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import User from "./components/User";
import Counter from "./components/Counter";
import User2 from "./components/User2";
import Colors from "./components/Colors";
import Form from "./components/Form";
import Counter2 from "./components/Counter2";
import Users from "./components/Users";

// const user = {             --objeyi içerde tanımlamak yerine böyle de tanımlayabiliriz.
//   name: "Onur Çıdık",
//   city: "Adana",
//   age: 28,
// };
const isLoggedIn = true;
const name = "İpek";
let surname = "Çıdık";

function App() {
  /*return React.createElement("div", null, React.createElement(Header,null));  --JSX olmasaydı böyle yazmamız gerekirdi. Aşağıda işlemle bu aynı şeydir.
JSX kuralları:
- class -> className
- for -> htmlFor
- style="" -> style={}
- tabindex -> tabIndex
- onclick -> onClick
- Javascript ifadelerinin kullanımı
- createElement() metodu
*/

  return (
    /*return içeriği tek bir kapsayıcı alanda olmak zorunda, ya hepsini ortak bir div içine alırım ya da "<> </>" kullanırım;
    <React.Fragment>    sadece <> da kullanabiliriz
      <div>
        Merhaba
        <Header />
      </div>
    </>
    */

    /* render işlemi
    <div>
      <div className="test">
        {name} {surname}
        <div>
          {isLoggedIn ? (
            <div>
              Hoşgeldin {name} {surname}
            </div>
          ) : (
            <Login />
          )}
        </div>
        <div> Merhaba </div>
        <Header />
      </div>
      <label htmlFor="test">Test</label>
      <div>Selam</div>
    </div>
  */

    <div>
      {/* props yazımı 
      <User name="İpek" city={"Adana"} age={21} />        //string dışındaki tüm veriler süslü parantez içerisinde yazılır.
      <User name="Kerem" city={"Artvin"} age={22} />
      */}

      <User
        data={{
          name: "Onur Çıdık",
          city: "Adana",
          age: 28,
        }}
        friends={["Dila", "İrem", "Kerem"]}
      />
      <Counter />
      <User2 />
      <Colors />
      <Form />
      <Counter2 />
      <Users />
    </div>
  );
}

export default App;

/* böyle de yazabiliriz
{isLoggedIn && <div>  Hoş geldin {name} </div>}
{!isLoggedIn && <a href="#/">Giriş yapın </a>}
*/
