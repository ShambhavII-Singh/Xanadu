import { ApexOptions } from 'apexcharts';

export const TotalRevenueSeries = [
    {
        name: 'Last Month',
        data: [183, 124, 115, 85, 143, 143, 96],
    },

    {
        name: 'Running Month',
        data: [95, 84, 72, 44, 108, 108, 47],
    },
];

export const TotalRevenueOptions: ApexOptions = {
    chart: {
        type: 'bar',
        toolbar: {
            show: false,
        },
        background: "transparent",
    },

    theme: {
        mode: 'dark', 
        palette: 'palette1', 
        monochrome: {
            enabled: true,
            color: '#38b000',
            shadeTo: 'light',
            shadeIntensity: 0.85
        },
    },

    

    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: false,
            columnWidth: '55%',
        },
    },

    dataLabels: {
        enabled: false,
    },

    grid: {
        show: false,
    },

    stroke: {
        colors: ['transparent'],
        width: 4,
    },

    xaxis: {
        title: {
            text: 'Months',
            style: {
                color: "#65DE2D",
                fontSize: "12px",
                fontWeight: "normal"
            }
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        labels: {
            style: {
                colors: "#38b000",
                fontSize: "15px",
                fontWeight: "bold"
            }
        }
    },

    yaxis: {
        title: {
            text: '$ (thousand)',
            style: {
                color: "#65DE2D",
                fontSize: "12px",
                fontWeight: "normal"
            }
        },
        labels: {
            style: {
                colors: "#38b000",
                fontSize: "15px",
                fontWeight: "bold"
            }
        },
    },

    fill: {
        opacity: 1,
    },
    
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        labels: {
            colors: "#65DE2D",
        },
        itemMargin: {
            horizontal: 10,
        }
    },
    
    tooltip: {
        style: {
            fontSize: "12px",
        },
        y: {
            formatter(val: number) {
            return `$ ${val} thousands`;
            },
        },
    },
};