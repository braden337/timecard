// var employees = {
//   2222: 'Ryan Villopoto',
//   2121: 'Jason Anderson'
// };


$(document).ready(function() {
  // localforage.setItem('hi', {hello: 'world'}).then(()=> console.log('saved'))
  // localforage.getItem('hello', (error, value)=> value !== null ? console.log(value) : console.log('something went wrong'))

  var id = $('#employee');

  id.focus();
  
  id.keyup(function() {
    if(id.text().length == 4) {
      saveTime(id.text());
      clearElement(id);
    }
  });

  setInterval(updateClock, 500);

});


function clearElement(elem) {
  elem.blur().fadeOut(function() {
    elem.text('').fadeIn(function() {
      elem.focus();
    });
  });
}

function saveTime(id) {
  var now = moment();
  // console.log();

  localforage.getItem('employees', function(err, employees) {
    if(employees[id]) {
      flash('success', employees[id] + " @ " + now.format('MMMDD hh:mm').toUpperCase());
      console.log(now.toString());
    }
    else {
      flash('danger', id + ' is not a valid employee number, try again.');
    }
  });
  


  // if(checkEmployee(id)) {
  //   flash('success', checkEmployee(id) + " @ " + now.format('MMMDD hh:mm').toUpperCase());
  //   console.log(now.toString());
  // }
  // else {
  //   flash('danger', id + ' is not a valid employee number, try again.');
  // }
}

function updateClock() {
  var now = moment();
  $('#clock').text(now.format('hh:mm:ss'));
}

function flash(status, text) {
  $('#flash').removeClass('alert-success alert-danger').addClass('alert-' + status).text(text).slideDown(unflash());
}

function unflash() {
  setTimeout(function() {
    $('#flash').slideUp();
  }, 2000);
}

function addEmployee() {

}

function getEmployee(id) {
  var result = 'hi';
  localforage.getItem('employees', function(err, val) {
    result = val[id];
  });
  return result;
}

function checkEmployee(err, value) {
  return value;
}
















