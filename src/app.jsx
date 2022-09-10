import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";
let quoteObj;
let ref;
export function App() {
    const [quote, setQuote] = useState("");
    const [author,setAuthor] = useState("");
    
    const newQuote = () =>{
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(res=> res.json())
            .then((data)=> {quoteObj = data.quotes[Math.floor(Math.random() * data.quotes.length)];
                    setQuote(quoteObj.quote);
                    setAuthor(quoteObj.author);
            })
           
              
                ref='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
                  encodeURIComponent('"' + quote + '" ' + author);
              
    
    }
    useEffect(newQuote,[]);
    return (
        <div id ="quote-box">
            <h1 id ="text">{quote}</h1>
            <p id="author">{author}</p>
            <button id="new-quote" onClick={newQuote}>New quote</button>
            
            <a id="tweet-quote" class="fa fa-twitter" href= {ref}></a>
        </div>
    )
}

export default App