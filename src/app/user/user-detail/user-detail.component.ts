import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { Subscription } from 'rxjs';
import { ParentChildInteractionService } from 'src/app/parent-child-interaction.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnChanges, OnInit {

  @Input() user: User;
  @Input('avatar') image: string;

  private _image2 = '';
  @Input('avatar2') set image2(data: string) {
    this._image2 = (data && data.trim()) || '<no data found>';
  }
  get image2(): string { return this._image2; }

  @Output() onAction = new EventEmitter<string>();

  action(msg: string) {
    this.onAction.emit(msg);
  }

  public hello = 'Hello from User-detail-component local variable';

  subscription: Subscription;

  constructor(private service: ParentChildInteractionService) {
    this.subscription = service.broadcastParentStream$.subscribe((messageFromParent) => console.log(messageFromParent));
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit() { }

  ngOnDestroy() {
    // do no forget to implement OnDestroy interface
    this.subscription.unsubscribe(); // prevent memory leak
  }

  broadcastChild() {
    this.service.broadcastChild('Hello from child');
  }

}
