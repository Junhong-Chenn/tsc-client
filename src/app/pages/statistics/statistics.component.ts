import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { NzTabChangeEvent } from 'ng-zorro-antd/tabs';
import {fromEvent, Subject} from "rxjs";
import {debounceTime, takeUntil} from "rxjs/operators";
import { StatisticsService } from 'src/app/services/statistics.service';
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
    private statisticsService: StatisticsService
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
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['Sep', 'Aug', 'Jul', 'Jun', 'May', 'Apr', 'Mar']
      },
      series: [
        {
          name: 'Physical Health',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
          name: 'Mental Health',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Substance Use',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Family Reunification',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
          name: 'Legal',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [820, 832, 901, 934, 1290, 1330, 951]
        },
        {
          name: 'Financial',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [150, 212, 155, 154, 181, 21, 233]
        },
        {
          name: 'Educational/Vocational',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [88, 183, 77, 154, 311, 77, 378]
        },
        {
          name: 'Social Security',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [67, 109, 68, 154, 176, 43, 141]
        },
        {
          name: 'Social Support',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [67, 81, 21, 154, 99, 50, 201]
        },
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
        top: '0%',
        left: 'left',
      },
      series: [
        {
          color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
          name: 'Closure Reason',
          type: 'pie',
          radius: ['40%', '65%'],
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
            {value: 20, name: 'Permanent Housing'},
            {value: 5, name: 'Incarcerated'},
            {value: 5, name: 'Passed Away'},
            {value: 6, name: 'Rule Violation'},
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
          name: 'Race/ Ethnicity',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
          data: [
            { value: 24, name: 'Black /African American' },
            { value: 20, name: 'American lndian/Native Alaskan' },
            { value: 27, name: 'Hispanic' },
            { value: 20, name: 'While / Caucasian' },
            { value: 5, name: 'Other' },
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

  getOption4() {
    this.statisticsService.getNetData().subscribe((graph: any) => {
      graph.nodes.forEach((node: any) => {
        node.label = {
          show: node.symbolSize > 30
        };
      });
      const option = {
        title: {
          text: '',
          subtext: 'Default layout',
          top: 'bottom',
          left: 'right'
        },
        tooltip: {},
        legend: [
          {
            // selectedMode: 'single',
            data: graph.categories.map(function (a: any) {
              return a.name;
            })
          }
        ],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            name: '',
            type: 'graph',
            layout: 'none',
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
              position: 'right',
              formatter: '{b}'
            },
            lineStyle: {
              color: 'source',
              curveness: 0.3
            },
            emphasis: {
              focus: 'adjacency',
              lineStyle: {
                width: 10
              }
            }
          }
        ]
      };
      this.echartsService.setEchartsOption(this.echartsContainerRight, option);
    });

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
