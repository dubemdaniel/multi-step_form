class Database{
    constructor(){
        this.data = {
            planTitle : '',
            planPrice : '',
            addon : [],
            isPlanYearly : false, 
            monthYear : '',
        };

        this.section = document.getElementById('section')
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
   renderAddonItems(){
       this.section.innerHTML = `kdjfkjdlkajldjfldjfaljdalkjglakjflksfj`
   }
}
