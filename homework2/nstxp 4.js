function unpackSausages(truck) {
    let res = [];

    let sausages = ["[IIII]", "[))))]", "[((((]", "[@@@@]", "[1111]","[llll]", "[║║║║]", "[¦¦¦¦]", "[||||]"];
    [].concat(...truck).forEach(element => {
        if(sausages.some( el => el === element)) {
            res.push(element.slice(1, -1))
        }
    })

    for (let i = 4; i < res.length; i = i+5) {
        delete res[i]
    }

    return res
        .join('')
        .split('')
        .join(' ')
}