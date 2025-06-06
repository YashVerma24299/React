function printHello(event){
    console.log("Hello!");
    console.log(event); //see in console
}
function printHover(){
    console.log("Hover!");
}
function handledblclick(){
    console.log("dblClick!");
}
function handleFormSubmit(event){
    // event.preventDefault();  // run with or without (IMPORTANT) 
    console.log("Form was submitted!");
}


export default function Button(){
    return(
        <div className="button">
            <button onClick={printHello}>Click me</button>
            <p onMouseOver={printHover}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, officiis. Rem culpa, eos repudiandae cumque ex quidem repellendus mollitia corporis nesciunt non quasi quibusdam labore iste, explicabo facilis iusto incidunt!</p>
            <button onDoubleClick={handledblclick}>Double Click</button>

            <form>
                <input type="text" placeholder="Enter something" />
                <button onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    )
}