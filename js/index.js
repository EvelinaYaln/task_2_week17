let comments = [];
addComment = () => {
    let comment = document.querySelector('#writeComment').value;

    function checkSpam(a) {
        return a.replace(/viagra/gi, '***').replace(/XXX/gi, '***')
    }
    let censorship = checkSpam(comment);
    comments.push(censorship);
    generateComments();
    document.querySelector('#writeComment').value = '';
}

generateComments = () => {
    let str = '';
    for (comment of comments) {
        str += `<div>${comment}</div>`;
    }
    document.querySelector('#container').innerHTML = str;
}

addEventListener('DOMContentLoaded', function() {
    generateComments();
})