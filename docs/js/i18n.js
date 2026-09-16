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
                '1. Reduce waste of imperfect fruit throughout the acquisition, transportation, and consumption stages2. Improve the wholesale system for smallholder farmers to acquire imperfect fruits and add their income3. Lead sustainable consumption habits and increasing product diversification': '1. 减少残次水果在收购、运输和消费阶段的浪费<br>2. 改善小农户残次水果的批发收购系统，并增加其收入<br>3. 引导可持续消费习惯，并提升产品多样性',
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
