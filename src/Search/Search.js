import './Search.css';
// import text from '../datatext/text.json'

function Search (){
    
    return(
        <>
   <div className='container'>
       <div className='row'>
           <section className='col s6 offset-s3'>
               <form action="">
                   <div className='input-field'>
                       <input placeholder='Search movie' type="text" />

                   </div>
               </form>

           </section>

       </div>

   </div>
        </>  
    );

    }
    
    export default Search;