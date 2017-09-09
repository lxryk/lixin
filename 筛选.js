/*
* @Author: Administrator
* @Date:   2017-09-07 15:03:36
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-07 15:10:23
*/
/* filter(arr)
   筛选数组里面的偶数元素
*/
function filter(arr){
	var newarr=[];
	for(var i=0;i<arr.length;i++){
		if(arr[i]%2==0){
            newarr[newarr.length]=arr[i];
		}
	}
	return newarr;
}