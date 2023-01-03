// use cases:
// 1. Validation
// 2. Providing a read-only view of an object
// 3. Private properties


// Below example:
// we track 1 Obj property and change another its property

const data = {
    message: 'Hello',
    longMessage: 'Hello world'
};

// handler consists of predefined list of "traps"
const handler = {
    // target - the whole original object
    // key - its property name
    // value - the value that we provide to the property
    set(target, key, value) {
        if(key === 'message') {
            target.longMessage = `${value} world`;
        }
        target.message = value; // original setter functionality
    },
};

const proxyDataObj = new Proxy(data, handler);

proxyDataObj.message = 'AAA'; // will call proxy "set" trap
data.message = 'BBB'; // wil not call the trap

console.log(proxyDataObj);
// it's reactive, thus prop will be changed in proxy Obj also:
// { message: 'BBB', longMessage: 'AAA world' }
// why longMessage not changed to 'BBB' - because the trap was not called
