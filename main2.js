var count1 = 0;
var count2 = 0;
var value = 0;
var score = 0;
var times = 0;
var accuracy = 0;

function New()
{
    
    count1 = Math.floor(Math.random()*10);
    count2 = Math.floor(Math.random()*100);
    document.getElementById("Problem").innerHTML= count1 + " x " + count2;
    document.getElementById("user_input").value= "";
    document.getElementById("confirm").innerHTML= "";
    document.getElementById("reveal").innerHTML= "";
    
}

function Submit()
{
    value = document.getElementById("user_input").value;
    if(count1*count2 == value)
    {
        document.getElementById("confirm").innerHTML= "Correct";
        score = score + 1;
        times = times + 1;
        document.getElementById("score").innerHTML= "Score: "+ score;
        accuracy = score/times*100;
        document.getElementById("accuracy").innerHTML= accuracy+"%";
        
        
       
    }
    else
    {
        document.getElementById("confirm").innerHTML= "Incorrect";
        
        times = times + 1;
        document.getElementById("score").innerHTML= "Score: "+ score;
        accuracy = score/times*100;
        document.getElementById("accuracy").innerHTML= accuracy+"%";
        
    }
    
}

function Reveal()
{
    document.getElementById("reveal").innerHTML= count1*count2;
    
}

function Change()
{
    window.location = "index.html";
    
}

function ResetGame()
{
    count1 = 0;
    count2 = 0;
    value = 0;
    score = 0;
    times = 0;
    document.getElementById("Problem").innerHTML= "";
    document.getElementById("user_input").value= "";
    document.getElementById("confirm").innerHTML= "";
    document.getElementById("reveal").innerHTML= "";
    document.getElementById("score").innerHTML= "";
    document.getElementById("accuracy").innerHTML= "";

}