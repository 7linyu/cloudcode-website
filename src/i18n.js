import { createI18n } from 'vue-i18n';

const messages = {
  'zh-CN': {
    navbar: {
      title: '云萌工作室',
      language: {
        zhCN: '简体中文',
        zhTW: '繁体中文',
        en: 'English'
      }
    },
    content: {
      publicWelfareSector: '公益板块',
      dreamChaseProject: '追梦项目',
      coreMembers: '核心成员',
      applyCooperation: '申请合作'
    },
    publicWelfare: {
      title: '云萌公益',
      subtitle: '我们是一支热爱服务的团队，致力于为社区提供帮助'
    },
    dreamChase: {
      title: '筑梦计划',
      subTitlePart1: '自云萌成立以来，我们一直热衷于帮助',
      subTitlePart2: '团队内外需要帮助的有志青年',
      statsPart1: '累计资助了xx场比赛',
      statsPart2: '为1000余名青年提供助学支持',
      statsPart3: '自创立以来为学校培养了数百名人才，并提供技术栈方面的教学',
      statsPart4: '持续的关注需要帮助的新人，为其保驾护航...',
      altText1: '助学支持',
      altText2: '竞赛支持',
      altText3: '服务评价',
      altText4: '覆盖人数',
      text1: '助学支持',
      text2: '竞赛支持',
      text3: '服务评价',
      text4: '覆盖人数'
    },
    coreTeam: {
      title: '核心成员',
      labTitle: '合作实验室',
      members: [
        { name: '张三', role: '首席技术官' },
        { name: '李四', role: '产品经理' },
        { name: '王五', role: '设计师' }
      ],
      labs: [
        { name: '实验室A', description: '专注于人工智能研究' },
        { name: '实验室B', description: '专注于大数据分析' },
        { name: '实验室C', description: '专注于云计算技术' }
      ]
    },
    applyCooperation: {
      title: '申请合作',
      description: '云萌工作室，一个深植于科技创新土壤中的璀璨明珠，致力于成为青年学子探索技术世界的灯塔。',
      slogan: '用技术改变世界，用智慧点亮未来！'
    },
    footer: {
      title: '云萌工作室',
      address: '地址：四川省成都市都江堰市青城山镇长寿社区3栋1层1号',
      email: '邮箱：<a href="mailto:support@cloudcode.team">support@cloudcode.team</a>',
      links: '友情链接：<a href="https://geek.cloudcode.team" target="_blank">云萌极客站</a> | <a href="https://learn.cloudcode.team" target="_blank">网工教学平台</a>',
      icp: '© 2022-2023 CloudCode Team. All Rights Reserved | <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2022018075号-2</a> | <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51018102000210" target="_blank">川公网安备 51018102000210号</a>'
    }
  },
  'zh-TW': {
    navbar: {
      title: '雲萌工作室',
      language: {
        zhCN: '簡體中文',
        zhTW: '繁體中文',
        en: 'English'
      }
    },
    content: {
      publicWelfareSector: '公益板塊',
      dreamChaseProject: '追夢項目',
      coreMembers: '核心成員',
      applyCooperation: '申請合作'
    },
    publicWelfare: {
      title: '雲萌公益',
      subtitle: '我們是一支熱愛服務的團隊，致力於為社區提供幫助'
    },
    dreamChase: {
      title: '築夢計劃',
      subTitlePart1: '自雲萌成立以來，我們一直熱衷於幫助',
      subTitlePart2: '團隊內外需要幫助的有志青年',
      statsPart1: '累計資助了xx場比賽',
      statsPart2: '為1000餘名青年提供助學支持',
      statsPart3: '自創立以來為學校培養了數百名人才，並提供技術棧方面的教學',
      statsPart4: '持續的關注需要幫助的新人，為其保駕護航...',
      altText1: '助學支持',
      altText2: '競賽支持',
      altText3: '服務評價',
      altText4: '覆蓋人數',
      text1: '助學支持',
      text2: '競賽支持',
      text3: '服務評價',
      text4: '覆蓋人數'
    },
    coreTeam: {
      title: '核心成員',
      labTitle: '合作實驗室',
      members: [
        { name: '張三', role: '首席技術官' },
        { name: '李四', role: '產品經理' },
        { name: '王五', role: '設計師' }
      ],
      labs: [
        { name: '實驗室A', description: '專注於人工智能研究' },
        { name: '實驗室B', description: '專注於大數據分析' },
        { name: '實驗室C', description: '專注於雲計算技術' }
      ]
    },
    applyCooperation: {
      title: '申請合作',
      description: '雲萌工作室，一個深植於科技創新土壤中的璀璨明珠，致力於成為青年學子探索技術世界的燈塔。',
      slogan: '用技術改變世界，用智慧點亮未來！'
    },
    footer: {
      title: '雲萌工作室',
      address: '地址：四川省成都市都江堰市青城山鎮長壽社區3棟1層1號',
      email: '郵箱：<a href="mailto:support@cloudcode.team">support@cloudcode.team</a>',
      links: '友好連結：<a href="https://geek.cloudcode.team" target="_blank">雲萌極客站</a> | <a href="https://learn.cloudcode.team" target="_blank">網工教學平台</a>',
      icp: '© 2022-2023 CloudCode Team. All Rights Reserved | <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP備2022018075號-2</a> | <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51018102000210" target="_blank">川省公安備案 51018102000210號</a>'
    }
  },
  'en': {
    navbar: {
      title: 'CloudMeng Studio',
      language: {
        zhCN: 'Simplified Chinese',
        zhTW: 'Traditional Chinese',
        en: 'English'
      }
    },
    content: {
      publicWelfareSector: 'Public Welfare Sector',
      dreamChaseProject: 'Dream Chase Project',
      coreMembers: 'Core Members',
      applyCooperation: 'Apply for Cooperation'
    },
    publicWelfare: {
      title: 'CloudMeng Public Welfare',
      subtitle: 'We are a team passionate about service, dedicated to helping the community.'
    },
    dreamChase: {
      title: 'Dream Chase Plan',
      subTitlePart1: 'Since its establishment, CloudMeng has been enthusiastic about helping',
      subTitlePart2: 'ambitious young people both inside and outside the team',
      statsPart1: 'Cumulatively sponsored xx competitions',
      statsPart2: 'Provided financial support to over 1000 young people',
      statsPart3: 'Cultivated hundreds of talents for schools and provided technical stack education since its inception',
      statsPart4: 'Continuously supporting new members in need, providing them with guidance and protection...',
      altText1: 'Financial Support',
      altText2: 'Competition Support',
      altText3: 'Service Evaluation',
      altText4: 'Coverage',
      text1: 'Financial Support',
      text2: 'Competition Support',
      text3: 'Service Evaluation',
      text4: 'Coverage'
    },
    coreTeam: {
      title: 'Core Members',
      labTitle: 'Collaborative Labs',
      members: [
        { name: 'Zhang San', role: 'Chief Technology Officer' },
        { name: 'Li Si', role: 'Product Manager' },
        { name: 'Wang Wu', role: 'Designer' }
      ],
      labs: [
        { name: 'Lab A', description: 'Focused on Artificial Intelligence Research' },
        { name: 'Lab B', description: 'Focused on Big Data Analysis' },
        { name: 'Lab C', description: 'Focused on Cloud Computing Technology' }
      ]
    },
    applyCooperation: {
      title: 'Apply for Cooperation',
      description: 'CloudMeng Studio, a shining pearl deeply rooted in the soil of technological innovation, is committed to becoming a beacon for young students exploring the world of technology.',
      slogan: 'Change the world with technology, illuminate the future with wisdom!'
    },
    footer: {
      title: 'CloudMeng Studio',
      address: 'Address: No. 1, 1st Floor, Building 3, Changshou Community, Qingchengshan Town, Dujiangyan City, Sichuan Province, China',
      email: 'Email: <a href="mailto:support@cloudcode.team">support@cloudcode.team</a>',
      links: 'Friendly Links: <a href="https://geek.cloudcode.team" target="_blank">CloudMeng Geek Station</a> | <a href="https://learn.cloudcode.team" target="_blank">Network Engineering Learning Platform</a>',
      icp: '© 2022-2023 CloudCode Team. All Rights Reserved | <a href="https://beian.miit.gov.cn/" target="_blank">Sichuan ICP Record No. 2022018075-2</a> | <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51018102000210" target="_blank">Sichuan Public Security Record No. 51018102000210</a>'
    }
  }
};

const i18n = createI18n({
  locale: 'zh-CN', // 设置默认语言
  messages, // 设置语言包
});

export default i18n;