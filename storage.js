class Database{
    constructor(){
        this.data = {
            planTitle : '',
            planPrice : '',
            planPriceUnit : '',
            addon : [],
            isPlanYearly : false, 
            monthYear : '',
        };

        // this.taa = document.getElementById('taa')
   }

   setData(data){
       this.data = {...this.data, ...data}
   }
  
   updateData (key, value) {
    this.data[key] = value
   }

   getData () {
       return this.data;
   }

   getSingleData (key) {
    return this.data[key]

   }

}
