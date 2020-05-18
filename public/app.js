

const quotes = document.querySelectorAll('dt');
const authors = document.querySelectorAll('dd');

var quote = [];
var author = [];

for(var i = 0; i < quotes.length; i++){
    quote.push(quotes[i].innerText);
    author.push(authors[i].innerText);
}

let newQuote = function (){
    var rand = Math.floor(Math.random()*quotes.length);

    document.getElementById('quote').textContent = quote[rand];
    document.getElementById('author').textContent = author[rand];
    
    // var tweet = document.getElementById('addTwitter');
    // tweet.href  = 'https://twitter.com/intent/tweet?text=' + quote[rand] + author[rand];

}




  document.getElementById("quoteGen").addEventListener("click", newQuote);
  document.getElementById("tweet").addEventListener("click", function(){
      var quote = document.getElementById('quote').textContent;
      if(quote.indexOf(';')!=-1){
         quote = 
          quote.slice(0,quote.indexOf(';')) + "," +quote.slice(quote.indexOf(';')+1,quote.length);
      }
    window.open('https://twitter.com/intent/tweet?text='+  quote + 
    document.getElementById('author').textContent)
  });






