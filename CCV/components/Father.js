Vue.component('Father', {
    template:
        `
    <div class="p-5 bg-dark text-white text-center">
    <h2 class="text-center pb-5">Números de padres: {{ FatherNumber }}</h2>
    <button type="button" class="btn btn-warning mb-5" @click="FatherNumber++">NUMBER INCREMENT</button>
    <Son :number="FatherNumber"></Son>
    </div>
    `,
    data(){
        return{
            FatherNumber: 0
        }
    }
}) 