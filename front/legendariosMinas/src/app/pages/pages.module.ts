import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatStepper, MatStepperModule } from "@angular/material/stepper";
import { ConsultarLegendarioComponent } from './AreaAdm/consultar-legendario/consultar-legendario.component';
import { HomeAdmComponent } from './AreaAdm/home-adm/home-adm.component';
import { LoginAdmComponent } from './AreaAdm/login-adm/login-adm.component';
import { CadastroSenderistasComponent } from './cadastro-senderistas/cadastro-senderistas.component';
import { TableHomeComponent } from './AreaAdm/home-adm/tablehome/table-home/table-home.component';
import { EditarLegendarioComponent } from './AreaAdm/home-adm/editar-legendario/editar-legendario.component';
import { AppRoutingModule } from '../app-routing.module';
import {A11yModule} from '@angular/cdk/a11y';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkMenuModule} from '@angular/cdk/menu';
import {DialogModule} from '@angular/cdk/dialog';
import { FirstSteepComponent } from "./cadastro-senderistas/firstSteep/first-page/first-steep.component";
import { SecondSteepComponent } from "./cadastro-senderistas/SecondSteep/second-page/second-steep.component";
import { ThirthSteepComponent } from "./cadastro-senderistas/ThirthSteep/ThirthPage/thirth-steep/thirth-steep.component";
import { CdkStepper, STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { PagamentoCadastroSenderistaComponent } from './cadastro-senderistas/pagamento-cadastro-senderista/pagamento-cadastro-senderista.component';
import { DescricaoEventoCadastroSenderistaComponent } from './cadastro-senderistas/descricao-evento-cadastro-senderista/descricao-evento-cadastro-senderista.component';

@NgModule({
    declarations: [
        ConsultarLegendarioComponent,
        HomeAdmComponent,
        LoginAdmComponent,
        CadastroSenderistasComponent,
        TableHomeComponent,
        EditarLegendarioComponent,
        FirstSteepComponent,
        SecondSteepComponent,
        ThirthSteepComponent,
        PagamentoCadastroSenderistaComponent,
        DescricaoEventoCadastroSenderistaComponent
    ],
    providers: [ MatStepper,CdkStepper,],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PoModule,
        RouterModule.forRoot([]),
        PoTemplatesModule,
        MatTableModule,
        MatPaginatorModule,
        FormsModule,
        CommonModule,
        MatStepperModule,
        FormsModule,
        A11yModule,
        CdkAccordionModule,
        ClipboardModule,
        CdkMenuModule,
        CdkStepperModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        OverlayModule,
        PortalModule,
        ScrollingModule,
        DialogModule,
        ReactiveFormsModule
    ]
})
export class PagesModule { }
