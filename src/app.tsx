import { Component } from 'react'
import './app.scss' 
import { ConfigProvider } from '@nutui/nutui-react-taro';

const darkTheme = {
  nutuiBrandColor: 'green',
  nutuiBrandColorStart: 'green',
  nutuiBrandColorEnd: 'green',
}
class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  render() {
    return <ConfigProvider theme={darkTheme}>{this.props.children}</ConfigProvider> 
  }
}
export default App
