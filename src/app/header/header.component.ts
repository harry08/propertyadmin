import { Component } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { Response } from "@angular/http";
import { AuthService } from "../auth/auth.service";

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(
        private dataStorageService: DataStorageService,
        private authService: AuthService) {}

    onSaveData() {
        console.log('HeaderComponent.onSaveData called...');
        this.dataStorageService.storeProperties()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            );
    }

    onFetchData() {
        console.log('HeaderComponent.onFetchData called...');
        this.dataStorageService.getProperties();
    }

    onLogout() {
        this.authService.logout();
    }
}