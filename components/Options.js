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
            lineWidth: 1
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
            // height: "150px",
            backgroundColor: "#16191B"
        },
        title: null,
        xAxis: {
            categories: ['100%', '100%', '100%']
        },
        yAxis: {
            categories: ['100%', '100%', '100%']
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            },
            series: {
                borderColor: '#16191B',
                borderWidth:3
            }
        },
        series: [{
            name: "",
            data: [1, 2, 3],
            color: "#4f92ff"
        }, {
            name: 'Jane',
            data: [2, 2, 3],
            color: "red"
        }, {
            name: 'Joe',
            data: [2, 2, 2],
            color: "blue"
        }, {
            name: 'Joe',
            data: [3, 4, 4],
            color: "#35fc95"
        }, {
            name: 'Joe',
            data: [3, 4, 4],
            color: "#70008c"
        }
        ]
    }


    return options
}
