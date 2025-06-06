import './Product.css';

function Product({title, price=10}) {
    console.log(title);
    return(
        <div className="Product">  
            <h3>{title}</h3>
            <p>Product Price: {price/2}</p>
        </div>
    )   
}

export default Product;