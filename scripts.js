document.addEventListener('DOMContentLoaded', function () {

    let myDiv = document.createElement('header-container');
    document.body.appendChild(myDiv);
    myDiv.className = 'm-5 text-center';

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an h1.');
    h1.append(h1Text);
    h1.className = 'h1';
    myDiv.appendChild(h1);
    document.body.append(myDiv);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2.');
    h2.append(h2Text);
    h2.className = 'h2';
    myDiv.appendChild(h2);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3.');
    h3.className = 'h3';
    h3.append(h3Text);
    myDiv.appendChild(h3);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4.');
    h4.className = 'h4';
    h4.append(h4Text);
    myDiv.appendChild(h4);

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5.');
    h5.className = 'h5';
    h5.append(h5Text);
    myDiv.appendChild(h5);

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6.');
    h6.className = 'h6';
    h6.append(h6Text);
    myDiv.appendChild(h6);

    h1.addEventListener('click', function () {
        h1.style.color = getRandomColor();
    });

    h2.addEventListener('click', function () {
        h2.style.color = getRandomColor();
    });

    h3.addEventListener('click', function () {
        h3.style.color = getRandomColor();
    });

    h4.addEventListener('click', function () {
        h4.style.color = getRandomColor();
    });

    h5.addEventListener('click', function () {
        h5.style.color = getRandomColor();
    });

    h6.addEventListener('click', function () {
        h6.style.color = getRandomColor();
    });

    function getRandomColor() {
        let colors = ['red', 'lightblue', 'lightgreen', 'salmon', 'olive', 'darkcyan', 'pink', 'plum'];
        let randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }
    console.log(getRandomColor());

    // console.log(Math.floor(Math.random() * colors.length)); // make sure 'M' in Math is capitalized. • This generates a random index position in your array.

    let ul = document.createElement('ul');
    document.body.append(ul);
    ul.className = 'list-group';

    let num = 1;
    let button = document.getElementsByClassName('btn btn-primary')[0];
    button.addEventListener('click', function () {
        let li = document.createElement('li');
        let liText = document.createTextNode('This is list item ' + (num));

        num++;

        li.append(liText);
        ul.append(li);
        li.className = 'list-group-item';

        li.addEventListener('click', function () {
            li.style.color = getRandomColor();
        });
        li.addEventListener('dblclick', function () {
            li.remove();
        });
    });


});
