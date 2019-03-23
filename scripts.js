document.addEventListener("DOMContentLoaded", function  () {

    let myDiv = document.createElement('header-container');
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an h1.');
    h1.append(h1Text);
    h1.className = "h1"
    myDiv.appendChild(h1);
    document.body.append(myDiv);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2.');
    h2.append(h2Text);
    h2.className = "h2"
    myDiv.appendChild(h2);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3.');
    h3.className = "h3"
    h3.append(h3Text);
    myDiv.appendChild(h3);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4.');
    h4.className = "h4"
    h4.append(h4Text);
    myDiv.appendChild(h4);

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5.');
    h5.className = "h5"
    h5.append(h5Text);
    myDiv.appendChild(h5);

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6.');
    h6.className = "h6"
    h6.append(h6Text);
    myDiv.appendChild(h6);

});