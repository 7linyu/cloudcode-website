<template>
    <div class="core-team-container">
        <h1 class="title">核心成员</h1>
        <div class="images-container">
            <div v-for="(member, index) in coreMembers" :key="index" class="team-member1">
                <img :src="member.image" class="team-image1" :alt="'图像' + (index + 1)" />
                <div class="team-member-info1">
                    <p class="name">{{ member.name }}</p>
                    <p class="role">{{ member.role }}</p>
                </div>
            </div>
        </div>
        <h1 class="title">合作实验室</h1>
        <div class="images-container">
            <div v-for="(lab, index) in labs" :key="index" class="team-member2">
                <img :src="lab.image" class="team-image2" :alt="'图像' + (index + 1)" />
                <div class="team-member-info2">
                    <p class="name">{{ lab.name }}</p>
                    <p class="role">{{ lab.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
name = "CoreMembers";
</script>

<script>
export default {
    name: "CoreTeam",
    data() {
        return {
            coreMembers: [
                {
                    image: "src/assets/img/人物1.jpg",
                    name: "张三",
                    role: "首席技术官"
                },
                {
                    image: "src/assets/img/人物1.jpg",
                    name: "李四",
                    role: "产品经理"
                },
                {
                    image: "src/assets/img/人物1.jpg",
                    name: "王五",
                    role: "设计师"
                }
            ],
            labs: [
                {
                    image: "src/assets/img/网络工程系.jpg",
                    name: "实验室A",
                    description: "专注于人工智能研究"
                },
                {
                    image: "src/assets/img/网络工程系.jpg",
                    name: "实验室B",
                    description: "专注于大数据分析"
                }, 
                {
                    image: "src/assets/img/网络工程系.jpg",
                    name: "实验室C",
                    description: "专注于云计算技术"
                }
            ]
        };
    },
};
</script>

<style scoped>
.core-team-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
}

.title {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #65A39A;
}

.images-container {
    display: flex;
    gap: 40px;
}

.team-member1,
.team-member2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.team-image1 {
    width: 150px;
    height: 230px;
    object-fit: cover;
    border: 2px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.team-image2 {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 2px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.team-member-info1,
.team-member-info2 {
    margin-top: 10px;
}

.name {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
    color: #65A39A;
}

.role {
    font-size: 1rem;
    color: #65A39A;
}
</style>
