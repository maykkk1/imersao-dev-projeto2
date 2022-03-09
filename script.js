let btcBrl = 0;
let usdBrl = 0;
let eurBrl = 0;

async function getData() {
  let response = await fetch(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL"
  );
  let data = await response.json();
  return data;
}
getData().then((response) => {
  btcBrl = parseFloat(response.BTCBRL.high) * 1000;
  usdBrl = parseFloat(response.USDBRL.high);
  eurBrl = parseFloat(response.EURBRL.high);
});

const Converter = () => {
  const brl = parseFloat(document.getElementById("brl").value);
  document.getElementById("usd").value = (brl/usdBrl).toFixed(2);
  document.getElementById("eur").value = (brl/eurBrl).toFixed(2);
  document.getElementById("btc").value = (brl/btcBrl).toFixed(7);
};
