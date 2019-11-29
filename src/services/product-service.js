/**
 * product-service.js Created by SmallFour on 2019/10/22/14:16
 */

// 第二个文件：M层

/*
* M : 数据
* V： 视图
* C： 业务逻辑层
* */

import HTTP from '../utils/http'
const _http = new HTTP()
class Product {
  // // list方法
  // list () {
  //   return _http.request({
  //     url: 'shop/goods/list'
  //   })
  // }
  // // detail方法
  // detail (productId) {
  //   return _http.request({
  //     type: 'post',
  //     url: 'shop/goods/detail',
  //     data: {
  //       id: productId
  //     }
  //   })
  // }
}

export default Product
