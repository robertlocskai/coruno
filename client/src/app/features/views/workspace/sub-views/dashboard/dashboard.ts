import { Component } from '@angular/core';
import {
  Layout,
  LayoutButton,
} from '../../../../../components/shared/layout/layout';
import {
  Plus,
  PencilRuler,
  Bug,
  LucideAngularModule,
  SquarePlus,
  Grid2x2X,
} from 'lucide-angular';
import {
  StatisticCard,
  StatisticCardData,
} from '../../../../../components/dashboard/statistic-card/statistic-card';
import {
  WidgetData,
  Widget,
} from '../../../../../components/dashboard/widget/widget';

@Component({
  selector: 'cno-dashboard',
  imports: [Layout, StatisticCard, LucideAngularModule, Widget],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  SquarePlus = SquarePlus;
  Grid2x2X = Grid2x2X;

  buttons: LayoutButton[] = [
    {
      text: 'Add new widget',
      color: 'secondary',
      icon: Plus,
    },
  ];

  statCards: StatisticCardData[] = [
    {
      title: 'Projects',
      value: '2',
      icon: PencilRuler,
    },
    {
      title: 'Issues',
      value: '11',
      icon: Bug,
    },
  ];

  widgets: WidgetData[] = [];
}
