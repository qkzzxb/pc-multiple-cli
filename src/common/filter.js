import Vue from 'vue'
import moment from 'moment'
moment.locale('zh-cn');
Vue.filter('showtime', function(value) {
    return (moment(Number(value)).format('ll'))
})
Vue.filter('statusOut', function(status) {
    switch(status){
        case 1:
          return '进行中'
        break;
        case 2:
          return '已结束'
        break;
        case 3:
          return '报名中'
        break;
    }
})
Vue.filter('orderStatus', function(status) {
  switch(status){
      case 1:
        return '待付款'
      break;
      case 2:
        return '已关闭'
      break;
      case 3:
        return '已报名'
      break;
      case 4:
        return '退款确认中'
      break;
      case 5:
        return '已退款'
      break;
      case 6:
        return '已报名'
      break;
      case 7:
        return '已完成'
      break;
  }
})