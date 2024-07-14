import { createStore } from 'vuex'

export default createStore({
  state: {//存所有数据
  },
  getters: {//当我们想获取state里面的数据时,而且这个内容需要计算时，可以放到getters，类似函数（封装）
  },
  mutations: {//对state的相关操作必须要放到state里面
  },
  actions: {//定义对state的各种操作,比如更新state里面的相关信息,不能直接对state进行修改
  },
  modules: {//将state进行分割
  }
})
