var currentYear = '';



//30 years
var filter30yrs = [2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,
    2043,2045,2046,2050,2052,2055,2056,2060,2061,2065,2069]

var currentStartYear = filter30yrs[0];
var currentEndYear = filter30yrs[filter30yrs.length - 1];

filter30yrs.forEach((item, index) => {
    $('.nav').append(`<div class="nav-item">
        <a class="nav-link nav-link_${item} badge bg-secondary p-3" data-val="${item}" href="#">${item}</a>
    </div>`)
})

//year of each expense datapoint
var years = [2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023,
    2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2024, 2024, 2024,
    2024, 2024, 2024, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2026, 2026,
    2026, 2026, 2026, 2026, 2026, 2026, 2026, 2026, 2027, 2027, 2027, 2027, 2028, 2028,
    2028, 2028, 2028, 2028, 2029, 2029, 2029, 2030, 2030, 2030, 2030, 2030, 2030, 2030,
    2030, 2030, 2030, 2030, 2031, 2031, 2032, 2033, 2034, 2035, 2035, 2036, 2036, 2037,
    2038, 2038, 2038, 2039, 2039, 2039, 2039, 2040, 2040, 2040, 2040, 2040, 2040, 2040,
    2040, 2040, 2041, 2041, 2041, 2042, 2043, 2043, 2043, 2043, 2045, 2045, 2045, 2045,
    2045, 2045, 2045, 2045, 2045, 2045, 2045, 2046, 2050, 2052, 2055, 2055, 2056, 2060,
    2060, 2060, 2061, 2061, 2065, 2065, 2065, 2069, 2069]

//expense datapoints
var total = [7.210000, 20.600000, 477.420000, 19.570000, 558388.340000, 4529.860000, 26212.480000, 515000.000000,
    663.050000, 901.770000, 318.280000, 9164.000000, 8275.020000, 2.060000, 2.060000, 190080.870000, 17380.100000,
    867861.520000, 546.360000, 914.130000, 1.030000, 4.120000, 4774.100000, 1.060000, 3802.480000, 16350.000000,
    4512.880000, 31800.000000, 574652.080000, 590915.810000, 2194.740000, 6007.740000, 2.190000, 65400.000000,
    25831.500000, 32700.000000, 7208.370000, 1.090000, 22.510000, 33903.390000, 1825.880000, 25193.310000,
    67800.000000, 67737.180000, 3.380000, 180264.000000, 2434.500000, 612600.800000, 628864.540000,
    69600.000000, 17850.000000, 34802.320000, 35714.280000, 1.190000, 122.990000, 15.470000,
    71400.000000, 645128.270000, 666813.260000, 2.460000, 8036.000000, 652.380000, 1.270000,
    19500.000000, 33974.400000, 1.270000, 269.830000, 991.040000, 1109.060000, 47951.400000,
    744172.550000, 193584.070000, 818740.260000, 134.390000, 843932.270000, 869124.280000,
    900614.290000, 925806.290000, 2200.800000, 828176.680000, 950998.300000, 982488.310000,
    1007680.320000, 11569.600000, 3123.900000, 510.730000, 1039170.330000, 13.240000,
    885.300000, 15.300000, 17.000000, 3419.390000, 3.400000, 78912.000000, 1070660.340000,
    61786.530000, 17885.700000, 701.400000, 1102150.350000, 14.030000, 323591.030000,
    1139938.360000, 3293.800000, 3.720000, 858.480000, 536.480000, 1138.480000, 86.840000,
    406.560000, 11.820000, 5152.810000, 711.480000, 45674.280000, 1016.400000, 24718.240000,
    508.200000, 3309.280000, 7074.260000, 9544.140000, 2450.000000, 13.250000, 57986.700000,
    1088031.100000, 4275.480000, 12.300000, 277116.000000, 58716.000000, 8127012.660000,
    396522.000000, 1370356.650000, 49.900000, 870780.390000, 80997.000000];

