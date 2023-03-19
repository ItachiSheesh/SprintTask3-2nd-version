let value = 0;
let value1 = 0;
function test(){
  let num = document.getElementById('num');
  let select = document.getElementById('select');
  let kzttext = document.getElementById('kzt.text');
  let usdtext = document.getElementById('usd.text');
  let eurtext = document.getElementById('eur.text');
  if(select.value === "KZT"){
    value = num.value/429;
    value1 = num.value/507;
    usdtext.value = value;
    eurtext.value = value1;
    kzttext.value = 0; 
  }else if(select.value==="USD"){
    value = num.value*429;
    value1 = num.value/1.18;
    kzttext.value = value;
    eurtext.value = value1;
    usdtext.value = 0;
  }else if(select.value==="EUR"){
    value = num.value*507;
    value1 = num.value/0.78;
    kzttext.value = value;
    usdtext.value = value1;
    eurtext.value = 0;
  }
}