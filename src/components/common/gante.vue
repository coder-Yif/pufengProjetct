<template>
    <div id="container" />
</template>

<style>
</style>

<script>
import { Chart } from '@antv/g2';

function init() {
    const data = [
        { task: '道路施工', startTime: '2020-04-18', endTime: '2020-06-18', status: 0 },
        { task: '停车场改造', startTime: '2020-06-18', endTime: '2020-07-18', status: 0 },
        { task: '停车场改造', startTime: '2020-07-18', endTime: '2020-08-18', status: 1 },
        { task: '划车位', startTime: '2020-08-18', endTime: '2020-09-18', status: 1 },
        { task: '排水施工', startTime: '2020-06-19', endTime: '2020-7-18', status: 0 },
        { task: '弱电施工', startTime: '2020-5-18', endTime: '2020-7-18', status: 0 },
        { task: '弱电施工', startTime: '2020-7-18', endTime: '2020-11-18', status: 1 },
        { task: '网络机房', startTime: '2020-6-20', endTime: '2020-7-18', status: 0 },
        { task: '网络机房', startTime: '2020-7-18', endTime: '2020-8-18', status: 1 },
        { task: '电梯施工', startTime: '2020-11-18', endTime: '2021-01-18', status: 1 },
    ];

    const values = ['已完成', '未完成'];

    data.forEach((obj) => {
        obj.range = [obj.startTime, obj.endTime];
        obj.status = values[obj.status];
    });

    const chart = new Chart({
        container: 'container',
        autoFit: true,
        height: 500
    });

    chart.data(data);

    chart.coordinate().transpose().scale(1, -1);

    chart.scale('range', {
        type: 'time',
        nice: true
    });

    chart.tooltip({
        showMarkers: false
    });
    chart.interaction('element-active');
    chart
        .interval()
        .position('task*range')
        .color('status', ['#2FC25B', '#F04864'])
        .animate({
            appear: {
                animation: 'scale-in-x'
            }
        });

    chart.render();
}

export default {
    name: 'Gantt',
    data() {
        return {};
    },
    mounted: function () {
      init()
    }
};
</script>
