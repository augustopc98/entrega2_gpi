import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthInterceptor } from "./auth/auth-interceptor";
import { ErrorInterceptor } from "./error-interceptor";
import { ErrorComponent } from "./error/error.component";
import { AngularMaterialModule } from "./angular-material.module";
import { PostsModule } from "./posts/posts.module";
import { GfgComponent } from './graphics/graphics.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './graphics/charts/bar-chart/bar-chart.component';
import { ScatterAreaChartComponent } from './graphics/charts/scatter-area-chart/scatter-area-chart.component';
import { DoughnutChartComponent } from './graphics/charts/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './graphics/charts/pie-chart/pie-chart.component';
import { BubbleAreaChartComponent } from './graphics/charts/bubble-area-chart/bubble-area-chart.component';
import { LineChartComponent } from './graphics/charts/line-chart/line-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GfgComponent,
    ErrorComponent,
    BarChartComponent,
    BubbleAreaChartComponent,
    DoughnutChartComponent,
    LineChartComponent,
    PieChartComponent,
    ScatterAreaChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    PostsModule,
    ChartsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {}
