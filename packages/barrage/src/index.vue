<template>
    <div class="barrage">
        <div class="btn-switch cake-sprite-s" :class="barrageSwitch?'on':'off'" @click="changeSwitch"></div>
        <div class="wall-container" :style="{'visibility': barrageSwitch ? 'visible' : 'hidden'}">
            <!-- <p class="pDom"><img src="https://static.guojiang.tv/vmaker/mobile/images/2020/9/anniversary/banner.jpg">从懵懵懂懂到星光璀璨，见证着曾努力过的时光，3周年快乐！</p> -->
        </div>
    </div>
</template>

<script>
  export default {
    name: 'barrage',
    data () {
      return {
        barrageSwitch: true,
        barrageList: [],
        barrageData: [
          // { headPic: 'https://static.guojiang.tv/vmaker/mobile/images/2020/9/anniversary/banner.jpg', nickname: '大哥大', msg: '从懵懵懂懂到星光璀璨，见证着曾努力过的时光，3周年快乐！星光熠熠，只因有你' },
        ], // 弹幕列表 用来拷贝请求的数据
        wallWidth: 0,
        channelNum: 3, // 航道
        boatNum: 2, // 船只
        freeChannel: [], // 空闲航道
        boatPool: [], // 所有航道船只
        runTime: 7, // 船只运行时间 单位s
        timerIns: null
      };
    },
    // created () {
    //   this.eventBus.$on('requestBarrageList', () => {
    //     this.getBarrageList();
    //   });
    // },
    mounted () {
    //   this.getBarrageList();
    //   this.initBarrage();
    },
    beforeDestroy () {
      this.timerIns && clearInterval(this.timerIns);
    },
    methods: {
      // 获取弹幕列表
      getBarrageList () {
        this.$axios.get('/starAnniversary2021/wishList').then(res => {
          if (res.data.errno === 0) {
            // 重新请求列表
            this.barrageList = res.data.data;
            this.barrageData = [].concat(this.barrageList); // 拷贝一份
          } else {
            this.$toast.show(res.data.msg);
          }
        }).catch(err => {
          console.error(err);
        });
      },
      // 弹幕开关 visibility
      changeSwitch () {
        this.barrageSwitch = !this.barrageSwitch;
      },
      // 初始化弹幕
      initBarrage () {
        if (this.pageType === 'pc') {
          this.channelNum = 4;
          this.boatNum = 3;
          this.runTime = 10;
        }
        const wallContainer = document.querySelector('.wall-container');
        this.wallWidth = wallContainer.clientWidth;
        const wallHeight = wallContainer.clientHeight;
        for (let i = 0; i < this.channelNum; i++) {
          // 每条航道船只队列
          const boats = [];
          // 标记空闲航道
          this.freeChannel[i] = true;
          for (let j = 0; j < this.boatNum; j++) {
            const pDom = document.createElement('p');
            pDom.className = 'p-dom';
            pDom.style.top = `${(i + 1) * wallHeight / (this.channelNum + 1.5)}px`;
            pDom.id = i + '-' + j;
            // pDom.num = 0

            // 给每条船注册transitioned事件
            // const t = 'transitionend' || 'webkitTransitionEnd' || 'oTransitionEnd' || 'otransitionend'
            pDom.addEventListener('transitionend', () => {
              // alert('transitioned end')
              // if (!this.boatPool[i].length) {
              //     console.log(`航道${i}-船只${this.boatPool[pDom.channel].length}-${pDom.channel}`)
              //     console.log('所有航道船只>>', this.boatPool)
              // }
              pDom.innerHTML = '';
              pDom.style.transform = null;
              pDom.style.transition = null;
              this.boatPool[pDom.channel].push(pDom);
              console.log(pDom.id + '-transitioned end-' + new Date().toLocaleString());
            }, false);
            // console.log(pDom)
            // pDom.ontransitionend = () => {
            //     // alert('transitioned end')
            //     // if (!this.boatPool[i].length) {
            //     //     console.log(`航道${i}-船只${this.boatPool[pDom.channel].length}-${pDom.channel}`)
            //     //     console.log('所有航道船只>>', this.boatPool)
            //     // }
            //     pDom.innerHTML = ''
            //     pDom.style.transform = null
            //     pDom.style.transition = null
            //     this.boatPool[i].push(pDom)
            //     console.log(pDom.id + '-transitioned end-' + new Date().toLocaleString())
            // }

            wallContainer.appendChild(pDom);
            boats.push(pDom);
          }
          this.boatPool.push(boats);
        }
        // console.log('航道状态>>', this.freeChannel)
        // console.log('所有航道船只>>', this.boatPool)
        // 初始完成后去轮询弹幕池 0
        this.timerIns = setInterval(() => {
          const channel = this.getChannel();
          if (channel !== -1 && this.boatPool[channel].length && this.barrageData.length) {
            // console.log('弹幕所在航道>>>>', channel, this.freeChannel, this.boatPool[channel])
            // debugger
            const boat = this.boatPool[channel].shift();
            // console.log(boat)
            const barrage = this.barrageData.shift();
            // console.log('弹幕池剩余>>>', this.barrageData.length)
            this.shootBarrage(boat, barrage, channel);
            if (this.barrageData.length <= 0) {
              this.barrageData = this.barrageData.concat(this.barrageList);
              console.log('没有数据了', this.barrageData);
            }
          }
        }, 500);
      },
      // 获取一个可用的航道
      getChannel () {
        // console.log('航道状态>>', this.freeChannel)
        // console.log('所有航道船只>>', this.boatPool)
        for (let i = 0; i < this.channelNum; i++) {
          if (this.freeChannel[i] && this.boatPool[i].length) {
            return i;
          }
        }
        return -1;
      },
      // 发射弹幕
      shootBarrage (boat, barrageCon, channel) {
        // boat.times && clearTimeout(boat.times)
        // console.log(channel)
        boat.innerHTML = `<img src='${barrageCon.headPic}' /> <span>${barrageCon.nickname}说</span>${barrageCon.content}`;
        boat.style.transform = `translate3d(${-(boat.clientWidth + this.wallWidth)}px, 0 , 0)`;
        boat.style.transition = `transform ${this.runTime}s linear`;
        console.log(boat.id + '-transitioned start' + new Date().toLocaleString());
        boat.channel = channel;
        // console.log('船>>>>', channel, this.freeChannel, boat)
        // 暂时锁住航道 然后隔一段事件再打开航道 以保证每条船的间隔
        this.freeChannel[channel] = false;
        boat.times = setTimeout(() => {
          this.freeChannel[channel] = true;
          // console.log('间隔时间>>>', 5 + this.runTime)
        }, boat.clientWidth * (5 + this.runTime) + 1500);
      }
    }
  };
</script>

<style lang="scss" scoped>
    $bf: 108rem;
    .barrage {
        width: 100%;
        height: 100%;
        .btn-switch {
            position: absolute;
            right: 5px;
            top: 5px;
            cursor: pointer;
            z-index: 1;
        }
        .wall-container {
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
        }
        .p-dom {
            height: 70px;
            background: rgba(22, 29, 57, 0.7);
            border: 1px solid rgba(192, 205, 255, 0.7);
            border-radius: 35px;
            color: #c0cdff;
            font-size: 30px;
            white-space: nowrap;
            display: flex;
            align-items: center;
            padding: 0 20px 0 1px;
            position: absolute;
            left: 100%;
            & > img {
                width: 64px;
                height: 64px;
                border-radius: 64px;
                border: 1px solid #c0cdff;
                margin-right: 10px;
            }
            & > span {
                color: #ff7b10;
                margin-right: 5px;
            }
        }
    }
</style>