'use strict';

function inArray(num, array) {
	return array.indexOf(num) > -1;
}

function double_to_one(collection) {
  //在这里写入代码
  var array = [];
  for (var i in collection){
  	for (var j in collection[i]){
  		if ( !inArray(collection[i][j], array)){
  			array.push(collection[i][j]);
  		}
  	}
  }
  return array;
}

module.exports = double_to_one;
