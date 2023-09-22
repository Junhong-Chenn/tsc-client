import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { NzTabChangeEvent } from 'ng-zorro-antd/tabs';
import {fromEvent, Subject} from "rxjs";
import {debounceTime, takeUntil} from "rxjs/operators";
import {EchartsService} from "../../services/echarts.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, OnDestroy {
  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };
  index1 = 0;

  @ViewChild('echartsContainer') echartsContainer!: ElementRef;
  @ViewChild('echartsContainerLeft') echartsContainerLeft!: ElementRef;
  @ViewChild('echartsContainerMid') echartsContainerMid!: ElementRef;
  @ViewChild('echartsContainerRight') echartsContainerRight!: ElementRef;
  private destroy$ = new Subject<void>();
  constructor(
    private echartsService: EchartsService,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getOption1();
      this.getOption2();
      this.getOption3();
      this.getOption4();
    });

    const windowResize$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        takeUntil(this.destroy$)
      );

    windowResize$.subscribe(() => {
      this.echartsService.resizeEcharts(this.echartsContainer);
      this.echartsService.resizeEcharts(this.echartsContainerLeft);
      this.echartsService.resizeEcharts(this.echartsContainerMid);
      this.echartsService.resizeEcharts(this.echartsContainerRight);
    });
  }

  getOption1() { // 柱状图
    const option = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '2021', '2022', '2023'],
          ['Matcha Latte', 43.3, 58.8, 67.7],
          ['Milk Tea', 55.1, 70.4, 87.1],
          ['Cheese Cocoa', 60.4, 76.2, 88.5],
          ['Walnut Brownie', 72.4, 83.9, 94.1]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [
        { type: 'bar' }, { type: 'bar' }, { type: 'bar' }
      ]
    };

    this.echartsService.setEchartsOption(this.echartsContainer, option);
  }

  getOption2() { // 饼图
    const option = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '1%',
        left: 'center',
      },
      series: [
        {
          color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '12',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {value: 1048, name: '搜索引擎'},
            {value: 735, name: '直接访问'},
            {value: 580, name: '邮件营销'},
            {value: 484, name: '联盟广告'},
          ],
          animationType: 'scale',
          animationEasing: 'exponentialInOut',
          animationDelay: function () {
            return Math.random() * 100;
          },
        },
      ],
    };
    this.echartsService.setEchartsOption(this.echartsContainerLeft, option);
  }

  getOption3() { // 饼图 比例图
    const option = {
      tooltip: {
        trigger: 'item',
      },

      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
          data: [
            { value: 500, name: '电子产品' },
            { value: 310, name: '服装' },
            { value: 274, name: '化妆品' },
            { value: 400, name: '家居' },
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: 'radius',
          animationType: 'scale',
          animationEasing: 'exponentialInOut',
          animationDelay: function () {
            return Math.random() * 400;
          },
        },
      ],
    };

    this.echartsService.setEchartsOption(this.echartsContainerMid, option);
  }

  getOption4() { // 柱状图
    const option = {
      dataset: [
        {
          dimensions: ['name', 'age', 'profession', 'score', 'date'],
          source: [
            ['Hannah Krause', 41, 'Engineer', 314, '2011-02-12'],
            ['Zhao Qian', 20, 'Teacher', 351, '2011-03-01'],
            ['Jasmin Krause ', 52, 'Musician', 287, '2011-02-14'],
            ['Li Lei', 37, 'Teacher', 219, '2011-02-18'],
            ['Karle Neumann', 25, 'Engineer', 253, '2011-04-02'],
            ['Adrian Groß', 19, 'Teacher', '-', '2011-01-16'],
            ['Mia Neumann', 71, 'Engineer', 165, '2011-03-19'],
            ['Böhm Fuchs', 36, 'Musician', 318, '2011-02-24'],
            ['Han Meimei', 67, 'Engineer', 366, '2011-03-12']
          ]
        },
        {
          transform: {
            type: 'sort',
            config: { dimension: 'score', order: 'desc' }
          }
        }
      ],
      xAxis: {
        type: 'category',
        axisLabel: { interval: 0, rotate: 30 }
      },
      yAxis: {},
      series: {
        type: 'bar',
        encode: { x: 'name', y: 'score' },
        datasetIndex: 1
      }
    };

    this.echartsService.setEchartsOption(this.echartsContainerRight, option);
  }


  tabChange(event: NzTabChangeEvent) {
    console.log('event', event);

  }

  ngOnDestroy(): void {
    this.echartsService.clearEcharts(this.echartsContainer);
    this.echartsService.clearEcharts(this.echartsContainerLeft);
    this.echartsService.clearEcharts(this.echartsContainerMid);
    this.echartsService.clearEcharts(this.echartsContainerRight);
    this.destroy$.next();
    this.destroy$.complete();
  }



}
