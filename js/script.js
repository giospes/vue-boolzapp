

const app = Vue.createApp({
    data(){
        return{
            searchText: "",
            contactShowed : null,
            windowWidth: 0,
            showMessSec: false,
            newMessage: {
                date: '',
                message: '',
                status: 'sent'
            },
            answerMessList: [
                'Ho bisogno di un Ronin',
                'Piacere Marco ',
                'Perchè',
                'Ok',
                'Ma vai a cagare',
                'Hai vinto il concorso DSA',
                'Hai la 104'   
            ],
            contacts: [
                {
                    name: 'Elon',
                    avatar: './img/elon.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Sam',
                    avatar: './img/sam.webp',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Joe',
                    avatar: './img/joe.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Andrew',
                    avatar: './img/andrew.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Tristan',
                    avatar: './img/tristan.webp',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Warren',
                    avatar: './img/warren.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Warren, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Charlie',
                    avatar: './img/charlie.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Magnus',
                    avatar: './img/magnus.webp',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
                
            ]


        }
    },
    methods: {
        getWindowWidth() {
            this.windowWidth = window.innerWidth;
        },
        setContactShowed() {
            this.contactShowed = this.contacts[0]; 
        },
        selectedContact(contact){
            this.contactShowed = contact;
            console.log(this.contactShowed)
        },
        toggleMessSection(){
            if(this.windowWidth < 575 ){
                this.showMessSec = !this.showMessSec
                console.log(this.showMessSec)
            }
        },
        sendMessage(){
            const messageToPush = {...this.newMessage}
            this.contactShowed.messages.push(messageToPush)
            this.newMessage.message=""
            setTimeout(this.answerMessage, 2000)
        },
        answerMessage(){
            const i = Math.floor(Math.random()*this.answerMessList.length)
            const messageToPush = {...this.newMessage}
            messageToPush.message = this.answerMessList[i]
            messageToPush.status='received'
            this.contactShowed.messages.push(messageToPush)
        },
        search(){
            this.contacts.forEach(contact => {
                for (let index = 0; index < contact.name.length; index++) {
                    if(!contact.name.toLowerCase().includes(this.searchText.toLowerCase())) {
                        contact.visible= false
                    }else{
                        contact.visible= true
                    }
                    
                }
                console.log(contact.visible)
            });
        }
  
    },
    created() {
        this.setContactShowed(); 
    },
    mounted() {
        this.getWindowWidth();
        window.addEventListener('resize', this.getWindowWidth);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.getWindowWidth);
    }
      
        
     
})



app.mount("#app")