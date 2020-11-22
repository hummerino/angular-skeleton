import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/shared/services/api-rest/api-rest.service';
import { HttpType } from 'src/app/shared/services/api-rest/utils/enums';
import { IHttpReequest } from 'src/app/shared/services/api-rest/utils/intefaces';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.styl']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private _http : ApiRestService
  ) { }

  ngOnInit() {
    let params: IHttpReequest = {
      url: "http://isaac.iglom.it:14880/Service/api/config/idtotemcc",
      type: HttpType.GET,
      endpoint: ""
    };

    const fnResult = res => console.log("diocanoisdsa", res);
    this._http.sendRestRequest(params).subscribe(fnResult, fnResult)
  }

}
