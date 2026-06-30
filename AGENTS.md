# Ziqing Yang Portfolio Website

## 项目概述

这是一个为 UI/UX 设计师 Ziqing Yang 打造的个人作品集网站，采用纯 HTML/CSS/JavaScript 构建，部署在 GitHub Pages 上。网站包含首页展示和三个完整的项目详情页，支持响应式设计和渐进式图片加载。

## 项目背景

### 目标
- 展示设计师的5个精选项目作品
- 为部分项目提供详细的项目过程展示页面
- 实现流畅的用户体验和现代化的视觉效果
- 优化图片加载性能，提升访问速度

### 技术选型
- **前端技术**: 纯 HTML5 + CSS3 + JavaScript (Vanilla)
- **部署平台**: GitHub Pages
- **图片格式**: WebP (优化后) + PNG/JPG (原始备份)
- **字体**: Inter + Playfair Display (Google Fonts)

## 项目结构

```
Portfolio-of-Ziqing-Yang/
├── docs/                               # 主文档目录 (GitHub Pages 源)
│   ├── index.html                      # 首页
│   ├── css/
│   │   └── style.css                   # 主样式文件
│   ├── js/
│   │   └── main.js                     # 主脚本文件
│   ├── images/                         # 首页项目封面图
│   │   ├── cover.webp                  # 首页主视觉
│   │   ├── project-1.webp              # Glasgow Housing 封面
│   │   ├── project-2.webp              # Imperfect Fruit 封面
│   │   ├── project-3.webp              # Tea Room 封面
│   │   ├── project-4.webp              # Human-Plant 封面
│   │   └── project-5.webp              # Bee Game 封面
│   └── project/                        # 项目详情页
│       ├── glasgow-housing.html        # Glasgow Housing 详情页
│       ├── human-plant.html            # Human-Plant 详情页
│       ├── imperfect-fruit.html        # Imperfect Fruit 详情页
│       └── images/                     # 项目详情页图片
│           ├── glasgow-housing/        # 30张图片 (WebP + PNG)
│           ├── human-plant/            # 23张图片 (WebP + PNG)
│           └── imperfect-fruit-new/     # 32张图片 (WebP + PNG)
├── AGENTS.md                           # 本文件
└── README.md                           # 项目说明
```

## 项目内容

### 首页 (index.html)

**结构模块:**
1. **Header** - 固定导航栏，包含 Logo 和菜单链接
2. **Hero** - 主视觉区域，展示设计师简介
3. **Work Section** - 5个项目卡片网格展示
4. **About Section** - 关于设计师的信息
5. **Contact Section** - 联系方式
6. **Footer** - 版权信息

**项目卡片:**
| # | 项目名称 | 类别 | 链接类型 |
|---|---------|------|---------|
| 1 | Design of the Glasgow Housing Crisis Service System | Service and UI/UX Design | 本地详情页 |
| 2 | Design of an end-to-end service system for the collection and sale of imperfect fruit | Service and UI/UX Design | 本地详情页 |
| 3 | Glasgow Mackintosh Tea Room – Tea Culture Promotion Design Project | Product and UX Design | Google Drive |
| 4 | Design of a human-plant symbiosis service based on Arduino | Product and Interaction Design | 本地详情页 |
| 5 | An RPG game designed using Unity3D to raise awareness of bee conservation | Game and Interaction Design | Google Drive |

### 项目详情页

每个详情页包含:
- 固定导航栏 (返回首页 + 项目标题)
- Hero 大图展示
- 项目元信息 (Services, Duration, Industry, Role)
- 项目标签
- Markdown 内容渲染区
- 图片懒加载 + 骨架屏占位
- 返回首页链接

#### 1. Glasgow Housing Crisis (glasgow-housing.html)

**项目信息:**
- **Services**: Service Design, UI/UX Design, Responsive Design
- **Duration**: 3 months
- **Industry**: Society, Public Sector
- **Role**: Service Designer
- **Tags**: App Design, Responsive Design, Website Design

**内容结构:**
- Challenge and Output
- Research (Housing First 瓶颈分析)
- User Journey Map
- Problem Analysis (短租市场崛起原因)
- Concept Development
- System Map
- Lo-fi/Hi-fi Design
- Multi-platform Responsive Design
- User Test
- Storyboard

**图片数量**: 30张 (image1.webp ~ image30.webp)

#### 2. Imperfect Fruit (imperfect-fruit.html)

**项目信息:**
- **Services**: Service Design, Branding, Interaction Design, Sustainable Design
- **Duration**: 6 months
- **Industry**: Agriculture, Publicity
- **Role**: UI & UX Design Lead
- **Tags**: App Design, Service Design, Branding, Intelligent Design, Interaction Design, Sustainable Design

