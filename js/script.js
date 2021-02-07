let c = (e)=> document.querySelector(e);

function abrirfecharMenu() {
    if (c('.hearder-right').style.display === 'none' || c('.hearder-right').style.display === '') {
        c('.hearder-right').style.display = 'flex';
    }
    else{
        c('.hearder-right').style.display = 'none';
    }
}