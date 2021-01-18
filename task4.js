var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    for(var i=0;i<countryData.length;i++){
        console.log(countryData[i].currencies);
    }
    //4
    const popul=countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(popul);

//1
const asia=countryData.filter((element)=>{
    if(element.region==='Asia'){
        return element.name;
    }
})
console.log(asia);


//2
const popu=countryData.filter((element)=>{
    return element.population<200000;
})
console.log(popu);


//3
countryData.forEach((element)=>{
    console.log(element.name,element.capital,element.flag);
})


//5
const curr=countryData.filter((element)=>{
    if(element.currencies.name==="USD"){
        return element.name;
    }
})
console.log(curr);
}
