const navigateToHeaderObj = header => `a[data-qa='el:${header}HeaderLink`;

module.exports = {
  commands: [
    {
     
navigateToHeader(header){
     this.api.click(`a[data-qa='el:${header}HeaderLink']`)              
  },

navigateToHeaderWithObject(header){
  this.api.click(navigateToHeaderObj(header) )
}  
    }
  ]
};
