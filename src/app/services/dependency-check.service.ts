import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class DependencyCheckService {

  constructor(private toastService: ToastService) { }

  checkDependencies() {
    // In a real application, you would check for actual dependencies.
    // For this example, we'll just simulate a missing dependency.
    const dependencies = {
      'Node.js': true,
      'Angular CLI': true,
      'Git': false
    };

    for (const [dependency, isInstalled] of Object.entries(dependencies)) {
      if (isInstalled) {
        this.toastService.show(`${dependency} is installed.`, 'success');
      } else {
        this.toastService.show(`${dependency} is not installed. Please install it.`, 'error');
      }
    }
  }
}
