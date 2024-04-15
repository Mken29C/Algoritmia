function problema1(){
    var p1_input = document.querySelector('#p1-input').value;
    var palabra_inv = p1_input.split(" ").reverse();
    var p1_output = '';

    palabra_inv.forEach(function (palabra, i){
        if(i != 0 || i != palabra_inv.length) p1_output += ' ';
        p1_output += palabra;
    });    

    document.querySelector('#p1-output').textContent = p1_output;
}

function problema2(){
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    v1 = v1.sort(function(a, b){
        return b-a;
    });

    v2 = v2.sort(function(a, b){
        return b-a;
    });

    v2 = v2.reverse();

    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }
    document.querySelector('#p2-output').textContent = 'Producto escalar minimo : ' + p2_producto;
}

function problema3() {
    var p3_input = document.querySelector('#p3-input').value;
    var palabras = p3_input.split(/,\s*/);
    var unicos = 0;
    var palabraMax = '';

    palabras.forEach(function(palabra) {
        var caracteresUnicos = new Set(palabra).size;
        if (caracteresUnicos > unicos) {
            unicos = caracteresUnicos;
            palabraMax = palabra;
        }
    });

    document.querySelector('#p3-output').textContent = palabraMax;
}
