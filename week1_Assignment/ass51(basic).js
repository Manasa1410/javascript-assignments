/*Read and print the user’s name and email
Add a new property lastLogin: "2026-01-01"
Update role from "student" to "admin"
Delete the isActive property
Use Object.keys() to list all remaining fields*/
console.log(user.name)
console.log(user.email)
user.lastLogin= "2026-01-01"
user.role="admin"
delete user.isActive
console.log(Object.keys(user))
