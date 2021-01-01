Vue.component('Son',{
    template: 
    `
    <div class="py-5 bg-success text-white">
    <h2 class="text-center">Componente Hijo: {{ number }} </h2>
    </div>
    `,
    props:['number']
}) 