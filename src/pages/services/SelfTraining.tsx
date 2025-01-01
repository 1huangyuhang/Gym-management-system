import React from 'react';
import { Timer, Users, Dumbbell, Target } from 'lucide-react';
import StatCard from '../../components/dashboard/StatCard';
import { TrainingZoneCard } from '../../components/training/TrainingZoneCard';
import { EquipmentStatus } from '../../components/training/EquipmentStatus';

export const SelfTraining = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            自主训练
          </h2>
          <p className="text-gray-500 mt-1">场地预约与器材使用管理</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Users}
          title="当前训练人数"
          value="45"
          change="+8"
          description="较平均值"
        />
        <StatCard
          icon={Timer}
          title="平均训练时长"
          value="72分钟"
          change="+5分钟"
          description="较上周"
        />
        <StatCard
          icon={Dumbbell}
          title="器材使用率"
          value="85%"
          change="+12%"
          description="较上周"
        />
        <StatCard
          icon={Target}
          title="场地利用率"
          value="78%"
          change="+8%"
          description="较上周"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TrainingZoneCard
              title="力量区"
              currentCount={15}
              maxCapacity={20}
              status="繁忙"
              equipment={['深蹲架', '卧推凳', '史密斯机']}
            />
            <TrainingZoneCard
              title="有氧区"
              currentCount={12}
              maxCapacity={25}
              status="正常"
              equipment={['跑步机', '椭圆机', '动感单车']}
            />
            <TrainingZoneCard
              title="功能训练区"
              currentCount={8}
              maxCapacity={15}
              status="空闲"
              equipment={['悬挂训练带', '壶铃', '平衡板']}
            />
            <TrainingZoneCard
              title="拉伸区"
              currentCount={5}
              maxCapacity={10}
              status="正常"
              equipment={['瑜伽垫', '泡沫轴', '拉伸带']}
            />
          </div>
        </div>

        <div className="space-y-6">
          <EquipmentStatus />
        </div>
      </div>
    </div>
  );
};