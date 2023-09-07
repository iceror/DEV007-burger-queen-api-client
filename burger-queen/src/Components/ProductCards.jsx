import '../css/build.css'
import QuantityCounter from "./QuantityCounter";

const ProductCard = ({ products }) => {
  return (
    <>
      {products.map(product =>
        <div className="card" key={product.id} >
          <img src={product.image} alt="" />
          <div className="text">
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
          <QuantityCounter product={product} />
        </div>)
      }
    </>
  )
}

export default ProductCard
