<template lang="pug">
    div
        b-card.mb-2(title='Card Title', img-src='https://picsum.photos/600/300/?image=25', img-alt='Image', img-top='', tag='article', style='max-width: 20rem;')
            b-card-text
            | Some quick example text to build on the card title and make up the bulk of the card's content.
            b-button(href='#', variant='primary') Go somewhere
</template>

<script>
    export default {
    
        name: 'Inicio',
    
        data() {
    
            return {
    
                msg: 'Welcome to Your Vue.js App'
    
            }
    
        }
    
    }
</script>
