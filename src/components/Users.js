import React, { useEffect, useState } from "react";
import axios from "axios";

// data fetching:
//bir veri kaynağına gidip veriyi alıp ekranda göstermekle alakalı nelere ihtiyacımız var, nelere dikkat etmemiz lazım onları öğrenmek için.
//axios: fetch fonksiyonunun yaptığı işi yapan ve farklı özellikleri de olan açık kaynaklı bir proje. farklarından  bir tanesi başlatmak istediğiniz bir listeyi durdurabilirsiniz veya biz fetch'i kullandığımız zaman bize sonuç geldiği anda bunu bi de jsonla parse etmemiz gerekiyordu fakat axios ile böyle bir şey yapmamıza gerek yok. bu ve bunun benzeri ufak tefek artıları var, kullanmak için ekstra kütüphane kurmamız gerekecektir.
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); //sayfa yükleme hızına göre bilgilendirme
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //useEffect ile mount anını yakalıyoruz
    fetch("https://jsonplaceholder.typicode.com/users") //istek atmak istediğimiz yeri belirtiyoruz.
      .then((res) => res.json()) //api'ın bana getirdiği sonucu bir sonraki then zincirine yolladım
      .then((data) => setUsers(data))
      .then(() => setLoading(false));
  }, []);

  //axios: fetch fonksiyonunun yaptığı işi yapan ve farklı özellikleri de olan açık kaynaklı bir proje. farklarından  bir tanesi başlatmak istediğiniz bir listeyi durdurabilirsiniz veya biz fetch'i kullandığımız zaman bize sonuç geldiği anda bunu bi de jsonla parse etmemiz gerekiyordu fakat axios ile böyle bir şey yapmamıza gerek yok. bu ve bunun benzeri ufak tefek artıları var, kullanmak için ekstra kütüphane kurmamız gerekecektir.

  // useEffect(() => {
  //   axios("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => setUsers(res.data))
  //     .then(() => setLoading(false));
  // }, []);

  useEffect(() => {
    // axios("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => {
    //     setUsers(res.data);
    //     axios(
    //       `https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`
    //     ).then((res) => setPosts(res.data));
    //   })
    // .catch((error)=>{
    //   console.log("error",error);
    // })
    //   .then(() => setLoading(false));
  }, []);

  //--yukarıdaki de aşağıdaki de aynı işi yapar fakat aşağıdaki yazım daha düzenli bir görünüm sağlar--

  // const getData = async () => {
  //   try {
  //     const { data: users } = await axios(
  //       //await ile .then() yazma işlemini yapmamıza gerek kalmayacak.
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const { data: posts } = await axios(
  //       `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
  //     );

  //     setLoading(false);
  //     setUsers(users);
  //     setPosts(posts);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  //Promiseler, ‘Callback Hell’(callback fonksiyonlar içerisinde tekrar asenkron fonksiyonların ardı ardına çağırılmasıyla oluşan karışık ortam) durumundan kaçınmak için ve beklenmeyen durumla karşılaşıldığında hata kontrolünün daha rahat yapılabilmesi için geliştirilmiş ES6 olarak bilinen ECMAScript 2015 ile bize sunulan asynchronous(paralel programlama) bir yapıdır.

  //useEffect'in içerisine direkt async tanımlayamıyoruz ama iç içe yapabiliriz veya direkt çalışması için anonim fonksiyon tanımlayabiliriz.
  // const logUser = () => {"anonim fonksiyon"};
  // logUser();      bunu anonim fonksiyon olarak yazacağız

  (() => {
    console.log("anonim fonksiyon");
  })();

  useEffect(() => {
    (async () => {
      try {
        const { data: users } = await axios(
          //await ile .then() yazma işlemini yapmamıza gerek kalmayacak.
          "https://jsonplaceholder.typicode.com/users"
        );
        const { data: posts } = await axios(
          `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
        );

        setLoading(false);
        setUsers(users);
        setPosts(posts);
      } catch (error) {
        console.log("error", error);
      }
    })();
  });

  return (
    <div>
      <h2>Users</h2>

      {loading && <div>Yükleniyor...</div>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
