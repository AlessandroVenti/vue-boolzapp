                       //Milestone 1
                       // ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
                       //● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto



function createVue() {
     new Vue ({
          el: '#vueContainer',

          data: {
               contacts: [
                    { name: 'Judy Alvarez', avatar: '_1', visible: true, messages: [
                                                                                { date: '10/01/2020 15:30:55', text: 'Hai portato a spasso il cane?', status: 'sent'},
                                                                                { date: '10/01/2020 15:50:00', text: 'Ricordati di dargli da mangiare', status: 'sent'},
                                                                                { date: '10/01/2020 16:15:22', text: 'Abbandona questa guerra... rimani con me', status: 'received'}
                                                                              ],
                    },

                    { name: 'Misty Olszewsky', avatar: '_2', visible: true, messages: [
                                                                                { date: '20/03/2020 16:30:00', text: 'Ciao come stai?', status: 'sent'},
                                                                                { date: '20/03/2020 16:30:55', text: 'Bene grazie! Stasera ci vediamo?', status: 'received'},
                                                                                { date: '20/03/2020 16:35:00', text: "Misty, stanotte ho sognato l'imperatrice..", status: 'sent'}
                                                                            ],
                    },
                    
                    { name: 'Panam Palmer', avatar: '_3', visible: true, messages: [
                                                                                { date: '28/03/2020 10:10:40', text: 'La Marianna va in campagna', status: 'received'},
                                                                                { date: '28/03/2020 10:20:10', text: 'Sicuro di non aver sbagliato chat?', status: 'sent'},
                                                                                { date: '28/03/2020 16:15:22', text: 'Comunque vada, con te fino alla fine... choom', status: 'received'}
                                                                              ],
                    },

                    { name: 'Johnny Silverhand', avatar: '_4', visible: true, messages: [
                                                                                { date: '10/01/2020 15:30:55', text: 'Lo sai che ha aperto una nuova pizzeria?', status: 'sent'},
                                                                                { date: '10/01/2020 15:50:00', text: "V, non c'è piu tempo! L'Arasaka sta arrivando.", status: 'received'},
                                                                                ],
                    },                    
                ]
          },
     })
}

function final() {
     createVue()
}

$(document).ready(final);