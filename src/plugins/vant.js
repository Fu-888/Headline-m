// vant组件
import { Button } from 'vant'
const ele = [Button]

export default function (Vue) {
  ele.forEach((item) => Vue.use(item))
}
