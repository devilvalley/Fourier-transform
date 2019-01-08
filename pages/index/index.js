//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    x:0,
    y:0
  //  hezi:1
  },
  onReady:function(){
    this.position={
      hezi:1
    }
    var p=this.position
    this.drawcos(p.hezi)
    this.drawcos1(p.hezi)
  },
  drawcos: function(hezi){
    var context = wx.createCanvasContext("canvas", this)
    context.beginPath()
    context.setStrokeStyle("#fff")
    context.moveTo(20,5)
    context.lineTo(17, 12)
    context.lineTo(23, 12)
    context.lineTo(20, 5)
    context.lineTo(20,80)
    context.lineTo(280,80)
    context.lineTo(273, 77)
    context.lineTo(273, 83)
    context.lineTo(280, 80)
    context.stroke()
    context.setFontSize(10)
    context.setFillStyle("#fff")
    context.fillText("0",20,90)
    context.fillText("1", 70, 90)
    context.fillText("2", 120, 90)
    context.fillText("3", 170, 90)
    context.fillText("4", 220, 90)
    context.fillText("time /s", 260, 90)
    context.fillText("1", 10, 35)
    context.beginPath()
    context.setStrokeStyle("#09bb17")
    context.moveTo(20,80)
    for (let i = 0; i < 250; i++) {
      context.lineTo(i+20, Math.cos(i/25*(Math.PI)*hezi)*25+55)
    }
    context.stroke()
    context.draw()
  },
  slider1change:function(e){
    this.drawcos(e.detail.value)
    getApp().globalData.h1=e.detail.value
  },
  drawcos1: function (hezi) {
    var context = wx.createCanvasContext("canvas1", this)
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
    context.setStrokeStyle("#e64340")
    context.moveTo(20, 80)
    for (let i = 0; i < 250; i++) {
      context.lineTo(i + 20, Math.cos(i / 25 * (Math.PI) * hezi) * 25 + 55)
    }
    context.stroke()
    context.draw()
  },
  slider2change: function (e) {
    this.drawcos1(e.detail.value)
    getApp().globalData.h2 = e.detail.value
  },
})
