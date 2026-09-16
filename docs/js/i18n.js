(function () {
    const STORAGE_KEY = 'portfolio-language';
    const DEFAULT_LANGUAGE = 'en';

    const common = {
        '← Back': '← 返回',
        '← Back to Home': '← 返回首页',
        'Sections': '目录',
        'Services': '服务',
        'Duration': '周期',
        'Industry': '行业',
        'Role': '角色',
        'Type': '类型',
        'Service and UI/UX Design': '服务设计与 UI/UX 设计',
        'Product and UX Design': '产品与 UX 设计',
        'Product and Interaction Design': '产品与交互设计',
        'App Design': 'App 设计',
        'App design': 'App 设计',
        'Service Design': '服务设计',
        'Branding': '品牌设计',
        'Intelligent Design': '智能设计',
        'Interaction Design': '交互设计',
        'Sustainable Design': '可持续设计',
        'Product Design': '产品设计',
        'Commercial Design': '商业设计',
        'Responsive Design': '响应式设计',
        'Website Design': '网站设计',
        'UI & UX Designer': 'UI & UX 设计师',
        'Individual Project': '个人项目',
        'Team Project': '团队项目'
    };

    const pages = {
        'index': {
            title: {
                en: 'Ziqing Yang | Service Design · UX/UI Design · Product Design',
                zh: 'Ziqing Yang | 服务设计 · UX/UI 设计 · 产品设计'
            },
            strings: {
                'Work': '作品',
                'About': '关于',
                'Contact': '联系',
                'Service Design · UX/UI Design · Product Design': '服务设计 · UX/UI 设计 · 产品设计',
                'Bridging user needs with business vision — crafting thoughtful experiences that inspire and delight.': '连接用户需求与商业愿景，创造有温度、有启发性的体验。',
                'Scroll to explore': '向下浏览',
                'Selected Work': '精选作品',
                'View Project': '查看项目',
                'Design of the Glasgow Housing Crisis Service System': '格拉斯哥住房危机服务系统设计',
                'To address the urgent issues raised by Glasgow City Council, in partnership with Glasgow Housing Association, designed a service system to encourage landlords to convert unused properties into social housing. Conducted stakeholder research and designed a system connecting landlords, housing associations and tenants through maintenance support and digital management Website and mobile App.': '为回应格拉斯哥市议会提出的紧迫住房问题，本项目与格拉斯哥住房协会合作，设计了一套服务系统，鼓励房东将闲置房产转化为社会住房。项目通过利益相关者研究，构建连接房东、住房协会与租户的系统，并通过维修支持、数字管理网站和移动端 App 推动服务落地。',
                'Design of an end-to-end service system for the collection and sale of imperfect fruit': '残次水果回收与销售端到端服务系统设计',
                'B2B2C food recovery system, conducted mixed-method research including social media observation, platform analysis, field interviews and 200+ surveys to investigate consumer perceptions of imperfect fruits. Identified behavioural and supply chain barriers contributing to food waste, and designed a agri-food redistribution platform service connecting farmers, retailers and consumers through recycling, resale and awareness campaigns.': '这是一个 B2B2C 食品回收服务系统。项目通过社交媒体观察、平台分析、实地访谈和 200+ 份问卷等混合研究方法，探究消费者对残次水果的认知；识别造成食物浪费的行为与供应链障碍，并设计连接农户、零售商和消费者的农产品再分配平台服务，涵盖回收、再销售和公众认知传播。',
                'Design of a human-plant symbiosis service based on Arduino': '基于 Arduino 的人植共生服务设计',
                'Speculative interaction design project exploring human–plant symbiosis, using Arduino-based physical computing to create an interactive system that responds to environmental or bodily signals between humans and plants. Conducted concept development, interaction prototyping and hardware experimentation, integrating Arduino sensors, actuators and material exploration to visualise the invisible relationship between plant vitality, environmental conditions and human care behaviours.': '这是一个探索人植共生关系的思辨交互设计项目，使用基于 Arduino 的实体计算，创建能够回应人与植物之间环境或身体信号的交互系统。项目包含概念发展、交互原型和硬件实验，并结合 Arduino 传感器、执行器和材料探索，将植物生命力、环境条件与人类照护行为之间不可见的关系可视化。',
                'Glasgow Mackintosh Tea Room – Tea Culture Promotion Design Project': '格拉斯哥 Mackintosh Tea Room 茶文化推广设计项目',
                'Glasgow Mackintosh Tea Room cultural promotion project, designed a hands-on educational toolkit to help Scottish secondary school students, including ASN students, understand afternoon tea rituals through sensory learning and wellbeing-focused activities. Conducted desk research, user analysis and concept testing around tea culture, ritual behaviour and teenage wellbeing, and designed a portable ritual-making toolkit combining miniature tableware, guidebook storytelling, sensory elements and reflective prompts to support emotional regulation, tangible learning and cultural connection.': '这是一个格拉斯哥 Mackintosh Tea Room 文化推广项目，设计了一套动手型教育工具包，帮助苏格兰中学生，包括 ASN 学生，通过感官学习和身心健康导向的活动理解下午茶仪式。项目围绕茶文化、仪式行为和青少年身心健康进行桌面研究、用户分析与概念测试，并设计便携式仪式构建工具包，结合迷你餐具、故事化指南、感官元素和反思提示，支持情绪调节、具身学习与文化连接。',
                'Projects Completed': '完成项目',
                'Years Experience': '年经验',
                'Curiosity': '好奇心',
                "Hi, I'm Ziqing Yang — a UI/UX designer passionate about creating digital experiences that matter.": '你好，我是 Ziqing Yang，一名热爱创造有意义数字体验的 UI/UX 设计师。',
                'With a focus on user research and iterative design, I craft interfaces that are not only beautiful but also functional and accessible. I believe great design happens at the intersection of aesthetics and usability.': '我关注用户研究与迭代设计，致力于创造兼具美感、功能性和可访问性的界面。我相信优秀设计诞生于审美与可用性的交汇处。',
                'Get in Touch': '联系我',
                "Interested in working together? I'd love to hear from you.": '如果你有合作想法，欢迎联系我。',
                'Click to copy': '点击复制',
                'Copied!': '已复制！',
                '© 2026 Ziqing Yang. All rights reserved.': '© 2026 Ziqing Yang. 版权所有。'
            }
        },
        'imperfect-fruit': {
            title: {
                en: 'Design of an end-to-end service system for the collection and sale of imperfect fruit | Ziqing Yang',
                zh: '残次水果回收与销售端到端服务系统设计 | Ziqing Yang'
            },
            strings: {
                'Design of an end-to-end service system for the collection and sale of imperfect fruit': '残次水果回收与销售端到端服务系统设计',
                'Service Design, Branding, Interaction Design, Sustainable Design': '服务设计、品牌设计、交互设计、可持续设计',
                '6 months': '6 个月',
                'Agriculture, Publicity': '农业、公众传播',
                'challenge&output': '挑战与产出',
                'The pursuit of good-looking fruit has become common in the consumer market, leading to a lack of awareness about imperfect fruit. This trend contributes to significant fruit waste and economic losses for farmers.': '消费者市场普遍追求外观好看的水果，导致大众对残次水果的认知不足。这一趋势造成了大量水果浪费，也给农户带来经济损失。',
                "The Imperfect Fruit Recycling System seeks to address this by managing the entire process of imperfect fruit—from recycling and sorting to processing and sales. Its goals are to reduce fruit waste, enhance farmers' economic benefits, and help consumers appreciate and purchase imperfect fruit, Change the habit of consuming simply in the pursuit of perfection, which leads to waste.": '残次水果回收系统通过管理残次水果从回收、分拣到加工和销售的完整流程来回应这一问题。项目目标是减少水果浪费，提升农户经济收益，并帮助消费者重新认识和购买残次水果，改变单纯追求“完美外观”而造成浪费的消费习惯。',
                'Background': '背景',
                "China's fruit waste is enormous. Of all fruits produced, one-third is utilized, while the remaining two-thirds are rotten or discarded. Among the discarded fruits, 60% is due to unreasonable transportation processes and 34% is due to poor appearance. Therefore, I will conduct further research on these transportation and appearance issues of imperfect fruits.": '中国的水果浪费问题十分严重。在全部水果产量中，约三分之一被有效利用，其余三分之二则腐烂或被丢弃。在被丢弃的水果中，60% 与不合理的运输流程有关，34% 则与外观不佳有关。因此，我围绕残次水果的运输与外观问题展开进一步研究。',
                "China's fruit waste is serious and Two Main Causes for Fruit Being Thrown Away": '中国水果浪费严重，以及水果被丢弃的两个主要原因',
                'What Fruit is Considered Imperfect?': '什么样的水果会被视为残次水果？',
                'Research shows that during fruit cultivation, due to climate and environmental factors, many fruits do not reach the perfect state for sale. The condition ranges from poor to good in five categories: "rotten, deformed, scratched, normal, and perfect." Excluding the first category of rotten and inedible fruits, deformed and scratched fruits are the focus of my research because, despite their imperfect appearance, they have the same taste and nutritional value as normal fruits.': '研究表明，在水果种植过程中，由于气候和环境等因素，许多水果无法达到理想的销售外观。水果状态可以从差到好分为五类：“腐烂、变形、刮伤、正常、完美”。排除第一类已经腐烂且无法食用的水果后，变形和刮伤水果成为本项目的研究重点，因为它们虽然外观不完美，但口感和营养价值与正常水果相同。',
                'However, note the relative disadvantages: 1. Shorter shelf life 2. Transportation and storage conditions need to be better': '同时也需要注意其相对劣势：1. 保质期较短 2. 对运输和储存条件要求更高',
                'Net step aim: How can we better utilise the value of imperfect fruit to reduce fruit waste?': '下一步目标：如何更好地利用残次水果的价值，从而减少水果浪费？',
                'Research plan': '研究计划',
                'Social Media Research for Selling these imperfect fruits': '残次水果销售的社交媒体研究',
                'Finding: Imperfect fruits appear on social media platforms for sale, but the quality varies considerably.': '发现：社交媒体平台上已经出现残次水果售卖，但产品质量差异较大。',
                'Questionnaire for Customers’ views on imperfect fruit': '消费者对残次水果看法的问卷调研',
                'conclusion: Imperfect fruit is only occasionally found in the market, and most of those who buy it are middle-aged or elderly people.': '结论：残次水果在市场中并不常见，购买者多为中老年人。',
                'Customer interviews in surpermarket': '超市消费者访谈',
                "In order to further understand consumers' perceptions of imperfect fruits when purchasing fruits, I interviewed 4 relevant consumers in supermarket.": '为了进一步了解消费者在购买水果时对残次水果的认知，我在超市访谈了 4 位相关消费者。',
                'Conclusion:': '结论：',
                'People tend to associate discounted fruit with lower quality and worse taste': '人们倾向于将打折水果与较低品质和较差口感联系起来',
                'But if the quality and taste are guaranteed, they are willing to try it': '但如果品质和口感能够得到保障，他们愿意尝试购买',
                'Field Research and Stakeholders Interviews(At the production stage, the wholesale stage and the retail stage）': '实地研究与利益相关者访谈（生产、批发与零售阶段）',
                'To address waste issues in the transportation sector, I analyzed the stakeholders in transportation, including farmers, transporters, and retailers. Try to understand how they sell imperfect fruits and what they do with unsold fruits.': '为了解决运输环节中的浪费问题，我分析了运输相关利益方，包括农户、运输者和零售商，并尝试了解他们如何销售残次水果，以及如何处理未售出的水果。',
                'Conclusions:': '结论：',
                'In general, wholesalers do not buy imperfect fruits because they are not cost-effective': '总体而言，批发商通常不会购买残次水果，因为其成本效益较低',
                'Clearly stated prices, transparency in quality information, and similar packaging and presentation encourage customers to buy substandard produce': '清晰标价、透明的品质信息，以及相近的包装和陈列方式，会鼓励消费者购买次级农产品',
                'Throughout the supply chain, imperfect fruits have a low economic price and are not fully made use of': '在整个供应链中，残次水果经济价值较低，并未被充分利用',
                'Imperfect Fruit Distribution Chain': '残次水果流通链路',
                "After analyzing all stakeholders' opinions and pain points, I will focus on the entire process from cultivation to transportation to sales, trying to identify problems at each stage of this process.": '在分析所有利益相关者的意见和痛点后，我将重点关注从种植、运输到销售的完整流程，尝试识别每个阶段存在的问题。',
                'Insights': '洞察',
                'This distribution chain shows, whilst the transport of fruit and unsold stock in supermarkets also account for a significant pro that small-scale （individual）farmers account for the greatest amount of waste in the fruit collection processportion.': '该流通链路显示，在水果收集过程中，小规模个体农户产生的浪费占比最高；同时，水果运输和超市未售出库存也构成了重要的浪费来源。',
                'THEREFORE： I intend to explore and develop solutions to the waste of ‘Imperfect’ fruit across three stages: from the source (starting with small-scale farmers) through to the management of collection by middlemen, and finally to consumer awareness at the end of the process.': '因此，我计划从三个阶段探索并发展残次水果浪费的解决方案：从源头的小规模农户开始，到中间商的收集管理，再到终端消费者认知的提升。',
                'Ecosystem map': '生态系统图',
                'The system focuses on farmers, fruit sellers, and consumers, and all related stakeholders will work together to make the system sustainable.': '该系统以农户、水果销售者和消费者为核心，所有相关利益方共同协作，使系统具备可持续性。',
                'User Stories': '用户故事',
                'All three stakeholders have their own needs: farmers want to sell their imperfect fruit, wholesalers want to increase their take-up, and consumers want to buy fruit that is both affordable and tasty.': '三类利益相关者都有各自需求：农户希望售出残次水果，批发商希望提高收购效率，消费者则希望购买价格实惠且口感好的水果。',
                'Problem statement': '问题定义',
                'Why': '为什么',
                "About 12 million tons of fruit are wasted each year due to problems in distributors' acquisition, transportation, and sales processes, resulting in high losses of imperfect fruit. Most traders face 15% unsellable fruit, with up to 34% ultimately discarded.": '由于经销商在收购、运输和销售流程中存在问题，每年约有 1200 万吨水果被浪费，造成大量残次水果损失。多数贸易商面临约 15% 的水果无法销售，其中最终被丢弃的比例最高可达 34%。',
                'What': '是什么',
                'Focusing on wholesaler imperfect fruit purchasing, transportation, and consumer shopping while collaborating with individual farmers, retailers, and customers to build a more sustainable system.': '聚焦批发商对残次水果的收购、运输和消费者购买环节，同时与个体农户、零售商和顾客协作，构建一个更可持续的系统。',
                'Design Goal': '设计目标',
                '1. Reduce waste of imperfect fruit throughout the acquisition, transportation, and consumption stages 2. Improve the wholesale system for smallholder farmers to acquire imperfect fruits and add their income 3. Lead sustainable consumption habits and increasing product diversification': '1. 减少残次水果在收购、运输和消费阶段的浪费<br>2. 改善小农户残次水果的批发收购系统，并增加其收入<br>3. 引导可持续消费习惯，并提升产品多样性',
                'Insight': '洞察',
                'By observing the phenomena in the aspects of acquisition, transportation, and online and offline sales, we aim to identify opportunities.': '通过观察收购、运输以及线上线下销售中的现象，我们希望识别新的设计机会。',
                'Case study': '案例研究',
                'I will analyse these case studies to develop a conceptual framework for the system I am designing.': '我将分析这些案例，为正在设计的系统建立概念框架。',
                'Blue ocean strategy/Positioning': '蓝海策略 / 定位',
                'System overview': '系统概览',
                'Preliminary Design Overview': '初步设计概览',
                'The preliminary design includes four components: The early-stage fruit collection process primarily features recycling warehouses to help farmers sell imperfect fruits at better prices, addressing the difficulty of selling imperfect fruits while ensuring their safe sales and utilization afterward. The mobile application serves as a medium for farmers to find collection warehouses and for customers to purchase these fruits. Billboards and sales outlets aim to address consumers\' insufficient awareness of "imperfect fruits."': '初步设计包括四个组成部分：前期水果收集流程以回收仓为核心，帮助农户以更好的价格销售残次水果，解决残次水果难以售卖的问题，同时保障后续安全销售与利用。移动应用作为媒介，帮助农户寻找回收仓，也帮助顾客购买这些水果。广告牌和销售点则用于回应消费者对“残次水果”认知不足的问题。',
                'Storyboard': '故事板',
                'Scenarios for Farmer：Centralised Recycling Points for Farmers': '农户场景：面向农户的集中回收点',
                'Scenarios for Customers': '消费者场景',
                'Touchpoint 1: Interactive billboard': '触点 1：互动广告牌',
                'The interactive billboard engages people through fun games with a reward mechanism, promoting our recycling system.': '互动广告牌通过带有奖励机制的趣味游戏吸引人们参与，从而推广我们的回收系统。',
                'Touchpoint 2: Fruit counter': '触点 2：水果柜台',
                'The fruit counter uses an interactive board to attract customers with discounts and promotions, showcasing quality, taste, and safety to enhance user trust.': '水果柜台通过互动展示板结合折扣和促销吸引顾客，同时展示品质、口感和安全信息，以增强用户信任。',
                'Touchpoint 3: App': '触点 3：App',
                'This makes it easy for farmers to deliver their fruit to our collection centres and for consumers to use our app to purchase imperfect fruit, creating a perfect cycle within our system.': '这使农户能够更便捷地将水果送至收集中心，也让消费者可以通过 App 购买残次水果，从而在系统内部形成完整循环。',
                'Lofi design': '低保真设计',
                'Hifi design': '高保真设计',
                'Hi-fi Details': '高保真细节',
                '1. First, for farmers, the task of delivering fruit today is a high-priority action, so I used a highlighted colour as a visual reminder and placed this task at the top of the page. Directly below it, I added key information related to the task, including how many kilograms of fruit have been collected and how much money has been earned.': '1. 首先，对于农户而言，“今日送果”是高优先级任务，因此我使用高亮色作为视觉提醒，并将该任务放置在页面顶部。其下方直接展示与任务相关的关键信息，包括已收集水果重量和已获得收入。',
                '2. After confirming the order, there is a detail page that allows farmers to clearly check the delivery time, location, and the type of fruit they need to transport.': '2. 确认订单后，详情页可以帮助农户清晰查看配送时间、地点以及需要运输的水果类型。',
                '1. Since our project sells imperfect fruit, this also responds to consumers’ previous concerns about fruit quality. At the collection warehouse, we will carry out quality scanning and inspection to ensure that the fruit delivered to consumers is safe and reliable. Displaying safety information on this page helps reduce consumers’ concerns and build trust.': '1. 由于项目销售的是残次水果，这一设计回应了消费者此前对水果品质的担忧。在收集仓中，我们会进行质量扫描和检测，确保送达消费者手中的水果安全可靠。在页面中展示安全信息，有助于降低消费者顾虑并建立信任。',
                '2. The system uses distance as an important recommendation criterion because imperfect fruit usually has a shorter shelf life. By recommending nearby supermarkets to users, the time between purchase and consumption can be shortened, which helps improve the overall buying experience.': '2. 系统将距离作为重要推荐标准，因为残次水果通常保质期较短。通过向用户推荐附近超市，可以缩短购买到食用之间的时间，从而提升整体购买体验。',
                'System map': '系统图',
                'Service Blueprint': '服务蓝图',
                'System Branding': '系统品牌设计',
                'logo &UI Design': 'Logo 与 UI 设计',
                'Poster design & Location-based targeting': '海报设计与基于位置的投放',
                'Business model canvas': '商业模式画布',
                'This business canvas outlines the future commercial vision for the system, clearly setting out the feasibility of all business modules, and is highly practical.': '该商业画布概述了系统未来的商业愿景，清晰呈现了各业务模块的可行性，具有较强实践价值。',
                'Desktop Walkthrough（ Test & feedback）': '桌面演练（测试与反馈）',
                'To simulate the service experience for the testers and to find and explore alternatives, the entire service flow of the Imperfect Fruit system is shown in cards, combined with user guides.': '为了让测试者模拟完整服务体验，并发现和探索替代方案，残次水果系统的完整服务流程以卡片形式呈现，并结合用户指南进行说明。',
                'Users’ Feedback': '用户反馈'
            }
        }
    };

    Object.assign(pages, {
        'glasgow-housing': {
            title: {
                en: 'Design of the Glasgow Housing Crisis Service System | Ziqing Yang',
                zh: '格拉斯哥住房危机服务系统设计 | Ziqing Yang'
            },
            strings: {
                'Design of the Glasgow Housing Crisis Service System': '格拉斯哥住房危机服务系统设计',
                'Service Design, UI/UX Design, Responsive Design': '服务设计、UI/UX 设计、响应式设计',
                '3 months': '3 个月',
                'Society, Public Sector': '社会议题、公共部门',
                'Service Designer': '服务设计师',
                'Team Project': '团队项目',
                'Challenge and Output': '挑战与产出',
                "In November 2023, A Housing Emergency Action Plan has been published in response to the unprecedented challenges facing Glasgow's homelessness services. Currently, Glasgow City Council does not have the resources to help everyone at the moment because the demand for housing is much greater than the housing supply.": '2023 年 11 月，格拉斯哥发布了住房紧急行动计划，以应对无家可归服务所面临的前所未有的挑战。目前，由于住房需求远大于住房供给，格拉斯哥市议会没有足够资源及时帮助所有人。',
                "This project involves 5 team members. Due to the numerous stakeholders involved in Glasgow's housing issue and the political, economic, social, and cultural factors behind it, we decided to focus on solving the main direct problem of insufficient housing supply—the housing source issue. Starting from landlords' willingness to sell and combining with housing associations' management of properties, we designed a mobile App and desktop website with responsive design for different ports. This helps increase the long-term rental market, allowing housing associations to better allocate housing to homeless people.": '本项目由 5 名成员共同完成。由于格拉斯哥住房问题涉及众多利益相关方，并受到政治、经济、社会与文化因素影响，我们决定聚焦于住房供给不足这一最直接的问题，也就是房源问题。项目从房东出租意愿出发，结合住房协会对房产的管理方式，设计了适配不同端口的移动 App 和桌面端网站，以增加长期租赁市场供给，帮助住房协会更好地为无家可归者分配住房。',
                'Research': '研究',
                'What service mechanisms are currently in place to address urgent housing issues? Are there any shortcomings?': '目前有哪些服务机制正在应对紧急住房问题？它们是否存在不足？',
                'Housing first: Health issues, psychological recovery, employment, and maintaining social relationships': '住房优先：关注健康问题、心理恢复、就业以及社会关系维系',
                'But what are the bottlenecks in implementing Housing First?': '但在实施“住房优先”时，瓶颈是什么？',
                'There are not enough properties available': '可用房源不足',
                'The use of temporary accommodation (hotels/B&Bs) is on the rise, and families are staying for longer periods': '临时住宿（酒店 / 民宿）的使用不断增加，家庭停留时间也越来越长',
                'Insufficient funding, a shortage of support staff, and difficulties in coordinating across departments': '资金不足、支持人员短缺，以及跨部门协调困难',
                'Complex system coordination: The Council is not the actual landlord': '系统协调复杂：市议会并不是实际房东',
                'Housing First has limited applicability and is not a universal solution. It typically prioritises long-term rough sleepers and individuals with complex needs, rather than all homelessness cases. So in Glasgow, rising family homelessness and increasing asylum-related demand mean Housing First cannot meet the full pressure.': '“住房优先”的适用范围有限，并不是普适性解决方案。它通常优先服务长期露宿者和有复杂需求的人群，而不是所有无家可归案例。因此在格拉斯哥，家庭无家可归人数上升以及庇护相关需求增加，意味着“住房优先”无法完全承接当前压力。',
                'Further Questions Raised：': '进一步提出的问题：',
                'Given the significant gap between housing supply and demand, how can needs be met?': '在住房供需差距巨大的情况下，如何满足需求？',
                'What are the key issues in the current system, what areas require improvement, and how can these be addressed?': '当前系统的关键问题是什么？哪些环节需要改进？这些问题又该如何被回应？',
                'Application process for homeless - User Journey Map': '无家可归者申请流程 - 用户旅程图',
                'From this tenant application process, we can see that there are extremely cumbersome processes and long waiting times in the initial application process and temporary accommodation, as well as insufficient human resources. There are also communication difficulties between tenants and housing associations in the later stages of housing association registration.': '从租户申请流程中可以看到，初始申请和临时住宿阶段流程非常繁琐、等待时间很长，同时人力资源不足。在住房协会登记的后续阶段，租户与住房协会之间也存在沟通困难。',
                'Problem-solving flowchart': '问题解决流程图',
                'However, this policy is not being effectively implemented：': '然而，该政策并未被有效执行：',
                'Scottish data shows that in practice, temporary accommodation is often not provided when required (breaches of duty), and many households refuse Council offers.': '苏格兰数据表明，在实践中，临时住宿经常没有在需要时被提供（即未履行职责），同时许多家庭也会拒绝市议会提供的住宿。',
                'This reflects two realities:': '这反映了两个现实：',
                'Councils are responsible for attempting to provide accommodation.': '市议会有责任尝试提供住宿。',
                'However, in many cases, this obligation is not actually met.': '然而在许多情况下，这项义务并未真正履行。',
                'In addition, the accommodation offered is often not suitable.': '此外，所提供的住宿也常常并不合适。',
                'Reason:': '原因：',
                'The government is spending heavily on short-term solutions without addressing the root causes, with much of the funding going into temporary accommodation, while waiting times for long-term housing remain very long.': '政府大量投入短期解决方案，却没有触及根本原因。许多资金流向临时住宿，而长期住房的等待时间仍然非常漫长。',
                'There were 18,092 households in temporary accommodation (September 2025), a 9% increase compared to 2024, and this was reported as the highest level in the time series.': '截至 2025 年 9 月，有 18,092 户家庭处于临时住宿中，比 2024 年增加 9%，并达到该时间序列中的最高水平。',
                'The system is still accumulating cases rather than resolving them. The same report shows:': '系统仍在积压案例，而不是解决问题。同一报告显示：',
                '23,572 households entered temporary accommodation': '23,572 户家庭进入临时住宿',
                '22,654 households exited. Net increase (backlog): +918': '22,654 户家庭离开临时住宿，净增加（积压）为 918 户。',
                'Length of stay remains high with no improvement: Average duration in temporary accommodation: 237 days (around 8 months)': '停留时长仍然很高且没有改善：临时住宿平均停留时间为 237 天（约 8 个月）',
                'Long-term trend: continued deterioration (not a one-off). In 2025, households in temporary accommodation rose from 17,240 (March) to 18,092 (September), reaching the highest number on record.': '长期趋势：持续恶化（并非一次性波动）。2025 年，临时住宿家庭数从 3 月的 17,240 户上升至 9 月的 18,092 户，达到记录以来最高值。',
                'The Resulting Issues': '由此产生的问题',
                'Flowchart': '流程图',
                'In-depth analysis': '深入分析',
                'Further research examined the rise of short-term rentals—why more landlords are shifting into the short-let market, and the extent to which this impacts long-term housing supply.': '进一步研究分析了短租市场的上升趋势，包括为什么越来越多房东转向短租市场，以及这在多大程度上影响长期住房供给。',
                'Why?': '为什么？',
                "The supply of social housing has long lagged behind growing demand, placing sustained pressure on the long-term housing market. In this context, landlords' decisions are shaped by two opposing forces:": '社会住房供给长期落后于不断增长的需求，使长期住房市场持续承压。在这一背景下，房东的决策受到两股相反力量影响：',
                'Pull factor: Why short-term rentals are more attractive. Short-term rentals offer higher returns than long-term leases, with flexible pricing and easier exit. An ageing landlord population also prefers lower-risk, lower-management options.': '拉力因素：为什么短租更具吸引力。短租比长期租赁回报更高，定价更灵活，退出也更容易。随着房东群体年龄增长，他们也更倾向于选择风险较低、管理负担较少的方式。',
                'Push factor: Why long-term/social housing is less attractive to landlords. High repair standards for vacant properties (58% of private homes fail SHQS), with costly and time-consuming upgrades; lower returns than the market rate and concerns about housing higher-risk tenants; and a tightening policy environment (rent controls and increased regulation), leading to over 50,000 properties exiting the private rental sector in 2023–2024.': '推力因素：为什么长期租赁和社会住房对房东的吸引力较低。空置房产需要达到较高的维修标准（58% 的私人住宅未达到 SHQS 标准），升级改造成本高且耗时；同时，长期租赁的收益低于市场水平，房东也会担心为需要更多支持的租户提供住房。再加上租金管制和监管加强等政策环境收紧，2023 至 2024 年间有超过 50,000 套房产退出私人租赁市场。',
                'These two forces together drive landlords toward the short-term rental market.': '这两股力量共同推动房东转向短租市场。',
                'Problem Framing': '问题框定',
                'Concept Development': '概念发展',
                'Exploration of policy improvement directions + before-and-after comparison.': '政策改进方向探索 + 前后对比。',
                'User Journey Map': '用户旅程图',
                'The Whole System Map': '整体系统图',
                'This system diagram is divided into five layers: the core user layer, the market and intermediary layer, and the policy and management layer. The remaining two layers are the social demand layer and the support layer. The flows of all funds, housing stock and services are illustrated using three colours: blue, green and red.': '该系统图分为五层：核心用户层、市场与中介层、政策与管理层，以及社会需求层和支持层。资金、房源和服务的流动分别用蓝、绿、红三种颜色表示。',
                'Initial understanding of the system: architecture diagram and relationship analysis diagram.': '对系统的初步理解：架构图与关系分析图。',
                'This app is a support system designed for landlords to simplify the rental process. It first evaluates property condition and rental potential, helping users understand value and risks. It then provides an earnings simulator to estimate income and compare different scenarios. To reduce financial barriers, the system offers a repair-first, pay-later model, allowing properties to be prepared without upfront costs. Finally, it connects landlords with maintenance and inspection services for ongoing support. Together, these features create a more predictable, guided, and low-risk rental experience.': '该 App 是为房东设计的支持系统，用于简化出租流程。它首先评估房产状况和出租潜力，帮助用户理解价值与风险；随后提供收益模拟器，用于估算收入并比较不同情境。为降低资金门槛，系统提供“先维修、后支付”模式，使房产无需前期投入即可准备出租。最后，系统连接房东与维修、检查服务，提供持续支持。这些功能共同创造了更可预测、更有引导性且风险更低的出租体验。',
                'Information Architecture Diagram': '信息架构图',
                'Lo-fi Design': '低保真设计',
                'Hi-fi Design': '高保真设计',
                'Hi-fi Details': '高保真细节',
                "After the landlord completes the initial registration, the system asks them to provide basic information about the property's condition and layout. This helps the system classify the property later. Landlords can also choose a time for an on-site inspection, which moves the process forward and makes the rental workflow more streamlined.": '房东完成初始注册后，系统会要求其提供房产状况和户型布局等基本信息。这有助于系统后续对房产进行分类。房东也可以选择上门检查时间，从而推动流程继续进行，并使出租流程更加顺畅。',
                'The system offers landlords different rental models, such as a managed service, where the actual rent received is adjusted after management fees, vacancy loss, repair costs and other expenses. If market rent rises, landlords can receive higher income through the next rent review or a new lease, depending on the management contract and actual rental outcome. It also offers guaranteed leasing, where landlords receive an agreed minimum rent rather than automatically benefiting from later rent increases. Each model has advantages and trade-offs, allowing landlords to choose based on their current financial situation and property condition.': '系统为房东提供不同出租模式，例如托管服务模式，实际租金收入会在扣除管理费、空置损失、维修费用及其他支出后进行调整。如果市场租金上涨，房东可根据管理合同和实际出租结果，在下一次租金审核或新租约中获得更高收入。系统也提供保底租赁模式，即房东获得约定的最低租金，而不是自动享受后续租金上涨收益。每种模式都有优势与取舍，房东可以根据当前财务状况和房产条件进行选择。',
                'The visualisation explains the repair-first, pay-later model, where the system advances the repair cost and later deducts it from rental income. This helps landlords understand and trust the system.': '该可视化解释了“先维修、后支付”模式：系统先垫付维修费用，之后再从租金收入中扣除。这有助于房东理解并信任该系统。',
                'The system partners with maintenance companies and offers different discounts based on the level of repair required. Once a landlord selects an option, the contract clearly shows the reduced price provided by the system.': '系统与维修公司合作，并根据所需维修等级提供不同折扣。房东选择方案后，合同会清晰展示系统提供的优惠价格。',
                'Responsive Design Rule': '响应式设计规则',
                'I designed the dashboard responsively by prioritising the most important landlord tasks across different screen sizes. The desktop version provides a full overview, the tablet version simplifies the layout into two columns, and the mobile version focuses on quick actions and key metrics. Secondary details such as charts are reduced on smaller screens to keep the experience clear and task-focused.': '我在设计仪表盘响应式布局时，根据不同屏幕尺寸优先展示房东最重要的任务。桌面端提供完整概览，平板端简化为双栏布局，移动端则聚焦快捷操作和关键指标。在较小屏幕上，图表等次要信息会被弱化，以保持体验清晰且聚焦任务。',
                'Multi-platform Responsive Design': '多平台响应式设计',
                'Test': '测试',
                "The testing is divided into two main parts. The first part involves system testing, with the housing association acting as the primary tester. As they are not 'ordinary users' but 'key stakeholders' within the system, the testing focuses on whether the housing association is willing to engage with the system, whether the system is operational for them, and whether the costs, risks and processes are acceptable.": '测试分为两个主要部分。第一部分是系统测试，由住房协会作为主要测试者。由于他们不是“普通用户”，而是系统中的关键利益相关者，因此测试重点在于住房协会是否愿意参与该系统、系统对他们是否可运行，以及成本、风险和流程是否可接受。',
                "The second part involves testing with the system's primary users, the landlords. We need to understand which aspects they prefer or find most effective as they navigate the system step by step, and which processes they find difficult to understand. We will also need to provide the app to the landlords for them to test the usage process.": '第二部分是与系统主要用户房东进行测试。我们需要了解他们在逐步使用系统时更偏好哪些部分、哪些功能最有效，以及哪些流程难以理解。同时也需要将 App 提供给房东，让他们测试完整使用过程。',
                'System Patch': '系统补丁',
                'Storyboard': '故事板'
            }
        },
        'human-plant': {
            title: {
                en: 'Design of a human-plant symbiosis service based on Arduino | Ziqing Yang',
                zh: '基于 Arduino 的人植共生服务设计 | Ziqing Yang'
            },
            strings: {
                'Design of a human-plant symbiosis service based on Arduino': '基于 Arduino 的人植共生服务设计',
                'Interaction Design, Product Design, Arduino Development': '交互设计、产品设计、Arduino 开发',
                '4 months': '4 个月',
                'Wellness, Technology': '健康生活、科技',
                'Product & Interaction Designer': '产品与交互设计师',
                'Arduino': 'Arduino',
                'Physical Computing': '实体计算',
                'Background and Introduction': '背景与介绍',
                'In HongKong, many young millennials live in small rooms at the start of their careers but often face psychological issues due to high population density and uncomfortable climates. Around 80% keep plants, believing it helps reduce stress and improves their mood. This project integrates unconscious design, UI interaction, Arduino hardware, 3D printing and modeling to create a health product kit fostering human-plant symbiosis. The kit includes a Ladybug Projector, a Plant Bionic Water Cup, and an Community Exchange App. By drawing on the shared needs of humans and plants, the kit reminds users to sunbathe and water their plants, promoting a balanced, healthy lifestyle.': '在香港，许多年轻千禧一代在职业早期居住在狭小房间中，但高人口密度和不舒适的气候容易使他们面临心理压力。约 80% 的人会养植物，并认为这有助于减轻压力、改善情绪。<br><br>本项目结合无意识设计、UI 交互、Arduino 硬件、3D 打印与建模，创造了一套促进人植共生的健康产品套件。套件包括瓢虫投影器、植物仿生水杯和社区交流 App。通过人与植物的共同需求，套件提醒用户晒太阳并为植物浇水，从而促进更平衡、健康的生活方式。',
                'Background Research': '背景研究',
                'Hong Kong people live in tightly-packed neighbourhoods, with high population densities that bring about temperature discomfort, and most have serious psychological problems': '香港居民生活在高度密集的社区中，高人口密度带来温度不适，同时许多人面临较严重的心理压力。',
                'Trend Overview': '趋势概览',
                'COVID-19 taught people to spend more time with themselves, leading to a rise in houseplant ownership as a low-cost way to introduce green space into homes. Millennials, who make up 31% of houseplant sales, are particularly enthusiastic about green plants': 'COVID-19 让人们更多地与自己相处，也推动了室内植物养护趋势。作为一种低成本把绿色空间带入家庭的方式，室内植物尤其受到千禧一代欢迎，他们占室内植物销售的 31%。',
                'Living condition in Micro-units': '微型住宅中的生活状况',
                'Benefits of raising plants indoor': '室内养植物的益处',
                'conclusion: Young people mostly live in Micro-units and they choose plants to improve their tiring work. Small, low-cost houseplants allow young people to enhance the quality of their environment and ease their moods': '结论：年轻人大多居住在微型住宅中，并选择植物来改善疲惫的工作生活。小型、低成本的室内植物可以帮助年轻人提升居住环境质量并缓解情绪。',
                'Observation': '观察',
                "In order to get to the heart of this busy, indoor plant-loving demographic, I interviewed four Millennial respondents of different ages to understand their feelings and aspirations. To gain a deeper understanding of how millennials and Gen Z live and work, I went to Chen Jin's home to observe a day in his life": '为了更深入了解这一忙碌且热爱室内植物的人群，我访谈了 4 位不同年龄的千禧一代受访者，了解他们的感受与期待。为进一步理解千禧一代和 Z 世代的生活与工作方式，我前往 Chen Jin 家中观察了他一天的生活。',
                'User Interviews': '用户访谈',
                'In order to get to the heart of this busy, indoor plant-loving demographic, I interviewed four Millennial respondents of different ages to understand their feelings and aspirations.': '为了深入了解这一忙碌且热爱室内植物的人群，我访谈了 4 位不同年龄的千禧一代受访者，了解他们的感受与期待。',
                "Mapping Plant and People's Schedule in a Day": '映射人与植物的一日作息',
                'Based on the preliminary research, since people hope that plants can bring their own life pressure adjustment and also hope to better take care of plants, we will further study the relationship between plants and people': '基于前期研究，人们希望植物帮助自己调节生活压力，同时也希望更好地照顾植物。因此，我们进一步研究植物与人的关系。',
                "conclusion: Humans' daily routines encompass breathing, eating, and sleeping, while plants' include photosynthesis, water intake, stomatal closure, and rest, suggesting similar daily activities": '结论：人的日常活动包括呼吸、进食和睡眠，而植物也有光合作用、吸水、气孔闭合和休息等日常节律，二者在日常活动上具有某种相似性。',
                'Personas': '用户画像',
                'User Journey Map': '用户旅程图',
                'Problem Summary': '问题总结',
                'How Might We': '我们如何能够',
                'How can we recreate a healthy routine for busy worker by connecting their routine with indoor plants, and enable them to take care of themselves and plant at the same time?': '我们如何通过连接忙碌工作者的日常作息与室内植物，帮助他们重建健康生活节奏，并同时照顾自己和植物？',
                'Design opportunity': '设计机会',
                'Ideation & Case Studies': '创意发散与案例研究',
                'To explore the relationship between plants, society and people, I found some ideas about the social relationships, behaviors of plants, and the help of unconscious design technology during brainstorming.': '为探索植物、社会与人的关系，我在头脑风暴中围绕植物的社会关系、行为方式，以及无意识设计技术的辅助作用提出了一些想法。',
                'Concept': '概念',
                'It helps plant growers gain knowledge and improve their experience through interactive features while promoting happiness and health': '该概念通过互动功能帮助植物养护者获取知识、改善体验，同时促进幸福感和健康。',
                'Storyboard': '故事板',
                'Product Design': '产品设计',
                'Ladybug Projector irradiates plants and Bionic Water Cup connected to plants provides hints and reminders to humans.': '瓢虫投影器为植物提供光照，与植物相连的仿生水杯则向人发出提示和提醒。',
                'Information Architecture': '信息架构',
                'Technical Development': '技术开发',
                'User Test': '用户测试',
                "After creating the prototype diagram and defining the interaction flow and transitions, we conducted a usability test. We evaluated the app functions aligned with the test users' expectations, recorded their feedback, and asked follow-up questions": '在创建原型图并定义交互流程与页面跳转后，我们进行了可用性测试。我们评估 App 功能是否符合测试用户预期，记录反馈，并提出后续问题。',
                'Lofi & Modifications': '低保真与修改',
                'Final Design': '最终设计',
                'Kit Design': '套件设计',
                'Usage Scenario': '使用场景'
            }
        },
        'tea-room': {
            title: {
                en: 'Glasgow Mackintosh Tea Room – Tea Culture Promotion Design Project | Ziqing Yang',
                zh: '格拉斯哥 Mackintosh Tea Room 茶文化推广设计项目 | Ziqing Yang'
            },
            strings: {
                'Glasgow Mackintosh Tea Room – Tea Culture Promotion Design Project': '格拉斯哥 Mackintosh Tea Room 茶文化推广设计项目',
                '—— centred on Ritual & Delivery · Health & Wellbeing': '—— 以 Ritual & Delivery · Health & Wellbeing 为核心',
                'Service Design, Commercial Design, Product Design': '服务设计、商业设计、产品设计',
                '1 month (Team work)': '1 个月（团队项目）',
                'Ritual Delivery, Health, Wellbeing': '仪式传递、健康、身心福祉',
                'UI/UX Designer': 'UI/UX 设计师',
                'Challenge': '挑战',
                'The Access Gap: We face the ethical constraint of designing for specific ASN needs without direct access to the students': '接触限制：我们需要为特定 ASN 需求进行设计，但由于伦理限制，无法直接接触学生。',
                'The Reality Gap: Relying solely on secondary research creates a risk of bias, potentially leading to a product that fails in practice.': '现实差距：如果仅依赖二手研究，可能产生偏差，并导致产品在实际应用中效果不佳。',
                'WHO': '对象',
                '1. For Secondary School students (S3/S4) 2. ASN students': '1. 中学生（S3/S4）<br>2. ASN 学生',
                'WHY': '原因',
                'Demonstrate how the rituals of service can foster community care and mental wellbeing': '展示服务仪式如何促进社区关怀与心理健康。',
                'WHAT (The Output)': '产出',
                'A Digital Learning Resource that Reimagines the Scottish Afternoon Tea Through the specific lens of Health & Wellbeing and Ritual & Delivery.': '一个数字学习资源，从 Health & Wellbeing 以及 Ritual & Delivery 的视角重新诠释苏格兰下午茶。',
                'HOW': '方式',
                'Conduct empathetic desk-based research Create multi-sensory, non-digital learning activities housed within a digital format': '开展具有共情视角的桌面研究<br>在数字形式中融入多感官、非数字化的学习活动',
                'WHEN': '时间',
                'An intensive 5-week design sprint': '一次密集的 5 周设计冲刺',
                'WHERE': '地点',
                'Anchored in the "Living Heritage" site of MAW, treating the location not just as a museum, but as an active social enterprise.': '以 MAW 的“活态遗产”场所为依托，将其不仅视为博物馆，也视为活跃的社会企业。',
                'Research Context': '研究语境',
                'This project responded to the brief "Innovation in Heritage: Future Careers in Scottish Hospitality", using Mackintosh at the Willow as a living heritage context rather than only a historical reference.': '本项目回应了 “Innovation in Heritage: Future Careers in Scottish Hospitality” 这一课题，将 Mackintosh at the Willow 视为活态遗产语境，而不仅仅是历史参考。',
                'Our research focused on the intersection of Ritual & Delivery and Health & Wellbeing. Instead of treating afternoon tea simply as food or tradition, we explored it as a structured social ritual made up of atmosphere, service, etiquette, sensory choices, timing, and shared care.': '我们的研究聚焦于 Ritual & Delivery 与 Health & Wellbeing 的交汇点。我们没有将下午茶简单视为食物或传统，而是把它理解为一种由氛围、服务、礼仪、感官选择、节奏和共同关怀组成的结构化社会仪式。',
                'Research Constraints': '研究限制',
                'Due to ethical considerations, we chose not to directly interview or test with secondary school students, including ASN learners. Some young participants may have emotional, sensory, or trauma-related support needs, and direct research with them would require a formally safeguarded setting.': '出于伦理考虑，我们选择不直接访谈或测试中学生，包括 ASN 学习者。一些年轻参与者可能有情绪、感官或创伤相关的支持需求，直接研究需要正式且受保护的环境。',
                'Because the team was not trained in trauma-informed therapy or clinical support methods, we adopted an indirect research approach to protect participants and avoid placing young people in an unsupported research situation.': '由于团队未接受创伤知情治疗或临床支持方法训练，我们采用间接研究方式，以保护参与者，并避免让年轻人处于缺乏支持的研究情境中。',
                'To keep the design grounded, the research combined brief analysis, desk research, site/context understanding, stakeholder input, peer discussion, and secondary insights around teenage wellbeing, inclusive learning, and sensory support needs.': '为保持设计的扎实性，研究结合了课题分析、桌面研究、场地与语境理解、利益相关者输入、同伴讨论，以及关于青少年身心健康、包容性学习和感官支持需求的二手洞察。',
                'Background Research': '背景研究',
                'User Analysis': '用户分析',
                'Teenagers in Scottish secondary schools (aged 15–16), including ASN students': '苏格兰中学学生（15-16 岁），包括 ASN 学生',
                'Key Research Insights': '关键研究洞察',
                'Ritual as Support': '作为支持的仪式',
                'Afternoon tea can be reframed as a structured wellbeing ritual rather than a passive heritage topic. Its repeated actions, pace, atmosphere, and shared etiquette can help create calm, care, and social connection.': '下午茶可以被重新理解为一种结构化的身心健康仪式，而不是被动的遗产主题。它的重复动作、节奏、氛围和共享礼仪有助于创造平静、关怀和社会连接。',
                'Learning Through Making': '通过制作学习',
                'Young learners are more likely to engage when heritage learning becomes participatory and sensory. A hands-on format can turn abstract cultural knowledge into something visible, touchable, and personally meaningful.': '当遗产学习变得参与式和感官化时，年轻学习者更容易投入。动手形式可以把抽象的文化知识转化为可见、可触摸且具有个人意义的体验。',
                'Inclusive Participation': '包容性参与',
                'For ASN learners, the experience needs to support clear structure, flexible participation, sensory awareness, and personal choice, rather than relying only on text-heavy or instruction-led learning.': '对于 ASN 学习者，体验需要支持清晰结构、灵活参与、感官意识和个人选择，而不是仅依赖大量文字或指令式学习。',
                'Problem Analysis and Definition': '问题分析与定义',
                'How might we transform the tradition of Scottish afternoon tea into an inclusive, hands-on learning experience that helps young learners explore ritual, care, and wellbeing through making?': '我们如何将苏格兰下午茶传统转化为包容性的动手学习体验，帮助年轻学习者通过制作探索仪式、关怀与身心健康？',
                'Opportunities': '机会',
                'We identified and combined the ritual qualities of afternoon tea with elements of personal well-being, then broke them down into small, tangible, and achievable components. Afternoon tea rituals are essentially built from many delicate micro-actions and detail-based elements, such as:': '我们识别并结合了下午茶的仪式特质与个人身心健康元素，并将其拆解为小型、可触摸且可完成的组件。下午茶仪式本质上由许多精细的微行动和细节元素组成，例如：',
                'These small yet refined elements can serve as actionable components that teenagers can complete on their own → turning what was once an inaccessible "ritual" into something tangible, shareable, customisable, and achievable.': '这些细小而精致的元素可以成为青少年能够独立完成的行动组件，将原本难以接近的“仪式”转化为可触摸、可分享、可定制且可实现的体验。',
                'Key Development Areas for the Next Phase': '下一阶段关键发展方向',
                'Early Prototyping: From Clay Models to Tangible Ritual Objects': '早期原型：从黏土模型到可触摸的仪式物件',
                'To test how the ritual of afternoon tea could be translated into physical learning tools, we created early clay prototypes of miniature objects. These low-fidelity models helped us explore scale, touch, symbolism, and how learners might physically arrange objects to construct their own ritual space.': '为了测试下午茶仪式如何转化为实体学习工具，我们制作了迷你物件的早期黏土原型。这些低保真模型帮助我们探索尺度、触感、象征意义，以及学习者如何通过实体摆放构建自己的仪式空间。',
                'Before You Take a Sip': 'Before You Take a Sip',
                'A portable, hands-on learning kit that guides students to create their own meaningful afternoon tea ritual.': '一套便携式动手学习工具包，引导学生创造属于自己的、有意义的下午茶仪式。',
                'Concept: Tangible Rituals': '概念：可触摸的仪式',
                'By arranging miniature tableware, selecting sensory elements, and following guided reflection prompts, learners discover how ritual structure, intentional actions, and symbolic meanings can support wellbeing.': '通过摆放迷你餐具、选择感官元素并跟随引导式反思提示，学习者可以发现仪式结构、有意识的行动和象征意义如何支持身心健康。',
                'Packaging as the First Ritual Touchpoint': '作为第一仪式触点的包装',
                'The packaging was designed as the first moment of engagement with the toolkit. Its decorative patterns draw from Mackintosh-inspired visual language and the atmosphere of afternoon tea, helping students enter a calm, heritage-based ritual experience before opening the box.': '包装被设计为用户接触工具包的第一个瞬间。其装饰图案借鉴 Mackintosh 风格视觉语言和下午茶氛围，帮助学生在打开盒子前进入一种平静、基于遗产语境的仪式体验。',
                'Guidebook': '指南书',
                'Much like a symphony has distinct movements, afternoon tea follows a fixed rhythmic structure. The guidebook can help students understand this kind of structure.': '就像交响乐有不同乐章一样，下午茶也遵循固定的节奏结构。指南书可以帮助学生理解这种结构。',
                'This final chapter invites students to become architects of their own wellbeing. Following a visual guide, they physically construct the ritual space.': '最后一章邀请学生成为自己身心健康的构建者。通过视觉指南，他们可以亲手构建仪式空间。',
                'Physical Prototype in Context': '情境中的实体原型',
                'These final prototype images show how the toolkit works as a complete physical learning experience. The objects, guidebook, packaging, and ritual prompts come together to support hands-on exploration, allowing students to build, arrange, and reflect on their own afternoon tea ritual.': '这些最终原型图展示了工具包如何作为完整的实体学习体验运作。物件、指南书、包装和仪式提示共同支持动手探索，让学生构建、摆放并反思自己的下午茶仪式。',
                'Educational Value & Impact': '教育价值与影响',
                'Future Possibilities': '未来可能性',
                'Co-Creation & Customization': '共创与定制',
                'Concept: Introduce "Blank Canvas" miniatures (e.g., unpainted ceramic cups or clay scone kits) within the box.': '概念：在盒中加入“空白画布”式迷你物件，例如未上色陶瓷杯或黏土司康套件。',
                'Action: Allow students to paint or sculpt their own symbolic items to add to the three-tier stand.': '行动：让学生绘制或塑造自己的象征性物件，并加入三层架中。',
                'Value: Deepens the sense of ownership and personal expression. The ritual becomes more powerful when they use tools they created themselves.': '价值：加深所有权感与个人表达。当学生使用自己创造的工具时，仪式会更有力量。',
                'Digital Community: "The Ritual Recipe Exchange"': '数字社区：“仪式配方交换”',
                'Concept: Develop a student-led platform to share "Mood Recipes."': '概念：开发一个由学生主导的平台，用于分享“情绪配方”。',
                'Action: Students can upload photos of their ritual setups and music choices for specific problems (e.g., "My Anti-Anxiety Setup for Maths Exams" or "The \'Monday Morning\' Boost").': '行动：学生可以上传针对特定问题的仪式布置照片和音乐选择，例如“我的数学考试抗焦虑布置”或“周一早晨能量补充”。',
                'Value: Transforms individual self-care into peer-to-peer support, creating a library of coping strategies curated by students for students.': '价值：将个人自我照护转化为同伴支持，形成一个由学生为学生策划的应对策略库。',
                'Stakeholders Map': '利益相关者地图'
            }
        }
    });

    function normalizeText(text) {
        return text.replace(/\s+/g, ' ').trim();
    }

    function getPageKey() {
        const path = window.location.pathname;
        if (path.endsWith('/') || path.endsWith('/index.html') || !path.includes('/project/')) {
            return 'index';
        }

        if (path.includes('imperfect-fruit.html')) {
            return 'imperfect-fruit';
        }

        if (path.includes('glasgow-housing.html')) {
            return 'glasgow-housing';
        }

        if (path.includes('human-plant.html')) {
            return 'human-plant';
        }

        if (path.includes('tea-room.html')) {
            return 'tea-room';
        }

        return null;
    }

    function getLanguage() {
        return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;
    }

    function setLanguage(language) {
        localStorage.setItem(STORAGE_KEY, language);
        applyLanguage(language);
    }

    function injectStyles() {
        if (document.getElementById('i18n-toggle-styles')) {
            return;
        }

        const style = document.createElement('style');
        style.id = 'i18n-toggle-styles';
        style.textContent = `
            .language-toggle {
                display: inline-flex;
                align-items: center;
                gap: 0.2rem;
                padding: 0.25rem;
                border: 1px solid var(--color-border, rgba(0, 0, 0, 0.12));
                border-radius: 999px;
                background: rgba(255, 255, 255, 0.86);
                backdrop-filter: blur(10px);
                flex: 0 0 auto;
            }

            .language-toggle__button {
                min-width: 2.35rem;
                border: 0;
                border-radius: 999px;
                padding: 0.35rem 0.55rem;
                background: transparent;
                color: var(--color-text-secondary, #666);
                font: 600 0.72rem/1 var(--font-primary, sans-serif);
                letter-spacing: 0.04em;
                cursor: pointer;
                transition: background 0.2s var(--transition-smooth, ease), color 0.2s var(--transition-smooth, ease);
            }

            .language-toggle__button.is-active {
                background: var(--color-text, #1a1a1a);
                color: var(--color-bg, #fff);
            }

            .language-toggle__button:focus-visible {
                outline: 2px solid var(--color-accent, #d4a84b);
                outline-offset: 2px;
            }

            @media (max-width: 768px) {
                .language-toggle {
                    transform: scale(0.92);
                    transform-origin: right center;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function createToggle() {
        const nav = document.querySelector('.nav');
        if (!nav) {
            return;
        }

        injectStyles();

        const existingToggle = document.querySelector('.language-toggle');
        if (existingToggle) {
            bindToggle(existingToggle);
            return;
        }

        const toggle = document.createElement('div');
        toggle.className = 'language-toggle';
        toggle.setAttribute('aria-label', 'Language switcher');

        const englishButton = document.createElement('button');
        englishButton.type = 'button';
        englishButton.className = 'language-toggle__button';
        englishButton.dataset.language = 'en';
        englishButton.textContent = 'EN';

        const chineseButton = document.createElement('button');
        chineseButton.type = 'button';
        chineseButton.className = 'language-toggle__button';
        chineseButton.dataset.language = 'zh';
        chineseButton.textContent = '中文';

        toggle.appendChild(englishButton);
        toggle.appendChild(chineseButton);

        const spacer = Array.from(nav.children).find(function (child) {
            return child.tagName === 'DIV' && child.getAttribute('style') && child.getAttribute('style').includes('width');
        });

        if (spacer) {
            nav.replaceChild(toggle, spacer);
        } else {
            nav.appendChild(toggle);
        }

        bindToggle(toggle);
    }

    function bindToggle(toggle) {
        if (toggle.dataset.bound === 'true') {
            return;
        }

        toggle.dataset.bound = 'true';
        toggle.addEventListener('click', function (event) {
            const button = event.target.closest('[data-language]');
            if (!button) {
                return;
            }

            setLanguage(button.dataset.language);
        });
    }

    function updateToggle(language) {
        document.querySelectorAll('.language-toggle__button').forEach(function (button) {
            const isActive = button.dataset.language === language;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    }

    function translateElement(element, dictionary, language) {
        if (!element.dataset.originalHtml) {
            element.dataset.originalHtml = element.innerHTML;
            element.dataset.originalText = normalizeText(element.textContent);
        }

        if (language === 'en') {
            element.innerHTML = element.dataset.originalHtml;
            return;
        }

        const key = element.dataset.originalText;
        const translated = dictionary[key] || common[key];
        if (translated) {
            element.innerHTML = translated;
        }
    }

    function applyLanguage(language) {
        const pageKey = getPageKey();
        const page = pageKey ? pages[pageKey] : null;
        const dictionary = page ? page.strings : {};

        document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
        document.body.classList.toggle('is-zh', language === 'zh');

        if (page && page.title) {
            document.title = language === 'zh' ? page.title.zh : page.title.en;
        }

        const selectors = [
            '.back-link span',
            '.nav-title',
            '.project-category',
            '.project-title',
            '.project-tag',
            '.info-label',
            '.info-value',
            '.markdown-content h1',
            '.markdown-content h2',
            '.markdown-content h3',
            '.markdown-content p',
            '.markdown-content li',
            '.project-toc__label',
            '.project-toc__link',
            '.footer a',
            '.nav-links a',
            '.hero-subtitle',
            '.hero-title',
            '.scroll-indicator span',
            '.section-title',
            '.view-project',
            '.project-description',
            '.about-intro',
            '.about-text p',
            '.detail-label',
            '.contact-text',
            '.copy-hint',
            '.copy-feedback',
            '.footer p'
        ].join(',');

        document.querySelectorAll(selectors).forEach(function (element) {
            translateElement(element, dictionary, language);
        });

        updateToggle(language);
    }

    function init() {
        createToggle();
        applyLanguage(getLanguage());

        const tocObserver = new MutationObserver(function () {
            applyLanguage(getLanguage());
        });

        const contentWrapper = document.querySelector('.content-wrapper');
        if (contentWrapper) {
            tocObserver.observe(contentWrapper, { childList: true });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}());
