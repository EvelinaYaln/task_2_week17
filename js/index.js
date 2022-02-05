let comments = [];
addComment = () => {
    let comment = document.querySelector('#writeComment').value;
    comments.push(comment);
    generateComments();

    function checkSpam(a) {
        a.replace(/viagra/gi, '***');
    }
    checkSpam(comment);
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