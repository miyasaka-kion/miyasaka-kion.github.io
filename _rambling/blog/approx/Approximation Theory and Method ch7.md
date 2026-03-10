---
title: Approximation Theory and Method ch7
categories: approx
---

# Approximation Theory and Method ch7



... as the sign of $p(x)$. It follows that $p^{\ast}$ is a best minimax approximation from $\mathscr{A}$ to $f$ if there is **no function** $p$ in $\mathscr{A}$ that satisfies the condition
$$
\left[f(x)-p^{\ast}(x)\right] p(x)>0, \quad x \in \mathscr{Z}_{\mathrm{M}}\quad  \text {. (7.6) }
$$

Because of the way in which the exchange algorithm works, we generalize the problem of minimizing $\lVert f-p \rVert_{\infty}$, to the problem of minimizing the expression

$$
\max _{x \in \mathscr{X}}\lvert f(x)-p(x) \rvert, \quad p \in \mathscr{A}\quad  \text{(7.7)}
$$

where $\mathscr{Z}$ is any closed subset of $[a, b]$, which may be $[a, b]$ itself, but in the exchange algorithm the set $\mathscr{Z}$ is composed of a finite number of points. The next theorem allows $\mathscr{Z}$ to be general.

**Theorem** 7.1 Let \\( \mathscr{A} \\) be a linear subspace of \\( \mathscr{C}[a, b] \\), let \\( f \\) be any function in \\( \mathscr{C}[a, b] \\), let \\( \mathscr{Z} \\) be any closed subset of \\([a, b]\\), let \\( p^{\\ast} \\) be any element of \\( \mathscr{A} \\), and let \\( \mathscr{Z}_{\\mathrm{M}} \\) be the set of points of \\( \mathscr{Z} \\) at which the error \\( \\left\\lbrace\\left\\lvert f(x)-p^{\\ast}(x)\\right\\rvert ; x \\in \\mathscr{Z}\\right\\rbrace \\) takes its maximum value. Then \\( p^{\\ast} \\) is an element of \\( \mathscr{A} \\) that minimizes expression (7.7) if and only if there is no function \\( p \\) in \\( \mathscr{A} \\) that satisfies condition (7.6).

不严谨说，如果能找到一个 $p(x) \in \mathscr A$, 使得 $p(x)$ 和 $f(x)-p^{\ast}(x)$ 符号一样，那么这个 $p(x)$ 肯定可以让 $\lVert f-p \rVert_{\infty}$ 更小——通过找一个比较合适的 $\theta$，这个 $\theta$ 要足够小——小到在每一个点 $x \in \mathscr Z_M$ 处都不会减爆. 因为可以任意小，所以这样的 $\theta$ 肯定存在.
<div class="math">
$$
\max _{x \in \mathscr{I}}\left\lvert e^{*}(x)-\theta p(x)\right\rvert<\max _{x \in \mathscr{I}}\left\lvert e^{*}(x)\right\rvert
$$
</div>


## Haar Condition

(1) If an element of $\mathscr{P}_{n}$ has more than $n$ zeros, then it is identically zero. 

大概就是说，最高次数是 $n$ 的多项式最多有 $n$ 个零点——

或者有无穷多个零点，处处都是 $0$.

{::nomarkdown}
(2) Let $\left\lbrace\zeta_{j} ; j=1,2, \ldots, k\right\rbrace$ be any set of distinct points in the open interval $(a, b)$, where $k \leqslant n$. There exists an element of $\mathscr{P}_{n}$ that changes sign at these points, and that has no other zeros. Moreover, there is a function in $\mathscr{P}_{n}$ that has no zeros in $[a, b]$. The following two properties of polynomials are required later:
{:/nomarkdown}

给出了多项式的存在性，任意给定一些点，肯定有一个多项式在这些地方变号，只要变号的次数小于等于 $n$.

(3) If a function in $\mathscr{P}_{n}$, that is not identically zero, has $j$ zeros, and if $k$ of these zeros are interior points of $[a, b]$ at which the function does not change sign, then the number $(j+k)$ is not greater than $n$.
$$
p(x) = \prod (x - x_i)^{n_i}
$$


不变号的零点肯定是多项式里某些要素是偶数次方，所以至少贡献两个 degree.

{::nomarkdown}
(4) Let $\left\lbrace\xi_{j} ; j=0,1, \ldots, n\right\rbrace$ be any set of distinct points in $[a, b]$, and let $\left\lbrace\phi_{i} ; i=0,1, \ldots, n\right\rbrace$ be any basis of $\mathscr{P}_{n}$. Then the $(n+1) \times$ $(n+1)$ matrix whose elements have the values $\left\lbrace\phi_{i}\left(\xi_{j}\right)\right.$; $i=0,1, \ldots, n ; j=0,1, \ldots, n\rbrace$ is non-singular.
{:/nomarkdown}

大概就是任意一些不一样的点换基换到多项式空间，都是不会丢失维数的. (?) 忘了x



