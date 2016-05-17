'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var array = [];
  for (var i in collection) {
	if (typeof collection[i] == 'number') {
		array.push(collection[i]);
	} else {
		for (var j in collection[i]) 
			array.push(collection[i][j]);
	}
  }
   return array;
}
module.exports = double_to_one;
