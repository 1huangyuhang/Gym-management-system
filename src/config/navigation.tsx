import {
  LayoutDashboard,
  Users,
  Calendar,
  Dumbbell,
  ShoppingBag,
  Building2,
  BadgePercent,
  Bot,
  GraduationCap,
  PiggyBank,
  BarChart3,
  Settings,
  Activity,
  Brain,
  Smartphone,
  Target,
  Timer,
  UserCog,
  Warehouse,
  ScrollText,
  Medal,
} from 'lucide-react';
import { NavGroup } from '../types/navigation';

export const navigationConfig: NavGroup[] = [
  {
    title: '运营概览',
    items: [
      { icon: LayoutDashboard, text: '数据看板', path: '/dashboard' },
      { icon: Medal, text: '私教看板', path: '/coach-dashboard' },
      { icon: Activity, text: '工作台', path: '/workspace' },
    ]
  },
  {
    title: '健身服务',
    items: [
      { icon: Calendar, text: '团课', path: '/group-classes' },
      { icon: UserCog, text: '私教', path: '/personal-training' },
      { icon: Timer, text: '自主训练', path: '/self-training' },
      { icon: ShoppingBag, text: '商品管理', path: '/products' },
    ]
  },
  {
    title: '会员管理',
    items: [
      { icon: Users, text: '会员', path: '/members' },
      { icon: ScrollText, text: '会员卡', path: '/memberships' },
      { icon: ScrollText, text: '体测表模板', path: '/fitness-assessment' },
    ]
  },
  {
    title: '场馆管理',
    items: [
      { icon: Users, text: '工作人员', path: '/staff' },
      { icon: Users, text: '教练', path: '/coaches' },
      { icon: Target, text: '销售目标管理', path: '/sales-targets' },
      { icon: Bot, text: '群机器人', path: '/bot' },
      { icon: GraduationCap, text: '课程开发', path: '/course-development' },
    ]
  },
  {
    title: '财务与报表',
    items: [
      { icon: PiggyBank, text: '营业流水', path: '/transactions' },
      { icon: BarChart3, text: '可视化报表', path: '/reports' },
      { icon: ScrollText, text: '财务对账', path: '/financial-reconciliation' },
    ]
  },
  {
    title: '系统设置',
    items: [
      { icon: Building2, text: '场馆信息', path: '/facility-info' },
      { icon: Warehouse, text: '场地', path: '/venues' },
      { icon: Dumbbell, text: '更衣柜管理', path: '/lockers' },
      { icon: Settings, text: '通知', path: '/notifications' },
      { icon: ScrollText, text: '数据记录', path: '/data-records' },
    ]
  },
  {
    title: '数据分析',
    items: [
      { icon: Brain, text: '数据实验室', path: '/data-lab' },
      { icon: BarChart3, text: '销售收入分析', path: '/sales-analysis' },
      { icon: BarChart3, text: '会员数据分析', path: '/member-analysis' },
      { icon: BarChart3, text: '团课数据分析', path: '/class-analysis' },
      { icon: BarChart3, text: '私教数据分析', path: '/pt-analysis' },
    ]
  },
  {
    title: '其他',
    items: [
      { icon: Smartphone, text: '会员端&小程序', path: '/client-app' },
      { icon: BadgePercent, text: '运营推广', path: '/marketing' },
    ]
  },
];