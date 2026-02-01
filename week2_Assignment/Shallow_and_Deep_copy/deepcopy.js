/*Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------

🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

🎯 Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged*/

const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
let copyorder=structuredClone(order);
copyorder.customer.address.city="Mumbai";
copyorder.items[0].price=50000

console.log("order:",order)
console.log("copyorder:",copyorder)

/*The original object remains unchanged because a deep copy was created.
When changes were made to the copied object (changing the city
   and item price), those changes affected only the copied object.
    The original object still contains the initial values (Hyderabad as the city
       and 70000 as the price), proving that both objects are independent and
        safely isolated.*/

