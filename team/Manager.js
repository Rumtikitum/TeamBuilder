const Member = require('../team/Member');

class Manager extends Member {
    constructor(name, id, email, phoneNumber,) {
        super(name, id, email);
        this.phoneNumber = phoneNumber;
    }

    getPosition() {
        return 'Manager';
    }
    
    getNumber() {
        return this.phoneNumber;
    }

};
module.exports = Manager;