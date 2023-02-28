//import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";

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

    <div>
      <div className="test">
        {/* render işlemi */}
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
  );
}

export default App;

/* böyle de yazabiliriz
{isLoggedIn && <div>  Hoş geldin {name} </div>}
{!isLoggedIn && <a href="#/">Giriş yapın </a>}
*/
