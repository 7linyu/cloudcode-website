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
      statsPart1: '累计资助了50余场比赛',
      statsPart2: '为百余名青年提供助学支持',
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
        { name: '龙海洋', role: '技术总监' }
      ],
      labs: [
        { name: '网络工程实验室', description: '实践网络技术的创新空间' },
        { name: '移动创新实验室', description: '探索移动技术的创新平台' },
        { name: 'ACM实验室', description: '编程竞技，创新培育基地' }
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
    },
    newsReport: {
      imageUrl: 'src/img/9.jpg',
      title: '成都东软学院公益项目在澳上线，代表团出席发布会并开展访企拓岗专项调研',
      content: '9 月 26 日，成都东软学院与澳门初创智库协会合作的 Mcode 公益项目于澳门上线，该校副校长张兵率团出席。此项目为免费线上编程学习平台，秉持 “数智赋能教育，创新服务社会” 宗旨，助力全民编程普及，提供教育资源与学习契机，以适应社会变化。会后，代表团赴澳门及横琴粤澳深度合作区展开访企拓岗调研，走访澳门新大陆万博科技有限公司等多家企业，与负责人交流，探寻合作机遇。其间，慰问 2023 届优秀毕业生张瑛铭，其鼓励学弟学妹把握当地发展机遇。此次调研增进学院对澳门产业了解与合作，助于优化人才培养、提升就业质量。张兵副校长称，澳门为学生创业提供空间，学校望与招商投资促进局长期合作创新，持续探索数字化教育模式贡献力量。'
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
      subtitle: '雲萌工作室，是成都東軟學院網絡工程系雲萌工作室組織成立的公益組織，以電腦科技為航向，彙聚了學院內最富激情與才華的師生團隊。 們利用自身在軟體發展、資料分析、人工智慧等領域的專業技能，開發了一系列旨在解決社會問題、提升公眾福祉的公益項目。 從為偏遠地區學校搭建線上教育平臺，讓知識的光芒照亮每一個角落； 到利用大資料分析幫助弱勢群體精準對接資源，讓每一份幫助都能精準送達。'
    },
    dreamChase: {
      title: '築夢計劃',
      subTitlePart1: '自雲萌成立以來，我們一直熱衷於幫助',
      subTitlePart2: '團隊內外需要幫助的有志青年',
      statsPart1: '累計資助了50餘場比賽',
      statsPart2: '為百餘名青年提供助學支持',
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
        { name: '姚雨霏', role: '項目經理' },
        { name: '高浩然', role: '產品經理' },
        { name: '龍海洋', role: '技術總監' }
      ],
      labs: [
        { name: '網路工程實驗室', description: '實踐網路技術的創新空間' },
        { name: '移動創新實驗室', description: '探索移動技術的創新平臺' },
        { name: 'ACM實驗室', description: '程式設計競技，創新培育基地' }
      ]
    },
    applyCooperation: {
      title: '申請合作',
      description: '雲萌工作室，一個深植於科技創新土壤中的璀璨明珠，致力於成為青年學子探索技術世界的燈塔。',
      slogan: '用技術改變世界，用智慧點亮未來！ 我們期待與志同道合的夥伴並肩作戰，無論您來自企業、社會組織，還是政府機構、學術團體，只要懷揣公益熱忱，雲萌皆願與您攜手，共繪公益巨集偉藍圖。 我們深信，不同領域的智慧碰撞與資源交融，定能催生創新公益模式，拓展公益事業邊界，讓愛心與善意抵達更遠角落，觸動更多心靈。'
    },
    footer: {
      title: '雲萌工作室',
      address: '地址：四川省成都市都江堰市青城山鎮長壽社區3棟1層1號',
      email: '郵箱：<a href="mailto:support@cloudcode.team">support@cloudcode.team</a>',
      links: '友好連結：<a href="https://geek.cloudcode.team" target="_blank">雲萌極客站</a> | <a href="https://learn.cloudcode.team" target="_blank">網工教學平台</a>',
      icp: '© 2022-2023 CloudCode Team. All Rights Reserved | <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP備2022018075號-2</a> | <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51018102000210" target="_blank">川省公安備案 51018102000210號</a>'
    },
    newsReport: {
      imageUrl: 'src/img/9.jpg',
      title: '成都東軟學院公益項目在澳上線，代表團出席發佈會並開展訪企拓崗專項調研',
      content: '9 月 26 日，成都東軟學院與澳門初創智庫協會合作的 Mcode 公益項目於澳門上線，該校副校長張兵率團出席。此項目為免費線上編程學習平台，秉持 「數智賦能教育，創新服務社會」 宗旨，助力全民編程普及其，提供教育資源與學習契機，以適應社會變化。會後，代表團赴澳門及橫琴粵澳深度合作區展開訪企拓崗調研，走訪澳門新大陸萬博科技有限公司等多家企業，與負責人交談，探尋合作機會。期間，慰問 2023 屆優秀畢業生張瑛銘，其鼓勵學弟學妹把握當地發展機遇。此次調研增進學院對澳門產業了解與合作，有助於優化人才培養、提升就業質量。張兵副校長稱，澳門為學生創業提供空間，學校望與招商投資促進局長期合作創新，持續探索數位化教育模式貢獻力量。'
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
      statsPart1: 'More than 50 tournaments have been funded',
      statsPart2: 'It has provided financial aid to more than 100 young people',
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
        { name: 'Yao Yufei', role: 'project manager' },
        { name: 'Gao Haoran', role: 'Product Manager' },
        { name: 'Dragon Ocean', role: 'Technical Director' }
      ],
      labs: [
        { name: 'Network Engineering Laboratory', description: 'An innovative space for the practice of network technology' },
        { name: 'Mobile Innovation Lab', description: 'Explore innovative platforms for mobile technology' },
        { name: 'ACM Laboratories', description: 'Programming competition, innovation cultivation base' }
      ]
    },
    applyCooperation: {
      title: 'Apply for Cooperation',
      description: 'Yunmeng Studio, a bright pearl deeply rooted in the soil of scientific and technological innovation, is committed to becoming a beacon for young students to explore the world of technology.',
      slogan: 'Change the world with technology and light up the future with wisdom! We look forward to working side by side with like-minded partners, whether you are from enterprises, social organizations, government agencies, academic groups, as long as you have a passion for public welfare, Yunmeng is willing to work with you to draw a grand blueprint for public welfare. We firmly believe that the collision of wisdom and the integration of resources in different fields will give birth to innovative philanthropic models, expand the boundaries of philanthropic undertakings, and let love and goodwill reach farther corners and touch more hearts.'
    },
    footer: {
      title: 'CloudMeng Studio',
      address: 'Address: No. 1, 1st Floor, Building 3, Changshou Community, Qingchengshan Town, Dujiangyan City, Sichuan Province, China',
      email: 'Email: <a href="mailto:support@cloudcode.team">support@cloudcode.team</a>',
      links: 'Friendly Links: <a href="https://geek.cloudcode.team" target="_blank">CloudMeng Geeks Station</a> | <a href="https://learn.cloudcode.team" target="_blank">Network Engineering Teaching Platform</a>',
      icp: '© 2022-2023 CloudCode Team. All Rights Reserved | <a href="https://beian.miit.gov.cn/" target="_blank">License Number: 2022018075</a> | <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51018102000210" target="_blank">Record Code: 51018102000210</a>'
    },
    newsReport: {
      imageUrl: 'src/img/9.jpg',
      title: 'Chengdu Neusoft College Public Welfare Project Launches in Macao, Delegation Attends Launch Ceremony and Conducts Enterprise Visits',
      content: 'On September 26th, the Mcode Public Welfare project, a collaboration between Chengdu Neusoft College and the Macao Startup Think Tank Association, was launched in Macao. Vice President Zhang Bing led the delegation to attend the launch ceremony. This project aims to provide free online programming learning platforms, adhering to the principle of "Empowering Education with Digital Intelligence, Innovatively Serving Society," to promote universal programming literacy, offering educational resources and opportunities for learning to adapt to societal changes. After the event, the delegation conducted enterprise visits in Macao and Hengqin-Macao In-depth Cooperation Zone, visiting several companies such as Macao New Continent Wanda Science & Technology Co., Ltd., engaging in discussions with company leaders to explore potential cooperation opportunities. During their visit, they also paid respects to outstanding graduate Zhang Yingming of the Class of 2023, who encouraged his fellow classmates to seize local development opportunities. This visit enhanced the college\'s understanding of the Macao industry and facilitated cooperation, contributing to optimizing talent cultivation and enhancing employment quality. Vice President Zhang Bing stated that Macao provides space for student entrepreneurship, and the school looks forward to long-term collaborative innovation with the Investment Promotion Bureau, continuously exploring digital education models to contribute to society.'
    }
  }
};

export default createI18n({
  locale: 'zh-CN', // set locale
  messages,
});



