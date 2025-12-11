/**
 * 日期工具函数
 */

/**
 * 格式化日期
 * @param {Date|string} date - 日期对象或日期字符串
 * @param {string} format - 格式模板，默认为 'YYYY-MM-DD'
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''

  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hours = String(d.getHours()).padStart(2, '0')
  const minutes = String(d.getMinutes()).padStart(2, '0')
  const seconds = String(d.getSeconds()).padStart(2, '0')

  return format
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds)
}

/**
 * 添加天数
 * @param {Date} date - 日期对象
 * @param {number} days - 要添加的天数
 * @returns {Date} 新的日期对象
 */
export function addDays(date, days) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

/**
 * 减去天数
 * @param {Date} date - 日期对象
 * @param {number} days - 要减去的天数
 * @returns {Date} 新的日期对象
 */
export function subtractDays(date, days) {
  return addDays(date, -days)
}

/**
 * 添加月数
 * @param {Date} date - 日期对象
 * @param {number} months - 要添加的月数
 * @returns {Date} 新的日期对象
 */
export function addMonths(date, months) {
  const result = new Date(date)
  result.setMonth(result.getMonth() + months)
  return result
}

/**
 * 添加年数
 * @param {Date} date - 日期对象
 * @param {number} years - 要添加的年数
 * @returns {Date} 新的日期对象
 */
export function addYears(date, years) {
  const result = new Date(date)
  result.setFullYear(result.getFullYear() + years)
  return result
}

/**
 * 验证日期字符串是否有效
 * @param {string} dateString - 日期字符串
 * @returns {boolean} 是否为有效日期
 */
export function isValidDate(dateString) {
  const date = new Date(dateString)
  return !isNaN(date.getTime())
}

/**
 * 判断是否为周末
 * @param {Date} date - 日期对象
 * @returns {boolean} 是否为周末
 */
export function isWeekend(date) {
  const d = new Date(date)
  const day = d.getDay()
  return day === 0 || day === 6
}

/**
 * 获取两个日期之间的天数差
 * @param {Date} date1 - 第一个日期
 * @param {Date} date2 - 第二个日期
 * @returns {number} 天数差
 */
export function getDaysDiff(date1, date2) {
  const d1 = new Date(date1)
  const d2 = new Date(date2)
  const diffTime = Math.abs(d2 - d1)
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

/**
 * 判断日期是否在指定范围内
 * @param {Date} date - 要检查的日期
 * @param {Date} startDate - 开始日期
 * @param {Date} endDate - 结束日期
 * @returns {boolean} 是否在范围内
 */
export function isDateInRange(date, startDate, endDate) {
  const d = new Date(date)
  const start = new Date(startDate)
  const end = new Date(endDate)
  return d >= start && d <= end
}

/**
 * 获取指定日期的开始时间（00:00:00）
 * @param {Date} date - 日期对象
 * @returns {Date} 当天开始时间的日期对象
 */
export function getStartOfDay(date) {
  const result = new Date(date)
  result.setHours(0, 0, 0, 0)
  return result
}

/**
 * 获取指定日期的结束时间（23:59:59）
 * @param {Date} date - 日期对象
 * @returns {Date} 当天结束时间的日期对象
 */
export function getEndOfDay(date) {
  const result = new Date(date)
  result.setHours(23, 59, 59, 999)
  return result
}
