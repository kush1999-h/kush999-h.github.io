

function post_comment() {
    nm = document.getElementById('name').value;
    cm = document.getElementById('comment').value;
    make_comment(nm, cm);
    
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
}


function make_comment(name, comment) {
    div_1 = document.createElement('div');
    div_1.className = 'comment clearfix';

    div_2 = document.createElement('div');
    div_2.className = 'comment-content clearfix';

    div_3 = document.createElement('div');
    div_3.className = 'comment-author font-alt';

    nm = document.createElement('a');
    nm.appendChild(document.createTextNode(name));

    div_3.appendChild(nm);

    div_4 = document.createElement('div');
    div_4.className = 'comment-body';

    para = document.createElement('p');
    para.appendChild(document.createTextNode(comment));

    div_4.appendChild(para);
    div_2.appendChild(div_3);
    div_2.appendChild(div_4);

    div_1.appendChild(div_2);

    document.getElementsByClassName("comments")[0].appendChild(div_1);

}







