import { Component, OnInit } from "@angular/core";
import html2canvas from "html2canvas";
import { DomSanitizer } from "@angular/platform-browser";
import { DataService } from "../../shared/data.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private _sanitizer: DomSanitizer,
    private dataService: DataService
  ) {}
  dataUrl;
  shareableUrl;
  ngOnInit() {}

  captureIt() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      console.log(canvas.toDataURL());
      this.dataUrl = canvas.toDataURL();
      var file = this.dataURLtoFile(this.dataUrl, "a.png");
      var whatsapp_url =
        "whatsapp://send?text=" + encodeURIComponent(file.name);
      this.shareableUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
        whatsapp_url
      );
      // window.location.href = this.shareableUrl;
      console.log(file.name, this.shareableUrl);
    });
  }

  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.dataService.sendData("Message from Home Component to App Component!");
  }

  clearMessage(): void {
    // clear message
    this.dataService.clearData();
  }
}
