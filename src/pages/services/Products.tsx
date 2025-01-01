import React from 'react';
import { Package, TrendingUp, DollarSign, ShoppingCart, Plus, Search } from 'lucide-react';
import StatCard from '../../components/dashboard/StatCard';
import { ProductCard } from '../../components/products/ProductCard';
import { ProductCategory } from '../../components/products/ProductCategory';

export const Products = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            商品管理
          </h2>
          <p className="text-gray-500 mt-1">商品库存与销售管理</p>
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索商品..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                           transition-colors flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>添加商品</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Package}
          title="商品总数"
          value="128"
          change="+12"
          description="本月新增"
        />
        <StatCard
          icon={TrendingUp}
          title="月销量"
          value="1,459"
          change="+23%"
          description="较上月"
        />
        <StatCard
          icon={DollarSign}
          title="月收入"
          value="¥45,892"
          change="+18%"
          description="较上月"
        />
        <StatCard
          icon={ShoppingCart}
          title="待发货"
          value="24"
          change="+5"
          description="今日新增"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductCategory />
        </div>
        
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ProductCard
            name="蛋白粉"
            price={299}
            originalPrice={359}
            stock={45}
            image="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80"
            category="营养补剂"
            sales={128}
          />
          <ProductCard
            name="运动手套"
            price={89}
            originalPrice={99}
            stock={67}
            image="https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&q=80"
            category="装备"
            sales={89}
          />
          <ProductCard
            name="瑜伽垫"
            price={199}
            originalPrice={249}
            stock={34}
            image="https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&q=80"
            category="器材"
            sales={156}
          />
        </div>
      </div>
    </div>
  );
};