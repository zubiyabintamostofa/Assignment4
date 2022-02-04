function pandaCost(singgara,somucha,jilapi)
{
    const singgaraPrice=7;
    const somuchaprice=10;
    const jilapiPrice=15;

    const singgraQuentity=singgara*singgaraPrice;
const somuchaQuentity=somucha*somuchaprice;
const jilapiQuentity=jilapi*jilapiPrice;
    
    
    let totalprice=singgraQuentity+somuchaQuentity+jilapiQuentity;
    return totalprice;
    }

const allCost=pandaCost(1,0,1);
console.log(allCost)