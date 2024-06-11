
// Subscribe Section 



function handleContact(event){
  event.preventDefault();
  // console.log('hello');
  const emailResult = event.target.email.value;
  const result= document.getElementById('result');
  const resultParagraph = document.createElement('p');
  resultParagraph.innerText = `Your submitted email is: ${emailResult}`;
  console.log(resultParagraph);
  result.appendChild(resultParagraph);
}


