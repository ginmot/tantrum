

$(document).ready(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: false
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -90,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: false
            }
        },
        legend: false,
        tooltip: {

            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
            shared: true,
            useHTML: true
        },
        series: [{
            name: 'Perkamiausios prekės',
            data: [
                ['DELL LCD S2340L', 78870.11],
                ['Samsung Galaxy TAB PRO 10.1 ', 89211.89],
                ['ASUS K551LB-XX155H ', 110110.50],
                ['GOLLA Laptop G Bag DELTA 11.6 ', 87520.25],
                ['LOGITECH K400 LT', 70500.551],
                ['SAMSUNG SL-M2070', 47800.62],
                ['HP EliteBook Revolve 810', 100891.11],
                ['DELL Inspiron 660 MT Pentium', 79801.05],
                ['DELL WM123 WIRELESS', 34504.00],
                ['Išr. opt. įrenginys SAMSUNG SLIM', 69901,12],
                ['TRUST UR DUGA HEADPHONE', 25017.17],
                ['Komp. kolonėlės F&D A510', 38912.78],
                ['Planš. komp. Estar Grand HD Quad 10,1', 69999.99]
            ]
        }]
    });

    $('#clientsChart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: false
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            min: 0,
            title: {
                text: false
            }
        },
        legend: false,
        tooltip: {

            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
            shared: true,
            useHTML: true
        },
        series: [{
            name: 'Perkamiausios prekės',
            data: [
                ['Jonas Petraitis', 1089.11],
                ['Aldona Kumžaitienė', 5211.89],
                ['Petras Stulginskis', 3110.50],
                ['Stasė Girinkienė', 2520.25],
                ['Tomas Gailius', 8500.551],
                ['Julijus Šalčininkas', 6800.62],
                ['Agnė Boraitė', 3891.11],
                ['Jonas Kazlauskas', 5120.10],
                ['Justė Sakalauskienė', 5812.89],
                ['Darius Šimaitis', 3991.12]
            ]
        }]
    });

    $('#salesChart').highcharts({
        chart: {
            reflow: true
        },
        title: {
            text: false
        },
        tooltip: {

            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
            shared: true,
            useHTML: true
        },
        xAxis: {
            categories: ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis']
        },
        series: [
            {
                type: 'column',
                name: 'Mėnesinės Pajamos',
                color: '#90cc58',
                data: [51250, 45000, 79800, 72510, 61900, 81810, 55340, 72110, 89000, 93130, 99910, 100910]
            },
            {
                type: 'line',
                name: 'Planuotos pajamos',
                data: [50000, 55000, 60000, 72000, 69000, 80000, 55000, 72000, 90000, 92000, 98000, 97000],
                color: '#e73c3c',
                marker: {
                    lineWidth: 2,
                    lineColor: '#e73c3c',
                    fillColor: 'white'
                }
            }
        ]
    });
});