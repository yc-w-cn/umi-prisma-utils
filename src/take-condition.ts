/**
 * 构建查询函数
 * @param params // current=1&pageSize=10&name=123&showName=456
 * @param defines
 * [TA的参数，我的参数，条件]
 * const condition = takeCondition(body, [
 *    ['name', 'name', 'contains'],
 *    ['showName', 'showName', 'equals', 'raw'],
 *    ['deliveryDate', 'deliveryDate', 'equals', 'date']
 *  ])
 */
export const takeCondition = (params: any, defines: any[]) => {
  const result = {}
  defines.forEach((define) => {
    const [paramKey, databaseKey, conditionType, customType = 'raw'] = define
    if (customType === 'raw' && params && paramKey in params) {
      result[databaseKey] = {
        
        [conditionType]: valueSolver(params[paramKey])
      }
    }
    if (customType === 'date' && params && paramKey in params) {
      result[databaseKey] = {
        [conditionType]: new Date((params[paramKey]))
      }
    }
  })
  return result
}

export const valueSolver = (value: string) => {
  if (value === 'true') return true
  if (value === 'false') return false
  return value
}
