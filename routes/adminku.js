var multer = require('multer');

exports.login = function(req, res) {
    var message ='';
    var sess = req.session;
    var md5 = require('md5');

    if(req.method == 'POST'){
        var post = req.body;
        //2. tangkap nilai atribut nama dari form input username dan password
        var name = post.username;
        var pass = md5(post.password);
        req.getConnection(function(err, connect){
            var sql = "SELECT id_admin, username, name, admin_level FROM admin_tbl WHERE username='"+name+"' AND password='"+pass+"'";
            var query = connect.query (sql, function(err, results){
                if (results.length) {
                    //jika hasil query ada, daftarkan session dan alihkan ke halaman home!
                    req.session.adminId = results[0].id_admin;
                    req.session.admin = results[0];
                    console.log(results[0].id_admin);
                    res.redirect('/express/admin');
                } else {
                    //jik hasil query tidak ada, kirimkan error message dan tampilkan layout form login!
                    message = 'Username or password incorrect! Please try again.';
                    res.render('./admin/login', {
                    message : message,
                    
                    });
                }
            });
        });
        //jika route modulnya adalah POST, lakukan proses autentikasi login
    } else {
        // jika route methodnya bukan POST, tampilkan layout form login
        //1.tangkap nilai dari atribut pada body
        res.render('./admin/login', {
            message : message
            
            });
           
 }
}


exports.home = function(req, res) {
    var admin = req.session.admin;
    var adminId =  req.session.adminId;
    console.log('id_admin=' + adminId);

    if (adminId == null) {
        res.redirect('/express/admin/login');
        return;
    }
    res.render('./admin/home', {
        pathname: 'dashboard'
    });
} 

exports.add_user = function(req, res) {
    res.render('./admin/home', {
        pathname: 'add_user'  
    });
} 
exports.add_produk = function(req, res) {
    res.render('./admin/home', {
        pathname: 'add_produk'   
    });
} 

exports.data_brand = function(req, res) {
    var admin = req.session.admin;
    var adminId =  req.session.adminId;
    console.log('id_admin=' + adminId);

    if (adminId == null) {
        res.redirect('/express/admin/login');
        return;
    }

    req.getConnection(function(err, connect){
        var sql = "SELECT * FROM brand_tbl";
        var query = connect.query(sql, function(err, results){
            //jika koreksi dan query berhasil tampilkan home admin
            if(err){
                console.log("err :", err);
            }
            console.log(results);
            res.render('./admin/home', 
            {   pathname: 'data_brand',
                data: results
            });  
        });
    });
}
exports.add_brand = function(req, res) {
    res.render('./admin/home', {
        pathname: 'add_brand'
    });
} 

exports.data_produk = function(req, res) {
    var admin = req.session.admin;
    var adminId =  req.session.adminId;
    console.log('id_admin=' + adminId);

    if (adminId == null) {
        res.redirect('/express/admin/login');
        return;
    }

    req.getConnection(function(err, connect){
        var sql = "SELECT * FROM product_tbl";
        var query = connect.query(sql, function(err, results){
            //jika koreksi dan query berhasil tampilkan home admin
            if(err){
                console.log("err :", err);
            }
            console.log(results);
            res.render('./admin/home', 
            {   pathname: 'data_produk',
                data: results
            });  
        });
    });
}

exports.data_user = function(req, res) {
    var admin = req.session.admin;
    var adminId =  req.session.adminId;
    console.log('id_admin=' + adminId);

    if (adminId == null) {
        res.redirect('/express/admin/login');
        return;
    }

    req.getConnection(function(err, connect){
        var sql = "SELECT * FROM user_tbl";
        var query = connect.query(sql, function(err, results){
            //jika koreksi dan query berhasil tampilkan home admin
            if(err){
                console.log("err :", err);
            }
            console.log(results);
            res.render('./admin/home', 
            {   pathname: 'data_user',
                data: results
            });  
        });
    });
}

