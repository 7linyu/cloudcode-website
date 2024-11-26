<template>
  <div class="core-team-container">
    <h1 class="title">{{ $t('coreTeam.title') }}</h1>
    <div class="images-container">
      <div v-for="(member, index) in coreMembers" :key="index" class="team-member1">
        <img :src="member.image" class="team-image1" :alt="$t('coreTeam.altText', { index: index + 1 })" />
        <div class="team-member-info1">
          <p class="name">{{ $t(`coreTeam.members[${index}].name`) }}</p>
          <p class="role">{{ $t(`coreTeam.members[${index}].role`) }}</p>
        </div>
      </div>
    </div>
    <h1 class="title">{{ $t('coreTeam.labTitle') }}</h1>
    <div class="images-container">
      <div v-for="(lab, index) in labs" :key="index" class="team-member2">
        <img :src="lab.image" class="team-image2" :alt="$t('coreTeam.altText', { index: index + 1 })" />
        <div class="team-member-info2">
          <p class="name">{{ $t(`coreTeam.labs[${index}].name`) }}</p>
          <p class="role">{{ $t(`coreTeam.labs[${index}].description`) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: "CoreTeam",
  setup() {
    const { t } = useI18n();

    const coreMembers = [
      { image: "src/img/人物1.jpg" },
      { image: "src/img/人物1.jpg" },
      { image: "src/img/人物1.jpg" }
    ];

    const labs = [
      { image: "src/img/网络工程系.jpg" },
      { image: "src/img/网络工程系.jpg" },
      { image: "src/img/网络工程系.jpg" }
    ];

    return {
      coreMembers,
      labs
    };
  }
};
</script>

<style scoped>
.core-team-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
}

.title {
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 20px;
  color: #65A39A;
}

.images-container {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  width: 100%;
  max-width: 1200px;
}

.team-member1,
.team-member2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.team-image1,
.team-image2 {
  width: 100%;
  max-width: 250px;
  height: auto;
  border: 2px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.team-member-info1,
.team-member-info2 {
  margin-top: 10px;
}

.name {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: #65A39A;
}

.role {
  font-size: 1.5rem;
  color: #65A39A;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .title {
    font-size: 1.5rem;
  }

  .team-image1,
  .team-image2 {
    max-width: 100px;
  }

  .images-container {
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
}

@media (max-width: 480px) {
  .team-image1,
  .team-image2 {
    max-width: 80px;
  }

  .name {
    font-size: 1rem;
  }

  .role {
    font-size: 0.8rem;
  }
}
</style>