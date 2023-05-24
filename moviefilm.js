import fetchTodo from "./fetching.js";
let movies=await fetchTodo();
movies[0].rating=0;
const searchbar=document.getElementsByClassName('search-input');
  let search=document.getElementById('search-input');
  const formSubmit=document.getElementById('submit');
  const showList=document.getElementById('moviediv');
  const hideList=document.getElementById('back');
    
let show =true;
function hideHandle(e){
//  console.log(e.target)
 e.target.innerHTML="Home"
  show=!show;
  render()
}
function showHandle(e){
    const target=e.target;
    
    if(target.className==='newfilm'){
    
    // console.log(show ,"inside function") 
    if(show){
      renderList();
    }
    show=!show;
    }
  if(target.id==="favourite"||target.id==="Unfavourite"){
          handleFav()
         }
     if(target.id==="increase" ){
       
         handleIncrease();
        }
        
        if(target.id==="decrease" ){
            handleDecrease();
        }
        
        
    }
    
    // movies=handleShow
    function handleFav(){
      let favrite=movies[0];
      favrite.fav=!favrite.fav;
     renderList();
  }
    
    function handleIncrease (){
      for(let i=0;i<movies.length;i++){
          if(movies[i].rating>=10){
            return;
          }
        movies[i].rating++;
        renderList();
    }
    return 
};

function handleDecrease (){
    for(let i=0;i<movies.length;i++){
        if(movies[i].rating<=0){
            return;
        }
        movies[i].rating--;
        renderList();
      }
        return movies;
};
function renderList(){
  let content = "";
  movies.map(movi =>{
    
    content += `
    <div class="movie-card">
    <div class="left">
    <img src=${movi.poster}/>
    </div>
    <div class="right">
    <div class="title">${movi.title} </div>
    <div class="plot">${movi.plot}</div>
    <div class="all">${movi.genre}</div>
    <div class="all">${movi.language}</div>
    <div class="all"> ${movi.year}</div>
    <div class="all">${movi.rating}</div>
    </div>
    </div>
    <div class="footer">
    <span id ="rating">${movi.rating}</span>
    <div class="star-dis">
    <img  id="increase" src="https://as2.ftcdn.net/v2/jpg/01/26/10/59/1000_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg" alt="increase">           
    <img  class="star-img" src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=626&ext=jpg&ga=GA1.2.1887039027.1682679325&semt=sph" alt="star">
    <img  id="decrease" src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" alt="decrease">
    
    </div>
    <button id=${movi.fav?"favourite":"Unfavourite"}>
    ${movi.fav?"favourite":"Unfavourite"}
    </button>
    </div>
    `
    
  })

    document.getElementById("moviediv").innerHTML = content;
}


  function showNotification(text){
    alert(text);
  }
  function render(){
    let content = "";
      movies.map(movie =>{
      content += `
      <div class="films">
      <img  class="newfilm" src="${movie.poster}" alt="">
      <p class="newfilm">Title:${movie.title}</p>
      <p class="newfilm">year:${movie.year}</p>
      <p class="newfilm">Langauage:${movie.language}</p>
      <p>[1GB]</p>
      </div>
          `
      })
      document.getElementById("moviediv").innerHTML = content;
  }
  
  function renderSearch(newMovies){
      let content = "";
          content += `
          <div class="newfilms films">
      <img  class="newfilm " src="${newMovies.poster}" alt="">
      <p class="newfilm">Title:${newMovies.title}</p>
      <p class="newfilm">year:${newMovies.year}</p>
      <p class="newfilm">Langauage:${newMovies.language}</p>
      <p>[1GB]</p>
      </div>
    
          `
          
          document.getElementById("moviediv").innerHTML = content;
        }
        
        let searchinbox=[];
        function inputHandle(e){
            const typed= e.target.value;
            searchinbox.push(typed);
          }
          
          function handleSearch(e) {
            e.preventDefault();
            const n=searchinbox.length;
            const searchItem =searchinbox[n-1]
            
            // there is only one movie in api
            // for more than one movie use map;
            
            if(searchItem==movies[0].title){
              const newMovies= movies[0]
              document.title=movies[0].title;
              renderSearch(newMovies);
              showNotification("Found")
              // console.log(searchinbox ,"if found")
            }else{
              showNotification("Not available")
              // console.log(searchinbox ,"NOt found")
            }
            search.focus()
            search.value=""
            searchinbox=[]; 
      }
      
      function initializeApp(){
    //   fetchTodo();
      render()
       formSubmit.addEventListener("submit", handleSearch);
      search.addEventListener("keyup",inputHandle)
      showList.addEventListener("click",showHandle)
      hideList.addEventListener("click",hideHandle)
    }
    initializeApp()
