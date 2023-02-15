import { Component } from 'react'
import './app.scss' 
import { ConfigProvider } from '@nutui/nutui-react-taro';
import request from './service/index'
import Taro from '@tarojs/taro';

const darkTheme = {
  nutuiBrandColor: 'green',
  nutuiBrandColorStart: 'green',
  nutuiBrandColorEnd: 'green',
}
class App extends Component {
  componentDidMount() {
  }

  componentDidShow() {
    const app = Taro.getApp()
    app.request = request
  }

  componentDidHide () {}

  render() {
    return <ConfigProvider theme={darkTheme}>{this.props.children}</ConfigProvider> 
  }
}
export default App
