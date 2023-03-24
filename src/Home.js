
const Home = () => {


    const handleClick = () =>{
        console.log('hello, ninja');

    }

    const handleClickAgain = (name) =>{
        console.log('hello' + name);

    }
    const handleClick3 = (e) =>{
        console.log('hello' + e.target.innertext);

    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
{/* if use handleclick() it will envoke it automatically, if use handleclick is will refer to the function  */}
{/* <button onClick={handleClick()}>Click Me</button> */}
            
            <button onClick={handleClick}>Click Me</button>
{/* envoke immediately */}
            {/* <button onClick={handleClickAgain('Mario')}>Click Me Again</button> */}
            
            {/* 写一个anonymous function to pass in Mario  */}
            <button onClick={
                () => {  
                    handleClickAgain(' Mario')
                }
 

            }>Click Me Again</button>

            <button onClick={(e) => handleClick3(e)}>Click Me 3</button>
            


        </div>
     );
}
 
export default Home;