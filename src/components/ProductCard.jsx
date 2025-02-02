const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-md border w-48 flex-shrink-0">
      <img
        src={product.image}
        alt={product.title}
        className="h-24 w-24 object-contain mx-auto mb-2"
      />
      <h2 className="text-xs font-bold truncate">{product.title}</h2>
      <p className="text-gray-500 text-sm">${product.price}</p>
      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded text-xs">
        Ver más
      </button>
    </div>
  );
};

export default ProductCard;
