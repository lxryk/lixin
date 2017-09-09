/*
* @Author: Administrator
* @Date:   2017-09-07 15:11:34
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-07 15:26:54
*/
/* 判断数组中某一个特定元素，存在true,false  */
function some(arr,num){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==num){
			return true;
		}
	}
	return false;
}