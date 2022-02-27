function ampulheta() {
    var tamanho = document.getElementById('value').value;
    var temp = ""
    var posicaoInicial = 0
    var posicaoFinal = (tamanho - 1)
    for (var i = 0; i < tamanho; i++) {
        for (var j = 0; j < tamanho; j++) {
            if (i < 1 || j < 1 || i > (tamanho - 2) || j > (tamanho - 2)) {
                temp += "#"
            } else {
                if (i < (tamanho / 2)) {
                    if (posicaoInicial == j || posicaoFinal == j) {
                        temp += "#"
                    } else {
                        temp += " "
                    }
                } else {
                    if (posicaoInicial == j || posicaoFinal == j) {
                        temp += "#"
                    } else {
                        if (posicaoInicial > j && posicaoFinal < j) {
                            temp += "#"
                        } else {
                            temp += " "
                        }
                    }
                }
            }
        }
        temp += "\n"
        posicaoInicial += 1
        posicaoFinal -= 1
    }
    console.log(temp)
}