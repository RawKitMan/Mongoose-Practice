const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' });
        joe.save()
            .then(() => done());
    });

    it('finds all users with name of Joe', (done) => {
        User.find({ name: 'Joe' })
            .then((users) => {
                // have to convert _id to string for comparisons
                assert(users[0]._id.toString() === joe._id.toString());
                done();
            });
    });

    it('find user with particular id', (done) => {
        User.findOne({ _id: joe._id })
            .then((user) => {
                assert(user.name === 'Joe');
                done();
            })
    });
});