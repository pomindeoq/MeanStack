import { Component, Input } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';




@Component ({
    selector: 'app-message-input',
    template: `

<div class="col-md-8 col-md-offset-2">
    <div class="form-group">
        <label for="content">Content</label>
        <input type="text" id="content" class="form-control" #input>
    </div>    
    <button class="btn btn-primary" type="submit" (click)="onSave(input.value)">Save</button>
</div>
`,
providers: [MessageService]
})


export class MessageInputComponent {
    constructor(private messageService: MessageService) {}

    onSave(value: string) {
        const message = new Message(value, 'Minde');
        this.messageService.addMessage(message);
    }
    
}