import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core'
import { CoreConfigService } from '@core/services/config.service';
import { CoreTranslationService } from '@core/services/translation.service';
import { colors } from 'app/colors.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

  // Public
  public data: any;
  public isAdmin: boolean;
  public contentHeader: object

  // Private
  private $barColor = '#f3f3f3';
  private $trackBgColor = '#EBEBEB';
  private $textMutedColor = '#b9b9c3';
  private $budgetStrokeColor2 = '#dcdae3';
  private $goalStrokeColor2 = '#51e5a8';
  private $textHeadingColor = '#5e5873';
  private $strokeColor = '#ebe9f1';
  private $earningsStrokeColor2 = '#28c76f66';
  private $earningsStrokeColor3 = '#28c76f33';

  // Decorator
  @ViewChild('statisticsLineChartRef') statisticsLineChartRef: any

  public statisticsLine: any;
  public static data: any;

  constructor(
      private _coreConfigService: CoreConfigService,
      private _coreTranslationService: CoreTranslationService
  ) {
    this.isAdmin = true;
    this.statisticsLine = {
      chart: {
        height: 70,
        type: 'line',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      grid: {
        // show: true,
        borderColor: this.$trackBgColor,
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          // left: 0,
          // right: 0,
          top: -30,
          bottom: -10
        }
      },
      stroke: {
        width: 3
      },
      colors: [colors.solid.info],
      series: [
        {
          data: [0, 20, 5, 30, 15, 45]
        }
      ],
      markers: {
        size: 2,
        colors: colors.solid.info,
        strokeColors: colors.solid.info,
        strokeWidth: 2,
        strokeOpacity: 1,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: '#ffffff',
            strokeColor: colors.solid.info,
            size: 5
          }
        ],
        shape: 'circle',
        radius: 2,
        hover: {
          size: 3
        }
      },
      xaxis: {
        labels: {
          show: true,
          style: {
            fontSize: '0px'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false
      },
      tooltip: {
        x: {
          show: false
        }
      }
    };
    this.data = {
      subscribers_gained: {
        series: [
          {
            name: 'Subscribers',
            data: [28, 40, 36, 52, 38, 60, 55]
          }
        ],
        analyticsData: {
          subscribers: '92.6k'
        }
      },
      ordersRecevied: {
        series: [
          {
            name: 'Orders',
            data: [10, 15, 8, 15, 7, 12, 8]
          }
        ],
        analyticsData: {
          orders: '38.4k'
        }
      },
      avgSessions: {
        series: [
          {
            name: 'Sessions',
            data: [75, 125, 225, 175, 125, 75, 25]
          }
        ],
        analyticsData: {
          avgSessions: '2.7k',
          vsLastSevenDays: '+5.2%',
          goal: '$100000',
          goalProgressbar: 50,
          retention: '90%',
          retentionProgressbar: 60,
          users: '100k',
          usersProgressbar: 70,
          duration: '1yr',
          durationProgressbar: 90
        }
      },
      supportTracker: {
        series: [83],
        analyticsData: {
          tickets: 163,
          newTickets: 29,
          openTickets: 63,
          responseTime: '1d'
        }
      },
      salesLastSixMonths: {
        series: [
          {
            name: 'Sales',
            data: [90, 50, 86, 40, 100, 20]
          },
          {
            name: 'Visit',
            data: [70, 75, 70, 76, 20, 85]
          }
        ]
      },
      statistics: {
        analyticsData: {
          sales: '230k',
          customers: '8.549k',
          products: '1.423k',
          revenue: '$9745'
        }
      },
      ordersChart: {
        series: [
          {
            name: '2020',
            data: [45, 85, 65, 45, 65]
          }
        ],
        analyticsData: {
          orders: '2,76k'
        }
      },
      profitChart: {
        series: [
          {
            data: [0, 20, 5, 30, 15, 45]
          }
        ],
        analyticsData: {
          profit: '6,24k'
        }
      },
      revenueReport: {
        earningExpenseChart: {
          series: [
            {
              name: 'Earning',
              data: [95, 177, 284, 256, 105, 63, 168, 218, 72]
            },
            {
              name: 'Expense',
              data: [-145, -80, -60, -180, -100, -60, -85, -75, -100]
            }
          ]
        },
        budgetChart: {
          series: [
            {
              data: [61, 48, 69, 52, 60, 40, 79, 60, 59, 43, 62]
            },
            {
              data: [20, 10, 30, 15, 23, 0, 25, 15, 20, 5, 27]
            }
          ]
        },
        analyticsData: {
          currentBudget: '$25,852',
          totalBudget: '56,800'
        }
      },
      goalOverview: {
        series: [83],
        analyticsData: {
          completed: '786,617',
          inProgress: '13,561'
        }
      }
    };
  }

  updateChart(item) {
    console.log(item.data);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Home',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Sample',
            isLink: false
          }
        ]
      }
    }

    // Subscribe to core config changes
    this._coreConfigService.getConfig().subscribe(config => {
      // If Menu Collapsed Changes
      if (
          (config.layout.menu.collapsed === true || config.layout.menu.collapsed === false) &&
          localStorage.getItem('currentUser')
      ) {
        setTimeout(() => {
          if (true) {
            // Get Dynamic Width for Charts
            this.statisticsLine.chart.width = this.statisticsLineChartRef?.nativeElement.offsetWidth;
          }
        }, 500);
      }
    });
  }

}