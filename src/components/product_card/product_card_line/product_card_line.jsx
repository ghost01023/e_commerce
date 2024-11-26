import ProductCard from "../product_card"; // imgSrc, imgAlt, name, cost

const ProductCardLine = (props) => {
    const {products} = props;
    return (
        <div className="product-card-line">
            {
                products.map(product => <ProductCard imgSrc={product.imgSrc} imgAlt={product.imgAlt} name={product.name} cost={product.cost} />)
            }
        </div>
    )
}


export default ProductCardLine;