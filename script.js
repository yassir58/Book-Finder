const query=document.getElementById("js_query");
const form=document.getElementById("form");
const bookList_erea=document.querySelector(".bookList-erea");
const API_KEY="AIzaSyCIUu_2f7S-dDqnWw0yvFWLobWAacRYRy8";


// fetch(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=your-API-key`)

const loader=document.getElementById("loader");
form.onsubmit=function(e){
    e.preventDefault();
   loader.style.display="block";
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query.value}&key=${API_KEY}`)
    .then(res=>res.json())
    .then(data=>{

loader.style.display="none";

        console.log(data);
        data.items.forEach(item=>{
            bookList_erea.innerHTML += `
           
              <div class="book-card">
              <div class="book-image">
                 <img src="${ item.volumeInfo.imageLinks  ? item.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/300.png"}>
                  </div>
                
               
              <div class="taile">
              <div class="book-content">
              <h3 class="book-title">${item.volumeInfo.title}</h3>
                
             <ul class="info-list">
             <li>Author : ${item.volumeInfo.authors?item.volumeInfo.authors[0]:"UNDIFIEND"}</li>
             <li> Categories : ${item.volumeInfo.categories?item.volumeInfo.categories[0]:"UNDIFIEND"}</li>
             <li>${item.volumeInfo.publisher}</li>
             <li>${item.volumeInfo.publishedDate}</li>
             <li>Language :  ${item.volumeInfo.language}</li>
             <li><a href=${item.volumeInfo.infoLink}> More Information </a></li>
             </ul>
              </div>
              </div>
          
            </div>
          `
        })
    });

 


}

{/* <p>${item.searchInfo.textSnippet}</p> */}