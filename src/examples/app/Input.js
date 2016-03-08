/**
 * Input 
 */
class Input {

    constructor() {

    }

    onDOM(attrs, childs) {

        var input = document.createElement('input');
        input.addEventListener('change', {
            handleEvent(e) {
                console.log('we had an event ', e);
            }
        });
return input;
    }

}

Input.create = function() {

    return new Input();

};
export default Input
