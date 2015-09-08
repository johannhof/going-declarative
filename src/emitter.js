const Emitter = function(){
    this.observers = {};
};

Emitter.prototype.on = function (name, fn) {
    this.observers[name] = fn;
};

Emitter.prototype.off = function (name) {
    this.observers[name] = null;
};

Emitter.prototype.trigger = function (name, ...args) {
    if(this.observers[name]){
          this.observers[name].apply(null, ...args);
            }
};

export const events = new Emitter();

