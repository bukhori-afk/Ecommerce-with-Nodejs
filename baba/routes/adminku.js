exports.login = function(req, res) {
    var message = ''; 
    res.render('./admin/index', {     
        message: message 
    });
} 
 

exports.home = function(req, res) {
    res.render('./admin/home', {
        pathname: 'home'
        //data: results 
    }); 
}
exports.add_news = function (req, res) {
    res.render('./admin/home', {
        pathname: 'add_news'
    });
}

exports.edit_news = function (req, res) {
    res.render('./admin/home', {
        pathname: 'edit_news'     
    });
} 