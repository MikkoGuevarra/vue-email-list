var app = new Vue({
    el : '#root',
    data: {
        mailNeeded: 10,
        mailArray: []
    },
    mounted() {
        for (var i = 0; i < this.mailNeeded; i++) {
            const self = this;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then (function (result) {
                self.mailArray.push(result.data.response);
            });
        }
        console.log(this.mailArray);

    }

});
