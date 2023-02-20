import { View } from "@tarojs/components";
import {
  Button,
} from "@nutui/nutui-react-taro";
import Taro from '@tarojs/taro'
import './index.scss'

const Index = () => {
  console.log(Taro.getApp())
  const toUrl = () => {
    Taro.navigateTo({url: '/pages/detail/index?id=1'})
  }
  return <View>
    <Button type="primary" onClick={toUrl}>qwe</Button>
    <Button type="primary" onClick={() => Taro.navigateTo({url: '/pages/formTemplate/index'})}>form表单实力</Button>
  </View>
}
export default Index