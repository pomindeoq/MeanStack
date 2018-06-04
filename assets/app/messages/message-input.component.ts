import { Component, Input } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';
import { NgForm } from '@angular/forms';




@Component ({
    selector: 'app-message-input',
    template: `

<div class="col-md-8 col-md-offset-2">
    <form (ngSubmit)="onSubmit(f)" #f="ngForm" ngNativeValidate>
        <div class="form-group">
            <label for="content">Content</label>
            <input type="text" id="content" class="form-control" ngModel name="content" required>
        </div>    
        <button class="btn btn-primary" type="submit">Save</button>
    </form>
</div>
`
})


export class MessageInputComponent {
    constructor(private messageService: MessageService) {}

    onSubmit(form: NgForm) {
        const message = new Message(form.value.content, 'Minde');
        this.messageService.addMessage(message);
        form.resetForm();
    }
    
}