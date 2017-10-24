function calculer()
{
  var basicnumber = document.getElementById('premier_nombre').value;
  var number1 = Math.floor(basicnumber);
  var number2 = document.getElementById('deuxieme_nombre').value;
  var result= number1 * number2;

  if(isNaN(number1)== false && isNaN(number2)== false)
  {
    alert(result);
  }
  else{
    alert('Veuillez rentrez des nombres SVP');
  }
}
