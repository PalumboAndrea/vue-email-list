const { createApp } = Vue;

createApp({
    data()  {
        return {
            emailList: [],
        }
    },
    methods: {
        getEmail(){
            for(i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (response) => {
                console.log(response.data.response)
                this.emailList.push(response.data.response);
                
            })
            
            }
            console.log(this.emailList)
        }
    },
    created(){
        this.getEmail()
    }
}).mount('#app')

