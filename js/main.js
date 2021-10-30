let url = `https://jsonplaceholder.typicode.com/posts/2`;

//? раньше мы с вами использовали подобие callback функции
// xhr.onreadystatechange = function(){
//     if (this.readyState == 4 && this.status == 200){
//         callbackFunction(this.response)
//         или
//         resolve(this.response)
//     }
// }

// fetch -- просто удобная оболочка, которая нам удобна,
// ибо всегда возвращает promise
fetch(url)
  // then -- аналог callback функции
  // data -- это что вернётся resolve(this.response)
  .then(data => data.json()) // это и есть response
  .then(json => console.log(json.title))


// post

let newPost = JSON.stringify({
  title: 'Flex Studio',
  body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  userId: 4,
})

fetch('https://jsonplaceholder.typicode.com/posts/', {
  method: 'POST',
  body  : newPost,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(data => data.json())
  .then(json => console.log(json))

let updatedPost = JSON.stringify({
  title : 'Flax Studio',
  body  : 'New bodt',
  userId: 6,
})

fetch('https://jsonplaceholder.typicode.com/posts/5', {
  method: 'PUT',
  body: updatedPost,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

updatedPost = JSON.stringify({
  title : 'Flax Studio'
})

fetch('https://jsonplaceholder.typicode.com/posts/5', {
  method: 'PATCH',
  body: updatedPost,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


fetch('https://jsonplaceholder.typicode.com/posts/5', {
  method: 'DELETE'
})
  .then((response) => console.log(response))
