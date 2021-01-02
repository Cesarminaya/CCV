Vue.component('Son', {
    template:
        `
    <div class="py-5 bg-success text-white">
    <h2 class="text-center">Componente Hijo: {{ number }} </h2>
    <h2>{{ name + ' ' + lastname }}</h2>
    </div>
    `,
    props: ['number'],
    data() {
        return {
            name: 'Cesar',
            lastname: 'Minaya'
        }
    },
    // Mounted en el ciclo de vida establece que se ejecutara cuando carguen los datos.
    mounted() {
        this.$emit('SonName', this.name);
        this.$emit('SonLastName', this.lastname);

    }
}) 