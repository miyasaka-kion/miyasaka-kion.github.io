---
title: Approximation Theory and Method part 1
categories: approx
---

# Approximation Theory and Method part 1

>   非常好视频 完全理解 Topology:
>
>   https://www.youtube.com/watch?v=aewo8otGAAQ

## Recovery

### Euclidean space

**Definition**  (Euclidean Space) A Euclidean space is a finite-dimensional vector space over the reals $\mathbf{R}$, with an inner product $\langle\cdot, \cdot\rangle$.



**Definition** 2 (Inner Product) An inner product $\langle\cdot, \cdot\rangle$ on a real vector space $\mathbf{X}$ is a **symmetric**, **bilinear**, **positive-definite** function
$$
\begin{aligned}
& \langle\cdot, \cdot\rangle: \mathbf{X} \times \mathbf{X} \rightarrow \mathbf{R} \\
& \left(\boldsymbol{x}^*, \boldsymbol{x}\right) \mapsto\left\langle\boldsymbol{x}^*, \boldsymbol{x}\right\rangle .
\end{aligned}
$$
(Positive-definite means $\langle\boldsymbol{x}, \boldsymbol{x}\rangle>0$ unless $\boldsymbol{x}=\mathbf{0}$.)

>   1. $\forall \mathbf{u} \in V,(\mathbf{u}, \mathbf{u}) \geq 0$, and $(\mathbf{u}, \mathbf{u})=0 \Leftrightarrow \mathbf{u}=\mathbf{0}$;
>   2. $\forall \mathbf{u}, \mathbf{v} \in V$, holds $(\mathbf{u}, \mathbf{v})=(\mathbf{v}, \mathbf{u})$;
>   3. $\forall \mathbf{u}, \mathbf{v}, \mathbf{w} \in V$, and $\forall a, b \in \mathbb{R}$ holds $(a \mathbf{u}+b \mathbf{v}, \mathbf{w})=a(\mathbf{u}, \mathbf{w})+b(\mathbf{v}, \mathbf{w})$



**Definition** 3 (Orthogonal) Two vectors $\boldsymbol{x}^*$ and $\boldsymbol{x}$ are orthogonal if their inner product is zero,
$$
\left\langle\boldsymbol{x}^*, \boldsymbol{x}\right\rangle=0 .
$$
Geometrically, orthogonal means perpendicular.



The **Euclidean norm** in $\mathbb{R}^2$ is given by
$$
\lVert \mathbf{u} \rVert=\sqrt{(\mathbf{x}, \mathbf{x})}=\sqrt{\left(x_1\right)^2+\left(x_2\right)^2} .
$$





### Vector space

1.18 **Definition** addition, scalar multiplication （Linear Algebra Done Right）

An **addition** on a set $V$ is a function that assigns an element $u+v \in V$ to each pair of elements $u, v \in V$.

A **scalar multiplication** on a set $V$ is a function that assigns an element $\lambda v \in V$ to each $\lambda \in \mathbf{F}$ and each $v \in V$.
Now we are ready to give the formal definition of a vector space.





1.19 **Definition** vector space  （Linear Algebra Done Right）
A vector space is a set $V$ along with an addition on $V$ and a scalar multiplication on $V$ such that the following properties hold:
**commutativity**
$$
u+v=v+u \text { for all } u, v \in V
$$
**associativity**
$$
(u+v)+w=u+(v+w) \text { and }(a b) v=a(b v) \text { for all } u, v, w \in V
$$
and all $a, b \in \mathbf{F}$;
**additive identity**
there exists an element $0 \in V$ such that $v+0=v$ for all $v \in V$;
**additive inverse**
for every $v \in V$, there exists $w \in V$ such that $v+w=0$;
**multiplicative identity**
$$
1 v=v \text { for all } v \in V
$$
distributive properties
$a(u+v)=a u+a v$ and $(a+b) v=a v+b v$ for all $a, b \in \mathbf{F}$ and all $u, v \in V$.





