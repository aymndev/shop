
interface ProductCardProps {
    title: string;
    price: number;
    category: string;
    image: string;
}

export default function ProductCard({ title, price, category, image }: ProductCardProps) {
    return (
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <img src={image} alt={title} className="h-48 w-full object-contain mb-4" />
            <h2 className="font-semibold text-lg mb-1">{title}</h2>
            <p className="text-gray-500 mb-2">{category}</p>
            <p className="text-green-600 font-bold">${price}</p>
        </div>
    );
}
