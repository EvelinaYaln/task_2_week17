/* const comments = [];
 addComment = () => {
     const comment = document.querySelector('#comment').value;

     function checkSpam(a) {
         return a.replace(/viagra/gi, '***').replace(/XXX/gi, '***')
     }
     let censorship = checkSpam(comment);
     comments.push(censorship);
     generateComments();
     document.querySelector('#comment').value = '';
 }

 generateComments = () => {
     let str = '';
     let author = document.querySelector('#author').value;
     if (localStorage.getItem('name') === null) {
         localStorage.setItem('name', author);
     }
     for (comment of comments) {
         str += `<div>${author}:${comment}</div>`;
     }
     document.querySelector('#container').innerHTML = str;
 }

 addEventListener('DOMContentLoaded', function() {
     generateComments();
 })

 document.addEventListener('DOMContentLoaded', function(event) {
     let name = localStorage.getItem('name');
     if (name !== null) {
         document.querySelector('#author').value = name;
     }
     let message = localStorage.getItem('message');
     if (message !== null) {
         document.querySelector('#container').innerHTML = message;
     }
     generateComments();
 })
 button.addEventListener('click', addComment);*/

let comments = [];
document.addEventListener('DOMContentLoaded', function(event) {
    let name = localStorage.getItem('name');
    if (name !== null) {
        document.querySelector('#author').value = name;
    }
    let message = localStorage.getItem('message');
    if (message !== null) {
        document.querySelector('#container').innerHTML = message;
    }
    let image = localStorage.getItem('image');
    if (image !== null) {
        document.querySelector('#avatar').innerHTML = image;
    }
})

send = () => {
    let author = document.querySelector('#author').value;
    let comment = document.querySelector('#comment').value;
    let image = document.querySelector('#img').value;

    if (localStorage.getItem('name') === null) {
        localStorage.setItem('name', author);
    }
    if (localStorage.getItem('img') === null) {
        localStorage.setItem('img', image);
    }

    str = comment.replace(/viagra/gi, '***').replace(/XXX/gi, '***');
    comments.push(str);
    let arr = '';
    for (c of comments) {
        arr += `<div>${author}:${c}</div>`;
        c++;
    }
    document.querySelector('#container').innerHTML = arr;

    //let div = document.createElement('div');
    //div.className = 'text';
    //a = div.innerHTML = `<div>${author}:${str}</div>`;
    // document.querySelector('#container').append(div);
    document.querySelector('#comment').value = '';

    if (localStorage.getItem('message') === null) {
        localStorage.setItem('message', arr);
    }
}

button.addEventListener('click', send);