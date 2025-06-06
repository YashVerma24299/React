function printHello(){
    console.log("Hello!");
}
function printHover(){
    console.log("Hover!");
}
function handledblclick(){
    console.log("dblClick!");
}

export default function Button(){
    return(
        <div className="button">
            <button onClick={printHello}>Click me</button>
            <p onMouseOver={printHover}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, officiis. Rem culpa, eos repudiandae cumque ex quidem repellendus mollitia corporis nesciunt non quasi quibusdam labore iste, explicabo facilis iusto incidunt!</p>
            <button onDoubleClick={handledblclick}>Double Click</button>
        </div>
    )
}