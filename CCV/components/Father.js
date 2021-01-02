Vue.component('Father', {
    template:
        `
    <div class="p-5 bg-dark text-white text-center">
    <h2 class="text-center pt-1">Números de padres: {{ FatherNumber }}</h2>
    <h2 class="mb-5">{{ FatherName + ' ' + FatherLastName }}</h2>
    <button type="button" class="btn btn-warning mb-5" @click="FatherNumber++"><b>+</b></button>
    <Son :number="FatherNumber" @SonName="FatherName=$event" @SonLastName="FatherLastName=$event"></Son>
    </div>
    `,
    data() {
        return {
            FatherNumber: 0,
            FatherName: '',
            FatherLastName: ''
        }
    }
}) 