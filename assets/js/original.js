function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0)
            return true;
    return false;
}

const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '5571992032468';


let tiposDeBolo = '';

$form.addEventListener('submit', (event) => {
    let checkboxes = document.querySelectorAll(".checkboxes");

    for(let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            tiposDeBolo = ' '+ checkboxes[i].value
        } 
    }
    
    setTimeout(() => {
        let nome = document.querySelector('#nome').value
        let tel = document.querySelector('#tel').value
        let endereco = document.querySelector('#endereco').value
        let data = document.querySelector('#data').value
        let horario = document.querySelector('#horario').value
        let opt1ons = document.querySelector('#opt1ons').value
        
        let chantinho = document.querySelector('#chantinho').value
        let pastaAmericana = document.querySelector('#pastaAmericana').value
        let pastaBoloDeCasamento = document.querySelector('#pastaBoloDeCasamento').value

        let mensagem = document.querySelector('#mensagem').value
        // Aqui cria os dados para identificar cada elemento e envia uma mensagem via WhatsApp
       let message = 'send?phone=' + phone + '&text=*_MEU ORÇAMENTO 🦦_*%0A*Contato*%0A%0A*Qual é o seu nome?*%0A' + nome + '%0A*Escreva sua mensagem*%0A' + tel + '%0A*Endereço:*%0A' + endereco + '%0A*Data do Evento:*%0A' + data + '%0A*Horário do Evento:*%0A' + horario + '%0A*Tamanho do Bolo:*%0A' + opt1ons +  '%0A*Mensagem*%0A' + mensagem + ''
        if (isMobile()) {
            window.open(urlMobile + message)
        } else {
            window.open(urlDesktop + message)
        }
    }
    );
    event.preventDefault()
}
);
