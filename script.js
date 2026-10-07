
// colors used on chart

const pink = "#ff4fa3";
const purple = "#a855f7";
const orange = "#ff8a4c";
const peach = "#ffc0a3";
const darkPink = "#c83280";


// change default chart.js font colors

Chart.defaults.color = "#8f8993";

Chart.defaults.font.family =
  "Arial, Helvetica, sans-serif";



//top 15 artists
// artist names

const artists = [
  "John Summit",
  "Zedd",
  "ISOxo",
  "Calvin Harris",
  "Knock2",
  "Don Toliver",
  "The Weeknd",
  "Rauw Alejandro",
  "Justin Bieber",
  "Ariana Grande",
  "Chase Atlantic",
  "Karol G",
  "Tate McRae",
  "Bruno Mars",
  "Morgan Wallen"
];


// estimated minutes listened per month

const artistMinutes = [
  1050,
  820,
  740,
  680,
  620,
  510,
  470,
  430,
  390,
  350,
  310,
  280,
  250,
  220,
  180
];


// edm artists colors

const artistColors = [
  pink,       // John Summit
  purple,     // Zedd
  orange,     // ISOxo
  pink,       // Calvin Harris
  purple,     // Knock2

  "#693a59",
  "#59314c",
  "#4d2a41",
  "#402336",
  "#3d2233",
  "#3b2131",
  "#381f2f",
  "#361d2d",
  "#331c2a",
  "#331c2a"
];


// Find canvas

const artistCanvas =
  document.getElementById("artistChart");


// Create chart

new Chart(artistCanvas, {

  type: "bar",

  data: {

    labels: artists,

    datasets: [
      {
        label: "Estimated Minutes",

        data: artistMinutes,

        backgroundColor: artistColors,

        borderRadius: 10,

        borderSkipped: false
      }
    ]

  },


  options: {

    responsive: true,

    maintainAspectRatio: false,

    indexAxis: "y",


    plugins: {

      legend: {
        display: false
      },


      tooltip: {

        backgroundColor: "#18151c",

        titleColor: "#ffffff",

        bodyColor: "#ff8ac4",

        padding: 14,

        displayColors: false,


        callbacks: {

          label: function(context) {

            return (
              context.raw +
              " estimated minutes / month"
            );

          }

        }

      }

    },


    scales: {

      x: {

        beginAtZero: true,

        grid: {
          color: "#211e25"
        },

        border: {
          display: false
        },

        ticks: {
          color: "#6f6973"
        },

        title: {
          display: true,
          text: "Estimated Minutes Listened",
          color: "#77727c"
        }

      },


      y: {

        grid: {
          display: false
        },

        border: {
          display: false
        },

        ticks: {
          color: "#d2ccd5",
          font: {
            size: 12
          }
        }

      }

    }

  }

});




// 2. When I listen


const timeLabels = [
  "Morning",
  "Afternoon",
  "Evening",
  "Night"
];


const timePercentages = [
  30,
  50,
  15,
  5
];


const timeCanvas =
  document.getElementById("timeChart");


new Chart(timeCanvas, {

  type: "doughnut",

  data: {

    labels: timeLabels,

    datasets: [
      {

        data: timePercentages,

        backgroundColor: [
          purple,
          pink,
          orange,
          "#513046"
        ],

        borderWidth: 0,

        hoverOffset: 15

      }
    ]

  },


  options: {

    responsive: true,

    maintainAspectRatio: false,

    cutout: "72%",


    plugins: {

      legend: {

        position: "bottom",

        labels: {

          color: "#aaa4ad",

          padding: 20,

          usePointStyle: true,

          pointStyle: "circle"

        }

      },


      tooltip: {

        backgroundColor: "#18151c",

        padding: 14,

        callbacks: {

          label: function(context) {

            return (
              context.label +
              ": " +
              context.raw +
              "%"
            );

          }

        }

      }

    }

  }

});




// 3. genre chart


// each bubble has:
// x = horizontal position
// y = vertical position
// r = bubble radius


const genreCanvas =
  document.getElementById("genreChart");


new Chart(genreCanvas, {

  type: "bubble",


  data: {

    datasets: [

      {

        label: "EDM — 45%",

        data: [
          {
            x: 4,
            y: 6,
            r: 95
          }
        ],

        backgroundColor:
          "rgba(255, 79, 163, 0.80)"

      },


      {

        label: "Pop — 20%",

        data: [
          {
            x: 6.5,
            y: 5,
            r: 70
          }
        ],

        backgroundColor:
          "rgba(168, 85, 247, 0.80)"

      },


      {

        label: "R&B / Hip-Hop — 15%",

        data: [
          {
            x: 5.7,
            y: 7.5,
            r: 62
          }
        ],

        backgroundColor:
          "rgba(255, 138, 76, 0.80)"

      },


      {

        label: "Reggaeton / Latin — 12%",

        data: [
          {
            x: 7.5,
            y: 7,
            r: 57
          }
        ],

        backgroundColor:
          "rgba(255, 192, 163, 0.80)"

      },


      {

        label: "Alternative — 5%",

        data: [
          {
            x: 3,
            y: 3.4,
            r: 45
          }
        ],

        backgroundColor:
          "rgba(200, 50, 128, 0.75)"

      },


      {

        label: "Country — 3%",

        data: [
          {
            x: 7.8,
            y: 3.4,
            r: 38
          }
        ],

        backgroundColor:
          "rgba(130, 72, 112, 0.75)"

      }

    ]

  },


  options: {

    responsive: true,

    maintainAspectRatio: false,


    plugins: {

      legend: {

        position: "bottom",

        labels: {

          color: "#aaa4ad",

          padding: 20,

          usePointStyle: true,

          pointStyle: "circle"

        }

      },


      tooltip: {

        backgroundColor: "#18151c",

        padding: 14,

        displayColors: false,


        callbacks: {

          label: function(context) {

            return context.dataset.label;

          }

        }

      }

    },


    scales: {

      x: {

        min: 0,
        max: 10,

        display: false

      },


      y: {

        min: 0,
        max: 10,

        display: false

      }

    }

  }

});
