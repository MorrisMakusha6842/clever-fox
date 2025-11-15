import { Component } from '@angular/core';
import { SystemHealthComponent } from './system-health/system-health.component';
import { DeviceOverviewComponent } from './device-overview/device-overview.component';
import { QuickScanComponent } from './quick-scan/quick-scan.component';
import { LatestAlertsComponent } from './latest-alerts/latest-alerts.component';
import { SystemHealthChartComponent } from './system-health-chart/system-health-chart.component';
import { SecurityScanHistoryComponent } from './security-scan-history/security-scan-history.component';
import { OsqueryResultComponent } from './osquery-result/osquery-result.component';
import { NmapResultComponent } from './nmap-result/nmap-result.component';
import { AiInsightComponent } from './ai-insight/ai-insight.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SystemHealthComponent,
    DeviceOverviewComponent,
    QuickScanComponent,
    LatestAlertsComponent,
    SystemHealthChartComponent,
    SecurityScanHistoryComponent,
    OsqueryResultComponent,
    NmapResultComponent,
    AiInsightComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}