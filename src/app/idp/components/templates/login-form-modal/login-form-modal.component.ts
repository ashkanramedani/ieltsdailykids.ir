import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login-form-modal',
  templateUrl: './login-form-modal.component.html',
  styleUrls: ['./login-form-modal.component.scss'],
})
export class LoginFormModalComponent implements OnInit {
  @Input() entryId?: number;
  initialData?: any = { name: '', pass: '' };
  readonly submitButtonId: string = 'submit-button';
  isLoading?: boolean;
  isResetForm?: boolean;
  isEditMode: boolean = false;
  constructor(private _activeModal: NgbActiveModal) {}
  ngOnInit(): void {
    this.isEditMode = !!this.entryId;
    this._getInitialData();
  }

  private _getInitialData() {
    if (this.isEditMode) {
      // this._workShopsService.getCompaniyById(this.entryId).subscribe((res) => {
      //   if (res.isOk) {
      //     this.initialData = res.data;
      //   }
      //   this.isLoading = false;
      // });
    }
  }
  saveHandler(data: any) {}
  cancelHandler() {
    this._activeModal.close(false);
  }
}
