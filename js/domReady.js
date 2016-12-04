function domReady(fn){
    if(document.addEventListener){//高级浏览器
        document.addEventListener('DOMContentLoaded',function(){
            fn&fn();
        },false);
    }else{//全部兼容，低级浏览器；
        document.onreadystatechange=function(){
            if(document.readyState=='complete'){
                fn&fn();
            }
        };
    }
}
