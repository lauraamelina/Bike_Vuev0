const home = {
    template: `
    <div>

    <section class="home">
            <h1 class="visually-hidden">Pagina Principal</h1>
            <p class="visually-hidden">
               Lleva un registro de todos tus recorridos en bicicleta!
            </p>
        </section>


        <section class="presentacion container">
            <h2>Bienvenido a <span>VELOBIKE</span> </h2>
            <p> <span> Ingresa todos tus recorridos en bicicleta y lleva un registro </span>. En Velobike <strong> queremos ayudarte a llevar una vida saludable </strong>  y que mejor que andando en Bicicleta. Nuestro proyecto empezó como una idea que se hizo realidad hace ya 5 años </p>

            <router-link to="/ingresar" class="btn">Ingresar recorrido en bicicleta</router-link>
        </section>

        <section class="categorias container">
            <h2>Beneficios de andar en bicicleta</h2>
            <div class="row">
                <div class="col-md-3 col-6">
                    <p class="visually-hidden">Mejora la posición de la espalda</p>
                    <img src="img/mejora_espalda.jpg" alt="Chica en una bicicleta tirando los brazos para arriba">
                </div>

                <div class="col-md-3 col-6">
                    <p class="visually-hidden">Fortalece músculos y rodillas</p>
                    <img src="img/fortalece_musculos.jpg" alt="Ciclista profesional en una bici en medio de la ruta">
                </div>

                <div class="col-md-3 col-6">
                    <p class="visually-hidden">Previene enfermedades</p>
                    <img src="img/previene_enfermedades.jpg" alt="Dos personas andando en bicicleta en el medio de la calle">
                </div>

                <div class="col-md-3 col-6">
                    <div class="grilla-categorias">
                        <div>
                            <p class="visually-hidden">Reduce el estrés</p>
                            <img src="img/reduce_estres.jpg" alt="Persona de traje andando en bicicleta">
                        </div>

                        <div>
                            <p class="visually-hidden">Ejercicio cardiovascular</p>
                            <img src="img/ejercicio_cardiovascular.jpg" alt="Mujer en la ciudad andando en bicicleta">
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="promociones container">
            <div class="row">
                <div class="col-md-5">
                    <h2>MIRA TODOS TUS RECORRIDOS</h2>
                    <p>Lleva un registro de todo y proponete tus propias metas personales.</p>
                    <router-link to="/recorridos" class="btn">Ver recorridos</router-link>
                    
                </div>
                <div class="col-md-7">
                    <figure>
                        <img src="img/bici-urbana-promociones.jpg" alt="Chica andando en bicicleta por la calle">
                    </figure>
                </div>

            </div>
        </section>

        <section class="asesoramiento container">
            <h2>Asesoramiento gratuito</h2>
            <p>En Velobike te brindamos un asesoramiento especial y totalmente gratuito para que disfrutes al máximo tu bicicleta y puedas hacerlo sin preocuparte por el precio ni calidad. <br/> Nuestro objetivo es siempre darte lo que necesitas y cumplir
                tus sueños.

                <span>¡Te ayudamos a encontrar tu estilo!</span>
            </p>


            <figure>
                <img src="img/manubrio-bicicleta.png" alt="Manubrio de Bicicleta">
            </figure>
        </section>

    
    
    
    
    
    </div>`,
    name: "laHome"
};
const ingresar = {
    template: `<ingresar-recorrido> </ingresar-recorrido>`,
    name: `ingresar`
};

const recorridos = {
    template: `<recorridos> </recorridos>`,
    name: `losRecorridos`
};

const routes = [
    { path: '/', component: home },
    { path: '/ingresar', component: ingresar },
    { path: '/recorridos', component: recorridos },
    { path: '*', redirect: '/' }

];
const router = new VueRouter({
    routes
});

const app = new Vue({
    el: ".contenedor",
    router

});