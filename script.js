//Navegador geral
var sobremim = document.getElementById('sobremim')
var portifolio = document.getElementById('portifolio')
var resumo = document.getElementById('resumo')
var blog = document.getElementById('blog')
var contact = document.getElementById('contact')
var contato = document.getElementById('contato')
var hrdoheader = document.getElementById('hrdoheader')

document.getElementById('botaosobre').addEventListener('click',function name(params) {
    sobremim.style.cssText='display:block; transition: 0.5s ease-in-out;'
    portifolio.style.display='none'
    resumo.style.display='none'
    blog.style.display='none'
    contact.style.display='none'
})

document.getElementById('botaoportifolio').addEventListener('click',function name(params) {
    sobremim.style.display='none'
    portifolio.style.display='block'
    resumo.style.display='none'
    blog.style.display='none'
    contact.style.display='none'
})

document.getElementById('boataoresumo').addEventListener('click',function name(params) {
    sobremim.style.display='none'
    portifolio.style.display='none'
    resumo.style.display='block'
    blog.style.display='none'
    contact.style.display='none'
})

document.getElementById('botaoblog').addEventListener('click',function name(params) {
    sobremim.style.display='none'
    portifolio.style.display='none'
    resumo.style.display='none'
    blog.style.display='block'
    contact.style.display='none'
})

document.getElementById('botaocontato').addEventListener('click',function name(params) {
    sobremim.style.display='none'
    portifolio.style.display='none'
    resumo.style.display='none'
    blog.style.display='none'
    contact.style.display='block'
})

//Navegador do portifolio
var landpage = document.getElementsByClassName('classelandpage');
var aplicacao = document.getElementsByClassName('classeaplicacao');
var developer = document.getElementsByClassName('classedeveloper');

document.getElementById('botaowebdesign').addEventListener('click', function () {
    for (var i = 0; i < aplicacao.length; i++) {
        aplicacao[i].style.display = 'none';
    }
    for (var i = 0; i < developer.length; i++) {
        developer[i].style.display = 'none';
    }
    for (var i = 0; i < landpage.length; i++) {
        landpage[i].style.display = 'block';
    }
});

document.getElementById('botaoaplicacao').addEventListener('click', function () {
    for (var i = 0; i < landpage.length; i++) {
        landpage[i].style.display = 'none';
    }
    for (var i = 0; i < developer.length; i++) {
        developer[i].style.display = 'none';
    }
    for (var i = 0; i < aplicacao.length; i++) {
        aplicacao[i].style.display = 'block';
    }
});

document.getElementById('botaodeveloper').addEventListener('click', function () {
    for (var i = 0; i < landpage.length; i++) {
        landpage[i].style.display = 'none';
    }
    for (var i = 0; i < aplicacao.length; i++) {
        aplicacao[i].style.display = 'none';
    }
    for (var i = 0; i < developer.length; i++) {
        developer[i].style.display = 'block';
    }
});

document.getElementById('boataoall').addEventListener('click',function name(params) {
    for (var i = 0; i < landpage.length; i++) {
        landpage[i].style.display = 'block';
    }
    for (var i = 0; i < aplicacao.length; i++) {
        aplicacao[i].style.display = 'block';
    }
    for (var i = 0; i < developer.length; i++) {
        developer[i].style.display = 'block';
    }
})



//Botao no modo cll

document.getElementById('botaocll').addEventListener('click',function name(params) {
    if(contato.style.display=='none'){
        contato.style.display='block'
        hrdoheader.style.display='block'
    }else{
        contato.style.display='none'
        hrdoheader.style.display='none'
    }
})




