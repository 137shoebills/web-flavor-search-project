<template>
    <div>
        <div class="main_user">
            <li is="aList" v-bind:fatherpath="path"></li>
            <li is="aInput"></li>
        </div>
    </div>
</template>

<script>
import aInput from "../userFeature/shared/myAInput";
import aList from "../userFeature/aList/AList";
export default {
    data() {
        return {
            path: "/home/main"
        };
    },
    components: {
        aInput,
        aList
    }
};
</script>
