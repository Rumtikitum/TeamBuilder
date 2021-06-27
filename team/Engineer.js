const Member = require('../team/Member');

class Engineer extends Member {
    constructor(name, id, email, github) {
        super(name, id, email,);
        this.github = github;
    }

    getPosition() {
        return 'Engineer';
    }

    getGit() {
        return this.getGithub;
    }
};
module.exports = Engineer;