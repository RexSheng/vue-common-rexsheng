var sessionstorage = {

    STORAGE_KEY:"vue",

    set: function(key, value,Object) {
        
        var keys=key.split(".").filter(m=>m!="");
        var current=Object || JSON.parse(window.sessionStorage.getItem(this.STORAGE_KEY) || "{}");
        if(current!=undefined && current!=null && keys.length>0){
            var firstKey=keys.shift();
            if(keys.length>0){
                if(current[firstKey]==undefined){
                    current[firstKey]={}
                }
                this.set(keys.join("."),value,current[firstKey]);
            }
            else{
                current[key]=value;
            }
            window.sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(current));
        }
        else{
            current[key]=value;
        }
    },
    get: function(key,Object) {
        var keys=key.split(".").filter(m=>m!="");
        var current=Object || JSON.parse(window.sessionStorage.getItem(this.STORAGE_KEY) || "{}");
        if(current!=undefined && current!=null && keys.length>0){
            var firstKey=keys.shift();
            if(keys.length>0){
                return this.get(keys.join("."),current[firstKey]);
            }
            else{
                return current[key];
            }
        }
        else{
            return undefined;
        }
    },
    clear: function(key,Object) {
        if(key==undefined){
            window.sessionStorage.removeItem(this.STORAGE_KEY);
        }
        else{
            var current=this.get(key);
            if(current!=undefined && current!=null){
                this.set(key,undefined)
            }
        }
        
    }
}
export default sessionstorage;