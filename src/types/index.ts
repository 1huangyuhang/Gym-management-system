export interface Member {
  id: string;
  name: string;
  phone: string;
  membershipType: '月卡' | '季卡' | '年卡';
  startDate: string;
  endDate: string;
  status: '活跃' | '已过期' | '已暂停';
}

export interface Class {
  id: string;
  name: string;
  instructor: string;
  capacity: number;
  currentEnrollment: number;
  schedule: string;
  description: string;
}

export interface Equipment {
  id: string;
  name: string;
  status: '正常' | '维修中' | '报废';
  lastMaintenance: string;
  nextMaintenance: string;
}