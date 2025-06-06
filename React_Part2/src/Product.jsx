import './Product.css';

function Product({title, price=10, feature,  feature2, feature3}) {
    const list = feature3.map((featureeee) => <li>{featureeee}</li>)
    // Method 1
    // if(price>=30000){
    //     return(
    //         <div className="Product">  
    //             <h3>{title}</h3>
    //             <p>Product Price: {price}</p>
    //             <p>FEATURE1: {feature}</p>
    //             <p>FEATURE2:{feature2}</p>
    //             <p>FEATURE3:{list}</p>
    //             <p>Discount of 10%</p>
    //         </div>
    //     ) 
    // } else{
    //     return(
    //         <div className="Product">  
    //             <h3>{title}</h3>
    //             <p>Product Price: {price}</p>
    //             <p>FEATURE1: {feature}</p>
    //             <p>FEATURE2:{feature2}</p>
    //             <p>FEATURE3:{list}</p>
    //         </div>
    //     ) 
    // }

    // Method 2 and 3 
    return(
        <div className="Product">  
            <h3>{title}</h3>
            <p>Product Price: {price}</p>
            <p>FEATURE1: {feature}</p>
            <p>FEATURE2:{feature2}</p>
            <p>FEATURE3:{list}</p>
            {/* <p>{price>=30000 ? "Dicount of 10%" : ""}</p> */}
            {price>=30000 ? <p>Dicount of 10%</p> : ""}
        </div>
    ) 
}

export default Product;