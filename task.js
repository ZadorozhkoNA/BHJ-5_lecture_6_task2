let form = document.body.querySelector( 'form.tasks__control' );
let listTasks = document.body.querySelector( '.tasks__list' );

function remove( event ) {
  event.preventDefault();
  listTasks.removeChild( event.currentTarget.closest( '.task' ) );
}

function createTask( taskStr, list ) {
  let divTask = document.createElement( 'div' );
  divTask.classList.add( 'task' );

  let divTitle = document.createElement( 'div' );
  divTitle.classList.add( 'task__title' );
  divTitle.textContent = taskStr;

  let removeTask = document.createElement( 'a' );
  removeTask.classList.add( 'task__remove' );
  removeTask.innerHTML = `&times;`;
  removeTask.addEventListener( 'click', remove );

  divTask.appendChild( divTitle );
  divTask.appendChild( removeTask );

  list.appendChild( divTask );
}

document.addEventListener( 'submit', ( event ) => {
  event.preventDefault();
  let value = document.getElementById( 'task__input' ).value;
  if ( value !== '') {
    createTask( value, listTasks );
    form.querySelector( '#task__input' ).value ='';
  }
});
