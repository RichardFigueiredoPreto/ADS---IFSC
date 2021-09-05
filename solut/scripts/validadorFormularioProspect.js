function validaFormulario(formulario)
{
    if(formulario.iNomeFant.value =="" || formulario.iNomeFant.value == null || formulario.iNomeFant.value.length < 3){
        alert("Você deve informar um valor válido para o nome fantasia");
        formulario.iNomeFant.focus();
        return false;
    }
    if(formulario.iCnpj.value =="" || formulario.iCnpj.value == null || formulario.iCnpj.value.length < 14){
        alert("Você deve informar um valor válido para o CNPJ");
        formulario.iCnpj.focus();
        return false;
    }
    if(formulario.iNomeCont.value =="" || formulario.iNomeCont.value == null || formulario.iNomeCont.value.length < 3){
        alert("Você deve informar um valor válido para o nome do contato");
        formulario.iNomeCont.focus();
        return false;
    }
     /*tipo email já faz a validacao mas para qualquer eventualidade fica a validacao - e para um eventual navegador que apresente algum problerma */
        if(formulario.iEmail.value =="" || formulario.iEmail.value == null || formulario.iEmail.value.length < 6 || formulario.iEmail.value.indexOf('@') == -1){
        alert("Você deve informar um valor válido para o email");
        formulario.iEmail.focus();
        return false;
    }

    if(formulario.iTel.value =="" || formulario.iTel.value == null || formulario.iTel.value.length < 10){
        alert("Você deve informar um valor válido para o telefone");
        formulario.iTel.focus();
        return false;
    }
    if(formulario.iCel.value =="" || formulario.iCel.value == null || formulario.iCel.value.length < 11){
        alert("Você deve informar um valor válido para o celular");
        formulario.iCel.focus();
        return false;
    }

    //validacao de radio buttons
    var escolhaRamo = -1;
    for(var x = 0; x < formulario.nRamo.length; x++){
        if(formulario.nRamo[x].checked)
        escolhaRamo = x;
    }
    if(escolhaRamo == -1){
        alert("Você precisa definir um ramo.");
        formulario.nRamo[0].focus();
        return false;
    }
    alert("Todos os dados foram informados corretamente");
}

