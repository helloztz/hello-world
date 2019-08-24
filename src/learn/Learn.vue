<template>
    <div>
        <router-view></router-view>
       
    </div>
     <!-- <List></List> -->
</template>

<script>
import List from './List'
export default {
    name:'Learn',
    // data(){
    //     // 
    //     return{

    //     }
    // },
    components:{
      List
    },
    methods:{
        // playVideo =(VideoId) => {
        //     this.setState({showList: false})
        // },

        // back = () => {
        //     this.setState({showList: true})
        // },
    watch:{
        //  render() {
        //     return (
        //     <div>
        //         {this.state.showList? <List playVideo={this.playVideo} /> : <Video back={this.back} /> }
        //     </div>
        //     );
        // }
    }
       
    }
}
</script>

<style>

</style>