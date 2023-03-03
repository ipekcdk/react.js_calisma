/*  
Components (bileşenler): Büyüğü meydana getiren küçükler

-Sadece kendi içerisinde değişen alanları güncellemek ve diğer alanlarla alakalı 
herhangibir güncelleme işlemine izin vermemek adına ortaya atılan yapılardır.

-Javascript fonksiyonunun component olabilmesi için yapmamız gereken tek şey 
bir javascript fonksiyonu oluşturmak ve bu fonksiyon içerisine bir JSX ifadesi
return etmek.

-Yazdığımız componenti çağırırken baş harfi büyük yazmamız gerekiyor. 
yoksa html etiketi olarak algılar.
*/
import React from "react";

function Header() {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}

export default Header;
