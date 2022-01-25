var url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BTS,LTC,DASH,FCT,MONA,NMC,XLM,USDT&tsyms=USD,EUR"
var key = "&api_key=f03f4ca7933035287f299f9133e31a665baf373d92901b4ba1d1a2ed4f357a6a"
var table_row = document.getElementsByClassName("row1")


async function fetchurl() {
  
    var response = await fetch(url + key);
    var data = await response.json();
    Object.values(table_row).forEach(function(element) {
      var coin = element.children[2].id.toUpperCase()
      element.children[2].innerHTML  = data[coin].EUR
      element.children[3].innerHTML  = data[coin].USD
    })
}

fetchurl()



