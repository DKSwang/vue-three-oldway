/*
 * @Author: xxuzhong.wang
 * @Date: 2021-02-02 14:02:22
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-02 14:04:59
 * @Description: 
 */
import mitt from 'mitt'

const bus = {}

const emitter = mitt()

bus.$on = emitter.on
bus.$off = emitter.off
bus.$emit = emitter.emit

export default bus