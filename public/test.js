// change values in 'const products...' below to modify amounts and add/delete new items


if(document.getElementById('ProductSelect-product-template')){
	const productId = document.getElementById('ProductSelect-product-template').childNodes[1].getAttribute('data-sku');
	const quantities = document.getElementById('Quantity');

	let mininumQuantity = 0;
	let incrementAmount = 0;

	const products = {
		//to add new items follow this formula exactly:  Item number:[minimum,increment],
		//											ex:  CC123:[30,15],
		//
		//
		//punctuation is important, so don't leave anything off

		//Wearables-------------------
/*		CC100:[6,6],
		CC101:[6,6],
		CC104:[6,6],
		CC105:[6,6],
		CC106:[6,6],
		CC107:[6,6],
		CC108:[6,6],
		CC200:[6,6],
		CC201:[6,6],
		CC202:[6,6],
		CC203:[6,6],
		CC205:[6,6],
		CC207:[6,6],
		CC209:[6,6],
		CC210:[6,6],
		CC300:[6,6],
		CC302:[6,6],
		CC303:[6,6],
        CC309:[12,12],
        CC310:[24,24],
		CC400:[6,6],
		CC404:[6,6],
		CC405:[6,6],
		CC406:[6,6],
		CC407:[6,6],
		CC408:[6,6],
		CC409:[6,6],
		CC410:[6,6],
		CC411:[6,6],
		CC500:[6,6],
		CC501:[6,6],
		CC502:[6,6],
		CC503:[6,6],
		CC504:[6,6],
        CC527:[12,12],
      	CC308:[24,12],
      	CC307:[24,12],
		CC600:[24,12],
		CC601:[24,12],
		CC602:[24,12],
 	    CC605:[24,12],
        CC606:[24,12],
        CC607:[24,12],
        CC608:[24,12],
        CC609:[24,12],
        CC610:[24,12],
        CC611:[24,12],
        CC613:[24,12],
        CC614:[24,12],
        CC615:[24,12],
        CC616:[24,12],
        CC617:[24,12],
        CC618:[24,12],
        CC619:[24,12],
        CC620:[24,12],


		//Hardgoods-------------------
      	CC515:[150,150],
		CC700:[100,25],
        CC735:[24,12],
        CC737:[200,25],
        CC738:[200,25],
        CC736:[200,50],
        CC739:[24,12],
        CC740:[250,50],
        CC741:[50,25],
        CC742:[1,10],
        CC743:[100,25],
        CC744:[150,50],
		CC701:[25,25],
		CC702:[200,50],
		CC703:[100,25],
		CC704:[150,25],
		CC705:[200,50],
		CC706:[100,25],
		CC707:[72,72],
		CC708:[1500,100],
		CC709:[72,72],
		CC710:[12,12],
		CC711:[100,50],
		CC712:[36,12],
		CC713:[50,25],
		CC714:[25,25],
		CC715:[50,50],
		CC716:[150,50],
		CC717:[50,50],
		CC718:[200,50],
		CC719:[250,50],
		CC720:[300,50],
		CC721:[100,25],
		CC722:[250,50],
		CC723:[100,25],
		CC724:[48,12],
		CC725:[24,12],
		CC726:[12,12],
		CC727:[24,12],
		CC728:[72,72],
		CC729:[36,12],
		CC730:[1,1],
		CC731:[1,1],
		CC732:[1,1],
		CC733:[1,1],
		CC734:[36,12],
      CC746:[24,12],
      CC747:[50,10],
      CC748:[150,25],
      CC749:[250,25],
      CC750:[250,25],
      CC753: [50,25],
      CC754: [100,50],

		//Don't edit below this line-------------------


		getProductQuantities: function(ID){
			try{
				mininumQuantity = this[ID][0];
				incrementAmount = this[ID][1];
				this.setAmounts();
			}
			catch(error){
				
			}
		},

		setAmounts: function(){
          	
			quantities.setAttribute('value',mininumQuantity);
			quantities.setAttribute('min',mininumQuantity);
			quantities.setAttribute('step',incrementAmount);
			quantities.setAttribute('onkeydown','return false');
          	//quantities.setAttributeNode('readonly');
		},

	}
	products.getProductQuantities(productId);
}



