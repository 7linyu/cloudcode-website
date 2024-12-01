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
      subtitle: '云萌工作室，是成都东软学院网络工程系云萌工作室组织成立的公益组织，以计算机科技为航向，汇聚了学院内最富激情与才华的师生团队。们利用自身在软件开发、数据分析、人工智能等领域的专业技能，开发了一系列旨在解决社会问题、提升公众福祉的公益项目。从为偏远地区学校搭建在线教育平台，让知识的光芒照亮每一个角落；到利用大数据分析帮助弱势群体精准对接资源，让每一份帮助都能精准送达。'
    },
    dreamChase: {
      title: '筑梦计划',
      subTitlePart1: '自云萌公益策划并推行了一项意义重大的 “逐梦计划”，旨在为团队内外面临诸多困难的青年提供切实有效的帮扶，助力他们跨越阻碍，追逐梦想。“逐梦计划” 自实施以来，收获了广大群众的积极响应、高度认可与广泛好评，在社会各界产生了积极且深远的影响。',
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
        { name: '姚雨霏', role: '项目经理' },
        { name: '高浩然', role: '产品经理' },
        { name: '龙海洋', role: '工程师' }
      ],
      labs: [
        { name: '网络工程实验室', description: '专注于网络工程领域的研究与开发' },
        { name: '物联网实验室', description: '专注于物联网技术的研发与应用' },
        { name: 'ACM实验室', description: '专注于人工智能领域的研究与开发' }
      ]
    },
    applyCooperation: {
      title: '申请合作',
      description: '云萌工作室，一个深植于科技创新土壤中的璀璨明珠，致力于成为青年学子探索技术世界的灯塔。',
      slogan: '用技术改变世界，用智慧点亮未来！我们期待与志同道合的伙伴并肩作战，无论您来自企业、社会组织，还是政府机构、学术团体，只要怀揣公益热忱，云萌皆愿与您携手，共绘公益宏伟蓝图。我们深信，不同领域的智慧碰撞与资源交融，定能催生创新公益模式，拓展公益事业边界，让爱心与善意抵达更远角落，触动更多心灵。'
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
      subtitle: '雲萌工作室，是成都東軟學院網絡工程系雲萌工作室組織成立的公益組織，以電腦科技為航向，彙聚了學院內最富激情與才華的師生團隊。 們利用自身在軟體發展、資料分析、人工智慧等領域的專業技能，開發了一系列旨在解决社會問題、提升公眾福祉的公益項目。 從為偏遠地區學校搭建線上教育平臺，讓知識的光芒照亮每一個角落； 到利用大資料分析幫助弱勢群體精准對接資源，讓每一份幫助都能精准送達。'
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
      subtitle: 'Yunmeng Studio is a non-profit organization established by Yunmeng Studio, a department of network engineering at Chengdu Neusoft College. With a focus on computer technology, it brings together the most passionate and talented team of teachers and students within the college. We have utilized our professional skills in software development, data analysis, artificial intelligence, and other fields to develop a series of public welfare projects aimed at solving social problems and improving public welfare. Building an online education platform for schools in remote areas, allowing the light of knowledge to illuminate every corner; By utilizing big data analysis to assist vulnerable groups in accurately accessing resources, every help can be delivered with precision.'
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