let arr = [
    {
        question :"How many vowels are there in the English alphabet?",
        options :[ "3" , "4" , "7" , "5"],
        answer : "5"
    }
    ,
    {
        question : "The Olympic Flame, was, for the first time, ceremonially lighted and burnt in a giant torch at the entrance of the stadium at" ,
        options :["Athens Games (1896)" ,"Amsterdam Games (1928)", "London Games (1908)" , "Paris Games (1924)" ], 
        answer : "Amsterdam Games (1928)"
    }
    ,
    {
        question : "In which year of First World War Germany declared war on Russia and France?",
        options :["1914" , "1915" , "1916" ,"1917"], 
        answer : "1914"
    }
    ,
    {
        question : "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?" ,
        options :["120 metres" , "180 metres" , "150 metres" , "324 metres"], 
        answer : "150 metres"
    }
    ,
    {
        question : "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?" ,
        options :["120 metres" , "180 metres" , "150 metres" , "324 metres"], 
        answer : "150 metres"
    }
]

let i = 0   

function start(){                                                     
   
    let CurrentQuestion = arr[i]  
    let firQues = document.getElementById("ques")       
    firQues.innerText = CurrentQuestion.question     
    
  

    let divONe = document.createElement("div")  
    divONe.id = "option"
     mainBox = document.getElementById("box")    
    mainBox.append(divONe)      

    CurrentQuestion.options.forEach((options) =>{
        let p = document.createElement("p")
        p.innerText = options
        p.className = "mcq"
        divONe.append(p) 

                if(p.innerText == CurrentQuestion.answer){
                p.setAttribute("id" , "correct")
                } 


                 p.addEventListener("click" , (e)=>{
               if(p.innerText== CurrentQuestion.answer){
                p.style.backgroundColor = "green"
                p.style.color = "white" 
                }else{
                p.style.backgroundColor = "red"
                p.style.color = "white" 
                let correct = document.getElementById("correct")
                correct.style.backgroundColor = "green"
                correct.style.color = "white"
               }

                next.style.display = "block"
        })  
    })

    let divTwo = document.createElement("div")
    divTwo.id = "buttons"
    mainBox.append(divTwo)

   


    let next =  document.createElement("button")
  
    next.style.display = "none"
    next.innerText = "⏩"

    divTwo.append(next)


    next.addEventListener("click",()=>{
        i = i + 1
        divONe.remove()
        // prv.remove()
        next.remove()
        if (i >= arr.length) {
            firQues.innerHTML = "Quiz Completed!"; // Display completion message
              return;
                }
        start()
    })
}

start()








