import { FormControl, FormGroup, Validators } from "@angular/forms";

interface Pessoa{
  id: number,
  nome: string
}

export class PessoaForm extends FormGroup {
  constructor(pessoa?: Pessoa){
    super({
      id: new FormControl(pessoa?.id, [
        Validators.required,
        Validators.min(0)
      ]),
      nome: new FormControl(pessoa?.nome),
    });
  }

  get data(): Pessoa{
    return this.value;
  }
}
