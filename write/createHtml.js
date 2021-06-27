//Writes the file to create the bootstrap cards
const generateCard = array => {
    //makes cards array
      let cards = []
        for (let i = 0; i < array.length; i++) {
            if (array[i].getPosition() === 'Manager') {
              //utilizes prior info gathered to populate info for manager
                cards.push(` <div class="card" style="width: 275px; display: inline-block">
                <div class="card-header bg-primary">
                  <p class='text-light'>Name: ${array[i].name}</p>
                  <p class='text-light'>Manager</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${array[i].id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${array[i].email}">${array[i].email}</a></li>
                  <li class="list-group-item">Office Number: ${array[i].phoneNumber}</li>
                </ul>
              </div>`)
              //utilizes prior info gathered to populate info for manager
            } else if (array[i].getPosition() === "Engineer") {
                cards.push(` <div class="card" style="width: 275px; display: inline-block">
            <div class="card-header bg-primary">
              <p class='text-light'>Name: ${array[i].name}</p>
              <p class='text-light'>Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${array[i].id}</li>
              <li class="list-group-item">Email: <a href="mailto:${array[i].email}">${array[i].email}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${array[i].github}" target="_blank">${array[i].github}</a></li>
            </ul>
          </div>`)
             //utilizes prior info gathered to populate info for manager
            } else {
              cards.push(` <div class="card" style="width: 275px; display: inline-block">
          <div class="card-header bg-primary">
            <p class='text-light'>Name: ${array[i].name}</p>
            <p class='text-light'>Intern</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${array[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${array[i].email}">${array[i].email}</a></li>
            <li class="list-group-item">School: ${array[i].school}</li>
          </ul>
        </div>`)
          }
    
    
        }
    
        //creates boiler plate and joins 
        let html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <title>Development Team</title>
        </head>
        <body>
            <header class="jumbotron sticky-top bg-danger py-3 text-center mb-2">
                <h1 class='text-light'>My Team</h1>
              </header>
        
            <main>
                <div class='container'>
                    ${cards.join(' ')}  
                </div>
                
            </main>
        </body>
        </html>`
    
    
        return html
    }
    
    module.exports = generateCard;