var items = ["Asphalt - Streets - Overlay/Replace", "Backflow Valves", "Bollards", "Chlorinator",
    "Debt Service", "Coping", "Fencing (Wood)", "General Landscape",
    "Interior", "Heating", "Ventilation & Air Conditioning", "Lighting - Exterior Misc",
    "Paint - Exterior", "Park Area - Benches", "Pool - Heater", "Pool - Pump",
    "Public Sidewalk", "Replastering. Repair or Maintenance (Stucco)", "Retaining Walls",
    "Signs", "Solar System", "Spa - Filter", "Street Light Pole Kit", "Street Light Poles",
    "Spa - Filter", "Tile Flooring", "Sewer", "Paint - Exterior", "Irrigation Controller",
    "Debt Service", "Debt Service", "5 Year Load Test", "Gym Equipment", "Heat Pump Replace",
    "General Landscape", "Fence - Repair", "Irrigation Controller",
    "Parking Bumpers", "Pool - Pump", "Plants", "Irrigation Controller",
    "Landscape Path Lights", "Concrete - Repair", "General Landscape",
    "Asphalt - Seal Coat", "Asphalt - Speed Bumps - Striping", "Asphalt - Streets - Overlay/Replace",
    "Bollards", "Debt Service", "Debt Service", "General Landscape", "Sewer",
    "Irrigation Controller", "Irrigation Controller", "HVAC", "Sewer",
    "Solar System", "General Landscape", "Debt Service", "Debt Service",
    "Gym Equipment", "Tennis Court Repave", "Trash Can", "Water Heater", "Sewer", "Replastering. Repair or Maintenance (Stucco)",
    "Irrigation Controller", "Interior", "Coping", "Drinking Fountain",
    "Fence (Iron)", "Debt Service", "Asphalt - Streets - Overlay/Replace",
    "Debt Service", "Sewer", "Debt Service", "Debt Service", "Debt Service",
    "Debt Service", "Interior", "Concrete - Wall", "Debt Service", "Debt Service",
    "Debt Service", "Cyclone Gate", "Fencing (Wood)", "General Landscape",
    "Debt Service", "Backflow Valves", "Speed Bumps", "Speed Bumps",
    "Street Light Poles", "Lighting - Exterior Misc", "Backflow Valves",
    "Concrete - Decking", "Debt Service", "Gutters", "Interior", "Electric Exit Light Signs",
    "Debt Service", "HVAC", "Public Sidewalk", "Debt Service", "Composition Shingle",
    "Appliances - Refridgerator", "Shutters Replace", "Roofing - Downspouts",
    "Roofing - Downspouts", "Solar System", "Sewer", "Restroom - Partitions",
    "Toilet", "Urinal Screens", "Composition Shingle", "Chimney Shrouds",
    "Coping", "Fire Safety System", "Gutters", "Retaining Walls", "Interior",
    "Fencing (Wood)", "Doors - Entry - Fiberglass", "Tile Flooring", "Retaining Walls",
    "Utility Doors", "Furnishing  - (Maintenance)", "Fence (Iron)", "Fence (Iron)",
    "Public Sidewalk", "Concrete - Decking", "Asphalt - Streets - Overlay/Replace",
    "Doors - Entry - Aluminum", "Concrete - Repair", "Tennis Court Repave"];

var chart = "";

$(document).on('click','.nav-link', function (event) {
    event.preventDefault();
    currentYear = $(this).data('val');
    $('.nav-link').removeClass('active');
    $('#all-year').removeClass('btn-primary');
    $('#all-year').addClass('btn-outline-primary');
    $(this).addClass('active');
    setChart();
})


$(document).on('click','#all-year', function (event) {
    event.preventDefault();

    if(!currentYear) {
        // Already all are showed
        return false;
    }
    currentYear = '';
    $('.nav-link').removeClass('active');
    $(this).removeClass('btn-outline-primary');
    $(this).addClass('btn-primary');
    setChart();
})



