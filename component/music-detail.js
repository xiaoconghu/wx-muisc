// component/music-detail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      title: {
          type: String,
          value: ''
      },
      imgUrl: {
          type: String,
          value: ''
      },
      data: {
          type: Array,
          value: function () {
              return [{singer: [{name: ''}],}]
          }
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      id: '',
      cdList: [{}],
  },

  /**
   * 组件的方法列表
   */
  methods: {
      navigateToDetail(){
          const innerAudioContext = wx.createInnerAudioContext()
          innerAudioContext.autoplay = true
          innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
          innerAudioContext.onPlay(() => {
              console.log('开始播放')
          })
          innerAudioContext.onError((res) => {
              console.log(res.errMsg)
              console.log(res.errCode)
          })
      },
      clickPlayAll(){
          console.log(this.data);
          wx.setStorage({
              key:"music",
              data: this.properties.data
          })
          wx.navigateTo({
            url: '../player/player',
          })
          const innerAudioContext = wx.createInnerAudioContext()
          innerAudioContext.autoplay = true
          innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
          innerAudioContext.onPlay(() => {
              console.log('开始播放')
          })
          innerAudioContext.onError((res) => {
              console.log(res.errMsg)
              console.log(res.errCode)
          })
      }
  },
    ready(){
        console.log(this.properties.title);
        console.log(this.properties.imgUrl);
        console.log(this.properties.data);
    }
})
