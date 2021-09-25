let output = document.getElementById('output');
let skill = document.getElementsByClassName('skill');
let label = document.getElementsByClassName('label');
let submit = document.getElementById('button');
let bold = [];
let notBold = [];

let selectedSkill = () => {
    bold = [];
    notBold = [];
    for (i=0; i<skill.length; i++) {
        if (skill[i].checked == 1) {
            if (skill[i] == skill[3]) {
                let psBold = "&lt;li&gt;&lt;strong&gt;" + 'Adobe&amp;nbsp;Photoshop' + "&lt;/strong&gt;&lt;/li&gt;";
                bold.push(psBold);
            } else {
            let converted = "&lt;li&gt;&lt;strong&gt;" + label[i].textContent + "&lt;/strong&gt;&lt;/li&gt;";
            bold.push(converted);
        }
        } else {
            let passed = "&lt;li&gt;" + label[i].textContent + "&lt;/li&gt;";
            notBold.push(passed);
        }
    }
}

button.addEventListener('click', ()=> {
    selectedSkill()
    let outputHTML = output.innerHTML;
    output.innerHTML = '<br>' + '&lt;div&gt' + '<br>' + '&nbsp;&nbsp;' + bold[0] + '<br>';
    for (i=1; i<bold.length; i++) {
        let x = bold[i];
        output.innerHTML += '&nbsp;&nbsp;' + x + '<br>';
    }
    output.innerHTML += '&lt;/div&gt <br> &lt;div&gt <br>';
    for (i=0; i<notBold.length; i++) {
        let x = notBold[i];
        output.innerHTML += '&nbsp;&nbsp;' + x + '<br>';
        if (i == 3) {
            output.innerHTML += '&lt;/div&gt <br> &lt;div&gt <br>'
        }
    }
    output.innerHTML += '&lt;/div&gt';
});