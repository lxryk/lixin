/*
* @Author: Administrator
* @Date:   2017-09-07 14:52:55
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-07 15:03:09
*/
/* 转换字符串
   arr：特定数组
   str：连接符
   */
function join(arr,str){
	var result='';
	for(var i=0;i<arr.length;i++){
		if(i<arr.length-1){
			result+=arr[i]+str;
		}else{
			result+=arr[i];
		}
	}
	return result;
}