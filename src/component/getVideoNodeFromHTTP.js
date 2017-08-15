module.exports=function(httpUrl,cb){
    if(typeof httpUrl !='string'|| typeof cb !='function'){
        return false
    }
    var url=require('url')
    var obj=url.parse(httpUrl)
    if(obj.protocol=='http:'||obj.protocol=='https:'){
        var f=document.getElementsByTagName('iframe')
        if(f.length==0){
            f=document.createElement('iframe')
        }else{
            f=f[0]
        }
        f.style.display='none'
        f.src=httpUrl
        document.body.append(f)
        f.onload=function(){
            var m=function (){
                if(f.contentDocument&&f.contentDocument.getElementsByTagName('video').length>0){
                    var v=f.contentDocument.getElementsByTagName('video')[0]
                    cb&&cb(v)
                    return true
                }else{
                    console.log(f)
                    if(f.contentDocument)
                    console.log(f.contentDocument.getElementsByTagName('video').length)
                    setTimeout(f,1000)
                }
            }
            m()
        }
    }else{
        return false
    }
}

// var f=document.createElement('iframe')
// f.style.display='none'
// var video=document.getElementsByTagName('video')[0]
// f.src='http://www.iqiyi.com/v_19rr8jvixc.html'
// document.body.append(f)
// f.onload=function(){
// 	var console=global.console
// 	console.clear()
// 	console.log('onload')
// 	var m=function (){
// 		if(f.contentDocument&&f.contentDocument.getElementsByTagName('video').length>0){
// 			var v=f.contentDocument.getElementsByTagName('video')
// 			console.log(v[0])
// 			document.body.append(v[0])
// 			//video.src=v[0].src
// 			return 
// 		}else{
// 			console.log(f)
// 			if(f.contentDocument)
// 			console.log(f.contentDocument.getElementsByTagName('video').length)
// 			//console.log(f)
// 			setTimeout(f,1000)
// 		}
// 	}
// 	m()
// }
