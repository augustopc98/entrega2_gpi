import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { AuthGuard } from "./auth/auth.guard";
import { GfgComponent } from "./graphics/graphics.component";
import { BarChartComponent } from './graphics/charts/bar-chart/bar-chart.component';
import { ScatterAreaChartComponent } from './graphics/charts/scatter-area-chart/scatter-area-chart.component';
import { DoughnutChartComponent } from './graphics/charts/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './graphics/charts/pie-chart/pie-chart.component';
import { BubbleAreaChartComponent } from './graphics/charts/bubble-area-chart/bubble-area-chart.component';
import { LineChartComponent } from './graphics/charts/line-chart/line-chart.component';

const routes: Routes = [
  { path: "", component: PostListComponent },
  { path: "bar-chart", component: BarChartComponent},
  { path: "radar-chart", component: ScatterAreaChartComponent},
  { path: "doughnut-chart", component: DoughnutChartComponent},
  { path: "pie-chart", component: PieChartComponent},
  { path: "bubble-chart", component: BubbleAreaChartComponent},
  { path: "line-chart", component: LineChartComponent},
  { path: "graphics", component: GfgComponent},
  { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "edit/:postId", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
