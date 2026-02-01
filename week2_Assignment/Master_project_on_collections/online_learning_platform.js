const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

/*
MODULE-1 :USER PROCESSING ENGINE
  -> Get only active users
  -> Extract names of active users
  -> Check if any admin exists
  -> Find user by id
  -> Deactivate a user immutably*/

  //Get only active users
  let activeusers=users.filter(obj=>obj.active===true)
  console.log(activeusers)

  //Extract names of active users
  let activenames=activeusers.map(obj=>{
    return{
        name:obj.name
    }
  })
  console.log(activenames)

  //Check if any admin exists
let isAdminExists = users.some(u => u.role === "admin");
console.log(isAdminExists);

// Find user by id
function findUser(id){
    return users.find(obj=>obj.id===id)
}
console.log(findUser(2))

//Deactivate a user immutably
const deactivateUser = id =>
  users.map(u =>
    u.id === id ? { ...u, active: false } : u
  );

console.log(deactivateUser(1));





const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

/*
MODULE 2: COURSE CATALOG ENGINE
  -> Get published courses
  -> Sort courses by price (high → low)
  -> Extract { title, price } only
  -> Calculate total value of published courses
  -> Add a new course immutably
*/ 
//Get published courses
let published=courses.filter(obj=>obj.published===true)
console.log(published)

//Sort courses by price (high → low)
let sortedCourses = [...courses].sort(
  (a, b) => b.price - a.price
);
console.log(sortedCourses);

//Extract { title, price } only
let extract=courses.map(obj=>{
    return{
        title:obj.title,
        price:obj.price
    }
})
console.log(extract)

// Calculate total value of published courses
let total=published.reduce((acc,ele)=>acc+ele.price,0)
console.log(total)

// Add a new course immutably
let newCourse = { id: 104, title: "Python", price: 1199, published: true };
let updatedCourses = [...courses, newCourse];
console.log(updatedCourses);






const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

/*
MODULE 3: SHOPPING CART ENGINE 
  -> Merge cart with courses to get full course info
  -> Calculate total cart amount
  -> Increase quantity of a course (immutably)
  -> Remove a course from cart
  -> Check if all cart items are paid courses
*/
let mergecart=cart.map(obj=>{
    let course=courses.find(c=>c.id===obj.courseId);
    return {...course,qty:obj.qty}
})
console.log(mergecart)

//Calculate total cart amount
let totalAmt=mergecart.reduce((acc,ele)=>acc+ele.price*ele.qty,0)
console.log(totalAmt)

// Increase quantity of a course (immutably)
const increaseQty = (cart, courseId) =>
  cart.map(item =>
    item.id === courseId
      ? { ...item, qty: item.qty + 1 }
      : item
  );

console.log(increaseQty(mergedCart, 101));


// Remove a course from cart
const removeFromCart = courseId =>
  cart.filter(item => item.courseId !== courseId);

console.log(removeFromCart(103));

//Check if all cart items are paid courses
const allPaidCourses = mergecart.every(c => c.price > 0);
console.log(allPaidCourses);




const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

/*
MODULE 4: ROLE & PERMISSION ENGINE
  -> Get all role names
  -> Check if student can delete
  -> Create a flat list of all unique permissions
  -> Add new role moderator immutably*/

  // Get all role names
const roleNames = Object.keys(roles);
console.log(roleNames);

// Check if student can delete
const canStudentDelete = roles.student.includes("delete");
console.log(canStudentDelete);

// Flat list of all unique permissions
const allPermissions = [
  ...new Set(Object.values(roles).flat())
];
console.log(allPermissions);

// Add new role immutably
const updatedRoles = {
  ...roles,
  moderator: ["update", "view"]
};
console.log(updatedRoles);

