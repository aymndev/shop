interface ProductCardProps {
  title: string;
  price: number;
  category: string;
  image: string;
}

export default function ProductCard({ title, price, category, image }: ProductCardProps) {
  return (
    <div className=" group relative max-w-sm bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300">
      
      {/* Badge Catégorie (en haut à gauche) */}
      <div className="absolute top-3 left-3 z-10">
        <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md shadow-sm">
          {category}
        </span>
      </div>

      {/* Conteneur Image avec Aspect Ratio */}
      <div className="aspect-square w-full bg-gray-50 flex items-center justify-center overflow-hidden p-8">
        <img
          src={image}
          alt={title}
          width={250}
          height={250}
          className="w-full  object-contain transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Contenu Texte */}
      <div className="p-5 space-y-3">
        <div>
          <h2 className="text-gray-900 font-bold text-lg leading-tight truncate">
            {title}
          </h2>
          <p className="text-gray-400 text-sm mt-1 capitalize">{category}</p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-black text-gray-900">
            ${price.toFixed(2)}
          </span>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors shadow-lg shadow-blue-100 active:scale-95">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

