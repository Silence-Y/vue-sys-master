export default class Utils {
    // 当前日期
    static todayDate() {
        let dt, y, m, d, w
        dt = new Date()
        y = dt.getFullYear()
        m = dt.getMonth() + 1
        d = dt.getDate()
        w = dt.getDay()
        let weeks = ['天', '一', '二', '三', '四', '五', '六']
        return `${y}年${m.toString().padStart(2, '0')} 月 ${d.toString().padStart(2, '0')}日星期${weeks[w]}`
    }
}