let visual = 0, verbal = 0, social=0, physical=0, aural=0, solitary=0, logical=0;



function jawaban(choice){
    let status = choice.classList;
    //ambil semua button di pertanyaan yang sama
    let btns = document.getElementsByClassName(status[0]);
    for(i=0; i<3; i++){
        btns[i].classList.remove("off")
        btns[i].classList.remove("on")
        btns[i].classList.add("off");
    }

    status.remove("off");
    status.add("on");
}

function submit(){
    let masukan = document.getElementsByClassName("on");
    if(masukan.length < 21){
        alert("Belum semua pernyataan terisi");
    } else{
        for(i=0; i<21; i++){
            let el = masukan[i];
            let tipe = el.parentElement.parentElement.classList[1];
            let val = parseInt(el.value);

            switch(tipe){
                case "visual":
                    visual+=val;
                    break;
                case "verbal":
                    verbal+=val;
                    break;
                case "social":
                    social+=val;
                    break;
                case "physical":
                    physical+=val;
                    break;
                case "aural":
                    aural+=val;
                    break;
                case "solitary":
                    solitary+=val;
                    break;
                case "logical":
                    logical+=val;
                    break;
            }

        }

    replace();
    buildChart();
    }
    
}

function buildChart(){
    
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type:'radar',

        data:{
            labels: ["Visual", "Social", "Physical", "Aural", "Verbal", "Solitary", "Logical"],
            datasets:[{
                label: "Learning Styles",
                backgroundColor: 'red',
                borderColor: 'black',
                data: [visual, social, physical, aural, verbal, solitary, logical],
            }]
        }
    })

    sortStyle();
}

function refresh(){
    window.location.reload();
    window.scrollTo(top);
}

function replace(){
    let questions = document.getElementsByClassName("questions");

    for(i=0; i<21; i++){
        questions[i].style.display = "none";
    }

    document.getElementById("submit").style.display = "none";
    document.getElementById("myChart").style.display = "block";
    document.getElementById("refresh").style.display="block";
}

function sortStyle(){
    let urutan = [
        {
            value: visual,
            text: "Visual: ",
        },
        {
            value: social,
            text: "Social: "
        },
        {
            value: physical,
            text: "Physical: "
        },
        {
            value: aural,
            text: "Aural: "
        },
        {
            value: verbal,
            text: "Verbal: "
        },
        {
            value: solitary,
            text: "solitary: "
        },
        {
            value: logical,
            text: "Logical: "
        },
    ]

    //sort
    urutan.sort((a,b)=> {
        const valA = a.value;
        const valB = b.value;
        if(valA < valB){
            return 1;
        }
        if(valA > valB){
            return -1;
        }
        return 0;
    })

    console.log(urutan);

    let scoreBox = document.getElementById("score");

    for(i=0; i<7; i++){
        const Text = document.createElement('p');
        Text.textContent= urutan[i].text + urutan[i].value.toString() + "/20";

        scoreBox.appendChild(Text);
    }
}




