import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/compartilhados/header/header.component';
import { FooterComponent } from './componentes/compartilhados/footer/footer.component';
import { LineComponent } from './componentes/compartilhados/line/line.component';
import { FiltroComponent } from './componentes/compartilhados/filtro/filtro.component';
import { CardsComponent } from './componentes/compartilhados/cards/cards.component';
import { NovidadesComponent } from './componentes/compartilhados/novidades/novidades.component';
import { PerfilComponent } from './componentes/compartilhados/perfil/perfil.component';
import { LoginComponent } from './componentes/compartilhados/login/login.component';
import { TipoLimpezaComponent } from './componentes/compartilhados/tipo-limpeza/tipo-limpeza.component';
import { HorarioComponent } from './componentes/compartilhados/horario/horario.component';
import { BairroComponent } from './componentes/compartilhados/bairro/bairro.component';
import { CadastroClienteComponent } from './componentes/compartilhados/cadastro-cliente/cadastro-cliente.component';
import { CartaoCreditoComponent } from './componentes/compartilhados/cartao-credito/cartao-credito.component';
import { CardsPrestadorJaContratadosComponent } from './componentes/compartilhados/cards-prestador-ja-contratados/cards-prestador-ja-contratados.component';
import { ReservaComponent } from './componentes/compartilhados/reserva/reserva.component';
import { CardPrestContratarComponent } from './componentes/compartilhados/card-prest-contratar/card-prest-contratar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarioComponent } from './componentes/compartilhados/calendario/calendario.component';
import { ResumoComponent } from './componentes/compartilhados/resumo/resumo.component';
import { PagamentoComponent } from './componentes/compartilhados/pagamento/pagamento.component';
import { PerfilClienteComponent } from './componentes/compartilhados/perfil-cliente/perfil-cliente.component';
import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component';
import { PesquisarComponent } from './componentes/pesquisar/pesquisar.component';
import { CardPesquisarComponent } from './componentes/compartilhados/card-pesquisar/card-pesquisar.component';
import { ReservandoComponent } from './componentes/reservando/reservando.component';
import { PagarComponent } from './componentes/pagar/pagar.component';
import { ResumoReservaComponent } from './componentes/resumo-reserva/resumo-reserva.component';
import { TelaInicialLogadoComponent } from './componentes/tela-inicial-logado/tela-inicial-logado.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { CadastroPrestComponent } from './componentes/prestador/cadastro-prest/cadastro-prest.component';
import { TelaInicialPrestComponent } from './componentes/prestador/tela-inicial-prest/tela-inicial-prest.component';
import { FiltroPrestComponent } from './componentes/prestador/filtro-prest/filtro-prest.component';
import { HojePrestComponent } from './componentes/prestador/hoje-prest/hoje-prest.component';
import { CalendarioPrestComponent } from './componentes/prestador/calendario-prest/calendario-prest.component';
import { AnuncioComponent } from './componentes/prestador/anuncio/anuncio.component';
import { GanhosPrestComponent } from './componentes/prestador/ganhos-prest/ganhos-prest.component';
import { PerfilPrestComponent } from './componentes/prestador/perfil-prest/perfil-prest.component';
import { CadastroServicoPrestComponent } from './componentes/prestador/cadastro-servico-prest/cadastro-servico-prest.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoginPrestComponent } from './componentes/prestador/login-prest/login-prest.component';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LineComponent,
        FiltroComponent,
        CardsComponent,
        NovidadesComponent,
        PerfilComponent,
        LoginComponent,
        TipoLimpezaComponent,
        HorarioComponent,
        BairroComponent,
        CadastroClienteComponent,
        CartaoCreditoComponent,
        CardsPrestadorJaContratadosComponent,
        ReservaComponent,
        CardPrestContratarComponent,
        CalendarioComponent,
        ResumoComponent,
        PagamentoComponent,
        PerfilClienteComponent,
        TelaInicialComponent,
        PesquisarComponent,
        CardPesquisarComponent,
        ReservandoComponent,
        PagarComponent,
        ResumoReservaComponent,
        TelaInicialLogadoComponent,
        CadastrarComponent,
        CadastroPrestComponent,
        TelaInicialPrestComponent,
        FiltroPrestComponent,
        HojePrestComponent,
        CalendarioPrestComponent,
        AnuncioComponent,
        GanhosPrestComponent,
        PerfilPrestComponent,
        CadastroServicoPrestComponent,
        LoginPrestComponent,
    ],
    bootstrap: [AppComponent],

    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgSelectModule,
        
    ],

    providers: [provideHttpClient(withInterceptorsFromDi())]
})

export class AppModule { }
