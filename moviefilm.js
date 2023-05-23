import fetchTodo from "./fetching.js";
let movies=await fetchTodo();
movies[0].rating=0;
const searchbar=document.getElementsByClassName('search-input');
  let search=document.getElementById('search-input');
  const formSubmit=document.getElementById('submit');
  const showList=document.getElementById('moviediv');
  
let show =true;
function showHandle(e){
    const target=e.target;
    
  if(target.className==='newfilm'){
    if(show){
        renderList();
      }
        show=!show;
    }
    if(target.id==="fav"){
          handleFav(target)
         }
     if(target.id==="increase" ){
       
         handleIncrease();
        }
        
        if(target.id==="decrease" ){
            handleDecrease();
        }
        
        
    }
    
    // movies=handleShow
    let favrite=movies[0].fav;
    console.log(favrite)
    function handleFav(fav){
        console.log(favrite)
        if(favrite){
        fav.innerHTML="Un-favourite"
        fav.style.background='red'
      }else{
        fav.innerHTML="Favourite"
        fav.style.background='green'  
        }
    favrite=!favrite
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
    <button id="fav">
    Favourite
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
          if(e.key="Enter"){
            const typed= e.target.value;
            searchinbox.push(typed);
          }
          // console.log(searchinbox)
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
        }else{
          showNotification("Not available")
        }
        
        
        
      }
      
      function initializeApp(){
    //   fetchTodo();
      render()
       formSubmit.addEventListener("submit", handleSearch);
      search.addEventListener("keyup",inputHandle)
      showList.addEventListener("click",showHandle)
    }
    initializeApp()
