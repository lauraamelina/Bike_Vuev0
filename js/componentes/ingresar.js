Vue.component('ingresar-recorrido', {
    data: function() {
        return {

            distancia: null,
            duracion: null,
            ambito: null,
            velocidad: null,
            nombre: "",
            dia: null,


            errores: [],
            envio: false,
            array: [],
        }
    },
    computed: {
        cantErrores: function() {
            return this.errores.length;

        }
    },
    template: `<div class="formulario container">
        <h1> Ingresar recorridos </h1>
        <form v-on:submit.prevent="guardar" novalidate >

            <label for="name"> Nombre del recorrido </label>
                 <input class="form-control" type="text" id="name" v-model.trim="nombre" name="titulo" placeholder="Tarde en la Ciudad" autocomplete="off" /> 

            <label for="distancia"> Distancia en km </label>
                 <input class="form-control" type="number" id="distancia"  v-model.number="distancia" name="distancia" min="0" />

            
            <label for="duracion"> Duracion en minutos</label>
                  <input class="form-control" type="number" id="duracion" v-model.number="duracion" name="duracion" min="0" /> 

            
            <label for="ambito"> Ambito </label>
                <select class="form-control" v-model="ambito" id="ambito"  name="ambito">
                    <option value="" disabled> Seleccione ambito </option>
                    <option> Ciudad </option>
                    <option> Montaña </option>
                </select>

            <label for="dia"> Dia </label>
                 <input class="form-control" v-model="dia" type="date" id="dia"  name="dia">

            <input type="submit" class="btn" value="Registrar" />
         
        </form>

        <div v-if="envio === true"> 
            <div v-if="cantErrores" class="errores">
                <ul>
                    <li v-for="error in errores"> {{error}} </li>
                </ul>
            </div>

            <div v-else class="envioOk">
        
               <p> Recorrido registrado </p>

            </div>
        
            
        </div>

       
    
    </div>



    `,

    mounted: function() {
        let inputDia = document.getElementById('dia');
        let dia = new Date();
        let hoy = dia.toISOString().substring(0, 10);
        inputDia.value = hoy;

    },

    methods: {
        guardar: function(e) {

            this.envio = true;
            this.errores = [];
            if (!this.nombre) {
                this.errores.push('El nombre del recorrido es obligatorio')
            }
            if (!this.distancia) {
                this.errores.push('La distancia es obligatoria')
            }
            if (!this.distancia > 1) {
                this.errores.push('La distancia debe ser mayor a 0')
            }
            if (!this.duracion) {
                this.errores.push('La duracion es obligatoria')
            }
            if (!this.duracion > 1) {
                this.errores.push('La duracion debe ser mayor a 0')
            }
            if (this.dia == null) {
                this.errores.push('Debe ingresar una fecha valida')
            }
            if (this.ambito == null) {
                this.errores.push('Debe ingresar un ambito')
            }

            if (this.errores.length == 0) {

                nuevoObjeto = {
                    nombre: this.nombre,
                    distancia: this.distancia,
                    duracion: this.duracion,
                    ambito: this.ambito,
                    dia: this.dia
                }


                if (!localStorage.data) {
                    this.array = []
                } else {
                    this.array = JSON.parse(localStorage.getItem("data"))
                }

                this.array.push(nuevoObjeto);
                localStorage.setItem("data", JSON.stringify(this.array));

                this.nombre = "";
                this.distancia = "";
                this.duracion = "";
                this.ambito = null;
                this.dia = null;


            }
        },

    }

});