(function (window) {
  function delegate(containerId) {
    // get dom node
    if(typeof(containerId) === 'string') {
      this.container  = document.querySelector(containerId);
    } else {
      this.container = containerId;
    } 
    if(this === window) {
      // Create an instance
      return new delegate(containerId);
    }
    return this;
  }

  delegate.prototype.on = function (type, selector, callback) {
    var context = this;
    this.container.addEventListener(type, function (event) {
      if (event.target === context.container.querySelector(selector)) {
        callback(event);
      }
    });
  }
window.delegate = delegate;
})(window);