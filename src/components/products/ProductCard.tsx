import React from 'react';
import { TrendingUp, Package } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice: number;
  stock: number;
  image: string;
  category: string;
  sales: number;
}

export const ProductCard = ({
  name,
  price,
  originalPrice,
  stock,
  image,
  category,
  sales
}: ProductCardProps) => {
  const discount = Math.round((1 - price / originalPrice) * 100);

  return (
    <div className="card group cursor-pointer overflow-hidden">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {discount > 0 && (
          <span className="absolute top-4 right-4 px-2 py-1 bg-red-500 text-white text-sm rounded">
            -{discount}%
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <span className="text-sm text-gray-500">{category}</span>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-blue-600">¥{price}</div>
              {originalPrice > price && (
                <span className="text-sm text-gray-400 line-through">¥{originalPrice}</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Package className="h-4 w-4 mr-1" />
            <span>库存: {stock}</span>
          </div>
          <div className="flex items-center">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>销量: {sales}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between">
            <button className="text-blue-600 hover:text-blue-700 transition-colors">
              编辑
            </button>
            <button className="text-gray-600 hover:text-gray-700 transition-colors">
              下架
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};