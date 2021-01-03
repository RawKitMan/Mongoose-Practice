const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before ((done) => {
    mongoose.connect('mongodb://localhost/users_test', { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection
        .once('open', () => { done(); })
        .on('error', (error) => {
            console.warn('Warning', error);
        });
});

// hook that runs before each test
beforeEach((done) => {
    // Drop all collections in the database
    mongoose.connection.collections.users.drop(() => {
        //When done, execute test
        done();
    });
});