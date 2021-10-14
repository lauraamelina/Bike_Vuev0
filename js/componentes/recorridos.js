Vue.component('recorridos', {
    data: function() {
        return {
            array: [],
            km: 0,


        }
    },

    template: `
                <div class="container"> 
                    <h1> Mis recorridos </h1>

                    <div v-if="this.array.length > 0" class="container">


                

                        <ul class="row">
                            <li class="col-md-3 offset-md-1 contentRecorrido" v-for="(x,index) in array" :key="index"
                            :class="[x.ambito=='Ciudad'?'ciudad':'montania']">
                                <ul> 
                                    <li class="fw-bold">  {{x.nombre}} - <span class="fs-5"> {{x.distancia}} km </span> </li>
                                   
                                    <li>  Duracion: {{x.duracion}} minutos </li>
                                    <li>  {{x.ambito | uppercase}} </li>
                                    <li>  {{formatDate(x.dia)}} </li>
                                </ul>
                            
                                <button class="btn borrar" @click="borrar(index)"> X </button>
               
                            </li>
                        </ul>

                     
                    </div>
                    <div v-else class="sin-datos">
                        <p> No hay recorridos registrados todavia </p>
                        <router-link to="/ingresar" class="btn">Ingresar</router-link>
                    </div>







                </div>
    
    `,



    mounted: function() {
        this.levantarArray();
        this.array = JSON.parse(localStorage.getItem("data")) || [];


    },

    methods: {

        formatDate: function(input) {
            var datePart = input.match(/\d+/g),
                year = datePart[0].substring(2),
                month = datePart[1],
                day = datePart[2];

            return day + '/' + month + '/' + year;
        },


        levantarArray: function() {
            if (localStorage.data) {
                this.array = JSON.parse(localStorage.getItem("data"));
            }

        },

        borrar: function(index) {

            eliminar = confirm("¿Deseas eliminar este Recorrido?");

            if (eliminar) {
                this.array.splice(index, 1);
                localStorage.setItem("data", JSON.stringify(this.array));
                return;
            }

        }

    },






})