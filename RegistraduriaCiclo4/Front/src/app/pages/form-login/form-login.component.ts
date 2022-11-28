import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  @Input()
  seudonimo: string = "";
  @Input()
  correo: string = "";
  @Input()
  contrasena: string = "";

  inputsCompletos: boolean = false;
  constructor(private miServicioLogin:UsuarioService,
    private router:Router) { }

  ngOnInit(): void {
  }

  btnIngresar(): void {
    this.estanCompletos();
    if (this.inputsCompletos) {
      const datos = {
        seudonimo: this.seudonimo,
        contrasena: this.contrasena,
        correo: this.correo
      };

      this.miServicioLogin.login(datos).subscribe(
        data => {
          this.miServicioLogin.guardarDatosSesion(data),
          alert(JSON.stringify("Bienvenido!")),

          this.router.navigateByUrl("home");
        },
        error => alert(JSON.stringify(error))
      );
    }else{
      alert("Tiene campos sin diligenciar");
    }
  }

  btnRegistrar(): void {
   this.miServicioLogin.getMesas().subscribe(
    data =>{
      alert(JSON.stringify(
      data
      ))},
    error =>{alert(error)}
   );
  }

  btnAlerta() {
    alert("Debe diligenciar todos los campos");
  }

  estanCompletos() {
    if (this.seudonimo != ''
      && this.correo != ''
      && this.contrasena != "") {
      this.inputsCompletos = true;
    }else{
      this.inputsCompletos = false;
    }
  }
}
