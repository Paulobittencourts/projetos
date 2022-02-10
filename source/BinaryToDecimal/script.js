function binaryConvert(){
   const binary = document.getElementById('binary').value
   const result = document.getElementById('result')

   if(binary === ''){
       return alert('Please, enter a binary number')
   }
   
   const decimal= parseInt(binary, 2)
   result.innerHTML = decimal
}
