const btn1 = document.getElementById('btn-1')
const btnclose = document.getElementById('btnClose')
const inputTask = document.querySelector('input.task')
const inputDate = document.querySelector('input.date')
const inputHours = document.querySelector('input.hours')
const validate = document.querySelector('form')
const container = document.querySelector(".container")

let task = "";
let date = "";
let hours = "";

inputTask.addEventListener('input', (e) =>{
    task = e.target.value;
})
inputDate.addEventListener('input', (e) =>{
    date = e.target.value;
})
inputHours.addEventListener('input', (e) =>{
    hours = e.target.value;
})

console.log(validate);

validate.addEventListener('submit', e => {
    e.preventDefault();

    if(task == ''|| date == '' || hours == ''){
        document.querySelector('form > div').innerHTML = `
        <h2> Veuillez remplir correctement les cases </h2>
        `;
    }else{
        const todolist = document.querySelector('.container > span').innerHTML = `
        <h2>Tâche : ${task}/ Date : ${date}/ Heure : ${hours}</h2>
        `;
        const flex = document.createElement('div');
        flex.className = "flex";

        const btnDelete = document.createElement("a");
        btnDelete.className = "delete";
        btnDelete.innerHTML = "&times";



        container.appendChild(flex);
        flex.appendChild(btnDelete);

        
    }
});



    btn1.addEventListener('click', () =>{
        let blur = document.getElementById('blur')
        let pop = document.getElementById('pop')
        blur.classList.toggle('active')
        pop.classList.toggle('active')
        pop.style.top
        pop.style.setProperty('--y', window.scrollY + 350 + "px")

        btnclose.addEventListener('click', () =>{
            blur.classList.remove('active')
            pop.classList.remove('active')
    })

        window.addEventListener('scroll', (e) =>{
            console.log(window.scrollY);
            pop.style.setProperty('--y', window.scrollY + 350 + "px")
        })

    });



