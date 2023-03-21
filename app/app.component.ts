import {AfterViewInit, Component, OnInit} from '@angular/core';
import { jsPlumb } from 'jsplumb';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Angular JsPlumb Integration';
  jsPlumbInstance;
  showConnectionToggle = false;
  buttonName = 'Connect';

  ngAfterViewInit() {
    this.jsPlumbInstance = jsPlumb.getInstance();
    this.showConnectOnClick();
  }

  showConnectOnClick() {
    this.showConnectionToggle = ! this.showConnectionToggle;
    if ( this.showConnectionToggle) {
    this.buttonName = 'Dissconnect';
      this.connectSourceToTargetUsingJSPlumb();
    } else {
      this.buttonName = 'Connect';
      this.jsPlumbInstance.reset();
    }
  }

  connectSourceToTargetUsingJSPlumb() {
      this.jsPlumbInstance.connect({
       connector: ['Flowchart', {stub: [212, 67], cornerRadius: 1, alwaysRespectStubs: true}],
        source: 'Source',
        target: 'Target1',
        anchor: ['Right', 'Left'],
        paintStyle: {stroke: '#456', strokeWidth: 4},
        overlays: [
          ['Label', {label: "connection1", location: 0.5, cssClass: 'connectingConnectorLabel'}]
        ],
      });
  }


}
