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
  document.getElementById('cardNumber').value = "card one";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[0].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[0].innerText;
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
  document.getElementById('cardNumber').value = "card two";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[1].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[1].innerText;
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
  document.getElementById('cardNumber').value = "card three";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[2].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[2].innerText;
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
  document.getElementById('cardNumber').value = "card four";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[3].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[3].innerText;
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
  document.getElementById('cardNumber').value = "card five";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[4].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[4].innerText;
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
  document.getElementById('cardNumber').value = "card six";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[5].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[5].innerText;
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
  document.getElementById('cardNumber').value = "card seven";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[6].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[6].innerText;
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
  document.getElementById('cardNumber').value = "card eight";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[7].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[7].innerText;
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
  document.getElementById('cardNumber').value = "card nine";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[8].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[8].innerText;
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
  document.getElementById('cardNumber').value = "card ten";
  document.getElementById('form-title').innerText = "Create a new event!";
  document.getElementById('event-title').innerText = "";          // resets fields
  if(document.getElementsByClassName('card-event-name')[9].innerText != "") { //displays event name on form overlay if there is an event to display
    document.getElementById('form-title').innerText = "Edit details for:";
    document.getElementById('event-title').innerText = document.getElementsByClassName('card-event-name')[9].innerText;
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