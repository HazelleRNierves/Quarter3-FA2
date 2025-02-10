function calculate(operation)
{
  const num1=parseFloat(document.getElementById('num1').value);
  const num2=parseFloat(document.getElementById('num2').value);
  let result;


  switch (operation)
  {
   case'+':
    result = num1 + num2;
    document.getElementById('result').innerText=`The sum of ${num1} and ${num2} is ${result}. `;
    break;

   case'-':
    result = num1 - num2;
    document.getElementById('result').innerText=`The difference of ${num1} and ${num2} is ${result}. `;
    break;

   case'*':
    result = num1 * num2;
    document.getElementById('result').innerText=`The product of ${num1} and ${num2} is ${result}. `;
    break;

   case'/':
    result = num1 / num2;
    document.getElementById('result').innerText=`The quotient of ${num1} and ${num2} is ${result}. `;
    break;

   case'%':
    result = num1 % num2;
    document.getElementById('result').innerText=`The remainder of ${num1} and ${num2} is ${result}. `;
    break;
  }
}

