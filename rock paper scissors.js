var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

//Set computer's choice
if (computerChoice < 0.34) //Set to Rock
{
	computerChoice = "rock";
} 
else
{	
	if(computerChoice <= 0.67) //Set to Paper 
	{
		computerChoice = "paper";
	} 
	else //Set to scissors
	{
		computerChoice = "scissors";
	}
}	
console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2) //Compare user and computer choice
{
    if (choice1 === choice2) //It's a tie
    {
        return "The result is a tie!";    
    }
    else
    {
        if (choice1 === "rock")
        {
            if (choice2 === "scissors")
            {
                return "rock wins";    
            }
            else
            {
                return "paper wins";    
            }
        }
        if (choice1 === "paper")
        {
            if (choice2 === "rock")
            {
                return "paper wins";    
            }
            else
            {
                return "scissors wins";    
            }
        }
        if (choice1 === "scissors")
        {
            if (choice2 === "rock")
            {
                return "rock wins";
            }
            else
            {
                return "scissors wins";    
            }
        }
    }
}

compare(userChoice, computerChoice);