const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       
options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});


var myDiv = document.getElementById('myDiv');
const myList = document.getElementById('myList');
const selectedItems = myList.getElementsByClassName('selected');

if (selectedItems.length === 1) {
  const selectedItem = selectedItems[0];
  myDiv.style.display = 'block';


  };
    
    //const selectedItem = selectedItems[0];
    //const idName = selectedItem.id = (this.innerText);
    //const rows = myTable.getElementsByTagName('tr');
    //for (let i = 0; i < rows.length; i++) {
      //const cells = rows[i].getElementsByTagName('td');
      //if (cells[0].innerText === idName) {
        //let score = parseInt(cells[1].innerText);
        //cells[1].innerText = score + 1;
        //break; 
      //}
    //}
  //}
//});

const listItems = myList.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function() {
    const selectedItems = myList.getElementsByClassName('selected');
    for (let j = 0; j < selectedItems.length; j++) {
      selectedItems[j].classList.remove('selected');
    }
    this.classList.add('selected');
  });
}

