import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEditarPerfilComponent } from './cliente-editar-perfil.component';

describe('ClienteEditarPerfilComponent', () => {
  let component: ClienteEditarPerfilComponent;
  let fixture: ComponentFixture<ClienteEditarPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteEditarPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEditarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
