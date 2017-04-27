var simple = {
    /**绘制线段moveTo()和lineTo() */
    drawoneLine: function (params) {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        //设置对象起始点和终点
        context.moveTo(0, 0);
        context.lineTo(100, 50);
        context.lineTo(1, 200);
        context.lineTo(100, 200);
        //设置样式
        context.lineWidth = 2;
        context.strokeStyle = "#F5270B";
        //绘制
        context.stroke();
    },
    /**
     如果没有通过moveTo()特别指定，
     lineTo()的起始点是以上一个点为准。
     因此，如果需要重新选择起始点，则需要通过moveTo()方法。
     如果需要对不同的线段设置样式，则需要通过context.beginPath()重新开启一条路径
     */
    drawlines: function () {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        //设置对象起始点和终点
        context.beginPath()
        context.moveTo(0, 0);
        context.lineTo(100, 50);
        context.lineWidth = 2;
        context.strokeStyle = "#aaaaaa";
        context.stroke();


        context.beginPath()
        context.moveTo(1, 200);
        context.lineTo(100, 200);
        //设置样式
        context.lineWidth = 2;
        context.strokeStyle = "#F5270B";
        //绘制
        context.stroke();
    },
    /**
    绘制矩形rect()、fillRect()和strokeRect()
        context.rect( x , y , width , height )：只定义矩形的路径；
        context.fillRect( x , y , width , height )：直接绘制出填充的矩形；
        context.strokeRect( x , y , width , height )：直接绘制出矩形边框；

        另外还有一个跟矩形绘制有关的：清除矩形区域：context.clearRect(x,y,width,height)。 
     */
    drawRect: function () {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        //使用rect方法
        context.rect(10, 10, 190, 190);
        context.lineWidth = 2;
        context.fillStyle = "#3EE4CB";
        context.strokeStyle = "#F5270B";
        context.fill();
        context.stroke();

        //使用fillRect方法
        context.fillStyle = "#1424DE";
        context.fillRect(210, 10, 190, 190);

        //使用strokeRect方法
        context.strokeStyle = "#F5270B";
        context.strokeRect(410, 10, 190, 190);

        //同时使用strokeRect方法和fillRect方法
        context.fillStyle = "#1424DE";
        context.strokeStyle = "#F5270B";
        context.strokeRect(610, 10, 190, 190);
        context.fillRect(610, 10, 190, 190);
    },
    /**在canvas中，Y轴的方向是向下的。  */
    drawstars: function () {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        context.beginPath();
        //设置是个顶点的坐标，根据顶点制定路径
        for (var i = 0; i < 5; i++) {
            context.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * 200 + 200, -Math.sin((18 + i * 72) / 180 * Math.PI) * 200 + 200);
            context.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * 80 + 200, -Math.sin((54 + i * 72) / 180 * Math.PI) * 80 + 200);
        }
        context.closePath();
        //设置边框样式以及填充颜色
        context.lineWidth = "3";
        context.fillStyle = "#F6F152";
        context.strokeStyle = "#F5270B";
        context.fill();
        context.stroke();
    },
    /*
    线性渐变 
    使用步骤 
    （1）var grd = context.createLinearGradient( xstart , ystart, xend , yend )创建一个线性渐变，设置起始坐标和终点坐标； 
    （2）grd.addColorStop( stop , color )为线性渐变添加颜色，stop为0~1的值； 
    （3）context.fillStyle=grd将赋值给context。
    径向渐变 
    该方法与线性渐变使用方法类似，只是第一步接收的参数不一样 
    var grd = context.createRadialGradient(x0 , y0, r0 , x1 , y1 , r1 );接收起始圆心的坐标和圆半径以及终点圆心的坐标和圆的半径。

    位图填充 
    createPattern( img , repeat-style )使用图片填充，repeat-style可以取repeat、repeat-x、repeat-y、no-repeat。
     */
    radialGradient: function () {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");

        //线性渐变
        var grd = context.createLinearGradient(10, 10, 100, 350);
        grd.addColorStop(0, "#1EF9F7");
        grd.addColorStop(0.25, "#FC0F31");
        grd.addColorStop(0.5, "#ECF811");
        grd.addColorStop(0.75, "#2F0AF1");
        grd.addColorStop(1, "#160303");
        context.fillStyle = grd;
        context.fillRect(10, 10, 100, 350);

        //径向渐变
        var grd = context.createRadialGradient(325, 200, 0, 325, 200, 200);
        grd.addColorStop(0, "#1EF9F7");
        grd.addColorStop(0.25, "#FC0F31");
        grd.addColorStop(0.5, "#ECF811");
        grd.addColorStop(0.75, "#2F0AF1");
        grd.addColorStop(1, "#160303");
        context.fillStyle = grd;
        context.fillRect(150, 10, 350, 350); //位图填充
        var bgimg = new Image();
        bgimg.src = "background.jpg";
        bgimg.onload = function () {
            var pattern = context.createPattern(bgimg, "repeat");
            context.fillStyle = pattern;
            context.strokeStyle = "#F20B0B";
            context.fillRect(600, 100, 200, 200);
            context.strokeRect(600, 100, 200, 200);
        };
    },

    drawwords: function () {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");

        context.font = "bold 30px Arial"; //设置样式
        context.strokeStyle = "#1712F4";
        context.strokeText("欢迎来到我的博客！", 30, 100);

        context.font = "bold 50px Arial";
        var grd = context.createLinearGradient(30, 200, 400, 300); //设置渐变填充样式
        grd.addColorStop(0, "#1EF9F7");
        grd.addColorStop(0.25, "#FC0F31");
        grd.addColorStop(0.5, "#ECF811");
        grd.addColorStop(0.75, "#2F0AF1");
        grd.addColorStop(1, "#160303");
        context.fillStyle = grd;
        context.fillText("欢迎来到我的博客！", 30, 200);
        context.save();

        context.moveTo(200, 280);
        context.lineTo(200, 420);
        context.stroke();

        context.font = "bold 20px Arial";
        context.fillStyle = "#F80707";
        context.textAlign = "left";
        context.fillText("文本在指定的位置开始", 200, 300);
        context.textAlign = "center";
        context.fillText("文本的中心被放置在指定的位置", 200, 350);
        context.textAlign = "right";
        context.fillText("文本在指定的位置结束", 200, 400);
        context.restore();
        context.save();

        context.moveTo(10, 500);
        context.lineTo(500, 500);
        context.stroke();

        context.fillStyle = "#F60D0D";
        context.font = "bold 20px Arial";
        context.textBaseline = "top";
        context.fillText("指定位置在上面", 10, 500);
        context.textBaseline = "bottom";
        context.fillText("指定位置在下面", 150, 500);
        context.textBaseline = "middle";
        context.fillText("指定位置居中", 300, 500);
        context.restore();

        context.font = "bold 40px Arial";
        context.strokeStyle = "#16F643";
        var text = "欢迎来到我的博客！";
        context.strokeText("欢迎来到我的博客！", 10, 600);
        context.strokeText("上面字符串的宽度为：" + context.measureText(text).width, 10, 650);
    },
    /**
    图形变换
    平移：context.translate(x,y)，接收参数分别为原点在x轴方向平移x，在y轴方向平移y。
    缩放：context.scale(x,y)，接收参数分别为x坐标轴按x比例缩放，y坐标轴按y比例缩放。
    旋转：context.rotate(angle)，接收参数是坐标轴旋转的角度。
    需要说明的是，对图形进行变化后，接下来的一次绘图是紧接着上一次的状态的，所以如果需要回到初始状态，要用到context.save();和context.restore();来保存和恢复当前状态:
   矩阵变换 ：context.transform(a, b, c, d, e, f, g)。参数的含义如下： 
a 水平缩放 ( 默认为1 ) 
b 水平倾斜 ( 默认为 0 ) 
c 垂直倾斜 ( 默认为 0 ) 
d 垂直缩放 ( 默认为1 ) 
e 水平位移 ( 默认为 0 ) 
f 垂直位移 ( 默认为 0 ) 
     */
    rotate: function () {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        //translate()
        context.save();
        context.fillStyle = "#1424DE";
        context.translate(10, 10);
        context.fillRect(0, 0, 200, 200);
        context.restore();

        //scale()
        context.save();
        context.fillStyle = "#F5270B";
        context.scale(0.5, 0.5);
        context.fillRect(500, 50, 200, 200);
        context.restore();
        //rotate()

        context.save();
        context.fillStyle = "#18EB0F";
        context.rotate(Math.PI / 4);
        context.fillRect(300, 10, 200, 200);
        context.restore();
    },
    /**
    context.arc(x,y,r,sAngle,eAngle,counterclockwise);用于创建弧/曲线（用于创建圆或部分圆）。接收的参数含义： 
| 参数 | 含义 | 
| :————- |:————-| 
| x | 圆的中心的 x 坐标 | 
|y|圆的中心的 y 坐标| 
|r|圆的半径| 
|sAngle|起始角，以弧度计（弧的圆形的三点钟位置是 0 度）| 
|eAngle|结束角，以弧度计| 
|counterclockwise|可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针| 
     */
    drawarc: function () {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");

        context.strokeStyle = "#F22D0D";
        context.lineWidth = "2";
        //绘制圆
        context.beginPath();
        context.arc(100, 100, 40, 0, 2 * Math.PI);
        context.stroke(); //绘制半圆
        context.beginPath();
        context.arc(200, 100, 40, 0, Math.PI);
        context.stroke();

        //绘制半圆,逆时针
        context.beginPath();
        context.arc(300, 100, 40, 0, Math.PI, true);
        context.stroke();

        //绘制封闭半圆
        context.beginPath();
        context.arc(400, 100, 40, 0, Math.PI);
        context.closePath();
        context.stroke();
    },
    /**
    context.arcTo(x1,y1,x2,y2,r); 在画布上创建介于两个切线之间的弧/曲线。接收的参数含义：

参数	含义
x1	弧的控制点的 x 坐标
y1	弧的控制点的 y 坐标
x2	弧的终点的 x 坐标
y2	弧的终点的 y 坐标
r	弧的半径
这里需要注意的是arcTo函数绘制的曲线的起始点需要通过moveTo(）函数来设置，
     */
    arcToDemos: function () {
        // 获取canvas元素对应的DOM对象
        var canvas = document.getElementById("canvas");
        // 获取在canvas上绘图的CanvasRenderingContext2D对象
        var context = canvas.getContext('2d');
        context.lineWidth = 3;
        context.strokeStyle = "#F9230B";
        this.createRoundRect(context, 30, 30, 400, 200, 50);
        context.stroke();
    },

    createRoundRect: function (context, x1, y1, width, height, radius) {
        // 移动到左上角
        context.moveTo(x1 + radius, y1);
        // 添加一条连接到右上角的线段
        context.lineTo(x1 + width - radius, y1);
        // 添加一段圆弧
        context.arcTo(x1 + width, y1, x1 + width, y1 + radius, radius);
        // 添加一条连接到右下角的线段
        context.lineTo(x1 + width, y1 + height - radius);
        // 添加一段圆弧
        context.arcTo(x1 + width, y1 + height, x1 + width - radius, y1 + height, radius);
        // 添加一条连接到左下角的线段
        context.lineTo(x1 + radius, y1 + height);
        // 添加一段圆弧
        context.arcTo(x1, y1 + height, x1, y1 + height - radius, radius);
        // 添加一条连接到左上角的线段
        context.lineTo(x1, y1 + radius);
        // 添加一段圆弧
        context.arcTo(x1, y1, x1 + radius, y1, radius);
        context.closePath();
    },
    /**
    阴影绘制：
    shadowColor 设置或返回用于阴影的颜色。
    shadowBlur 设置或返回用于阴影的模糊级别（数值越大越模糊）。
    shadowOffsetX 设置或返回阴影与形状的水平距离。
    shadowOffsetY 设置或返回阴影与形状的垂直距离。
     */
    shadowdemos: function () {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        context.beginPath();
        //设置是个顶点的坐标，根据顶点制定路径
        for (var i = 0; i < 5; i++) {
            context.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * 200 + 200, -Math.sin((18 + i * 72) / 180 * Math.PI) * 200 + 200);
            context.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * 80 + 200, -Math.sin((54 + i * 72) / 180 * Math.PI) * 80 + 200);
        }
        context.closePath();
        //设置边框样式以及填充颜色
        context.lineWidth = "3";
        context.fillStyle = "#F6F152";
        context.strokeStyle = "#F5270B";

        context.shadowColor = "#F7F2B4";
        context.shadowOffsetX = 30;
        context.shadowOffsetY = 30;
        context.shadowBlur = 2;
        context.fill();
        context.stroke();
    },
    /**
    clip()方法从原始画布中剪切任意形状和尺寸。 
提示：一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。
您也可以在使用 clip() 方法前通过使用 save() 方法对当前画布区域进行保存，并在以后的任意时间对其进行恢复（通过 restore() 方法） 
     */
    clipdemos : function(){
        var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = "#0C0101";
    context.fillRect(0,0,canvas.width,canvas.height);

    context.beginPath();
    context.fillStyle = "#FFFDFD";
    context.arc(400,400,100,0,2*Math.PI);
    context.fill();
    context.clip();

    context.beginPath();
    context.fillStyle = "#F60825";
    context.fillRect(200, 350, 400,50);
    }

}
simple.clipdemos();