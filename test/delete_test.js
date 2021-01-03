const assert = require('assert');
const User = require('../src/user');

describe('Deleting user', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' });
        joe.save()
            .then(() => done());
    });

    it('model instance remove', (done) => {
        joe.remove()
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it('class method remove', (done) => {
        User.deleteMany({ name: 'Joe'})
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it('class method findOneAndRemove', (done) => {
        User.findOneAndDelete({ name: 'Joe' })
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it('class method findByIdAndRemove', (done) => {
        User.findByIdAndDelete(joe._id)
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user === null);
                done();
            });
    });
});