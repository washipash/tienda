import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-green-600 font-semibold">${product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-500">Ver más</Link>
    </div>
  );
};

export default ProductCard;
