var activeDropdown = {};
document.getElementById('content').addEventListener('click',function(){
  for (var i = 0;i<this.children.length;i++){
    if (this.children[i].classList.contains('drop-selection')){
        activeDropdown.id = this.id;
        activeDropdown.element = this.children[i];
        this.children[i].style.visibility = 'visible';
        }
  }
});

window.onclick = function(event){
  if (!event.target.classList.contains('dropbtn')){
    activeDropdown.element.style.visibility = 'hidden';
  }
}
