<template>
    <div id="main">
        <Loading v-if="isLoading"></Loading>
        <Header title="我的猫眼"/>
        <div id="content">
            <Login/>
        </div>
        <TabBar/>
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import TabBar from '@/components/TabBar';
    import Login from '@/components/Login';

    export default {
        name: 'mine',
        data() {
            return {
                isLoading: true,
            }
        },
        components: {
            Header,
            TabBar,
            Login
        },
        mounted() {
            this.isLoading = false;
        }
    }
</script>

<style>

</style>