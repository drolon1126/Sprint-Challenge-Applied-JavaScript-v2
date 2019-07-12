function createElement(type){
  return document.createElement(`${type}`);
};

function appendElements(parent, children){
  children.forEach(child=>{
    parent.appendChild(child);
  });
} 