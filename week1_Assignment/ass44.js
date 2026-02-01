/*ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"*/

   const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
]; 

//filter() only "Sci-Fi" movies
let res1=movies.filter(m=>m.genre==="Sci-Fi")
console.log(res1)

// map() to return:
//"Inception (8.8)"
let res2=movies.map(m => `${m.title} (${m.rating})`)
console.log(res2)

//reduce() to find average movie rating
let res=movies.reduce((acc,ele)=>acc+ele.rating,0)
let res3=res/movies.length
console.log(res3)

//find() movie "Joker"
let res4=movies.find(m=>m.title==="Joker")
console.log(res4)

//findIndex() of "Avengers"
let res5=movies.findIndex(m=>m.title==="Avengers")
console.log(res5)