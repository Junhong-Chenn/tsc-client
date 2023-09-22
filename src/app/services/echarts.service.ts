import { ElementRef, Injectable, TemplateRef } from '@angular/core';
import * as echarts from "echarts";

@Injectable({
  providedIn: 'root'
})
export class EchartsService {

  constructor() { }

  setEchartsOption(elementRef: ElementRef, option: any) {
    const echartsInstance = echarts.init(elementRef?.nativeElement);
    echartsInstance.setOption(option);
  }

  clearEcharts(elementRef: ElementRef) {
    const echartsInstance = echarts.getInstanceByDom(elementRef.nativeElement);
    if (echartsInstance) {
      echartsInstance.dispose();
    }
  }

  resizeEcharts(elementRef: ElementRef) {
    const echartsInstance = echarts.getInstanceByDom(elementRef.nativeElement);
    if (echartsInstance) {
      echartsInstance.resize();
    }
  }

}