**内容结构:**
- Challenge & Output
- Background (中国水果浪费问题)
- Research Plan (Social Media, Questionnaire, Interviews)
- Imperfect Fruit Distribution Chain
- Ecosystem Map
- System Overview
- Storyboard/Journey Map
- System Branding
- Touchpoints (Billboard, Fruit Counter, App)
- Business Model Canvas
- Desktop Walkthrough

**图片数量**: 32张 (包含 background-top.webp + image1.webp ~ image32.webp)

#### 3. Human-Plant Symbiosis (human-plant.html)

**项目信息:**
- **Services**: Interaction Design, Product Design, Arduino Development
- **Duration**: 4 months
- **Industry**: Wellness, Technology
- **Role**: Product & Interaction Designer
- **Tags**: Interaction Design, Product Design, Arduino, Physical Computing

**内容结构:**
- Background and Introduction (香港年轻人居住状况)
- Background Research
- Trend Overview (COVID-19后植物养护趋势)
- User Interviews
- Personas
- User Journey Map
- Problem Summary
- Concept Development
- Product Design (Ladybug Projector, Bionic Water Cup)
- Technical Development (Arduino, 3D打印)
- User Test
- Final Design
- Usage Scenario

**图片数量**: 23张 (image1.webp ~ image23.webp)

## 技术特性

### 图片优化
- **格式转换**: PNG/JPG → WebP (节省 77-83% 文件大小)
- **懒加载**: IntersectionObserver 实现渐进式加载
- **骨架屏**: 加载前显示灰色占位背景
- **尺寸自适应**: max-height: 70vh 保持图片在视口内
- **并排布局**: 特定图片组支持并排展示

### 交互效果
- 导航栏滚动阴影效果
- 项目卡片悬停动画
- 图片淡入加载效果
- 平滑滚动导航

### 响应式设计
- 移动端适配 (768px 断点)
- 图片自适应缩放
- 导航栏小屏幕优化

## 部署信息

### 线上地址
| 页面 | 链接 |
|------|------|
| **首页** | https://carolineyang8.github.io/Portfolio-of-Ziqing-Yang/ |
| **Glasgow Housing** | https://carolineyang8.github.io/Portfolio-of-Ziqing-Yang/project/glasgow-housing.html |
| **Imperfect Fruit** | https://carolineyang8.github.io/Portfolio-of-Ziqing-Yang/project/imperfect-fruit.html |
| **Human-Plant** | https://carolineyang8.github.io/Portfolio-of-Ziqing-Yang/project/human-plant.html |

### GitHub 仓库
- **Repository**: https://github.com/carolineyang8/Portfolio-of-Ziqing-Yang
- **Branch**: main
- **部署分支**: main (通过 GitHub Pages)

## 图片资源统计

| 项目 | PNG/JPG 原始大小 | WebP 压缩后 | 压缩率 |
|------|-----------------|------------|--------|
| glasgow-housing | ~14MB | ~3.2MB | 77% |
| human-plant | ~14MB | ~3.2MB | 77% |
| imperfect-fruit-new | ~25MB | ~4.2MB | 83% |
| **总计** | **~53MB** | **~10.6MB** | **~80%** |

## 本地开发

### 启动本地服务器
```bash
cd docs
python3 -m http.server 8888
```

访问: http://localhost:8888

### 项目依赖
- Python 3.x (用于本地服务器)
- cwebp (用于 WebP 转换, 可选)
  ```bash
  brew install webp
  ```

## 更新历史

### 2024-06-29
- 重新设计首页 Hero 区域：删除 Portfolio 标题和 cover.webp 图片
- 添加润色后的标语："Bridging user needs with business vision — crafting thoughtful experiences that inspire and delight."
- 添加 Glasgow Housing 项目详情页
- 更新 project-1、project-2 和 project-4 封面图片
- 修复有序列表样式
- 优化 image11/image10 并排布局
- **隐藏项目5（蜜蜂游戏）**：已注释掉，不在首页展示

### 2024-06-28
- 添加 Human-Plant 项目详情页
- 简化骨架屏动画为静态灰色背景
- 调整图片最大高度为 70vh

### 2024-06-26
- 添加 Imperfect Fruit 项目详情页
- 实现 WebP 图片格式转换
- 添加渐进式图片加载优化
- 实现图片并排布局功能

## 文件命名规范

- **项目封面**: `project-{number}.webp`
- **详情页图片**: `image{number}.webp`
- **详情页**: `{project-name}.html`
- **样式类**: BEM 命名法 (`.markdown-content`, `.image-row`)

## 浏览器兼容性

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 联系方式

- **Email**: carolineyang00@gmail.com
- **Phone**: +44 7796 758003

---

**最后更新**: 2024-06-29
