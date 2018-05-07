import { OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';

export class BaseComponent implements OnDestroy {
    public subscription$: Subscription[] = [];

    ngOnDestroy(): void {
        this.subscription$.forEach((sub) => sub.unsubscribe());
    }

}
