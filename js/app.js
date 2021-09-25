let output = document.getElementById('output');
let skill = document.getElementsByClassName('skill');
let label = document.getElementsByClassName('label');
let submit = document.getElementById('button');
let bold = [];
let notBold = [];


// iterates over selected skills, generates output and pushes to bold and not bold arrays.
let selectedSkill = () => {
    bold = [];
    notBold = [];
    for (i=0; i<skill.length; i++) {
        if (skill[i].checked == 1) {
            //adds the &nbsp; code into the photoshop li if it is selected, else generates li code normally.
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

//submit button listener, generates <div> tags and iterates over bold and not bold arrays adding them to the ul and inserting them into the <p class=output> tags as innerHTML.
button.addEventListener('click', ()=> {
    //call to generate bold and not bold arrays.
    selectedSkill()
    //generates opening <div>, breaks to new line, adds indentation and first li, and breaks to new line.
    output.innerHTML = '<br>' + '&lt;div&gt' + '<br>' + '&nbsp;&nbsp;' + bold[0] + '<br>';
    //iterates over the remaining bold array items. adding indents and line breaks for formatting.
    for (i=1; i<bold.length; i++) {
        let x = bold[i];
        output.innerHTML += '&nbsp;&nbsp;' + x + '<br>';
    }
    //generates first closing </div> tag. breaks to a new line and add second opening <div> tag.
    output.innerHTML += '&lt;/div&gt <br> &lt;div&gt <br>';
    //iterates over notBold array items. adding indents and line breaks for formatting.
    for (i=0; i<notBold.length; i++) {
        let x = notBold[i];
        output.innerHTML += '&nbsp;&nbsp;' + x + '<br>';
        //adds second closing </div> tag after 4 iterations. then line breaks and opens last <div> tag and line break.
        if (i == 3) {
            output.innerHTML += '&lt;/div&gt <br> &lt;div&gt <br>'
        }
    }
    //generates final closing </div> tag.
    output.innerHTML += '&lt;/div&gt';
});