<template>
    <div>
        <el-upload action="/user/uploadpic"
            ref="upload"
            :limit="1"
            :on-exceed="handleExceed"
            list-type="picture-card"
            :auto-upload="false"
            :on-success="uploadSucess"
            :on-progress="uploadProgress">
            <i  slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" >
                <span class="el-upload-list__item-actions">

                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                        <i class="el-icon-zoom-in"></i>
                    </span>

                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                        <i class="el-icon-download"></i>
                    </span>

                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)" >
                        <i class="el-icon-delete"></i>
                    </span>
                </span>
            </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <div  class="up_pic_button" >
            <el-button type="primary" size="small" round @click="submitPic" class="uploadpic_button">上传图片</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "picUpload",
    data() {
        return {
            dialogImageUrl: "",
            dialogVisible: false,
            disabled: false
        };
    },
    methods: {
        handleRemove(file) {
            console.log(file);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDownload(file) {
            console.log(file);
        },
        handleExceed() {
            this.$message.warning(`最多只能上传一张图片`);
        },
        submitPic() {
            this.$refs.upload.submit();
            this.$alert("图片正在上传", {
                confirmButtonText: "确定",
                callback: action => {
                    this.$message({
                        type: "info",
                        message: `action: ${action}`
                    });
                }
            });
        },
        uploadSuccess(res) {
            this.dialogImageUrl = res.url;
            console.log(this.dialogImageUrl, "上传成功");
            this.$emit("func", this.dialogImageUrl);
        },
        uploadProgress() {}
    }
};
</script>
<style type="text/scss" lang="scss">
.up_pic_button {
    margin-top: 10px;
}
</style>