Haar Condition 就是多项式空间满足的一些性质，在下面有关的证明里面实际上我们只用到多项式的一部分性质，有这些性质就够用了. 于是可以做一些拓展，把这些一部分的性质拿出来，毕竟我们只要用这么多东西，那其他满足这些东西的线性空间也是适用的.

An $(n+1)$-dimensional linear subspace $\mathscr{A}$ of $\mathscr{C}[a, b]$ is said to satisfy the 'Haar condition' if these four statements remain true when $\mathscr{P}_{n}$ is replaced by the set $\mathscr{A}$. Equivalently, any basis of $\mathscr{A}$ is called a 'Chebyshev set'. 

It is proved that properties $(1),(3)$ and (4) are equivalent, and that these properties imply condition (2). 

这里相关的证明，一般就看 $(1)$ 就行了.

**Theorem** 7.2 (Characterization Theorem)

Let $\mathscr{A}$ be an $(n+1)$-dimensional linear subspace of $\mathscr{C}[a, b]$ that satisfies the Haar condition, and let $f$ be any function in $\mathscr{C}[a, b]$. Then $p^{\ast}$ is the best minimax approximation from $\mathscr{A}$ to $f$, if and only if there exist $(n+2)$ points $\left\lbrace\xi_{i}^{*} ; i=0,1, \ldots, n+1\right\rbrace$, such that the conditions

$$
\begin{aligned}
& a \leqslant \xi_{0}^{*}<\xi_{1}^{*}<\ldots<\xi_{n+1}^{*} \leqslant b, \\
& \left\lvert f\left(\xi_{i}^{*}\right)-p^{\ast}\left(\xi_{i}^{*}\right)\right\rvert=\left\lVert f-p^{\ast}\right\rVert_{\infty}, \quad i=0,1, \ldots, n+1,
\end{aligned}
$$

and

$$
f\left(\xi_{i+1}^{*}\right)-p^{\ast}\left(\xi_{i+1}^{*}\right)=-\left[f\left(\xi_{i}^{*}\right)-p^{\ast}\left(\xi_{i}^{*}\right)\right], \quad i=0,1, \ldots, n,
$$

are obtained.

只要不存在 $p$ 使得 $\left[f(x)-p^{\ast}(x)\right] p(x)>0$ 那么就有最优. 

嘛……大概说说自己的思路，不一定对.  姑且把 $\mathscr{A}$ 当成 $\mathscr P_n$ 来想，因为 $p(x)$ 在他所在的空间  $\mathscr P_n$ 里面，只要是有 $n$ 个零点的东西都能找到一个 $p(x)$ 使得他们零点构成一样——所以就要 $\left[f(x)-p^{\ast}(x)\right]$ 有更多的零点，至少要 $n+1$ 个. 想要 $n+1$ 个零点，那这个连续函数至少要 $n +2$ 个交替分布在横轴上下的一些点，也就是这里说的 $\left\lbrace\xi_{i}^{*} ; i=0,1, \ldots, n+1\right\rbrace$.

但是，$\mathscr C [a,b]$ 实际上是 piecewise continuous, 而且 $\mathscr{A}$ 也不是 $\mathscr P_n$ , $\left[f(x)-p^{\ast}(x)\right]$ 不一定连续, 不能用那个什么所谓的零点存在性定理. 

直接用 Haar Condition 的（2）——因为 $p(x)$ 满足Haar condition，所以 $p(x)$ 变号了 $n$ 次，也就是存在 $n+1$ 个符号相间的值, 我们希望 $\left[f(x)-p^{\ast}(x)\right]$ 的编号次数更多，至少是 $n+1$ 次，也就是至少存在 $n+2$ 个符号相间的值. 



回忆一下切比雪夫多项式:
$$
T_{n}(x)=\cos (n \theta), \quad x=\cos \theta, \quad 0 \leqslant \theta \leqslant \pi .
$$
也就是 $T_n(x) = \cos (n \arccos x)$. $n$ 越大上下震荡的次数越多.

$n = 1$: 

<img src="https://raw.githubusercontent.com/miyasaka-kion/miyasaka-img/main/Screenshot%202026-03-10%20at%2018.59.52.png" alt="Screenshot 2026-03-10 at 18.59.52" class="md-img-half" />

零点:

$$
\lbrace\lbrace x\to 0\rbrace\rbrace
$$

$n = 2$: 

<img src="https://raw.githubusercontent.com/miyasaka-kion/miyasaka-img/main/Screenshot%202026-03-10%20at%2019.00.03.png" alt="Screenshot 2026-03-10 at 19.00.03" class="md-img-half" />


零点:
$$
\left\lbrace\left\lbrace x\to -\frac{1}{\sqrt{2}}\right\rbrace,\left\lbrace x\to \frac{1}{\sqrt{2}}\right\rbrace\right\rbrace
$$
$n = 3$: 

<img src="https://raw.githubusercontent.com/miyasaka-kion/miyasaka-img/main/Screenshot%202026-03-10%20at%2019.00.22.png" alt="Screenshot 2026-03-10 at 19.00.22" class="md-img-half" />
$$
\left\lbrace\lbrace x\to 0\rbrace,\left\lbrace x\to -\frac{\sqrt{3}}{2}\right\rbrace,\left\lbrace x\to \frac{\sqrt{3}}{2}\right\rbrace\right\rbrace
$$
$n = 6$ :



