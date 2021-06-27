const Member = require('../team/Member');

class Intern extends Member {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getPosition() {
        return 'Intern';
    }

    getUniversity() {
        return this.school;
    }
};
module.exports = Intern;