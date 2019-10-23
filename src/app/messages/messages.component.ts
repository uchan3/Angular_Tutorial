import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  //Here: This must be public b/c binding applies to public properties.
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
