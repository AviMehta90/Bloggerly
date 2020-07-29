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
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views/static')));


app.get('/', (req, res)=>{
    res.redirect('/blogs');
});

app.get('/about', (req, res)=>{
    res.render('pages/about', {title: 'About Us'});
    console.log('/about requested');
});


app.get('/blogs', (req, res)=>{
    Blog.find().sort({createdAt : 1}).then((result)=>{
        res.render('pages/index', {title: 'All Blogs', blogs: result})
    }).catch((err)=>{
        console.log(err);
    });
    app.get('/blogs/create', (req, res)=>{
        res.render('pages/blogs', {title: 'Create a blog'});
        console.log('/blogs requested');
    });
});

app.get('/create', (req, res)=>{
    
});











app.use((req, res)=>{
    res.status(404).render('pages/404', {title: '404'});
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