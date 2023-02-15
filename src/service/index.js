import Taro from "@tarojs/taro";

// const baseUrl = "http://192.168.10.55:30083";
const baseUrl = "";

// 请求拦截器
const interceptor = function (chain) {
  const requestParams = chain.requestParams;
  const { method, data, url } = requestParams;

  console.log(`http ${method || "GET"} --> ${url} data: `, data);

  return chain.proceed(requestParams).then((res) => {
    return res;
  });
};
Taro.addInterceptor(interceptor);

const request = (
  url,
  method = "GET",
  data = {},
  options = { showLoading: true }
) => {
  const { showLoading, ...rest } = options;
  return new Promise((resolve, reject) => {
    if (showLoading) Taro.showLoading({ title: "加载中..." });
    const params = { url: `${baseUrl}${url}`, method, data, ...rest };
    if (method === "FORM") {
      params.method = "POST";
      params.header = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
    }
    Taro.request({
      ...params,
      success: (res) => {
        Taro.hideLoading();
        if (res.code === 1) {
          resolve(res.data);
        }
      },
      fail: (res) => {
        Taro.hideLoading();
        reject(res);
      },
    });
  });
};

export default request;
