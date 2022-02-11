import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() dialog: boolean = false
  @Output() dialogChange = new EventEmitter<boolean>();

  contactForm = this.formBuilder.group({
    email: '',
    message: ''
  });

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.contactForm.status !== 'VALID') {
      alert('Invalid : email and message are required ...')
    } else {
      alert(`Email: ${this.contactForm.value.email} \nMessage: ${this.contactForm.value.message} \nYour message has been sent!`)
      this.contactForm.reset();
      this.dialogChange.emit(false)
    }
  }

}