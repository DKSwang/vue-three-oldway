/*
 * @Author: xxuzhong.wang
 * @Date: 2021-02-07 15:41:03
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-07 16:31:42
 * @Description: 
 */
module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off'
    }
}