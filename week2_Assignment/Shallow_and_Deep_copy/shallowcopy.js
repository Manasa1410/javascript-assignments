/* Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t*/
     
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

              let copyuser={...user};

              //i. name in the copied object
              copyuser.name="Hari";

              //preferences.theme in the copied object
              copyuser.preferences.theme="Light";

              //.Log both original and copied objects
              console.log("user:",user)
              console.log("copyuser:",copyuser)

              //Observe what changes and what doesn’t
              //nested objects has changed but toplevel members do not changed

