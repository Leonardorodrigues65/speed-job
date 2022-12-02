const body = document.querySelector("body")
const main = document.createElement("main")

const section_container1 = document.querySelector(".main__container--section1")
const div_scr = document.createElement("div")

const section_container2 = document.querySelector(".main__container--section2")
const div_scr2 = document.createElement("div")

main.classList.add("main__container")
div_scr.classList.add("scr__section");
div_scr2.classList.add("scr__section");




function createHeader(){
    
    const headerrs = document.createElement("header")
    const containerdiv1 = document.createElement("div")
    const speed = document.createElement("h2")
    const job = document.createElement("h2")
    const vagas = document.createElement("span")
    const containerdiv2 = document.createElement("div")
    const buttonfrontEnd = document.createElement("button")
    const buttonBackEnd = document.createElement("button")

    containerdiv1.classList.add("container__div1")
    speed.innerText = "Speed"
    speed.classList.add("h2__01")
    job.classList.add("h2__02")
    job.innerText = "Job"
    vagas.innerText = "Encontre a vaga que mais se parece com você"
    containerdiv2.classList.add("container__div2")
    buttonfrontEnd.innerText = "Vagas Frontend"
    buttonBackEnd.innerText = "Vagas Backend"

    body.append(headerrs)
    body.appendChild(main)
    headerrs.append(containerdiv1, vagas, containerdiv2)
    containerdiv1.appendChild(speed)
    containerdiv1.appendChild(job)
    containerdiv2.appendChild(buttonfrontEnd)
    containerdiv2.appendChild(buttonBackEnd)
}



function jobFrontEnd(){

    for(let i = 0; i < frontEndJobs.length; i++){

       const section = document.createElement("section1");
       const sectionDiv = document.createElement("div");
       const g = document.createElement("h2");
       const titleDiv = document.createElement("div");
       const h2 = document.createElement("h2");
       const city = document.createElement("span");
       const span = document.createElement("span");
       const div3 = document.createElement("div");
       const span1 = document.createElement("span");
       const span2 = document.createElement("span");

       section.classList.add("container__section");
       sectionDiv.classList.add("container__section--div");
       g.id = "imagem__icon"
       g.innerText = "G"

       titleDiv.classList.add("container__title--1");
       h2.innerHTML = frontEndJobs[i].title;
       h2.classList.add("title_h2")
       city.innerHTML = frontEndJobs[i].city;
       city.classList.add("city__title")
       span.classList.add("description")

       span.innerHTML = frontEndJobs[i].descrription;
       div3.classList.add("div__3")

       span1.innerHTML = frontEndJobs[i].modality[0];
       span2.innerHTML = frontEndJobs[i].modality[1];
    
       titleDiv.append(h2, city)
       sectionDiv.append(g, titleDiv)
       div3.append(span1, span2)
       section.append(sectionDiv, span, div3)
       div_scr.appendChild(section)
       section_container1.appendChild(div_scr)
       main.appendChild(section_container1)
 
 
    }
}

function jobBackEnd(){


    for(let i = 0; i < backEndJobs.length; i++){


        const section = document.createElement("section2");
        const sectionDiv = document.createElement("div");
        const g = document.createElement("h2");
        const titleDiv = document.createElement("div");
        const h2 = document.createElement("h2");
        const city = document.createElement("span");
        const span = document.createElement("span");
        const div3 = document.createElement("div");
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
    
        section.classList.add("container__section");
        sectionDiv.classList.add("container__section--div");
        g.innerText = "G"
        g.id = "imagem__icon"
        titleDiv.classList.add("container__title--1");
        h2.innerHTML = frontEndJobs[i].title;
        h2.classList.add("title_h2")

        city.innerHTML = frontEndJobs[i].city;
        city.classList.add("city__title")
        span.classList.add("description")
        span.innerHTML = frontEndJobs[i].descrription;
        div3.classList.add("div__3")
        span1.innerHTML = frontEndJobs[i].modality[0];
        span2.innerHTML = frontEndJobs[i].modality[1];
    
        titleDiv.append(h2, city)
        sectionDiv.append(g, titleDiv)
        div3.append(span1, span2)
        section.append(sectionDiv, span, div3)
        div_scr2.appendChild(section)
    
        section_container2.appendChild(div_scr2)
        main.appendChild(section_container2)
    
    
    }

}

createHeader()
jobFrontEnd()
jobBackEnd()