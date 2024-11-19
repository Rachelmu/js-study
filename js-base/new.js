function myNew(){
    var constructor = [].shift.call(arguments),
        _this = {}
    
    _this._proto_ = constructor.prototype;
    
    var res = constructor.apply(_this, arguments);
    return typeof(res) === 'object' ? res : _this;
}

function instanceOf(target, Type) {
    
}