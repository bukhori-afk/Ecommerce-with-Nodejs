exports.index = function (req, res) {
   req.getConnection(function (err, connect){
       var query = connect.query('SELECT * FROM product_tbl LIMIT 4', function (err, rows){
           if (err) {
               console.log('Error message: %', err);
           }
           res.render('index', {
               page_title: "Express News",
               data : rows
           });
       });
   });
    
}

exports.login_user = function (req, res) {
    req.getConnection(function (err, connect){
        var query = connect.query('SELECT * FROM news_tbl LIMIT 4', function (err, rows){
            if (err) {
                console.log('Error message: %', err);
            }
            res.render('login_user', {
                page_title: "Express News",
                data : rows
            });
        });
    });
}

exports.register = function (req, res) {
    req.getConnection(function (err, connect){
        var query = connect.query('SELECT * FROM news_tbl LIMIT 4', function (err, rows){
            if (err) {
                console.log('Error message: %', err);
            }
            res.render('register', {
                page_title: "Express News",
                data : rows
            });
        });
    });
}
exports.single = function(req, res) {
    kode = req.params.id_product;
    req.getConnection(function (err, connect){
        var query = connect.query('SELECT * FROM product_tbl where id_product="'+kode+'"', function (err, rows){
            if (err) {
                console.log('Error message: %', err);
            }
            res.render('single', {
                page_title: "Express News",
                data : rows
            });
        });
    });
}

exports.news_detail = function(req, res) {
    req.getConnection(function (err, connect){
        var query = connect.query('SELECT * FROM news_tbl LIMIT 4', function (err, rows){
            if (err) {
                console.log('Error message: %', err);
            }
            res.render('news_detail', {
                page_title: "Express News",
                data : rows
            });
        });
    });
}

exports.services = function (req, res) {
    req.getConnection(function (err, connect){
        var query = connect.query('SELECT * FROM news_tbl LIMIT 4', function (err, rows){
            if (err) {
                console.log('Error message: %', err);
            }
            res.render('services', {
                page_title: "Express News",
                data : rows
            });
        });
    });
}
