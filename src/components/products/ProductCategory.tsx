import React from 'react';
import { Package, Dumbbell, Shirt, Apple } from 'lucide-react';

export const ProductCategory = () => {
  const categories = [
    { name: '营养补剂', count: 45, icon: Apple },
    { name: '器材', count: 32, icon: Dumbbell },
    { name: '服饰', count: 28, icon: Shirt },
    { name: '配件', count: 23, icon: Package },
  ];

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4">商品分类</h3>
      <div className="space-y-3">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <button
              key={index}
              className="w-full flex items-center justify-between p-3 rounded-lg
                       hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600
                              flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-medium">{category.name}</span>
              </div>
              <span className="text-sm text-gray-500">{category.count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};