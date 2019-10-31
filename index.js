(function(){
  // 浏览器窗口发生变换的时候 重新加载
  window.onresize = function () {
    init();
  }
  init();
  function init(){
    var item=document.getElementsByClassName('item');
    var itemWidth = item[0].offsetWidth;  // 每个图片的宽度
    var box = document.getElementsByClassName('box'); 
    var boxWidth = box[0].offsetWidth; // 获取盒子宽度
    console.log(itemWidth, boxWidth)
    var cols=parseInt(boxWidth/itemWidth);  // 浏览器的宽度/图片的宽度=列数
    var heightArr=[]; // 创建一个存放每个图片的高度的数组
    for(var i =0;i<cols;i++){   // 每个数组的长度就是 列数的长度  
        heightArr.push(0);  // 最开始的时候可以默认高度是0；【，0，0】
    }
    // 循环每一条图片
    console.log(item.length)
    for (var j = 0; j < item.length; j++) {
      console.log(item[j].offsetHeight)
      var idex=0; // 初始索引为0
      var minHeight=heightArr[0]; // 初始设置最小高度是数组的第一个
      for(var i=0;i<heightArr.length;i++){
        console.log('heightArr', heightArr[i], item[j].offsetHeight)
          if(heightArr[i]<minHeight){ // 判断数组中的每一个是否比默认设置的最小高度小，小于直接赋值给最小高度
              minHeight=heightArr[i]; // 最小高度
              idex=i; // 当前索引 
          }
      }
      // 设置每个图片的样式
      item[j].style.left = itemWidth*idex + 'px'  // 图片距离左边的位置 就是当前图片的宽度*他的索引
      item[j].style.top = minHeight + 'px'  // 图片距离顶部的位置就是最小高度
      heightArr[idex]+=item[j].offsetHeight // 高度对应的索引值就是当前图片高度的值
    }
  }
})()

