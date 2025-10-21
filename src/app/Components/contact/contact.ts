import { Component, inject } from '@angular/core';
import { Infoservices } from '../../Services/infoservices';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tokenbot } from '../../Services/tokenbot';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  con = inject(Infoservices);
  formData = {
    name: '',
    email: '',
    phone: '',
    project: '',
    subject: '',
    message: '',
  };

  constructor(private telegramService: Tokenbot) {}

  onSubmit() {
    const msg = `
📩 *New Message From Website*  
👤 Name: ${this.formData.name}  
📧 Email: ${this.formData.email}  
📞 Phone: ${this.formData.phone}  
💼 Project: ${this.formData.project}  
📝 Subject: ${this.formData.subject}  
💬 Message: ${this.formData.message}
    `;

    this.telegramService.sendMessage(msg).subscribe({
      next: () => {
        this.alertOrder();
        this.clearform();
      },
      error: (err: any) => {
        console.error('Telegram Error:', err);
        alert('Failed to send message.');
      },
    });
  }
  clearform() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      project: '',
      subject: '',
      message: '',
    };
  }
  alertOrder() {
    let timerInterval: any;

    Swal.fire({
      title: 'Your Submission!',
      html: 'please Wait in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timerEl = Swal.getPopup()?.querySelector('b');
        timerInterval = setInterval(() => {
          if (timerEl) {
            timerEl.textContent = `${Swal.getTimerLeft()}`;
          }
        }, 100);
      },

      willClose: () => {
        alert(' ✅ Your Message Has Been Sent Successfully');

        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('✅ Closed by the timer');
      }
    });
  }
}
