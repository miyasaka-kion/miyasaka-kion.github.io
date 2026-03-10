---
title: /posts
layout: home
permalink: /posts

---



由于我奇懒无比，我已经很久没有写博客了。以前写过的放在[这里](https://www.cnblogs.com/kion)。

下面的内容跟链接里的是一样的，为了不让界面太空所以放了一两个在这里。

### 一些学习笔记

<section>
<ul>
{% for post in site.rambling %}
  {% if post.categories contains 'dev' %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>
</section>


<section>
<ul>
{% for post in site.rambling %}
  {% if post.categories contains 'approx' %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>
</section>



#### C++

<section>
<ul>
{% for post in site.rambling %}
  {% if post.categories contains 'cpp' %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>
</section>


