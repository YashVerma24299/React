import Product from './Product.jsx';

function ProductTab() {
    let myStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    }
    return(
        <div className="" style={myStyle}>
            <Product title="Logitech" idx={0}/>
            <Product title="Zebronics" idx={1}/>
            <Product title="Petronics" idx={2}/>
            <Product title="Boat" idx={3}/>
        </div>
    )   
}

export default ProductTab;