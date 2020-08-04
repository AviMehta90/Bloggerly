const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

const dbURI = 'mongodb+srv://user1:qwerty1212@cluster1.3k1ri.gcp.mongodb.net/database-blogs?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log('Connection made with MongoDB');
        app.listen(3000, ()=>{
            console.log('Listening to port 3000 \nServer Started');
        });
    }).catch((err)=>{
    console.log(err);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/pages'));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true}));


app.get('/', (req, res)=>{
    const blogs = []
    res.render('index', {title: 'Home', blogs});
    console.log('/ requested');
});

app.get('/about', (req, res)=>{
    res.render('about', {title: 'About Us'});
    console.log('/about requested');
});


app.get('/blogs', (req, res)=>{
    Blog.find().sort({createdAt : 1}).then((result)=>{
        res.render('index', {title: 'All Blogs', blogs: result})
    }).catch((err)=>{
        console.log(err);
    });
});

app.post('/blogs', (req, res)=>{
    const blog = new Blog(req.body);

    blog.save().then((result)=>{
        res.redirect('/blogs');
    }).catch((err)=>{
        console.log(err);
    });

});

app.get('/blogs/create', (req, res)=>{
    res.render('blogs', {title: 'Create a blog'});
    console.log('/blogs requested');
});

app.get('/blogs/:id', (req, res)=>{
    const id = req.params.id;
    Blog.findById(id).then((result)=>{
        res.render('details', {title: 'Details', blogs: result})
    }).catch((err)=>{
        console.log(err);
    });
});

app.delete('/blogs/:id', (req, res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then((result)=>
        res.json({
            redirect: '/blogs'
        })).catch((err)=>{
        console.log(err);
    });
});


app.get('/sample-blog', (req, res)=>{

    const id = Blog.findById();

    if (id) {
        id.then((result)=>{
            res.render('index', {title: 'Sample Blog', blogs: result})
        }).catch((err)=>{
            console.log(err);
        });
    }else{
        app.use((req, res)=>{
            res.status(404).render('404', {title: '404'});
            console.log('Invalid page requested');
        });
    }
});












app.use((req, res)=>{
    res.status(404).render('404', {title: '404'});
    console.log('Invalid page requested');
});




// app.get('/add', (req, res)=>{

//     const blog = new Blog({
//         title : 'New Blog',
//         snippet : 'ABout my new blog.',
//         body: 'More about my new blog.'
//     });

//     blog.save().then((result)=>{
//         res.send(result);
//         console.log('Document saved!');
//     });

// });

// app.get('/all-blogs', (req, res)=>{
//     Blog.find().then((result)=>{
//         res.send(`${result}`);
//     }).catch((err)=>{
//         console.log(err);
//     });
// });

// app.get('/sample-blog', (req, res)=>{
//     Blog.findById('5f206a5426d81e07a05b2cf7').then((result)=>{
//         res.send(`${result}`);
//     }).catch((err)=>{
//         console.log(err);
//     });
// });