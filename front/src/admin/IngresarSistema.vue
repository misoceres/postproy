<template>
        <div class="col-4 my-2 mx-2">
                <b-card header="Ingreso al Sistema">
                    <b-alert
                    variant="danger"
                    dismissible
                    fade
                    :show="error"
                    >
                    Credenciales Erroneas
                    
                    </b-alert>
                    <b-form-group id="input-group-1" label="Usuario" label-for="input-1" class="m-3">
                        <b-form-input id="input-1" type="text" v-model="form.usuario" placeholder="Ingrese el Usuario" required>
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-2" label="Contraseña" label-for="input-2" class="m-3">
                        <b-form-input id="input-1" type="password" v-model ="form.contraseña" placeholder="Ingrese la Contraseña" required>
                        </b-form-input>
                    </b-form-group>
                    <b-button class="m-3" href="#" v-on:click="verificar()" variant="primary">Ingresar</b-button>
                </b-card>
            </div>

</template>

<script>
    export default{
        name: "IngresarSistema",
        data(){
            return {
                form: {
                    usuario: '',
                    contraseña:'',
                },
                error: false,
            };
        },
        methods: {
            verificar(){
                this.axios.post('/usu/login',this.form)
                .then (r=>{
                    this.axios.defaults.headers.common.authorization = r.data.token;
                    localStorage.setItem('token',r.data.token);
                    
                    console.log(r)
                })
                .catch(e=>{
                    this.error = true;
                    console.log(e)
                })

                
            }
        }
    }
</script>

<style>

</style>