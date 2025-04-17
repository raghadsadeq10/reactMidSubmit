import { EventEmitter } from 'events';
import dispachercon from '../Dispatcher/dispachercon';




class Store extends EventEmitter{
    constructor(){
        super();
        this.people = [];

    }

    getPeople() {
        return this.people;
    }


}
export default Store;