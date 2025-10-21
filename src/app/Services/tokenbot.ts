import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Tokenbot {
  // telegramBot
  private botToken = '8258339648:AAHTLvaBWIJUnDQxXq69dTGR7jiYorm_G1k';
  private chatId = '-4848984296';

  http = inject(HttpClient);

  sendMessage(msg: any) {
    debugger;
    console.log('Bot Errorr');
    const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
    const body = {
      chat_id: this.chatId,
      text: msg,
    };
    return this.http.post(url, body);
  }
}
