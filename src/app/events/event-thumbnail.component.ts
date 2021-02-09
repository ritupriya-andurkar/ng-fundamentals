import { Component, Input } from '@angular/core'


@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div [ngClass]="getStartTimeClass()">
            Time: {{event.time}}  
        </div>
        <div>Price: \${{event.price}}
        <div>
            <span>Location: {{event.location.address}}</span>
            
            <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
        <button class="btn btn-primary" (click)="handleClickMe()"> Click Me! </button>
    </div>
    `,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent{
    @Input() event: any
    
    // ngStyle can also be used for styling, here ngClass is used
    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        // can return object, string or an array, here object is returned
        return {green: isEarlyStart, bold: isEarlyStart}
    }   
    
}