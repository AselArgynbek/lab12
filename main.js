console.log(document);
let h1 = document.querySelector("h1");
h1.innerHTML = "Lab12 Assignment";
h1.style.color = "blue";
document.body.appendChild(h1);

hr = document.createElement("hr");
document.body.appendChild(hr);

let h3 = document.createElement("h2");
h3.innerText = "Task"
h3.style.color = 'red';
document.body.appendChild(h3);

let p1 = document.createElement("p1");
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(p1);

let ul = document.createElement("ul");

let l1 = document.createElement("li");
l1.innerHTML = "find elements in the DOM (<strong>5 points</strong>);"
l1.style.color = "green"
l1.classList.add = "odd"

l2 = document.createElement("li");
l2.innerHTML = "create/add/remove elements (<strong>5 points</strong>);"
l2.style.color = "purple"
l2.classList.add = "even"

l3 = document.createElement("li");
l3.innerHTML = "change content of the elements (<strong>5 points</strong>);"
l3.classList.add = "odd"
l3.style.color = "green"

l4 = document.createElement("li");
l4.innerHTML = "change styles of the elements (<strong>5 points</strong>);"
l4.style.color = "purple"
l4.classList.add = "even"

l5 = document.createElement("li");
l5.innerHTML = "change attributes of the elements (<b>5 points</b>);"
l5.style.color = "green"
l5.classList.add = "odd"

l6 = document.createElement("li");
l6.innerHTML = "change classes of the elements (<b>5 points</b>)."
l6.style.color = "purple"
l6.classList.add = "even"

ul.appendChild(l1);
ul.appendChild(l2);
ul.appendChild(l3);
ul.appendChild(l4);
ul.appendChild(l5);
ul.appendChild(l6);

document.body.appendChild(ul);

let p2 = document.createElement("p2");
p2.innerText = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "
document.body.appendChild(p2);
a = document.querySelector.bind(document) ;
var AppendLinkHere = a("link") // <- put in here some CSS selector that'll be more to your needs
var a = document.createElement('a');
a.text = "link.";
a.href = "https://github.com/yessen/nu_web_programming/tree/main/week12";
document.body.appendChild(a);

hr = document.createElement("hr");
document.body.appendChild(hr);

let h4 = document.createElement("h2");
h4.innerText = "Submission"
h4.style.color = 'red';
document.body.appendChild(h4);


let p3 = document.createElement("p3");
p3.innerText = "To submit your work, follow these instructions:"
document.body.appendChild(p3);

ul1 = document.createElement("ul");

l7 = document.createElement("li");
l7.innerHTML = "Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>)."
l7.classList.add = "odd"
l7.style.color = "green"


l8 = document.createElement("li");
l8.innerHTML = "Clone this repository to your local machine and work inside it."
l8.classList.add = "even"
l8.style.color = "purple"


l9 = document.createElement("li");
l9.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).'
l9.classList.add = "odd"
l9.style.color = "green"


l10 = document.createElement("li");
l10.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)."
l10.classList.add = "even"
l10.style.color = "purple"


l11 = document.createElement("li");
l11.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section)."
l11.classList.add = "odd"
l11.style.color = "green"


l12 = document.createElement("li");
l12.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."
l12.classList.add = "even"
l12.style.color = "purple"


l13 = document.createElement("li");
l13.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>)."
l13.classList.add = "odd"
l13.style.color = "green"

ul1.appendChild(l7);
ul1.appendChild(l8);
ul1.appendChild(l9);
ul1.appendChild(l10);
ul1.appendChild(l11);
ul1.appendChild(l12);
ul1.appendChild(l13);
document.body.appendChild(ul1);

hr = document.createElement("hr");
document.body.appendChild(hr);

let p4 = document.createElement("p4");
p4.innerText = "Footer"
document.body.appendChild(p4);


console.log(document);
