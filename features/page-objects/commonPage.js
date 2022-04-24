module.exports = {

    commands: [
      {
    async getCurrentUrl() {
      let currentUrl = '';

      await this.api.url(result => {
        currentUrl = result.value;
      });

      return currentUrl;
    },
   }     
 ]
};
  