// public int maxProfit(int[] prices) {
// 	int l=prices.length;
// 	int maxProfit = 0;
  
// 	for(int i=0; i<l-1; i++) {
// 	  for(int j=i+1; j<l; j++) {
// 		int diff = prices[j] - prices[i];
// 		if (diff > maxProfit) {
// 		  maxProfit = diff;
// 		}
// 	  }
// 	}
	
// 	return maxProfit;
//   }

  const maxProfit = (prices) =>{
		let l = prices.length;
		let maxProfit = 0;

		for(let i = 0; i < l-1;i++){
			for(let j = i+1; j<l;j++){
				let diff = prices[j] - prices[i];
				if(diff > maxProfit){
					maxProfit = diff
				}
			}
		}

		return maxProfit
  }

let arr =  [7,1,5,3,6,4];
console.log(maxProfit(arr));