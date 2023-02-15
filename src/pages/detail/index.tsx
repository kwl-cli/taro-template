import React from "react";
import { View } from "@tarojs/components";
import Taro, {useRouter} from "@tarojs/taro";
import './index.scss';

const Detail = () => {
    const router = useRouter()

    console.log(router)

    return <View className="container">
        详情组建
    </View>
}

export default Detail;