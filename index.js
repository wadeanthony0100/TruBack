var el = document.createElement('script');
el.text = '\
document.addEventListener("keydown", (event)=>{ \
  if(event.keyCode === 8){ \
    /*console.log("Backspace pressed...");*/\
    var el = document.activeElement; \
    if((el.tagName !== "INPUT") && (el.contentEditable !== "true")){\
      window.history.back(); \
    }\
    /*console.log("...But we chose not to go back.");*/\
  }}, false);  \
';
document.documentElement.appendChild (el);

