import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './componentes/compartilhados/cadastro-cliente/cadastro-cliente.component';
import { CalendarioComponent } from './componentes/compartilhados/calendario/calendario.component';
import { CartaoCreditoComponent } from './componentes/compartilhados/cartao-credito/cartao-credito.component';
import { LoginComponent } from './componentes/compartilhados/login/login.component';
import { PerfilComponent } from './componentes/compartilhados/perfil/perfil.component';
import { PerfilClienteComponent } from './componentes/compartilhados/perfil-cliente/perfil-cliente.component';
import { ReservaComponent } from './componentes/compartilhados/reserva/reserva.component';
import { CardPrestContratarComponent } from './componentes/compartilhados/card-prest-contratar/card-prest-contratar.component';
import { CardsComponent } from './componentes/compartilhados/cards/cards.component';
import { CardsPrestadorJaContratadosComponent } from './componentes/compartilhados/cards-prestador-ja-contratados/cards-prestador-ja-contratados.component';
import { FiltroComponent } from './componentes/compartilhados/filtro/filtro.component';
import { FooterComponent } from './componentes/compartilhados/footer/footer.component';
import { HeaderComponent } from './componentes/compartilhados/header/header.component';
import { HorarioComponent } from './componentes/compartilhados/horario/horario.component';
import { LineComponent } from './componentes/compartilhados/line/line.component';
import { NovidadesComponent } from './componentes/compartilhados/novidades/novidades.component';
import { PagamentoComponent } from './componentes/compartilhados/pagamento/pagamento.component';
import { ResumoComponent } from './componentes/compartilhados/resumo/resumo.component';
import { TipoLimpezaComponent } from './componentes/compartilhados/tipo-limpeza/tipo-limpeza.component';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component';
import { PesquisarComponent } from './componentes/pesquisar/pesquisar.component';
import { ReservandoComponent } from './componentes/reservando/reservando.component';
import { PagarComponent } from './componentes/pagar/pagar.component';
import { ResumoReservaComponent } from './componentes/resumo-reserva/resumo-reserva.component';
import { TelaInicialLogadoComponent } from './componentes/tela-inicial-logado/tela-inicial-logado.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { HojePrestComponent } from './componentes/prestador/hoje-prest/hoje-prest.component';
import { CalendarioPrestComponent } from './componentes/prestador/calendario-prest/calendario-prest.component';
import { AnuncioComponent } from './componentes/prestador/anuncio/anuncio.component';
import { CadastroPrestComponent } from './componentes/prestador/cadastro-prest/cadastro-prest.component';
import { TelaInicialPrestComponent } from './componentes/prestador/tela-inicial-prest/tela-inicial-prest.component';
import { GanhosPrestComponent } from './componentes/prestador/ganhos-prest/ganhos-prest.component';
import { PerfilPrestComponent } from './componentes/prestador/perfil-prest/perfil-prest.component';
import { CadastroServicoPrestComponent } from './componentes/prestador/cadastro-servico-prest/cadastro-servico-prest.component';

const routes: Routes = [

  { path: '', redirectTo: '/tela-inicial', pathMatch: 'full' }, 
  { path: 'tela-inicial', component: TelaInicialComponent },
  { path: 'pesquisar', component: PesquisarComponent },
  { path: 'reservando', component:ReservandoComponent },
  { path: 'pagar', component: PagarComponent },
  { path: 'resumo-reserva', component: ResumoReservaComponent },  
  { path: 'tela-inicial-logado', component: TelaInicialLogadoComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'hoje-prest', component: HojePrestComponent },
  { path: 'calendario-prest', component: CalendarioPrestComponent },
  { path: 'anuncio', component: AnuncioComponent },
  { path: 'cadastro-prest', component: CadastroPrestComponent },
  { path: 'tela-inicial-prest', component: TelaInicialPrestComponent },
  { path: 'ganhos-prest', component: GanhosPrestComponent },
  { path: 'perfil-prest', component: PerfilPrestComponent },
  { path: 'cadastro-servico-prest', component: CadastroServicoPrestComponent },


  
  
  { path: 'app.component', component: AppComponent },
  { path: 'cadastro-cliente', component: CadastroClienteComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'card-prest-contratar', component: CardPrestContratarComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'cards-prestador-ja-contratados', component: CardsPrestadorJaContratadosComponent},
  { path: 'cartao-credito', component: CartaoCreditoComponent },
  { path: 'filtro', component: FiltroComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'horario', component: HorarioComponent },
  { path: 'line', component: LineComponent },
  { path: 'login', component: LoginComponent },
  { path: 'novidades', component: NovidadesComponent },
  { path: 'pagamento', component: PagamentoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'perfil-cliente', component: PerfilClienteComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'resumo', component: ResumoComponent },
  { path: 'tipo-limpeza', component: TipoLimpezaComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
