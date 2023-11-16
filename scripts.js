const costumeContainer = document.querySelector('#costumes')

// we can retrieve values from objects using dot notation
function quickList(costumeArray) {
    for (let costume of costumeArray) {
        console.log(`This costume is for: ${costume.character}`);
        // we can also use [] bracket notation
        console.log(`It has ${costume['number of pieces']} pieces.`)
    }
}


/* <div class="character">
<h2>Dragon</h2>
<p>5 pieces</p>
<img src="images/dragon.jpeg">
<p>Actor: Keanu Reeves</p>
<p>Clean</p>
</div> */

function buildCharacters(costumeArray) {
    // loop through the array and build html for each costume
    for (let costume of costumeArray) {
        // create a box for the costume 
        let box = document.createElement('div')
        // add a class to the box so we can style it
        box.classList.add("character")
        // create an H2
        let charName = document.createElement('h2')
        // put the character's name in the H2
        charName.innerText = costume.character
        // put the H2 in the box
        box.appendChild(charName)
        // put the box in the container on the page
        costumeContainer.appendChild(box)
        // build the p for the number of pieces
        let pieces = document.createElement('div')
        pieces.innerText = `${costume['number of pieces']} pieces`
        box.appendChild(pieces)
        let photo = document.createElement('img')
        photo.src = costume.photo_path
        photo.alt = 'photo of costume'
        box.appendChild(photo)
        let actor = document.createElement('div')
        actor.innerText = `Actor: ${costume.actor}`
        box.appendChild(actor)
        let clean = document.createElement('div')
        if (costume.cleaned) {
            clean.innerText = 'Is clean 🫧'
        } else {
            clean.innerText = "Needs cleaning 💩"
        }
        box.appendChild(clean)
    }
}

quickList(costumesT20Theatre)
buildCharacters(costumesT20Theatre)