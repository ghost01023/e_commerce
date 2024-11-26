const ProductCard = (props) => {
    const {imgSrc, imgAlt, name, cost} = props;
    return(
        <div className="product-card">
            <img className="prod-card-image" src={imgSrc} alt={imgAlt}/>
            <h3 className="prod-card-name">{name}</h3>
            <h2 className="prod-card-cost">{cost}</h2>
        </div>
    )
}


export default ProductCard;