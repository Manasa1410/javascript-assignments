/*Initial data:
        let totalAmount = 0;

🎯 Tasks
  1. Add ₹500 to the total
  2. Add ₹1200 to the total
  3. Apply a ₹200 discount
  4. Add 18% GST
  5. Print the final bill amount*/

let total=0
total=total+500
total=total+1200
total=total-200
console.log(total)
let gst=0.18*total
console.log(gst)
total=total+gst
console.log(total)
