const controller = {

    register: (req, res) => {
        console.log('register exitoso')
        return res.render('user/register');
    },

    login: (req, res) => {
        console.log('login exitoso')
        return res.render('user/login');
    }
};

module.exports = controller;
