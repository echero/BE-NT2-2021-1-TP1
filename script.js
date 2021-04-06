const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')

  var contador = 0
  var contadorUncheck = 0
  
  function addTodo() {
    const tituloTarea = prompt('Que tarea quieres agregar?')
    if (tituloTarea != undefined){
        contador++
        itemCountSpan.innerHTML = contador

        var li=document.createElement('li');
        li.innerHTML = "<input type='checkbox' checked/>"
        var text=document.createTextNode(tituloTarea);
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'todo-delete';
        button.innerText = 'x';
        li.appendChild(text)
        list.appendChild(li);
        li.appendChild(button);

        let checkBoxlist = document.querySelectorAll("ul input[type='checkbox']") 
        
        checkBoxlist[checkBoxlist.length-1].onclick = function() {
          if(this.checked == false){
            contadorUncheck++ 
             uncheckedCountSpan.innerHTML = contadorUncheck
             contador--
             itemCountSpan.innerHTML = contador
          }
          else{
            contadorUncheck--
            uncheckedCountSpan.innerHTML = contadorUncheck
            contador++
            itemCountSpan.innerHTML = contador
          }
        }
    }
  }