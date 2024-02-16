function buscarFilme(event) {
    event.preventDefault()

        var buscar = document.getElementById("inputButton").value

            console.log(buscar)

    fetch(`https://www.omdbapi.com/?t=${buscar}&apikey=5c19b70e`, {
        method:"GET"
    
    }).then(function(response){
        return response.json()
    }).then(function(response){
        console.log(response)

        var card = document.getElementById("containerCards")
            console.log(card)

        card.innerHTML = `
        
                <div class="cards-all">

                    <div class="content-card">

                        <img src="${response.Poster}">

                        <div class="card-text-content">

                            <h1 class="h1-text-content">

                                ${response.Title}
    
                            </h1>
    
                            <p class="p-text-content">
    
                                ${response.Released}
    
                            </p>

                        </div>

                    </div>

                </div>

        `
    })
}