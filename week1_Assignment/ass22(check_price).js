function check(price)
{
let label
if(price<500) label="Budget Course"
else if(price>=500 && price<=1000) label="Standard Course"
else if(price>1000) label="Premium Course"
console.log(label)
}
check(1000)
