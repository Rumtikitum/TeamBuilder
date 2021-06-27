class Member {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getPosition() {
        return 'Member';
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }


}

module.exports = Member;