const bugs = ["Ant", "Worm", "Moth", "Fly"]

function printRandomBug() {
    const randomBug = bugs[Math.ceil(Math.random() * bugs.length)]
    console.log(randomBug)
}

module.exports = printRandomBug
