export class Error{
    #errors
    constructor(){
        this.#errors = [];
    }
    get errors(){
        return this.#errors;
    }
    addError(error){
        if(!this.#errors.some(e => e.message.includes(error.message)))
            this.#errors.push(error)
    }
    reset(){
        this.#errors = [];
    }
}






