export default async function fetchTodo() {
    let Movie=[]
    const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c1c2b3de');
        const data = await response.json();
        
        Movie.push({
            title:data.Title,
            year:data.Year,
            poster:data.Poster,
            plot:data.Plot,
            genre:data.Genre,
            rating:data.imdbRating,
            language:data.Language,
            id:new Date(),
            fav:true
        });
        
        return Movie;
    }
    
 
    