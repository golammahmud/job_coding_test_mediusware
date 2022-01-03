// const fetchProduct = async () => {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products', {
//         method: "GET",
//         mode: "cors",
//         headers: headers,
//       });
//       if (response.status === 200) {
//         const data = await response.json();
//         return data;
//       } else {
//         throw new Error("data not found");
//       }
//     } catch (err) {
//       throw new Error(err);
//     }
//   };

//   let api=fetchProduct();
//   console.log(api);


fetch("http://127.0.0.1:8000/variants/")
            .then(res=>res.json())
            .then(json=>console.log(json))