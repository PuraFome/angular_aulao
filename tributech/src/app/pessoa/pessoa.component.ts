import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PessoaForm } from './pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PessoaComponent implements OnInit{
  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log(value)
    })
  }
  form = new PessoaForm();
}
