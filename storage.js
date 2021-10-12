class Storage {
    constructor() {
        this.city;
        this.defaultCity = 'London';
    }

    // getLocationData() {
    //   if(localStorage.getItem('city')===NULL){
    //     this.city=this.defaultCity;
    //   }
    //   else{
    //     this.city=localStorage.getItem('city');
    //   }

    //   return {
    //     city:this.city
    //   }
    // }
    // setLocationData(city){
    // localStorage.setItem('city', city);

    // }

    settoLocalStorage(city) {
        if (localStorage.getItem('city') === null) {
            localStorage.setItem('city', '[]');
        }
        let oldData = JSON.parse(localStorage.getItem('city'));
        oldData.push(city);

        localStorage.setItem('city', JSON.stringify(oldData));
    }



}