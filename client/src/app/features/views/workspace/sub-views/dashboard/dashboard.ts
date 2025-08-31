import { Component } from '@angular/core';
import {
  Layout,
  LayoutButton,
} from '../../../../../components/shared/layout/layout';
import { Plus, PencilRuler, Bug } from 'lucide-angular';
import {
  StatisticCard,
  StatisticCardData,
} from '../../../../../components/dashboard/statistic-card/statistic-card';

@Component({
  selector: 'cno-dashboard',
  imports: [Layout, StatisticCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
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
}
