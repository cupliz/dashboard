export const columnOptions = (data, type, width) => {
    const defaultOptions = {
        chart: {
            // renderTo: (options.chart && options.chart.renderTo) || this,
            backgroundColor: null,
            borderWidth: 0,
            type: type,
            margin: [2, 0, 2, 0],
            width: width,
            height: 20,
            style: {
                overflow: "visible"
            },
            // small optimalization, saves 1-2 ms each sparkline
            skipClone: false
        },
        title: {
            text: ""
        },
        credits: {
            enabled: false
        },
        series: [{
            data: data,
            pointStart: 1
        }],
        xAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickPositions: [],
            lineColor: 'transparent',
            lineWidth: 1,
        },
        yAxis: {
            endOnTick: false,
            startOnTick: false,
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            tickPositions: [0],
            lineColor: 'transparent'
        },
        legend: {
            enabled: false
        },
        tooltip: {
            hideDelay: 0,
            outside: true,
            shared: true
        },
        plotOptions: {
            series: {
                animation: false,
                lineWidth: 2,
                borderWidth: 0,
                shadow: false,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                marker: {
                    radius: 1,
                    states: {
                        hover: {
                            radius: 2
                        }
                    }
                },
                fillOpacity: 0.25
            },
            column: {
                color: '#3BD445',
                negativeColor: "#C11B12",
                borderColor: "none"
            },
            area: {
                color: '#53fc9f',
                borderColor: "none"
            }
        },
    };
    return defaultOptions
}

export const lineOptions = (categories, data1, data2) => {
    const options = {
        title: { text: null },
        chart: {
            height: "150px",
            backgroundColor: "#16191B"
        },
        series: [
            {
                name: "",
                lineColor: "#103FCF",
                data: data1
            },
            {
                name: "",
                lineColor: "#39CC42",
                data: data2
            }
        ],
        xAxis: [
            {
                type: "category",
                categories,
                title: {
                    text: null
                }
            }
        ],
        yAxis: {
            tickInterval: 100,
            max: 200,
            min: 0,
            title: {
                text: null
            }
        },
        plotOptions: { line: { marker: { enabled: false } } },
        credits: { enabled: false }
    };
    return options
}

export const highchartsOptions = () => {
    const options = {
        chart: {
            type: 'column',
            backgroundColor: "#16191B"
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
            },
        title: null,
        xAxis: {
            categories: ['100%', '100%', '100%'],
            lineColor: '#16191B',
            lineWidth: 1,
            floor: 0,
        },
        yAxis: {
            gridLineColor: '#16191B',
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickPositions: [],
            lineColor: 'transparent',
        },
        plotOptions: {
            column: {
                stacking: 'percent',
            },
            series: {
                borderColor: '#16191B',
                borderWidth: 2,
                groupPadding: -0.12,
                enableMouseTracking: false,
                stacking: 'percent'
            },
            dataLabels: {
                enabled: false
            }
        },
        series: [{
            data: [0.3, 0.4, 0.6],
            color: "#4f92ff",
        }, {
            data: [0.99, 0.99, 0.99],
            color: "red"
        }, {
            data: [0.98, 0.98, 0.98],
            color: "blue"
        }, {
            data: [6, 4, 3],
            color: "#35fc95"
        }, {
            data: [0.9, 1, 0.99],
            color: "#70008c"
        }]
    }


    return options
}
