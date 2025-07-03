var formEl = document.getElementById("meuForm");

//CHAMA A FUNÇÃO CAPTURA_EVENTOS
captura_eventos(formEl, 'Submit', formValid);

//FUNÇÃO PARA CAPTURAR EVENTOS
function captura_eventos(objeto, evento, funcao){
    // Teste addEventListener
    if (objeto.addEventListener) {
        objeto.addEventListener(evento, funcao, true)
    }
    // Teste attachEvent
    else if (objeto.attachEvent) {
        objeto.attachEvent("on" + evento, funcao);
        var evento = 'on' + evento;
        objeto.attachEvent(evento, funcao);
    }
}

// FUNÇÃO PARA CANCELAR EVENTOS
function cancela_evento(evento) {
    if (event.preventDefault) {
        event.preventDefault()
    }
    else{
        window.event.returnValue = false;
    }
}

// FUNÇÃO QUE VERIFICAR OS CAMPOS RADIO E CHEBOX

function verificacampos(campo) {
    //Variável que verifica os radios
    var checados = false;
    //verifica os radios
    for(var i=0; i < campo.length; i++) {
        if (campo[i].checked){
            checados=true;
        }
    }
    if (!checados){
        alert('Marque o campo ' + campo[0].name);
        cancela_evento(evento);
        return false;
    }
}

function formValid(event){
    //Pega os campos text e select
    var campoNome = formEl.textname.value,
        campoCidade = formEl.cidades,
        campoRadios = formEl.sexo,
        campoCheckbox = formEl.rede;

    //VERIFICA CAMPO DE TEXTO
    if (campoNome.length==0){
        alert("O campo Nome é obrigatório!")
        return false;
    }
    //LAÇO QUE PERCORRE TODAS AS OPÇÕES 
    for (var i=0; i<campoCidade.length; i++){
        if (campoCidade[i].selected){
            if(campoCidade[i].value ==""){
                alert('Selecione uma opção');
                cancela_evento(event);
            }
        }
    }

//CHAMA A FUNÇÃO VERIFICA CAMPO PARA O RADIO
    verificacampos(campoRadios);

//CHAMA A FUNÇÃO VERIFICA CAMPO PARA CHECKBOX
    verificacampos(campoCheckbox);
    alert("O formulário será enviado!");
    return true;
}
