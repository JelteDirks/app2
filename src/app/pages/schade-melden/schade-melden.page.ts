import {Component, OnInit} from '@angular/core';
import {GeolocationPlugin, GeolocationPosition, Plugins, CameraResultType, CameraPlugin, CameraPhoto} from '@capacitor/core';

@Component({
    selector: 'app-schade-melden',
    templateUrl: './schade-melden.page.html',
    styleUrls: ['./schade-melden.page.scss'],
})
export class SchadeMeldenPage implements OnInit {

    private geo: GeolocationPlugin;
    private cam: CameraPlugin;
    public location;
    public imageURIS: string[] = [];

    constructor() {
    }

    ngOnInit() {
        this.geo = Plugins.Geolocation;
        this.cam = Plugins.Camera;
    }

    async onGeoRequest() {
        await this.geo.getCurrentPosition({enableHighAccuracy: true}).then((pos: GeolocationPosition) => {
            this.location = pos.coords;
            console.log('location set', this.location);
        });
    }

    async onCameraRequest() {
        await this.cam.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Uri
        }).then((photo: CameraPhoto) => {
            this.imageURIS.push(photo.webPath);
            document.getElementById('demo-image').setAttribute('src', photo.webPath);
        });
    }

}
