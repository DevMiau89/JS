class Characters {
    fetch() {
        fetch('https://api.got.show/api/characters/')
            .then(response => response.json())
            .then(response => console.log(12))
            .catch(err => console.log(err))
    }
}

module.exports = Characters;