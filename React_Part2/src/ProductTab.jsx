import Product from './Product.jsx';

function ProductTab() {
    let options = ["hi-tech", "durable", "fast" ]
    let options2 = [<li>hi-tech</li>, <li>durable</li>, <li>fast</li> ]
    let options3 = ["hi-tech", "durable", "fast" ]
    return(
        <>
            <Product title="Phone" price={30000} feature={options} feature2={options2} feature3={options3}/>
            <Product title="Laptop" price={50000} feature={options} feature2={options2} feature3={options3}/>
            <Product title="pen" feature={options} feature2={options2} feature3={options3}/>
        </>
    )   
}

export default ProductTab;