exports.add_produkproses = function(req, res){
    var storage = multer.diskStorage({
        destination: '/public/img',
        filename : function(req, file, callback){
            callback(null,file.originalname);
        }
    });

    var upload = multer({storage: storage}).single('image');

    upload(req, res, function(err){
        if(err){
            return res.end('error uploading image');
        }

        console.log(req.file);
        console.log(req.body);
    
    req.getConnection(function(err, connect){
        //tangkap nilai / value dari body
        var post={
            name_product : req.body.nama_p,
            kategori: req.body.kategori,
            slug: req.body.slug_p,
            gambar_product : req.file.filename,
            price_normal : req.body.normal_p,
            price_discount : req.body.coret_p
        }
        console.log(post);

        var sql="insert into product_tbl set ?";

        var query = connect.query(sql, post, function(err, results){
            if(err){
                console.log("error input product %s", err);
            }
            res.redirect('/express/admin/data_produk');
        });
        });
    });

}

exports.add_userproses = function(req, res){
        console.log(req.file);
        console.log(req.body);
    
    req.getConnection(function(err, connect){
        //tangkap nilai / value dari body
        var post={
            nama : req.body.nama,
            alamat: req.body.alamat,
            jenis_kelamin: req.body.kelamin,
            no_hp : req.body.no_hp
        }


        var sql="insert into user_tbl set ?";
        var query = connect.query(sql, post, function(err, results){
            if(err){
                console.log("error input product %s", err);
            }
            res.redirect('/express/admin/data_user');
        });

    });

}

exports.add_brandproses = function(req, res){
    console.log(req.file);
    console.log(req.body);

req.getConnection(function(err, connect){
    //tangkap nilai / value dari body
    var post={
        brand : req.body.nama_brand,
        tanggal: req.body.tanggal,
    }


    var sql="insert into brand_tbl set ?";
    var query = connect.query(sql, post, function(err, results){
        if(err){
            console.log("error input product %s", err);
        }
        res.redirect('/express/admin/data_brand');
    });

});

}

exports.edit_brand = function(req, res){
    var id_brand = req.params.id_brand;

    req.getConnection(function(err, connect){
        var sql = "SELECT * FROM brand_tbl WHERE id_brand=?";

        var query = connect.query(sql, id_brand, function(err, results){
            if(err){
                console.log("error edit brand %s", err);
            }

            res.render('./admin/home', {
                id_product: id_brand,
                pathname: 'edit_brand',
                data: results
            });
        });
    });
}

exports.edit_produk = function(req, res){
    var id_product = req.params.id_product;

    req.getConnection(function(err, connect){
        var sql = "SELECT * FROM product_tbl WHERE id_product=?";

        var query = connect.query(sql, id_product, function(err, results){
            if(err){
                console.log("error input product %s", err);
            }

            res.render('./admin/home', {
                id_product: id_product,
                pathname: 'edit_produk',
                data: results
            });
        });
    });
}

exports.edit_produkproses = function(req, res){
    var storage = multer.diskStorage({
        destination: '/public/img',
        filename : function(req, file, callback){
            callback(null,file.originalname);
        }
    });
    var upload = multer({storage: storage}).single('image');
    var date = new Date(Date.now());

    upload(req, res, function(err){
        if(err){
            var image = req.body.image_old;
            console.log('error uploading image');
        } else if ( req.file == undefined){
            var image = req.body.image_old;
        } else {
            var image = req.file.filename;
        }
        console.log(req.file);
        console.log(req.body);
    
    req.getConnection(function(err, connect){
        //tangkap nilai / value dari body
        var post={
            name_product : req.body.nama_p,
            kategori: req.body.kategori,
            slug: req.body.slug_p,
            price_normal : req.body.normal_p,
            price_discount : req.body.coret_p,
            gambar_product : image
        }
   

        var sql="UPDATE product_tbl SET? WHERE id_product=?";

        var query = connect.query(sql, [post, req.body.id_product],
             function(err){
            if(err){
                console.log("error input product %s", err);
            }
            res.redirect('/express/admin/data_produk');
        });
        });
    });

}

exports.delete_produk= function(req, res) {
    var id_product = req.params.id_product;

    req.getConnection(function(err, connect) {
        var sql = "DELETE FROM product_tbl WHERE id_product=?";

         var query = connect.query(sql, id_product, function(err, results) {
            if (err) {
                console.log("Error delete product: %s", err);
            }

             res.redirect('/express/admin/data_produk');
         });
    });
}
