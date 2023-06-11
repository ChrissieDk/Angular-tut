import { Component } from "@angular/core";

@Component({
    // "html tag to be referenced to use component later in other component templates"
    // make it a unique selector
    selector: "app-server",
    // refernce external file - html page for component
    // relative path
    templateUrl: "./server.component.html",
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = "offline";

  getServerStatus () {
    return this.serverStatus;
  }
}