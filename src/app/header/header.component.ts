import { Component } from "@angular/core";
import { DataStorageFirebaseService } from "../shared/data-storage-firebase.service";
import { Response } from "@angular/http";
import { AuthService } from "../auth/auth.service";

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(
        private dataStorageService: DataStorageFirebaseService,
        private authService: AuthService) {}

    onSaveData() {
        console.log('HeaderComponent.onSaveData called...');
        this.dataStorageService.storeData()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            );
    }

    onFetchData() {
        console.log('HeaderComponent.onFetchData called...');
        this.dataStorageService.getData();
    }

    onLogout() {
        this.authService.logout();
    }
}