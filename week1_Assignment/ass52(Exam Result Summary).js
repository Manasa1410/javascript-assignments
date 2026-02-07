/*Assignment 2: Exam Result Summary
---------------------------------
Scenario : Marks are stored subject-wise for a student.

Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

Tasks:
    1. Calculate total marks
    2. Calculate average marks
    3. Find the highest scoring subject
    4. Add a new subject computer: 90*/
    
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55,
  total:function(){
    let sum=0,c=0
    let avg,max=0
      for(let v in marks)
      {
        if(typeof(marks[v])=='number')
        {
          sum=sum+marks[v]
          c=c+1
        }
      }
      avg=sum/c
      console.log("sum:",sum)
      console.log("average:",avg)

  },
  highest:function(){
    let max=-1
    for(let v in marks)
      {
        if(typeof(marks[v])=='number')
        {
          if(marks[v]>max)
          {
            max=marks[v]
          }
        }
      }
      console.log(max)
  }
  
};
marks.total()
marks.highest()
marks.computer=90
marks.highest()
