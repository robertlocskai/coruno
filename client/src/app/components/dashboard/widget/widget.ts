import { Component, Input } from '@angular/core';

export type WidgetType = 'bar' | 'pie' | 'line';

export interface WidgetDataBase {
  id: string;
  title: string;
  type: WidgetType;
  description?: string;
}

export interface BarWidgetData extends WidgetDataBase {
  type: 'bar';
  labels: string[];
  datasets: {
    label: string;
    values: number[];
    color?: string;
  }[];
}

export interface PieWidgetData extends WidgetDataBase {
  type: 'pie';
  labels: string[];
  values: number[];
  colors?: string[];
}

export interface LineWidgetData extends WidgetDataBase {
  type: 'line';
  labels: string[];
  datasets: {
    label: string;
    values: number[];
    color?: string;
  }[];
}

export type WidgetData = BarWidgetData | PieWidgetData | LineWidgetData;

@Component({
  selector: 'cno-widget',
  imports: [],
  templateUrl: './widget.html',
  styleUrl: './widget.scss',
})
export class Widget {
  @Input() data!: WidgetData;
}
