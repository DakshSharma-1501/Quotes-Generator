let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = 
    [
        ' "The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
        
        ' "The way to get started is to quit talking and begin doing." -Walt Disney',
        
        ' "Your time is limited, so do not waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other people thinking." -Steve Jobs',
        
        ' "If life were predictable it would cease to be life, and be without flavor." -Eleanor Roosevelt',
        
        ' "If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough." -Oprah Winfrey',
        
        ' "If you set your goals ridiculously high and it is a failure, you will fail above everyone else success." -James Cameron',
        
        ' "Life is what happens when you are busy making other plans." -John Lennon',
        
        ' "Be The Best, Fuck the rest."- Devil',
        
        ' "Listen to the people agree with them but do whatever you want to do." - Tony Stark',
        ];

btn.addEventListener('click', function(){
    var randoQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randoQuote;
})