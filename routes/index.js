module.exports = function ( app ) {
    require('./login')(app);
    require('./home')(app);
};