function HTTPromise(options) {
  var self = this;

  this.method = options.method;
  this.url = options.url;
  this.data = options.data;
  this.headers = options.headers;
  this.resolveFunction = options.resolve;
  this.rejectFunction = options.reject;

  this.req = new XMLHttpRequest();
  this.promise = new Promise(function(resolve, reject) {
    self.req.open(self.method, self.url);

    for(var header in self.headers) {
      self.req.setRequestHeader(header, self.headers[header]);
    }

    self.req.onload = function() {
      if(self.req.status === 200) {
        resolve(self.req.responseText);
      } else {
        reject(self.req.responseText);
      }
    }

    self.req.onerror = function() {
      reject(self.req.responseText);
    }

    self.req.send(self.data);
  });

  this.promise.then(function(data) {
    self.resolveFunction(data);
  }, function(error) {
    self.rejectFunction(error);
  }).then(undefined, function(error) {
    console.log("[HTTPromise error when resolving] " + error);
  });

  return this;
}

