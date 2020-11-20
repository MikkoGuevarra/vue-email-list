var app = new Vue({
    el : '#root',
    data: {
        mail: false,
        mailNeeded: 10,
        mailArray: []
    },
    mounted() {
        for (var i = 0; i < this.mailNeeded; i++) {
            const self = this;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then (function (result) {
                self.mail = result.data.response;
                self.mailArray.push(self.mail);
            });
        }
        console.log(this.mailArray);
    }

});
