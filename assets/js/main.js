function abrirInfos (title1, info1, icon1) {

    /* var verif = document.getElementsByClassName("more-info");
    for (let item of verif) {

        var testando = item.id

        if (document.getElementById(testando).style.display === 'block') {
            document.getElementById(testando).style.display = 'none'        
            document.getElementById(testando).style.fontWeight = '400'
            document.getElementById(testando).style.transform = 'rotate(0deg)'
        }
    } */

    /* var verif2 = document.getElementsByClassName("title-dado1")
    for (let item2 of verif2) {

        console.log(verif2)
    }
 */

    var aux = document.getElementById(info1).style.display

    if (aux === 'none') {
        document.getElementById(info1).style.transition = '0.2s linear;'
        document.getElementById(info1).style.display = 'block'
        document.getElementById(title1).style.fontWeight = '700'
        document.getElementById(icon1).style.transform = 'rotate(180deg)'
    } else {
        document.getElementById(info1).style.display = 'none'        
        document.getElementById(title1).style.fontWeight = '400'
        document.getElementById(icon1).style.transform = 'rotate(0deg)'
        document.getElementById(info1).style.transition = '0.2s linear;'
    }



}