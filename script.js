alert('please inter the amount of gold & silver aspect to current market price')
function calculateZakat() {
    const goldValue = parseFloat(document.getElementById('goldValue').value);
    const silverValue = parseFloat(document.getElementById('silverValue').value);
    const cashAmount = parseFloat(document.getElementById('cashAmount').value);
    
    const totalAssets = goldValue + (silverValue / 60) + cashAmount;
    const zakatAmount = totalAssets * 0.025; 
    
    
    document.getElementById('zakatAmount').textContent = 'Total zakat : ' + zakatAmount.toFixed(2);

  }

  function clearZakat(){
    document.querySelector('#goldValue').value = "";
    document.querySelector('#silverValue').value = "";
    document.querySelector('#cashAmount').value = "";
    document.querySelector('#zakatAmount').innerText = "";
  }
  