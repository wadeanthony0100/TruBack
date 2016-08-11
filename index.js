var el = document.createElement('script');
el.text = 'document.addEventListener("keydown", (event)=>{if(event.keyCode===8){window.history.back();}}, false);';
document.documentElement.appendChild (el);