### Vector Norms

**Definition** A norm is a function $\lVert \cdot \rVert: \mathbb{C}^m \rightarrow \mathbb{R}$ that assigns a real-valued length to each vector. In order to conform to a reasonable notion of length, a norm must satisfy the following three conditions. For all vectors $x$ and $y$ and for all scalars $\alpha \in \mathbb{C}$,
(1)  ([Positive definiteness](https://en.wikipedia.org/wiki/Positive_definiteness)/Point-separating) $\lVert x \rVert \geq 0$, and $\lVert x \rVert=0$ only if $x=0$,
(2) ([Subadditivity](https://en.wikipedia.org/wiki/Subadditive_function)/[Triangle inequality](https://en.wikipedia.org/wiki/Triangle_inequality)) $\lVert x+y \rVert \leq\lVert x \rVert+\lVert y \rVert$,
(3) ([Absolute homogeneity](https://en.wikipedia.org/wiki/Homogeneous_function)) $\lVert \alpha x \rVert=\lvert \alpha \rvert\lVert x \rVert$.
In words, these conditions require that (1) the norm of a nonzero vector is positive, (2) the norm of a vector sum does not exceed the sum of the norms of its parts-the triangle inequality, and (3) scaling a vector scales its norm by the same amount.





### Examples

$$
\begin{aligned}
\lVert x \rVert_1 & =\sum_{i=1}^m\left\lvert x_i\right\rvert, \\
\lVert x \rVert_2 & =\left(\sum_{i=1}^m\left\lvert x_i\right\rvert^2\right)^{1 / 2}=\sqrt{x^* x}, \\
\lVert x \rVert_{\infty} & =\max _{1 \leq i \leq m}\left\lvert x_i\right\rvert, \\
\lVert x \rVert_p & =\left(\sum_{i=1}^m\left\lvert x_i\right\rvert^p\right)^{1 / p} \quad(1 \leq p<\infty) .
\end{aligned}
$$

>    **Remark**  Inner product is a kind of norm, but the reverse does not hold.



### Metric space

-   **Definition**  A metric space $(X, d)$ consists of a non-empty set $X$ and a function $d: X \times X \rightarrow[0, \infty)$ such that:
    (i) (Positivity) For all $x, y \in X, d(x, y) \geq 0$ with equality if and only if $x=y$.
    (ii) (Symmetry) For all $x, y \in X, d(x, y)=d(y, x)$.
    (iii) (Triangle Inequality) For all $x, y, z \in X$
    $$
    d(x, y) \leq d(x, z)+d(z, y)
    $$
    A function d satisfying conditions (i)-(iii), is called a metric on $X$.

>   **Remark** Distance in metric space is a kind of norm, but the reverse does not hold.



**Example** The metrics in this example may seem rather strange. Although they are not very useful in applications, they are handy to know about as they are totally different from the metrics we are used to from $\mathbb{R}^n$ and may help sharpen our intuition of how a metric can be. Let $X$ be any non-empty set, and define:
$$
d(x, y)= \begin{cases}0 & \text { if } x=y \ 1 & \text { if } x \neq y\end{cases}
$$
It is not hard to check that $d$ is a metric on $X$, usually referred to as the discrete metric.



**Example** If we let $d(x, y)=\lvert x-y \rvert,(\mathbb{R}, d)$ is a metric space. The first two conditions are obviously satisfied, and the third follows from the ordinary triangle inequality for real numbers:
$$
d(x, y)=\lvert x-y \rvert=\lvert (x-z)+(z-y) \rvert \leq\lvert x-z \rvert+\lvert z-y \rvert=d(x, z)+d(z, y)
$$





**Definition** (Convergence of a Sequence)  Let $(X, d)$ be a metric space. A sequencee $\left\lbrace x_n\right\rbrace$ in $X$ converges to a point $a \in X$ if there for every $\epsilon>0$ exists an $N \in \mathbb{N}$ such that $d\left(x_n, a\right)<\epsilon$ for all $n \geq N$. We write $\lim _{n \rightarrow \infty} x_n=a$ or $x_n \rightarrow a$.

Note that this definition exactly mimics the definition of convergence in $\mathbb{R}$ or $\mathbb{R}^n$. Here is an alternative formulation.



**Lemma**  A sequence $\left\lbrace x_n\right\rbrace$ in a metric space $(X, d)$ converges to $a$ if and only if $\lim _{n \rightarrow \infty} d\left(x_n, a\right)=0$.

Proof: The distances $\left\lbrace d\left(x_n, a\right)\right\rbrace$ form a sequence of nonnegative numbers. This sequence converges to 0 if and only if there for every $\epsilon>0$ exists an $N \in \mathbb{N}$ such that $d\left(x_n, a\right)<\epsilon$ when $n \geq N$. But this is exactly what the definition above says.



**Proposition**  A sequence in a metric point can not converge to more than one point.



**Proof** (Triangular inequality) Omitted.



**Definition** (Continuous function)  Assume that $\left(X, d_X\right),\left(Y, d_Y\right)$ are two metric spaces. $A$ function $f: X \rightarrow Y$ is continuous at a point $a \in X$ if for every $\epsilon>0$ there is a $\delta>0$ such that $d_Y(f(x), f(a))<\epsilon$ whenever $d_X(x, a)<\delta$.



**Definition** (Balls) Now we define some auxiliary notations. If $a$ is an element of a metric space $X$, and $r$ is a positive number, the (open) ball centered at a with radius $r$ is the set
$$
\mathrm{B}(a ; r)=\lbrace x \in X \mid d(x, a)<r\rbrace
$$
The ball without center is 
$$
{\mathrm{B_0}(a ; r)}=\lbrace x \in X \mid 0<d(x, a)<r\rbrace
$$
And the closed ball is
$$
\overline {\mathrm{B}(a ; r)}=\lbrace x \in X \mid d(x, a) \leq r\rbrace
$$
the closed ball without center
$$
\overline {\mathrm{B_0}(a ; r)}=\lbrace x \in X \mid 0<d(x, a)<r\rbrace
$$



**Definition** (interior point, exterior point, boundary point) If $A$ is a subset of $X$ and $x$ is a point in $X$, there are three possibilities:
(i) There is a ball $\mathrm{B}(x ; r)$ around $x$ which is contained in $A$. In this case $x$ is called an *interior point* of $A$.
(ii) There is a ball $\mathrm{B}(x ; r)$ around $x$ which is contained in the complement $A^c$. In this case $x$ is called an *exterior point* of $A$.
(iii) All balls $\mathrm{B}(x ; r)$ around $x$ contains points in $A$ as well as points in the complement $A^c$. In this case $x$ is a *boundary point* of $A$.



**Definition** (limit point)  If $A$ is a subset of $X$ and $x$ is a point in $X$, $x$ is a limit point if and only if for all $r>0$, $B(x;  r) \cap X \neq \varnothing$.



**Definition** (open set)  A subset $A$ of a metric space $X$ is *open* if and only if it only consists of interior points, i.e. for all $a \in A$, there is a ball $\mathrm{B}(a ; r)$ around a which is contained in $A$.



**Definition** (closed set) A subset $A$ of a metric space $X$ is *closed* if and only if it consists all limit points.



**Proposition** (complement of open is closed)  A subset $A$ of a metric space $X$ is open if and only if its complement $A^c$ is closed.



**Proof** If $A$ is open, it does not contain any of the (common) boundary points. Hence they all belong to $A^c$, and $A^c$ must be closed.

Conversely, if $A^c$ is closed, it contains all boundary points, and hence $A$ can not have any. This means that $A$ is open.

The following observation may seem obvious, but needs to be proved:



**Lemma**  All open balls $\mathrm{B}(a ; r)$ are open sets, while all closed balls $\overline{\mathrm{B}}(a ; r)$ are closed sets.



**Proof**: We prove the statement about open balls and leave the other as an exercise. Assume that $x \in \mathrm{B}(a ; r)$; we must show that there is a ball $\mathrm{B}(x ; \epsilon)$ around $x$ which is contained in $\mathrm{B}(a ; r)$. If we choose $\epsilon=r-d(x, a)$, we see that if $y \in \mathrm{B}(x ; \epsilon)$ then by the Triangle Inequality
$$
d(y, a) \leq d(y, x)+d(x, a)<\epsilon+d(x, a)=(r-d(x, a))+d(x, a)=r
$$
Thus $d(y, a)<r$, and hence $\mathrm{B}(x ; \epsilon) \subset \mathrm{B}(a ; r)$



**Proposition** (limit of a sequence will not run out that set) Assume that $F$ is a subset of a metric space $X$. The following are equivalent:
(i) $F$ is closed.
(ii) If $\left\lbrace x_n\right\rbrace$ is a convergent sequence of elements in $F$, then the limit  $a= \lim _{n \rightarrow \infty} x_n$ always belongs to $F$.



**Proof** Assume that $F$ is closed and that $a$ does not belong to $F$. We must show that a sequence from $F$ cannot converge to $a$. Since $F$ is closed and contains all its boundary points, $a$ has to be an exterior point, and hence there is a ball $\mathrm{B}(a ; \epsilon)$ around $a$ which only contains points from the complement of $F$. But then a sequence from $F$ can never get inside $\mathrm{B}(a, \epsilon)$, and hence cannot converge to $a$.

Assume now that that $F$ is not closed. We shall construct a sequence from $F$ that converges to a point outside $F$. Since $F$ is not closed, there is a boundary point $a$ that does not belong to $F$. For each $n \in \mathbb{N}$, we can find a point $x_n$ from $F$ in $\mathrm{B}\left(a ; \frac{1}{n}\right)$. Then $\left\lbrace x_n\right\rbrace$ is a sequence from $F$ that converges to a point a which is not in $F$.

>   **Remark** An alternative statement is:
>
>   **Proposition** (limit of a sequence will not run out that set too far) Assume that $F$ is a subset of a metric space $X$.
>    If $\left\lbrace x_n\right\rbrace$ is a convergent sequence of elements in $F$, then the limit  $a= \lim _{n \rightarrow \infty} x_n$ is a limit point of $F$.



**Definition** (Cauchy sequence)  A sequence $\left\lbrace x_n\right\rbrace$ in a metric space $(X, d)$ is a Cauchy sequence if for each $\epsilon>0$ there is an $N \in \mathbb{N}$ such that $d\left(x_n, x_m\right)<\epsilon$ whenever $n, m \geq N$.



**Proposition**  Every convergent sequence is a Cauchy sequence.



**Definition** (completeness)  A metric space is called complete if all Cauchy sequences converge.



**Definition** (totally bounded) A subset $A$ of a metric space $X$ is called totally bounded if for each $\epsilon>0$ there is a finite number $\mathrm{B}\left(a_1, \epsilon\right), \mathrm{B}\left(a_2, \epsilon\right), \ldots, \mathrm{B}\left(a_n, \epsilon\right)$ of balls of radius $\epsilon$ that cover $A$ (i.e. $\left.A \subset \mathrm{B}\left(a_1, \epsilon\right) \cup \mathrm{B}\left(a_2, \epsilon\right) \cup \ldots \cup \mathrm{B}\left(a_n, \epsilon\right)\right)$.



**Theorem** A subset $A$ of a complete metric space $X$ is compact if and only if it is closed and totally bounded.

>   **Remark** Totally bounded means that $A$ can be covered by finite many balls whose $r$ can be arbitrarily small. 
>
>   Totally bounded is stronger than bounded, recall that closed and bounded does not yield compactness.



**Proposition**  Assume that $(X, d)$ is a complete metric space. If $A$ is a subset of $X,\left(A, d_A\right)$ is complete if and only if $A$ is closed.



**Definition** (covering) Let $(X, d)$ be a metric space. A covering of $X$ is a collection of sets whose union is $X$. 



**Definition** (open covering) An open covering of $X$ is a collection of open sets whose union is $X$. 



**Definition** (compactness) The metric space $X$ is said to be compact if every open covering has a finite subcovering. 

>   **Remark** This abstracts the Heine-Borel property; indeed, the Heine-Borel theorem states that closed bounded subsets of the real line are compact.
>   **Heine-Borel theorem** Every covering of a closed interval $[a, b]-$ or more generally of a closed bounded set $X \subset \mathbb{R}$ - by a collection of open sets has a finite subcovering.



**Definition** (Sequentially compact) A metric space $X$ is said to be sequentially compact if every sequence $\left(x_n\right)_{n=1}^{\infty}$ of points in $X$ has a convergent subsequence. 

>    This abstracts the Bolzano-Weierstrass property; indeed, the Bolzano-Weierstrass theorem states that closed bounded subsets of the real line are sequentially compact.
>
>   **Bolzano-Weierstrass theorem** Every bounded sequence of real numbers has a convergent subsequence.
>   This can be rephrased as:
>   **Bolzano-Weierstrass theorem (rephrased)** Let $X$ be any closed bounded subset of the real line. Then any sequence $\left(x_n\right)$ of points in $X$ has a subsequence converging to a point of $X$.



**Theorem**  (Compactness of metric spaces) For a metric space $X$, the following are equivalent:
(a) $X$ is compact, i.e. every open covering of $X$ has a finite subcovering.
(b) Every collection of closed sets in $X$ with the finite intersection property has a nonempty intersection.
(c) If $F_1 \supseteq F_2 \supseteq F_3 \supseteq \ldots$ is a decreasing sequence of nonempty closed sets in $X$, then $\bigcap_{n=1}^{\infty} F_n$ is nonempty.
(d) $X$ is sequentially compact, i.e. every sequence in $X$ has a convergent subsequence.
(e) $X$ is totally bounded and complete.



**Proof** https://www.ucl.ac.uk/~ucahad0/3103_handout_2.pdf



**Proposition** 

(a) A closed subset of a compact space is compact.
(b) A compact subset of any metric space is closed.
(c) A finite union of compact sets is compact.

**Proposition**  (Compactness of subsets in $\mathbb{R}$ ) $A$ subset $A \subseteq \mathbb{R}$ is compact if and only if it is closed and bounded.
The corresponding result for $\mathbb{R}^n$ is an easy consequence:



**Proposition**  (Compactness of subsets in $\mathbb{R}^n$ ) $A$ subset $A \subseteq \mathbb{R}^n$ is compact if and only if it is closed and bounded.



**Corollary** (existence of optimality) Let $X$ be a compact metric space, and let $f: X \rightarrow \mathbb{R}$ be continuous. Then $f[X]$ is bounded, and there exist points $a, b \in X$ such that $f(a)=\inf _{x \in X} f(x)$ and $f(b)=$ $\sup _{x \in X} f(x)$

>    **Remark** In a finite dimensional normed space, i.e. $\mathbb R^n$ or $\mathbb C^n$, a set is compact if and only if it is closed and bounded. But this is false when it comes to infinite dimensional spaces.



**Example**  $\ell^{\infty}$. The closed unit ball in $\ell^{\infty}$ is not compact - indeed, it is not even separable (see Proposition 1.18 last week along with Proposition 2.3). ${ }^5$



**Example** $\mathbb R^ \infty$ (which is a Euclidean space) is not compact.

**Proof** (given by chatGPT) To show that $\mathbb{R}^\infty$ is not compact, we can construct an open cover of $\mathbb{R}^\infty$ that does not have a finite subcover.

Consider the following open cover of $\mathbb{R}^\infty$: $$\mathcal{U} = {U_n : n \in \mathbb{N}},$$ where $U_n$ is the open ball centered at the origin with radius $n$: $$U_n = {(x_1,x_2,\ldots) \in \mathbb{R}^\infty : \sqrt{x_1^2 + x_2^2 + \cdots} < n}.$$ To see that $\mathcal{U}$ is indeed an open cover of $\mathbb{R}^\infty$, let $(x_1,x_2,\ldots) \in \mathbb{R}^\infty$ be arbitrary. Then, there exists $N \in \mathbb{N}$ such that $\sqrt{x_1^2 + x_2^2 + \cdots} < N$. Thus, $(x_1,x_2,\ldots) \in U_N$, so $\mathcal{U}$ covers $\mathbb{R}^\infty$.

To show that $\mathcal{U}$ does not have a finite subcover, suppose to the contrary that $\mathcal{V} = {U_{n_1}, U_{n_2}, \ldots, U_{n_k}}$ is a finite subcover of $\mathcal{U}$. Let $m = \max{n_1,n_2,\ldots,n_k}$. Then, for any $(x_1,x_2,\ldots) \in \mathbb{R}^\infty$ with $\sqrt{x_1^2 + x_2^2 + \cdots} \geq m+1$, we have $(x_1,x_2,\ldots) \notin U_n$ for any $n \in {n_1,n_2,\ldots,n_k}$. Thus, $\mathcal{V}$ cannot cover $\mathbb{R}^\infty$.

Therefore, we have shown that $\mathbb{R}^\infty$ is not compact.



**Example** The subset of  $\mathbb R^ \infty$ is also not compact. 

>   **Remark** To prove a set $X$ is not compact, we only need to find an open cover which does not have a finite subcover which covers $X$. Conversely, however, if we want to show that the set $X$ is compact, we have to show that all of its open covers have finite subcover.







## The approximation problem and existence of best approximations

three main ingredients of an approximation calculation, which are as follows: 

-   A function, or some data, or more generally a member of a set, that is to be approximated. We call it $f$;
-   A set, $\mathscr{A}$ say, of approximations, which in the case of the given examples is the set of all straight lines. 
-   A means of selecting an approximation from $\mathscr{A}$.

**Definition** (better approximation)  $a_0 \in \mathscr{A}$ is a better approximation than $a_1 \in \mathscr{A}$ if the inequality
$$
d\left(a_0, f\right)<d\left(a_1, f\right)
$$
is satisfied.



**Definition** (best approximation)  We define $a^* \in \mathscr{A}$ to be a best approximation if the condition
$$
d\left(a^*, f\right) \leqslant d(a, f)
$$
holds for all $a \in \mathscr{A}$.



**Theorem** 1.1 (metric space: compactness $\Rightarrow$ optimality)
If $\mathscr{A}$ is a compact set in a metric space $\mathscr{B}$, then, for every $f$ in $\mathscr{B}$, there exists an element $a^* \in \mathscr{A}$, such that $d\left(a^*, f\right) \leqslant d(a, f)$ holds for all $a \in \mathscr{A}$.



**Theorem** 1.2 (finite dimensional linear space:  $\Rightarrow$ optimality)
If $\mathscr{A}$ is a finite-dimensional linear space in a normed linear space $\mathscr{B}$, then, for every $f \in \mathscr{B}$, there exists an element of $\mathscr{A}$ that is a best approximation from $\mathscr{A}$ to $f$.

Proof. Let the subset $\mathscr{A}_0$ contain the elements of $\mathscr{A}$ that satisfy the condition (create a closed and bounded condition)
$$
\lVert a \rVert \leqslant 2\lVert f \rVert
$$
It is compact because it is a closed and bounded subset of a finitedimensional space. It is not empty: for example it contains the zero element. Therefore, by Theorem 1.1, there is a best approximation from $\mathscr{A}_0$ to $f$ which we call $a_0^*$. By definition the inequality
$$
\lVert a-f \rVert \geqslant\left\lVert a_0^*-f\right\rVert, \quad a \in \mathscr{A}_0
$$
holds. Alternatively, if the element $a$ is in $\mathscr{A}$ but is not in $\mathscr{A}_0$ then, because condition (1.13) is not obtained we have the bound
$$
\begin{aligned}
\lVert a-f \rVert & \geqslant\lVert a \rVert-\lVert f \rVert \\
& >\lVert f \rVert \\
& \geqslant\left\lVert a_0^*-f\right\rVert,
\end{aligned}
$$
where the last line makes further use of the fact that the zero element is in $\mathscr{A}_0$. Hence expression $(1.14)$ is satisfied for all $a$ in $\mathscr{A}$, which proves that $a_0^*$ is a best approximation.





### Some criteria: Norms

Pros and cons of various $L_P$- norms:

-   2-norm 
    -   continuous, calculus toolbox is usable
    -   easy to calculate (actually a really helpful property)
    -   meaningful, explainable in statistics
    
    -   however, very sensitive when outliers exist
    
-   1-norm
    -   good at deal with outliers
    -   hard to calculate for non-smooth
        -   recall subgradient
    
-   $\infty$-norm 

    -   considered as a overall control, since:



**Definition** $\mathscr{C}[a, b]$ is all real-valued functions that are defined on the interval $[a, b]$ of the real line.



**Theorem** 1.3 
For all $e$ in $\mathscr{C}[a, b]$ the inequalities
$$
\lVert e \rVert_1 \leqslant(b-a)^{\frac{1}{2}}\lVert e \rVert_2 \leqslant(b-a)\lVert e \rVert_{\infty}
$$
hold.

>   **Remark** if we can control $\infty$-norm in a certain range, then the others like 1-norm and 2-norm are controlled consequently. But the reverse is not true, if we control some $p$-norms to a relative small value, the $\infty$-norm may not even change.







## The uniqueness of best approximations

**Theorem** 2.1
Let $\mathscr{B}$ be a normed linear space. Then, for any $f \in \mathscr{B}$ and for any $r>0$, the ball
$$
\mathcal{N}(f, r)=\lbrace x:\lVert x-f \rVert \leqslant r, x \in \mathscr{B}\rbrace
$$
is convex.

**Proof** ...



**Theorem** 2.2
Let $\mathscr{A}$ be a convex set in a normed linear space $\mathscr{B}$, and let $f$ be any point of $\mathscr{B}$ such that there exists a best approximation from $\mathscr{A}$ to $f$. Then the set of best approximations is convex.

### Conditions for uniqueness of the best approximation



**Theorem** 2.3 
Let $\mathscr{A}$ be a compact and strictly convex set in a normed linear space $\mathscr{B}$. Then, for all $f \in \mathscr{B}$, there is just one best approximation from $\mathscr{A}$ to $f$.

**Definition** (convex norm) The norm is defined to be strictly convex if and only if the unit ball centered on the origin, namely $\mathscr N (0,1)$, is strictly convex. 



**Theorem** 2.4
Let $\mathscr{A}$ be a convex set in a normed linear space $\mathscr{B}$, whose norm is strictly convex. Then, for all $f \in \mathscr{B}$, there is at most one best approximation from $\mathscr{A}$ to $f$.



**Theorem** 2.5
Let $A$ be a compact set in a metric space $B$, such that for every $f$ in $B$ there is only one best approximation in $A , X(f)$ say. Then the operator $X$, defined by the best approximation condition, is continuous.

**Proof** (hard)
