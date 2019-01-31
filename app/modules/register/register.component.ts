import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  public objUser = {
    nome: '',
    cpf: '',
    email: '',
    cidade: '',
    telefone: '',
    camisa: '',
    plano: ''
  }
  public checkbox1: boolean;
  public checkbox2: boolean;
  ngOnInit() {
    this.checkbox1 = false;
    this.checkbox2 = false;
  }

  openTerms(){
    Swal.fire({
      title: 'Termos',
      html: 'Concordo que devo depositar o dinheiro referente <br>ao pagamento da minha inscrição na conta:<br>' + 
            'Caixa Econômica Federal - Ag 0709 / 001 00025254-1<br> de titular Eduardo Garcia de Oliveira,<br>' +
            'e enviar o comprovante de pagamento para o Whatsapp<br> +55 (34) 99841-0980, para confirmação.',
      type: 'info',
      confirmButtonText: 'Ok',
      showCancelButton: true,
      cancelButtonText: 'Não',
      position: 'center'
    }).then((result) => {
      if (result.value) {
        this.checkbox1 = true;
      } else{
        this.checkbox1 = false;
      }
    });
  }

  efetuar(){
    let validCpf = /^\d+$/.test(this.objUser.cpf);
    if(!validCpf 
      || this.objUser.cpf.length !== 11
      || this.objUser.nome === ''
      || this.objUser.cpf === ''
      || this.objUser.email === ''
      || this.objUser.cidade === ''
      || this.objUser.telefone === ''
      || this.objUser.camisa === ''
      || this.objUser.plano === ''){
      Swal.fire({
        type: 'error',
        title: 'Erro!',
        text: 'Há dados em branco ou inválidos, favor ler orientação'
      })
    } else if (!this.checkbox1 || !this.checkbox2) {
      Swal.fire({
        type: 'error',
        title: 'Erro!',
        text: 'Concorde com os termos e marque as duas caixas de verificação.'
      })
    } else {
      this.httpService.postClient(this.objUser).subscribe( response => {
        if(response['_id']){
          Swal.fire({
            title: 'Parabéns!',
            text: 'Recebemos sua inscrição. Confirme o pagamento pelo Whatsapp no número +55 34 9841-0980',
            type: 'success'
          });
        } else {
          Swal.fire({
            type: 'error',
            title: 'Erro!',
            text: 'Algo deu errado. Tente novamente mais tarde.'
          })
        }
      });
    }
  }

}
