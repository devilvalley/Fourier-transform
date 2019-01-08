//logs.js
const app = getApp()

Page({
  data: {
    junzhix:0,
    junzhiy:0,
    pj:0   
  },
  onShow: function () {
    this.position = {
      j:0,
      vj:Math.PI/180
    }
    this.drawcos()
    this.drawbianh()
    this.interval = setInterval(this.drawbianh, 50)    
  },
  drawcos: function () {
    let h1 = getApp().globalData.h1
    let h2 = getApp().globalData.h2 
    var context = wx.createCanvasContext("canvas", this)
    context.beginPath()
    context.setStrokeStyle("#fff")
    context.moveTo(20, 5)
    context.lineTo(17, 12)
    context.lineTo(23, 12)
    context.lineTo(20, 5)
    context.lineTo(20, 80)
    context.lineTo(280, 80)
    context.lineTo(273, 77)
    context.lineTo(273, 83)
    context.lineTo(280, 80)
    context.stroke()
    context.setFontSize(10)
    context.setFillStyle("#fff")
    context.fillText("0", 20, 90)
    context.fillText("1", 70, 90)
    context.fillText("2", 120, 90)
    context.fillText("3", 170, 90)
    context.fillText("4", 220, 90)
    context.fillText("time /s", 260, 90)
    context.fillText("1", 10, 35)
    context.beginPath()
    context.setStrokeStyle("#ff00ff")
    context.moveTo(20, 80)
    for (let i = 0; i < 250; i++) {
      context.lineTo(i + 20, (Math.cos(i / 25 * (Math.PI) * h1) * 25 + Math.cos(i / 25 * (Math.PI) * h2) * 25)/2 + 55)
    }
    context.stroke()
    context.draw()
  },
  drawbianh:function(j){
    var context = wx.createCanvasContext("canvas2", this) 
    let h1 = getApp().globalData.h1
    let h2 = getApp().globalData.h2 
    var h = this.position
    let hex=0
    let hey=0    
    h.j += h.vj
    if (h.j >=8*Math.PI) {
      h.j = 0
    }
    this.setData({
      pj: h.j.toPrecision(2)
    })
    context.beginPath()
    context.setStrokeStyle("#00f")
    context.moveTo(20, 0)
    context.lineTo(20, 200)
    context.stroke()
    context.beginPath()
    context.moveTo(60, 0)
    context.lineTo(60, 200)
    context.stroke()
    context.beginPath()
    context.moveTo(140, 0)
    context.lineTo(140, 200)
    context.stroke()
    context.beginPath()
    context.moveTo(180, 0)
    context.lineTo(180, 200)
    context.stroke()
    context.beginPath()
    context.moveTo(0, 20)
    context.lineTo(200, 20)
    context.stroke()
    context.beginPath()
    context.moveTo(0, 60)
    context.lineTo(200, 60)
    context.stroke()
    context.beginPath()
    context.moveTo(0, 140)
    context.lineTo(200, 140)
    context.stroke()
    context.beginPath()
    context.moveTo(0, 180)
    context.lineTo(200, 180)
    context.stroke()
    context.beginPath()
    context.setStrokeStyle("#fff")
    context.moveTo(0, 100)
    context.lineTo(200, 100)
    context.stroke()
    context.beginPath()
    context.moveTo(100, 0)
    context.lineTo(100, 200)
    context.stroke()
    context.beginPath()
    context.setStrokeStyle("#0ff")
    context.moveTo(180,100)
    for (let i = 0; i < 250; i++) {
      let feng = (Math.cos(i/25*(Math.PI)*h1)*25+Math.cos(i/25*(Math.PI)*h2)*25)/2
      context.lineTo(feng*Math.cos(h.j*i/100*Math.PI)*13/4+100, feng*Math.sin(h.j*i/100*Math.PI)*13/4+100 )
      hex = feng * Math.cos(h.j * i / 100 * Math.PI) * 13 / 4+hex
      hey = feng * Math.sin(h.j * i / 100 * Math.PI) * 13 / 4+hey   
      this.data.junzhix=hex/i
      this.data.junzhiy=hey/i
    }
    context.stroke()
    context.beginPath(0)
    context.arc((this.data.junzhix+ 100), (this.data.junzhiy+100), 4, 0, Math.PI * 2)
    context.setFillStyle('#f00')
    context.fill()
    context.draw()
  },
  onHide:function(){
    clearInterval(this.interval)
  }
})
