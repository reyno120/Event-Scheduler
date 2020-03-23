//var cardOne = document.getElementById('card-one-button2');
var toggleOverlay = document.getElementsByClassName('card-button');
var returnArr = document.getElementById('return');
var trash = document.getElementById('trash');
//var formOverlay = document.querySelector('event-form');
returnArr.addEventListener('click', function() {
  var formOverlay = document.getElementsByClassName('event-form-overlay');
  formOverlay[0].style.display = "none";
});


// The following toggles each cards overlay, we have to set up an event handler
// for each card so that we can distinguish later which card to update/remove
toggleOverlay[0].addEventListener('click', function() {   // adds event listener
  var formOverlay = document.getElementsByClassName('event-form-overlay');
  formOverlay[0].style.display = "block";   // displays form
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[0].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[0].innerText;
    document.getElementById('cardNumber').value = document.getElementsByClassName('card-event-name')[0].innerHTML;
  }
  trash.addEventListener('click', function() {
    var eventName = document.getElementsByClassName('card-event-name')[0].innerText;
    $.post("/event/delete", 
    {
      eventName: eventName
    },
    function(data) {
      location.reload();
    });
  });
});

toggleOverlay[1].addEventListener('click', function() {
  var formOverlay = document.getElementsByClassName('event-form-overlay');
  formOverlay[0].style.display = "block";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[1].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[1].innerText;
    document.getElementById('cardNumber').value = document.getElementsByClassName('card-event-name')[1].innerHTML;
  }
  trash.addEventListener('click', function() {
    var eventName = document.getElementsByClassName('card-event-name')[1].innerText;
    $.post("/event/delete", 
    {
      eventName: eventName
    },
    function(data) {
      location.reload();
    });
  });
});

toggleOverlay[2].addEventListener('click', function() {
  var formOverlay = document.getElementsByClassName('event-form-overlay');
  formOverlay[0].style.display = "block";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[2].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[2].innerText;
    document.getElementById('cardNumber').value = document.getElementsByClassName('card-event-name')[2].innerHTML;
  }
  trash.addEventListener('click', function() {
    var eventName = document.getElementsByClassName('card-event-name')[2].innerText;
    $.post("/event/delete", 
    {
      eventName: eventName
    },
    function(data) {
      location.reload();
    });
  });
});

toggleOverlay[3].addEventListener('click', function() {
  var formOverlay = document.getElementsByClassName('event-form-overlay');
  formOverlay[0].style.display = "block";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[3].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[3].innerText;
    document.getElementById('cardNumber').value = document.getElementsByClassName('card-event-name')[3].innerHTML;
  }
  trash.addEventListener('click', function() {
    var eventName = document.getElementsByClassName('card-event-name')[3].innerText;
    $.post("/event/delete", 
    {
      eventName: eventName
    },
    function(data) {
      location.reload();
    });
  });
});

toggleOverlay[4].addEventListener('click', function() {
  var formOverlay = document.getElementsByClassName('event-form-overlay');
  formOverlay[0].style.display = "block";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[4].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[4].innerText;
    document.getElementById('cardNumber').value = document.getElementsByClassName('card-event-name')[4].innerHTML;
  }
  trash.addEventListener('click', function() {
    var eventName = document.getElementsByClassName('card-event-name')[4].innerText;
    $.post("/event/delete", 
    {
      eventName: eventName
    },
    function(data) {
      location.reload();
    });
  });
});

toggleOverlay[5].addEventListener('click', function() {
  var formOverlay = document.getElementsByClassName('event-form-overlay');
  formOverlay[0].style.display = "block";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[5].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[5].innerText;
    document.getElementById('cardNumber').value = document.getElementsByClassName('card-event-name')[5].innerHTML;
  }
  trash.addEventListener('click', function() {
    var eventName = document.getElementsByClassName('card-event-name')[5].innerText;
    $.post("/event/delete", 
    {
      eventName: eventName
    },
    function(data) {
      location.reload();
    });
  });
});

toggleOverlay[6].addEventListener('click', function() {
  var formOverlay = document.getElementsByClassName('event-form-overlay');
  formOverlay[0].style.display = "block";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[6].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[6].innerText;
    document.getElementById('cardNumber').value = document.getElementsByClassName('card-event-name')[6].innerHTML;
  }
  trash.addEventListener('click', function() {
    var eventName = document.getElementsByClassName('card-event-name')[6].innerText;
    $.post("/event/delete", 
    {
      eventName: eventName
    },
    function(data) {
      location.reload();
    });
  });
});

toggleOverlay[7].addEventListener('click', function() {
  var formOverlay = document.getElementsByClassName('event-form-overlay');
  formOverlay[0].style.display = "block";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[7].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[7].innerText;
    document.getElementById('cardNumber').value = document.getElementsByClassName('card-event-name')[7].innerHTML;
  }
  trash.addEventListener('click', function() {
    var eventName = document.getElementsByClassName('card-event-name')[7].innerText;
    $.post("/event/delete", 
    {
      eventName: eventName
    },
    function(data) {
      location.reload();
    });
  });
});

toggleOverlay[8].addEventListener('click', function() {
  var formOverlay = document.getElementsByClassName('event-form-overlay');
  formOverlay[0].style.display = "block";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[8].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[8].innerText;
    document.getElementById('cardNumber').value = document.getElementsByClassName('card-event-name')[8].innerHTML;
  }
  trash.addEventListener('click', function() {
    var eventName = document.getElementsByClassName('card-event-name')[8].innerText;
    $.post("/event/delete", 
    {
      eventName: eventName
    },
    function(data) {
      location.reload();
    });
  });
});

toggleOverlay[9].addEventListener('click', function() {
  var formOverlay = document.getElementsByClassName('event-form-overlay');
  formOverlay[0].style.display = "block";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[9].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[9].innerText;
    document.getElementById('cardNumber').value = document.getElementsByClassName('card-event-name')[9].innerHTML;
  }
  trash.addEventListener('click', function() {
    var eventName = document.getElementsByClassName('card-event-name')[9].innerText;
    $.post("/event/delete", 
    {
      eventName: eventName
    },
    function(data) {
      location.reload();
    });
  });
});