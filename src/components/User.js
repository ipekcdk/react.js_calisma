import React from "react";
import PropTypes from "prop-types";

//obje oluşturalım
const user = {
  name: "İpek",
  city: "Adana",
  age: 21,
};

/* PROPS- PROPERTIES (ÖZELLİKLER):*/

//amacı bir componenti render ederken onun görünümünü sağlayacak bilgileri vermek
//bileşeninizin görüntüsü ilk kez oluşturulurken kulanılacak olan bilgiler her neyse onları göndermeniz ve bileşen üzerinde de "props" diye parametreyi alıp kullanmanız gerekir.

/*Çeşitli versiyonları var;*/

// function User(props) {
//   console.log(props);
//   return (
//     <div>
//        -->   App.js'deki yazımı  <User name="İpek" city={"Adana"} age={21} />
//       <div>İsim: {props.name}</div>
//       <div>Yaş: {props.age}</div>
//       <div>Şehir: {props.city}</div>
/*----*/
//       -->    App.js'deki yazımı  <User data={user} />
//       <div>İsim: {props.data.name}</div>
//       <div>Yaş: {props.data.age}</div>
//       <div>Şehir: {props.data.city}</div>
//     </div>
//   );
// }

/*-------------------------------------------------------------------------*/

// function User({ data: { name, age, city } }) {
//   return (
//     <div>
//       User
//       {/* parametreye sadece data yazarsak burda "{data.name}" yazmamız gerekir. */}
//       <div>İsim: {name}</div>
//       <div>Yaş: {age}</div>
//       <div>Şehir: {city}</div>
//       <hr />
//     </div>
//   );
// }

/*-------------------------------------------------------------------------*/

// function User(props) {
//   console.log(props);

//   const data = props;
//   //const{name, age,city} = props.data;           böyle yazarsam aşağıda "data." yazmama gerek yok.

//   return (
//     <div>
//       Kişi
//       <div>İsim: {data.name}</div>
//       <div>Yaş: {data.age}</div>
//       <div>Şehir: {data.city}</div>
//       <hr />
//     </div>
//   );
// }

/*-------------------------------------------------------------------------*/

function User({ title, data, friends }) {
  return (
    <div>
      <strong>{title}</strong>
      <div>İsim: {data.name}</div>
      <div>Yaş: {data.age}</div>
      <div>Şehir: {data.city}</div>
      <hr />
      <h3>Arkadaşları:</h3>
      {friends.map((friend, i) => (
        <div key={i}>{friend}</div>
      ))}
      <hr />
    </div>
  );
}

//--> propTypes: şu propertynin şu veri tipinde gelmesi gerekiyor diye compenenti kullanacak kişilere bilgilendirme yapabiliriz. uyumsuz veri girilirse consoleda hata verir.

// User.PropTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number,
//   city: PropTypes.string,
//   PropTypes.array,
//   PropTypes.bool,
//   PropTypes.func,
//   PropTypes.object,
//   PropTypes.symbol,
// ve daha bir sürü react docs'da...
// };

User.propTypes = {
  title: PropTypes.string,
  data: PropTypes.exact({
    //exact: bana bir obje ve kstra özellik gelmeli
    name: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string,
  }),
  friends: PropTypes.array,
};

User.defaultProps = {
  title: "Kişi",
};
export default User;
