/*Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years*/
    
        let dob = new Date("2005-10-14");
        let currdate = new Date(Date.now())
        let years=currdate.getFullYear()-dob.getFullYear()
        let months=currdate.getMonth()-dob.getMonth()
        if(months<0){
    years--;
    months=months+12
 }
    if(months>0) years=years--;

    console.log("age:",years);