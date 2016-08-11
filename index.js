var el = document.createElement('script');
el.text = '\
document.addEventListener("keydown", (event)=>{ \
  if(event.keyCode===8){ \
    if(!(document.activeElement.tagName === "INPUT")){\
      window.history.back(); \
    }\
  }}, false);  \
';
document.documentElement.appendChild (el);

