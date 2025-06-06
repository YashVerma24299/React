import './Product.css';
import Price from './Price.jsx';

function Product({title, idx}) {
    let oldPrices = ["12,999", "9,999","1,200", "999"];
    let newPrices = ["10,999", "7,999","900", "599"];
    let myStyle = {
        marginRight: "2rem",
        width: "240px"
    }

    return(
        <div className="Product" style={myStyle}>  
            <h3>{title}</h3>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    ) 
    
}

export default Product;