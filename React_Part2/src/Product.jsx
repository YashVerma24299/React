import './Product.css';

function Product({title, price=10, feature,  feature2, feature3}) {
    const list = feature3.map((featureeee) => <li>{featureeee}</li>)
    return(
        <div className="Product">  
            <h3>{title}</h3>
            <p>Product Price: {price/2}</p>
            <p>FEATURE1: {feature}</p>
            <p>FEATURE2:{feature2}</p>
            <p>FEATURE3:{list}</p>
        </div>
    )   
}

export default Product;