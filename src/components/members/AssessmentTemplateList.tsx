import React from 'react';
import { MoreHorizontal, ClipboardList } from 'lucide-react';

const AssessmentTemplateList = () => {
  const templates = [
    {
      id: '1',
      name: '基础体能评估',
      type: '通用模板',
      items: ['体重', '体脂率', '基础代谢', '肌肉量', '骨骼肌量'],
      usageCount: 286,
      lastUpdated: '2024-01-15',
    },
    // Add more template data...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {templates.map((template) => (
        <div key={template.id} className="card p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">{template.name}</h3>
              <p className="text-sm text-gray-500">{template.type}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">测评项目</p>
              <div className="space-y-1">
                {template.items.map((item, index) => (
                  <p key={index} className="text-sm">• {item}</p>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center text-gray-500">
                <ClipboardList className="h-5 w-5 mr-2" />
                <span className="text-sm">使用 {template.usageCount} 次</span>
              </div>
              <p className="text-sm text-gray-500">
                更新于 {template.lastUpdated}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssessmentTemplateList;