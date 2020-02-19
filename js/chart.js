$(function() {
  function line(ctx, type) {
    var myChart = new Chart(ctx, {
      // グラフの種類
      type: type,
      // 表示する情報
      data: {
        labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日'],
        datasets: [
          {
            label: '最高気温(度）',
            data: [35, 34, 37, 35, 34, 35, 34, 25],
            borderColor: "rgba(255,0,0,1)",
            backgroundColor: "rgba(0,0,0,0)"
          },
          {
            label: '最低気温(度）',
            data: [25, 27, 27, 25, 26, 27, 25, 21],
            borderColor: "rgba(0,0,255,1)",
            backgroundColor: "rgba(0,0,0,0)"
          }
        ],
      },
      // オプションの設定
      options: {
        title: {
          display: true,
          text: '気温（8月1日~8月7日）'
        },
        scales: {
          yAxes: [{
            ticks: {
              suggestedMax: 40,
              suggestedMin: 0,
              stepSize: 10,
              callback: function(value, index, values){
                return  value +  '度'
              }
            }
          }]
        },
      }
    });
  }

  function bar(ctx2, type2) {
    var myBarChart = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日'],
        datasets: [
          {
            label: 'A店 来客数',
            data: [62, 65, 93, 85, 51, 66, 47],
            backgroundColor: "rgba(219,39,91,0.5)"
          },{
            label: 'B店 来客数',
            data: [55, 45, 73, 75, 41, 45, 58],
            backgroundColor: "rgba(130,201,169,0.5)"
          },{
            label: 'C店 来客数',
            data: [33, 45, 62, 55, 31, 45, 38],
            backgroundColor: "rgba(255,183,76,0.5)"
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: '支店別 来客数'
        },
        scales: {
          yAxes: [{
            ticks: {
              suggestedMax: 100,
              suggestedMin: 0,
              stepSize: 10,
              callback: function(value, index, values){
                return  value +  '人'
              }
            }
          }]
        },
      }
    });
  }

  function circle(ctx3, type3) {
    var myPieChart = new Chart(ctx3, {
      type: 'pie',
      data: {
        labels: ["A型", "O型", "B型", "AB型"],
        datasets: [{
            backgroundColor: [
                "#BB5179",
                "#FAFF67",
                "#58A27C",
                "#3C00FF"
            ],
            data: [38, 31, 21, 10]
        }]
      },
      options: {
        title: {
          display: true,
          text: '血液型 割合'
        }
      }
    });
  }

  $(document).ready(function() {
    var ctx = $('#myChart').attr('id');
    var type = $('.lines').attr('value');
    line(ctx, type);

    var ctx2 = $('#myBar').attr('id');
    var type2 = $('.bar').attr('value');
    bar(ctx2, type2);

    var ctx3 = $('#myCircle').attr('id');
    var type3 = $('.cyCircle').attr('value');
    circle(ctx3, type3);
  });


});