function setChart() {
    console.log('Render chart for: ' + currentYear)
    let yearData = [];
    let yearTotalData = [];
    let itemData = [];

    const isUniqueYear = currentStartYear === currentEndYear;

    if(isUniqueYear) {
        years.map((item, index) => {
            if(item == currentStartYear) {
                console.log('current start year');
                yearData.push(item);
                yearTotalData.push(total[index]);
                itemData.push(items[index]);
            }
        })
    } else {
        for(var i= 0; i < years.length; i++) {
            if(years[i] >= currentStartYear && years[i] <= currentEndYear) {
                var newYearSum = total[i];
                var newYear = years[i];
                var isAlreadyCalculated = false;
                for (var j = 0; j < yearData.length; j++) {
                    if (newYear === yearData[j]) {
                        isAlreadyCalculated = true;
                        break;
                    }
                }
                if (!isAlreadyCalculated) {
                    for (var k = 0; k < years.length; k++) {
                        if (i !== k && newYear === years[k]) {
                            newYearSum += total[k];
                        }
                    }
                    yearData.push(newYear);
                    yearTotalData.push(newYearSum);
                }
            }
        }
    }

    const yearTitle = isUniqueYear ? currentStartYear : currentStartYear + " - " + currentEndYear;
    $('.year').html(yearTitle);
    var options = {
        // expandOnClick: false,
        /*plotOptions: {
            pie: {
                customScale: 1
            }
        },*/
        plotOptions:{
            pie:{
                customScale: 0.9,
                dataLabels:{
                    minAngleToShowLabel:0
                }
            }
        },
        series: yearTotalData,
        chart: {
            width: '100%',
            type: 'pie',
        },
        labels: yearData,
        /*responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300
                    },
                    legend: {
                        position: "bottom"
                    }
                }
            }
        ],*/
        fill: {
            colors: ['#FF00C8', '#f1122c', '#2574AB']
            // colors: ['#FF00C8', '#2574AB', '#f1122c', '#116c13']
            // colors: ['rgba(100,47,23,0.83)', '#116c13', '#d31fe7', '#54ef79']
        },
        /*theme: {
            monochrome: {
                enabled: true
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    offset: -5
                }
            },

        },*/
        title: {
            text: ""
        },
        tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const totalSum = series.reduce((res, i) => res + i, 0);
                const percent = (yearTotalData[seriesIndex] / totalSum) * 100;
                // console.log("series ---->", percent);
                return (
                    '<div class="arrow_box">' +
                    (currentYear === "" ?
                    "<span> Year: " +
                    yearData[seriesIndex] +
                    "</span>" :
                    "<span> Item: " +
                    itemData[seriesIndex] +
                    "</span>"
                    )+
                    "<br />" +
                    "<span> Total: $" +
                    formatCustomNumber(yearTotalData[seriesIndex]) +
                    "</span> <br />" +
                    "<span> Percent: " +
                    percent.toFixed(1) +
                    "%" +
                    "</span>" +
                    "</div>"
                );
            }
        },
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: {
                fontSize: '12px',
                fontWeight: 'bold',
                textAlign:'right !important'
            },
            formatter(val, opts) {
                const name = opts.w.globals.labels[opts.seriesIndex]
                // return [name, formatCustomNumber(opts.w.globals.series[opts.seriesIndex]), val.toFixed(1) + '%']
                return [(currentYear === '' ? name : itemData[opts.seriesIndex]), formatCustomNumber(opts.w.globals.series[opts.seriesIndex]), val.toFixed(1) + '%']
            }
        },
        legend: {
            show: false
        }
    };
    if(chart) {
        chart.destroy();
        chart = new ApexCharts(document.querySelector("#reserve"), options);
        chart.render();
    } else {
        chart = new ApexCharts(document.querySelector("#reserve"), options);
        chart.render();
    }
}
function formatCustomNumber(n){
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
}
setChart();
$(document).on('ready', function() {
    /*$(".center").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 8,
        slidesToScroll: 3,
        arrows:true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 9,
                infinite: true,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 5,
                infinite: true,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 5,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                infinite: true,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 4,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                infinite: true,
                arrows:false,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 4,
                infinite: true,
                arrows:false,
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 2,
                infinite: true,
                arrows:false,
            }
        }]

    });

    $('.slider').on('afterChange',function(event, slick, currentSlide){
        currentYear = filter30yrs[currentSlide];
        $('.nav-link').removeClass('active');
        $('#all-year').removeClass('btn-primary');
        $('#all-year').addClass('btn-outline-primary');
        $(`.nav-link_${currentYear}`).addClass('active');
        setChart();
    });*/

});

    (function () {
    'use strict';

    var init = function () {
        var slider = new rSlider({
            target: '#slider',
            values: filter30yrs,
            range: true,
            set: [currentStartYear, currentEndYear],
            onChange: function (vals) {
                // console.log(vals);
                const range = vals.split(",");
                currentStartYear = range[0]
                currentEndYear = range[1];
                currentYear = currentStartYear === currentEndYear ? currentStartYear : '';
                setChart();
            }
        });
    };
    window.onload = init;
})();
