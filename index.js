module.exports = {
  escape: function(html) {
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  },


  unescape: function(html) {
  return String(html)
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
  },

  validate: {
    number: function(val){
      return /^[0-9]*$|^$|undefined/.test(val)
    },
    text: function(val){
      return /^[a-zA-Z_ ]*$|^$|undefined/.test(val)
    } 
  }   

};