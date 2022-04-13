const button = document.querySelector('button');


const btnClicked = () => {
    console.log('button clicked')

    axios.get(`https://swapi.dev/api/planets/?search=Alderaan`)
    .then((res) => {
    for(i = 0; i < res.data.results[0].residents.length; i ++){
       console.log(res.data.results[0].residents[i])
       
       axios.get(res.data.results[0].residents[i])
       .then((res) =>{ 

          let resName = document.createElement('h2')
           resName.textContent = res.data.name
            document.body.appendChild(resName)
       })
    }
    })
    .catch(err => {
        console.log(err)
    })

}

button.addEventListener('click', btnClicked)