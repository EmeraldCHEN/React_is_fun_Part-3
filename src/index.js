
import React from 'react';
//import React, {Component} from 'react';

//import ReactDOM from 'react-dom';
import {render} from 'react-dom';

let bookList = [
    {"title":"The Sun Also Rised","author":"Ernest Hemingway","pages":260},
    {"title":"White Teeth","author":"Zadie Smith","pages":100},
    {"title":"Cat's Cradle","author":"Kurt Vonnegut","pages":304},
];

const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages}</p>
        </section>
    )
}

// const Library = () => { // Render whatever book components you want and all that contain their own unique data
//     return (
//         <div>
//            <h1>Welcome to the Library!</h1> 
//            <Book title="The Sun Also Rises" author="Ernest Hemingway" pages={260} />
           
//            <Book title="White Teeth" author="Zadie" pages={100} />
//         </div>
//     )
// }

const Library = ({books})=>{
    return(
        <div>
        {books.map(
            (book,i) =>    //Each child in a list should have a unique "key" prop.
            <Book key={i}
                  title={book.title} 
                  author={book.author} 
                  pages={book.pages} />
        )}       
        </div>
    )
}

render(
   // <Library />, 

   <Library books={bookList} />,
     
    document.getElementById('root')
)