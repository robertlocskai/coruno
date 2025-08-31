import { Component, Input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

export interface StatisticCardData {
  title: string;
  value: string;
  icon?: LucideIconData;
}

@Component({
  selector: 'cno-statistic-card',
  imports: [LucideAngularModule],
  templateUrl: './statistic-card.html',
  styleUrl: './statistic-card.scss',
})
export class StatisticCard {
  @Input() data!: StatisticCardData;
}
