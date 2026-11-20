# 三个方向 / 原型说明

> 三个页面都是**独立可运行的原型**，直接双击用浏览器打开即可（无需构建、无外链依赖）。
> `?static=1` 参数会冻结动画，方便截图对比。

```
design-proto/
├── A-compiler.html      方向 A — COMPILER（终端 / C++ 主导）
├── B-manifold.html      方向 B — MANIFOLD（数学 / 等高线场主导）
├── C-proof.html         方向 C — PROOF（代码 ⇄ 公式对译，融合）
└── shots/               截图
```

---

## A — COMPILER

黑底 + 等宽字 + CRT 扫描线 + 噪点，把整个站做成"一台机器"。

- **签名动作**：首页用 `g++ -std=c++20 -O2 kion.cpp -o kion` 的编译日志逐字打出来，最后落到 `./kion`。打字机 + 光标 + `[100%] Built target` 的构建反馈。
- **版式**：1px 发丝线 + 十字定位角 + 左侧栏位编号 `[ 01 ]`，正文用 `struct Miyasaka { ... }` 这种代码结构承载自我介绍。
- **数学**：只做暗纹——底部一条无限滚动的公式带，正文里用 ε-δ 做点缀。
- **性格**：冷、克制、有机械感。最接近你现在的东西，但质感完全不同。
- **技术**：纯 CSS + 30 行 JS。零依赖、零 WebGL。
- **风险**：容易滑向"又一个 terminal 主题"，需要靠排版密度和文案把它拉起来。

## B — MANIFOLD

黑底 + 白字 + 一张**真的在动的数学场**（metaball 势能的等高线，marching squares 实时算出来）。

- **签名动作**：整页背景是一张活的等高线图，缓慢漂移。它既是"数值分析"的隐喻，也是唯一的装饰。
- **版式**：编辑设计（editorial）。三个巨字 `APPROXIMATE / everything.` 混排粗黑体 + 意大利体衬线，配 `fig. 00`、坐标刻度、`Theorem / Proof (pending)` 的仿论文卡片。
- **数学**：公式是真主角，用衬线字排版而不是塞进代码框。
- **性格**：优雅、学院、有分量。最"高级"，也最不像技术博客——这可能是优点。
- **技术**：单文件 Canvas 2D，每帧只算一次标量场再复用（~5ms/帧），无 WebGL、无依赖。
- **风险**：背景会吃掉正文可读性，长文页面必须把场压到很淡或只留首页。

## C — PROOF

左边 C++ 源码，右边等价的 LaTeX 公式，**逐行成对高亮**，像编译器把代码翻译成数学。

- **签名动作**：一条扫描光带上下走，左右两栏对应的行同时亮起——"同一件事，写了两个版本"。
- **第二幕**：`sin x` 的麦克劳林部分和 `P_N(x)` 实时逼近，N 自动从 0 涨到 28，右栏同步显示 `‖e‖∞`。误差是**看得见**的。
- **版式**：点阵网格 + 细中线，两栏严格同节奏（28px 一行），信息密度最高。
- **性格**：最"酷炫"、最有辨识度，也最贴"cpp + 数学"这两个要素本身。
- **技术**：纯 CSS + Canvas 2D，公式是手排 HTML（生产环境换成 KaTeX）。
- **风险**：两栏在高密度下有对齐成本；窄屏必须降级成上下叠。

---

## 我倾向的组合

**C 当骨架，B 当场，A 当零件。**

- 首页 hero 用 C 的代码⇄公式对译（这是别人抄不走的东西）
- 背景常驻 B 的等高线场，但压到 30% 以下，正文页继续降到 10%
- 导航、代码块、404、页脚这些"零件"用 A 的终端语汇
- 全站动效统一用**离散节拍**（20fps 步进，不做缓动插值）——机器感，而且便宜

## 参考站（截图见 `shots/references.png`）

| 站 | 偷什么 |
|---|---|
| acko.net | 数学/3D 图直接嵌在正文论证处；无 WebGL 时降级为文字说明 |
| charm.land | 用终端语汇写正文，等宽字做标题而不是只做代码块 |
| setosa.io | 一个概念 = 一个页面 = 一张图，D3 级别的重量就能撑住 |
| jezzamon.com/fourier | 动图本身就是解释；开源 |
| cppinsights.io | 源码 ⇄ 编译器看到的代码，两栏对照 |
| ciechanow.ski | 可拖拽的演示，不自动播放——读者不动，画面就不动 |

---

# D — 统一版（当前方向）

`D-unified.html` 把原先分散堆叠的板块（终端编译命令、切比雪夫曲线、C++ ⇄ LaTeX 对译、`whoami`）融合成同一个组件与同一条双栏脊梁，全英文，内容忠实还原原站（`index.md` / `_config.yml`）。

## 结构与细节

1. **导航**：左上角改为原站的 `kion miyasaka // kkws`，右上角为 `chebyshev / whoami / posts`。
2. **Hero（单一融合仪器 `.unit`）**：
   - **顶部单行终端**：`[guest@kkws ~]$ g++ -std=c++20 -O2 cheb.cpp -o cheb && ./cheb --degree 8`，阶数 `n` 上限扩展到 `24`（采样精度提升至 640 段，高阶震荡依然锐利）。
   - **中部实时画布**：`T_n(x)` 从左向右平滑绘出，并带有沿曲线游走的求值探针点。
   - **底部 5 行 1:1 对译（C++20 ⇄ LaTeX）与画布实时联动**：正交基、三项递推、切比雪夫节点/根、等幅震荡极值点、`‖T_n‖∞ = 1` 包络界。高亮或悬停某一行时，画布同步点亮对应的几何特征。
   - **底部说明**：去掉中二标语，改为平实的 `Chebyshev polynomial family — C++20 recurrence, nodes, and uniform error bound on [−1, 1].`
3. **whoami（忠于原站 `index.md`）**：
   - 左栏 `whoami --verbose`：用平实的 `struct KionMiyasaka` 承载原站的 `status ("Nightly Build (v2026.06)")`、`uptime (78'892'314.9)`、`arsenal`（C++, Python, MATLAB, ML, Optimization, Approximation theory）与 `toolchain`（LLVM, CMake, Wolfram, LaTeX 等）。
   - 右栏 `cat /home/spec /etc/environment`：原站的硬件配置（`7800X3D & RTX 5070 Ti`、`MacBook Pro 16"`、三把键盘、两只鼠标、路由器）、环境变量（`vim`、`fish`、`en_US.UTF-8`）及链接（`osu!`、`discord`、`cnblogs`，已移除 GitHub）。
4. **隐藏的 `/murmur` 入口（两处彩蛋）**：
   - 藏在 `struct KionMiyasaka` 底部 `private:` 成员的字符串字面量里：`static constexpr auto stderr_log = "~/.local/share/murmur";`（点击字符串即可跳转 `/murmur`）。
   - 藏在页脚原站经典的 `__EOF__` 标记上（点击 `__EOF__` 跳转 `/murmur`），并删掉了中二的 `Q.E.D. — or not yet.`。

`?static=1` 冻结动画，方便截图。
