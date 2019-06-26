import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { NotifierService } from 'angular-notifier';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {
  @Input('data') user: User;
  @Input() display: boolean;
  @Output() onAction = new EventEmitter<boolean>();

  constructor(
    private userService: UserService,
    private notifier: NotifierService
  ) { }

  ngOnInit() { }

  cancel() {
    this.onAction.emit(false);
  }

  delete() {
    this.userService.deleteUser(this.user.id)
      .subscribe(
        resp => {
          this.notifier.notify('success', 'Operation successfully done!');
          this.onAction.emit(true);
        },
        error => this.notifier.notify('error', error)
      );
  }
}