<img src="https://raw.githubusercontent.com/miyasaka-kion/miyasaka-img/main/Screenshot%202026-03-10%20at%2019.00.34.png" alt="Screenshot 2026-03-10 at 19.00.34" class="md-img-half" />


$$
\left\lbrace\left\lbrace x\to -\frac{1}{\sqrt{2}}\right\rbrace,\left\lbrace x\to \frac{1}{\sqrt{2}}\right\rbrace,\left\lbrace x\to -\frac{\sqrt{3}-1}{2 \sqrt{2}}\right\rbrace,\left\lbrace x\to \frac{\sqrt{3}-1}{2 \sqrt{2}}\right\rbrace,\left\lbrace x\to -\frac{\sqrt{3}+1}{2 \sqrt{2}}\right\rbrace,\left\lbrace x\to \frac{\sqrt{3}+1}{2 \sqrt{2}}\right\rbrace\right\rbrace
$$


递推关系:
<div class="math">
$$
T_{n + 1}(x) = 2x T_{n} (x)- T_{n -1}(x)
$$
本质上其实是和差化积公式:
$$
T_{n + 1}(x) +  T_{n -1} (x)= 2x T_{n}(x) \\\\
\cos((n + 1) \theta) + \cos((n - 1) \theta) = 2 \cos (\theta) \cos(n \theta)
$$
</div>
因为$T_0(x) = 1, T_1(x) = x$, 结合递推关系, 我们可以知道 $T_n$ 的最高次数是 $n$, 并且最高次项的系数是 $2^{n -1}$.

**Theorem** 7.3

{::nomarkdown}
Let the range of $x$ be $[-1,1]$, and let $n$ be any positive integer. The polynomial $\left(\frac{1}{2}\right)^{n-1} T_{n}$ is the member of $\mathscr{P}_{n}$, whose $\infty$-norm is least, subject to the condition that the coefficient of $x^{n}$ is equal to one.
{:/nomarkdown}

{::nomarkdown}
因为切比雪夫多项式交替取到最大最小值, 根据  Theorem 7.2 (Characterization Theorem) 我们可以知道在 $\mathscr{P}_{n}$ 中 $\left(\frac{1}{2}\right)^{n-1} T_{n}$ 是 inf-norm 最小的多项式.
{:/nomarkdown}

<img src="https://raw.githubusercontent.com/miyasaka-kion/miyasaka-img/main/Screenshot%202026-03-10%20at%2019.11.55.png" alt="Screenshot 2026-03-10 at 19.11.55" class="md-img-half" />

**Theorem** 7.7
Let the conditions of Theorem 7.2 hold, let <span class="math">\\( p^{\ast} \\)</span> be any element of $\mathscr{A}$, and let $\left\lbrace\xi_i ; i=0,1, \ldots, n+1\right\rbrace$ be a reference, such that the condition
<div class="math">
$$
\begin{aligned}
& \operatorname{sign}\left[f\left(\xi_{i+1}\right)-p^*\left(\xi_{i+1}\right)\right]=-\operatorname{sign}\left[f\left(\xi_i\right)-p^*\left(\xi_i\right)\right], \\\\
& i=0,1, \ldots, n,
\end{aligned}
$$
</div>
is satisfied. Then the inequalities
<div class="math">
$$
\begin{aligned}
\min _{i=0,1, \ldots, n+1}\left\lvert f\left(\xi_i\right)-p^*\left(\xi_i\right)\right\rvert  \\\\
& \leqslant \min _{p \in \mathscr{A}} \max _{i=0,1, \ldots, n+1}\left\lvert f\left(\xi_i\right)-p\left(\xi_i\right)\right\rvert \\\\
& \leqslant \min _{p \in \mathscr{A}}\lVert f-p \rVert_{\infty} \\\\
& \leqslant\left\lVert f-p^*\right\rVert_{\infty}
\end{aligned}
$$
</div>
are obtained. Moreover, the first inequality is strict unless all the numbers $\left\lbrace\left\lvert f\left(\xi_i\right)-p^*\left(\xi_i\right)\right\rvert ; i=0,1, \ldots, n+1\right\rbrace$ are equal.

这个定理为后面的 exchange algorithm 做了铺垫——确定了一些上下界. 

最后一个 $\leqslant$: 最优时的 $p$ 肯定距离 $f$ 最近;

倒数第二个 $\leqslant$: 在一些子集处的最大肯定比全局最大要小; 也就是无论怎样更换 reference 也不会导致比最优大——实际上我们在 exchange algorithm 中就是不断更换 reference 使得 $\left\lvert f\left(\xi_i\right)-p\left(\xi_i\right)\right\rvert$ 尽量大, 会越来约靠近最优值, 也就是 {::nomarkdown}$\min _{p \in \mathscr{A}}\lVert f-p \rVert_{\infty}${:/nomarkdown}.

第一个 $\leqslant$: ...



 
