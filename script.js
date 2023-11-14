// console.log(countries_data);

// for (let i=0; i < countries_data.length; i++) {
//     console.log(countries_data[i] .name);

//     const p = document.createElement('p') 
//     p.textContent = countries_data[i].name

//     const img = document.createElement('img')

//     img.src = countries_data[i].flag


//     document.body.append(p)
//     document.body.appendChild(img)
// }

// const p = document.createElement('p') 
// console.log(p);



   function ulkeler() {
    const container = document.createElement('div')
    container.classList.add('container')
    // container.style.display = 'none'

    document.body.append(container)

    const row = document.createElement('div')
    row.setAttribute('class', 'row mt-3')

    container.append(row)


    /************************** */
countries_data.forEach((ulke) => {

    console.log(ulke);


    const col = document.createElement('div')
    col.classList.add('col-4')







    //******************************** */

    const div = document.createElement('div')
    div.classList.add('card')
    div.style.width = '25rem'

    const img = document.createElement('img')
    img.src = ulke.flag
    img.classList.add('card-img-top')

    const div2= document.createElement('div')
    div2.classList.add('card-body')

    const h5 = document.createElement('h5')
    h5.classList.add('card-tittle')
    h5.textContent = ulke.name

    const p = document.createElement('p')
    p.classList.add('card-text')
    p.textContent = `${ulke.capital} - ${ulke.languages}- ${ulke.region}`

    const a = document.createElement('a')
    a.setAttribute('class', 'btn btn-warning')
    a.textContent = ulke.population
    
    div2.append(h5)
    div2.append(p)
    div2.append(a)

    div.append(img)
    div.append(div2)

    col.append(div)

    row.append(col)
})

   } 

   const btn = document.createElement('button')
   btn.setAttribute('class', 'btn btn-dark')
   btn.textContent = 'ÜLKELER'

   document.body.append(btn)

   btn.addEventListener('click', ulkeler)

//    btn.addEventListener('click', () => {
//     container.classList.toggle
//    } )