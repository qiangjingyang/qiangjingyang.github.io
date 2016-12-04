function clock(oH,oM,oS){
    var oDate=new Date();
    var h=oDate.getHours();
    var m=oDate.getMinutes();
    var s=oDate.getSeconds();
    oH.style.webkitTransform='rotate('+(h%12*30+m/2)+'deg)';
    oH.style.mozTransform='rotate('+(h%12*30+m/2)+'deg)';
    oH.style.msTransform='rotate('+(h%12*30+m/2)+'deg)';
    oH.style.oTransform='rotate('+(h%12*30+m/2)+'deg)';
    oH.style.transform='rotate('+(h%12*30+m/2)+'deg)';

    oH.style.webkitTransformOrigin='center bottom';
    oH.style.mozTransformOrigin='center bottom';
    oH.style.msTransformOrigin='center bottom';
    oH.style.oTransformOrigin='center bottom';
    oH.style.transformOrigin='center bottom';

    oM.style.webkitTransform='rotate('+m*6+'deg)';
    oM.style.mozTransform='rotate('+m*6+'deg)';
    oM.style.msTransform='rotate('+m*6+'deg)';
    oM.style.oTransform='rotate('+m*6+'deg)';
    oM.style.transform='rotate('+m*6+'deg)';

    oM.style.webkitTransformOrigin='center bottom';
    oM.style.mozTransformOrigin='center bottom';
    oM.style.msTransformOrigin='center bottom';
    oM.style.oTransformOrigin='center bottom';
    oM.style.transformOrigin='center bottom';

    oS.style.webkitTransform='rotate('+s*6+'deg)';
    oS.style.mozTransform='rotate('+s*6+'deg)';
    oS.style.msTransform='rotate('+s*6+'deg)';
    oS.style.oTransform='rotate('+s*6+'deg)';
    oS.style.transform='rotate('+s*6+'deg)';

    oS.style.webkitTransformOrigin='center bottom';
    oS.style.mozTransformOrigin='center bottom';
    oS.style.msTransformOrigin='center bottom';
    oS.style.oTransformOrigin='center bottom';
    oS.style.transformOrigin='center bottom';
}

