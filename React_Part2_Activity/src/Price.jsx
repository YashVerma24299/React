function Price({oldPrice, newPrice}) {
    let oldStyle = {
        textDecorationLine: "line-through"
    }
    let newStyle = {
        fontWeight: "500"
    }
    let Style={
        backgroundColor: "#e0c367",
        height: "30px",
        borderRadius: "5px"
    }
    return(
        <div className="Pirce " style={Style}>  
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    ) 
    
}

export default Price;