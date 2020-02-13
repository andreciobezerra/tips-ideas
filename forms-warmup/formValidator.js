const inputValidator = (e) => {   
  let state = (e.target.id === 'passwordCheck') ? checkPassword(e.target.value) : e.target.checkValidity();
  stylist(e.target, state, ['valid', 'invalid']);
  if(state){
    fixTag(e.target, state,'');
  }
};

const changeValidator = (e,errorText) =>{
  let state = (e.target.id === 'passwordCheck') ? checkPassword(e.target.value) : e.target.checkValidity();
  fixTag(e.target,state,errorText);
};

const fixTag = (target, targetState,errorText) =>{
  let tag = document.querySelector(`#${target.id}Tag`);
  tag.textContent = (targetState) ? '' : errorText;  
  stylist(tag, targetState, ['invisible','visible']);
};

const checkPassword = (passwordForCheck) => passwordForCheck === document.querySelector('#password').value;

const stylist = (target,targetState, classes) => {
  target.className = (targetState) ? classes[0] : classes[1];
}

const toSubmit = (e) => {
  e.preventDefault();
  let allFields = [...document.querySelectorAll('input')];
  let values = {}
  allFields.map(field => values[`${field.id}`]=field.value);
  console.table(values);
  checkPassword(document.querySelector('#passwordCheck').value) ? console.log('mandei'): console.log('não mandei');
  
}

