let isLoggedIn = true
let isProfileComplete = false
if(isLoggedIn == false)
{
    console.log("Please Login")
}
else if(isLoggedIn == true  &&  isProfileComplete==false)
{
    console.log("Complete Your Profile")
}
else{
    console.log("Welcome back!")
}
