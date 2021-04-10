                       //Milestone 1
                       // ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
                       //● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto



function createCyberVue() {
     new Vue ({
          el: '#vueContainer',

          data: {
               currentClick : false,
               currentContact: false,
               newSentMessage: ``,
               researchInput: ``,
               contacts: [
                    { name: 'Judy Alvarez', avatar: '_1', visible: true, messages: [
                                                                                { date: '10/01/2020 15:30:55', time: '15:30:55', text: "Non posso credere che ancora ti mostri disponibile verso quell'uomo... rischierai di farti ammazzare", status: 'received'},
                                                                                { date: '10/01/2020 15:40:55', time: '15:40:55', text: "Perchè devi sempre pensare che mi ammazzeranno?", status: 'sent'},
                                                                                { date: '10/01/2020 15:50:55', time: '15:50:55', text: "Perchè la ruota gira, V! Non puoi pensare di essere invincibile... prima o poi succederà se continui a dar retta a quell'uomo", status: 'received'},
                                                                                { date: '10/01/2020 16:00:55', time: '16:00:55', text: "Va bene, te lo prometto... è l'ultima volta che lo aiuto. Dopo questa, non lo farò più", status: 'sent'},
                                                                                { date: '10/01/2020 16:10:55', time: '16:10:55', text: "No, V.", status: 'received'},
                                                                                { date: '10/01/2020 16:20:55', time: '16:20:55', text: "Si, Judy.", status: 'sent'},
                                                                                { date: '10/01/2020 16:30:55', time: '16:30:55', text: "NO.", status: 'received'},
                                                                                { date: '10/01/2020 16:40:55', time: '16:40:55', text: "Perchè?! Cosa ti costa approvare per l'ultima volta? Ti ho detto che poi smetterò.", status: 'sent'},
                                                                                { date: '10/01/2020 16:50:55', time: '16:50:55', text: "E tu, invece?! Cosa ti costa chiudere questa storia per me? Ti sto chiedendo la vita? Non mi sembra! Vorrei solo che io fossi una tua priorità... proprio come tu lo sei per me.", status: 'received'},
                                                                                { date: '10/01/2020 17:00:55', time: '17:00:55', text: "NON POSSO... e lo sai bene, Judy. Mi ha aiutato quando era il momento... smettila di parlare di priorità, perchè per me lo sei. Sarà l'ultima volta... ma devo farlo", status: 'sent'},
                                                                                { date: '10/01/2020 17:10:55', time: '17:10:55', text: "Judy?", status: 'sent'},
                                                                                { date: '10/01/2020 17:20:00', time: '17:20:55', text: 'Judy... per favore, rispondi', status: 'sent'},
                                                                                { date: '10/01/2020 17:30:22', time: '17:30:55', text: 'Resta con me.', status: 'received'},
                                                                                { date: '10/01/2020 17:40:22', time: '17:40:55', text: 'Questa guerra non ti appartiene... io si.', status: 'received'}
                                                                              ],
                    },

                    { name: 'Misty Olszewsky', avatar: '_2', visible: true, messages: [
                                                                                { date: '20/03/2020 16:30:00', time: '16:30:00', text: "Misty, stanotte ho sognato l'imperatrice..", status: 'sent'},
                                                                                { date: '20/03/2020 16:40:55', time: '16:40:00', text: 'Che significato ha?', status: 'sent'},
                                                                                { date: '20/03/2020 16:50:00', time: '16:50:00', text: "Hey, V. Durante il sogno ti ha sorriso?", status: 'received'},
                                                                                { date: '20/03/2020 17:00:00', time: '17:00:00', text: "No... anzi, era abbastanza adirata.", status: 'sent'},
                                                                                { date: '20/03/2020 17:10:00', time: '17:10:00', text: "Beh, allora non è positivo.", status: 'received'},
                                                                                { date: '20/03/2020 17:20:00', time: '17:20:00', text: "Puoi essere un pò piu specifica?", status: 'sent'},
                                                                                { date: '20/03/2020 17:30:00', time: '17:30:00', text: "Significa che per te è in arrivo una tempesta... ti stai cacciando in qualche guaio, V?", status: 'received'},
                                                                                { date: '20/03/2020 17:40:00', time: '17:40:00', text: "Oh si... puoi dirlo forte.", status: 'sent'},
                                                                                { date: '20/03/2020 17:50:00', time: '17:50:00', text: "Tipico di te, haha. Ho fiducia in te... so che tornerai con tutte le ossa integre, come sempre ", status: 'received'},
                                                                                { date: '20/03/2020 18:00:00', time: '18:00:00', text: "Cavolo, finalmente una persona che crede nelle mie capacità... grazie, Misty. Sono felice di aver sognato l'imperatrice. ", status: 'sent'},
                                                                                { date: '20/03/2020 18:10:00', time: '18:10:00', text: "Bene! La prossima volta, però, cerca di farla sorridere. ", status: 'received'},
                                                                                { date: '20/03/2020 18:20:00', time: '18:20:00', text: "Haha, va bene :D", status: 'sent'},
                                                                            ],
                    },
                    
                    { name: 'Panam Palmer', avatar: '_3', visible: true, messages: [
                                                                                { date: '28/03/2020 10:10:40',time: '10:10:40', text: 'Hey', status: 'received'},
                                                                                { date: '28/03/2020 10:20:10',time: '10:20:55', text: 'Hey', status: 'sent'},
                                                                                { date: '28/03/2020 10:30:40',time: '10:30:55', text: 'Come va? Tutto a posto a Night City?', status: 'received'},
                                                                                { date: '28/03/2020 10:40:40',time: '10:40:55', text: 'No... sempre problemi su problemi. Piuttosto, tu? Come ve la passate nelle Badlands?', status: 'sent'},
                                                                                { date: '28/03/2020 10:50:40',time: '10:50:55', text: 'Tutto bene. Lo sai, io i problemi li uccido :). Che problema hai?', status: 'received'},
                                                                                { date: '28/03/2020 11:00:40',time: '11:00:55', text: '...Johnny.', status: 'sent'},
                                                                                { date: '28/03/2020 11:10:40',time: '11:10:55', text: 'Ancora?! Che diamine vuole ancora quel pazzo schizofrenico?', status: 'received'},
                                                                                { date: '28/03/2020 11:20:40',time: '11:20:55', text: 'Ha ripreso in mano la sua crociata... e io sarò così intelligente da aiutarlo', status: 'sent'},
                                                                                { date: '28/03/2020 11:30:40',time: '11:30:55', text: 'Santo dio, V... perchè lo fai? Quello è un parassita', status: 'received'},
                                                                                { date: '28/03/2020 11:40:40',time: '11:40:55', text: 'Perchè devo... lo sai, Panam. Andrà tutto bene.', status: 'sent'},
                                                                                { date: '28/03/2020 11:50:40',time: '11:50:55', text: "Non sono proprio d'accordo con questa tua decisione.", status: 'received'},
                                                                                { date: '28/03/2020 12:00:40',time: '12:00:55', text: "NON SONO D'ACCORDO.", status: 'received'},
                                                                                { date: '28/03/2020 12:10:40',time: '12:10:55', text: "Ho capito.", status: 'sent'},
                                                                                { date: '28/03/2020 12:20:40',time: '12:20:55', text: "... ma non ti ignorerò", status: 'received'},
                                                                                { date: '28/03/2020 12:30:22',time: '12:30:55', text: 'Comunque vada, con te fino alla fine... choom', status: 'received'}
                                                                              ],
                    },

                    { name: 'Johnny Silverhand', avatar: '_4', visible: true, messages: [
                                                                                { date: '10/01/2020 15:20:55',time: '15:30:55', text: 'V', status: 'received'},
                                                                                { date: '10/01/2020 15:30:55',time: '15:30:55', text: 'Johnny', status: 'sent'},
                                                                                { date: '10/01/2020 15:40:55',time: '15:40:55', text: 'Finalmente ci siamo... aspetto questo momento da troppo tempo', status: 'received'},
                                                                                { date: '10/01/2020 15:50:55',time: '15:50:55', text: 'Si ok, ma smettila di assillarmi con questa storia.', status: 'sent'},
                                                                                { date: '10/01/2020 16:00:55',time: '16:00:55', text: 'Sei fuori? Una vita che aspetto di farli fuori tutti e adesso che ci siamo, ti assillo?', status: 'received'},
                                                                                { date: '10/01/2020 16:10:55',time: '16:10:55', text: 'Mi stai creando problemi con questa maledetta crociata.', status: 'sent'},
                                                                                { date: '10/01/2020 16:20:55',time: '16:20:55', text: 'Problemi? Haha. E che problemi sarebbero?', status: 'received'},
                                                                                { date: '10/01/2020 16:30:55',time: '16:30:55', text: 'Judy, Panam. ', status: 'sent'},
                                                                                { date: '10/01/2020 16:40:55',time: '16:40:55', text: 'Cristo, V... parliamo di una braindancer e di una nomade lol.', status: 'received'},
                                                                                { date: '10/01/2020 16:50:55',time: '16:50:55', text: 'Non nominare Judy.', status: 'sent'},
                                                                                { date: '10/01/2020 17:00:55',time: '17:00:55', text: 'Ho solo detto che è una braindancer. Sono persone dalla mentalità chiusa, V. Noi siamo meglio di loro, svegliati. ', status: 'received'},
                                                                                { date: '10/01/2020 17:10:55',time: '17:10:55', text: "Quindi? Vivono meglio di te che passi la vita a pensare all'Arasaka.", status: 'sent'},
                                                                                { date: '10/01/2020 17:20:55',time: '17:20:55', text: "Quindi, dove vuoi arrivare? Non mi aiuti piu?", status: 'received'},
                                                                                { date: '10/01/2020 17:30:55',time: '17:30:55', text: "Ti aiuto... ma non scrivermi ogni minuto di questa storia.", status: 'sent'},
                                                                                { date: '10/01/2020 17:40:00',time: '17:40:55', text: "Perfetto", status: 'received'},
                                                                                ],
                    },
                    
                    { name: 'Goro Takemura', avatar: '_5', visible: true, messages: [
                         { date: '10/01/2020 15:20:55',time: '15:20:55', text: 'V, sono a Night City.', status: 'received'},
                         { date: '10/01/2020 15:30:55',time: '15:30:55', text: 'Hey! Ma che sorpresa', status: 'sent'},
                         { date: '10/01/2020 15:40:55',time: '15:40:55', text: 'Non per te... devo fare commissioni. Ma ne approfitto, ci incontriamo?', status: 'received'},
                         { date: '10/01/2020 15:50:55',time: '15:50:55', text: 'Ma che gentile...', status: 'sent'},
                         { date: '10/01/2020 16:00:55',time: '16:00:55', text: 'Non ti va?', status: 'received'},
                         { date: '10/01/2020 16:10:55',time: '16:10:55', text: 'Si si, certo che mi va. Solita birra al solito posto?', status: 'sent'},
                         { date: '10/01/2020 16:20:55',time: '16:20:55', text: 'Jig Jig Street.', status: 'received'},
                         { date: '10/01/2020 16:30:55',time: '16:30:55', text: 'Ok, il solito posto... anche il solito orario? ', status: 'sent'},
                         { date: '10/01/2020 16:40:55',time: '16:40:55', text: 'Si', status: 'received'},
                         { date: '10/01/2020 16:50:55',time: '16:50:55', text: 'Ok, perfetto. A stasera, Goro', status: 'sent'},
                         { date: '10/01/2020 17:00:55',time: '17:00:55', text: 'Ciao.', status: 'received'}
                         ],
                    },

                    { name: 'Rogue Amendiares', avatar: '_6', visible: true, messages: [
                                                                                { date: '10/01/2020 15:30:55',time: '15:30:55', text: 'V, avrei un lavoretto per te. Molto facile e pagato bene.', status: 'received'},
                                                                                { date: '10/01/2020 15:40:55',time: '15:40:55', text: 'Per te sarà una passeggiata :)', status: 'received'},
                                                                                { date: '10/01/2020 15:50:55',time: '15:50:55', text: "Appena puoi, vieni a trovarmi all'Afterlife", status: 'received'}
                                                                                ],
                    },

                    { name: 'Mama Welles', avatar: '_7', visible: true, messages: [
                                                                           { date: '10/01/2020 15:30:55', time: '15:30:55', text: 'Mi vidas, come stai? É da tanto che non ti sento... mi manchi così tanto, tu e Jackie', status: 'received'},
                                                                           { date: '10/01/2020 15:30:55', time: '15:40:55', text: 'Ciao Mama :) io sto bene, grazie. Prometto che a breve passerò a trovarti... manca così tanto anche a me Jackie.', status: 'sent'},
                                                                           { date: '10/01/2020 15:40:55', time: '15:50:55', text: "Ci conto... fatti vedere presto al Coyote, la tua presenza mi fa bene", status: 'received'},
                                                                           { date: '10/01/2020 15:40:55', time: '16:00:55', text: "Si, Mama. Promesso :)", status: 'sent'}
                                                                           ],
                    },
                ]
          },

          methods: {

               displayContact: function(index) {
                    this.currentClick = true;
                    this.currentContact = this.contacts[index];
                    console.log(this.currentContact.avatar);
               },

               addReceivedMessage: function() {
                    newReceivedMessageObject = { date: '10/01/2020 18:00:01', time: '18:00:01', text: 'ok', status: 'received'};
                    this.currentContact.messages.push(newReceivedMessageObject);
               },

               addSentMessage: function() {
                    newSentMessageObject= { date: '10/01/2020 18:00:00', time:'18:00:00', text: this.newSentMessage, status: 'sent'};
                    this.currentContact.messages.push(newSentMessageObject);
                    this.newSentMessage = ``;
                    setTimeout(this.addReceivedMessage, 1000);
               },

               filteringContacts: function() {
                    const contactsFiltered = this.contacts.filter(element => element.name.toLowerCase().includes(this.researchInput.toLowerCase()));
                    return contactsFiltered;
               },

               deleteMessage: function(index) {
                    this.currentContact.messages.splice(index, 1);
               }
          }
     })
}

function whatsCyberApp() {
     createCyberVue()
}

document.addEventListener('DOMContentLoaded', whatsCyberApp);