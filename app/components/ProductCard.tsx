interface ProductCardProps {
  title: string;
  price: number;
  category: string;
  image: string;
}

export default function ProductCard({ title, price, category, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1">
      {/* Image Container */}
      <div className="h-48 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category Badge */}
        <span className="inline-block w-fit px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full mb-2 capitalize">
          {category}
        </span>

        {/* Title */}
        <h2 className="font-bold text-base mb-3 line-clamp-2 text-gray-800 min-h-[3rem]">
          {title}
        </h2>

        {/* Price and Button */}
        <div className="mt-auto flex justify-between items-center gap-2">
          <span className="text-green-600 font-bold text-xl">${price.toFixed(2)}</span>
          <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-sm hover:shadow-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
