---
title: Approximation Theory and Method part 3
categories: approx
---

# Approximation Theory and Method part 3

### Basic properties of divided differences

Let $\left\lbrace x_i ; i=0,1, \ldots, n\right\rbrace$ be any $(n+1)$ distinct points of $[a, b]$, and let $f$ be a function in $\mathscr{C}[a, b]$. The coefficient of $x^n$ in the polynomial $p \in \mathscr{P}_n$ that satisfies the interpolation conditions
$$
p\left(x_i\right)=f\left(x_i\right), \quad i=0,1, \ldots, n
$$
is defined to be a divided difference of order $n$, and we use the notation $f\left[x_0, x_1, \ldots, x_n\right]$ for its value. We note that the order of a divided difference is one less than the number of arguments in the expression $f[., ., \ldots,.] . $ Hence $ f\left[x_0\right]$ is a divided difference of order zero, which, by definition, has the value $f\left(x_0\right)$. Moreover, when $n \geqslant 1$, it follows from equations (4.3) and (4.6) that the equation
$$
f\left[x_0, x_1, \ldots, x_n\right]=\sum_{k=0}^n \frac{f\left(x_k\right)}{\prod_{\substack{i=0 \ j \neq k}}^n\left(x_k-x_j\right)}
$$
is satisfied. We see that the divided difference is linear in the function values $\left\lbrace f\left(x_i\right) ; i=0,1, \ldots, n\right\rbrace$, but formula (5.2) is not the best way of calculating the value of $f\left[x_0, x_1, \ldots, x_n\right]$. A better method is described in Section 5.3.

对于
$$
l_k(x)=\prod_{\substack{j=0 \ j \neq k}}^n\left(x-x_j\right) /\left(x_k-x_j\right), \quad a \leqslant x \leqslant b .
$$
$x^n$ 的系数是 $\frac{1}{\prod_{\substack{i=0 \ j \neq k}}^n\left(x_k-x_j\right)}$. 所以 $f\left[x_0, x_1, \ldots, x_n\right]=\sum_{k=0}^n \frac{f\left(x_k\right)}{\prod_{\substack{i=0 \ j \neq k}}^n\left(x_k-x_j\right)}$. 



**Theorem 5.1**
Let $f \in \mathscr{C}^{(n)}[a, b]$ and let $\left\lbrace x_i ; i=0,1, \ldots, n\right\rbrace$ be a set of distinct points in $[a, b]$. Then there exists a point $\xi$, in the smallest interval that contains the points $\left\lbrace x_i ; i=0,1, \ldots, n\right\rbrace$, at which the equation
$$
f\left[x_0, x_1, \ldots, x_n\right]=f^{(n)}(\xi) / n !
$$
is satisfied.

Recall that 

>   **Theorem 4.2**
>   For any set of distinct interpolation points $\left\lbrace x_i ; i=0,1, \ldots, n\right\rbrace$ in $[a, b]$ and for any $f \in \mathscr{C}^{(n+1)}[a, b]$, let $p$ be the element of $\mathscr{P}_n$ that satisfies the equations (4.2). Then, for any $x$ in $[a, b]$, the error (4.12) has the value
>
> $$
> e(x)=\frac{1}{(n+1) !} \prod_{j=0}^n\left(x-x_j\right) f^{(n+1)}(\xi)
> $$
>   where $\xi$ is a point of $[a, b]$ that depends on $x$.    

误差估计:
$$
f(x)-p_n(x) \approx\left\lbrace\prod_{j=0}^n\left(x-x_j\right)\right\rbrace f\left[x_0, x_1, \ldots, x_{n+1}\right]
$$
没空写了，有空再填坑罢（）
