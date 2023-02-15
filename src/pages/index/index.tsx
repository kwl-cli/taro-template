import { View } from "@tarojs/components";
import {
  Button,
} from "@nutui/nutui-react-taro";
import Taro from '@tarojs/taro'
import './index.scss'

const Index = () => {
  const toUrl = () => {
    Taro.navigateTo({url: '/pages/detail/index?id=1'})
  }
  return <View>
    <Button type="primary" onClick={toUrl}>qwe</Button>
  </View>
}
export default Index