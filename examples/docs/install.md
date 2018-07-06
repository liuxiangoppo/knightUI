<style>
    .code {
        background-color:#f7f7f7;
        padding: 20px;
    }
</style>
# 安装
----
KUI目前并未有直接上传到npm的打算, 因为开发背景是在企业内部进行使用, 所以需要上传到内部的npm服务器中, 具体如何使用请继续往下看:
## 使用nrm进行npm管理
### npm介绍
npm是一个NPM源管理器, 允许你快速的在各个NPM源进行切换：
### nrm安装
<pre><code>npm install nrm -g  //进行全局安装</code></pre>
### 列出所有源
<pre><code>nrm ls  //列出所有的源</code></pre>
### 切换源
<pre><code>nrm use [registry]  //适用use指令切换指定的registry</code></pre>
### 增加源
<pre><code>nrm add [registry] [name]  //增加registry</code></pre>
### 移除源
<pre><code>nrm del [registry]  //移除registry</code></pre>
### 查看当前使用源
<pre><code>nrm current</code></pre>
### 测速
<pre><code>nrm test</code></pre>
## 将公司内部registry添加到nrm中
<pre><code>nrm add http://172.16.100.3:4873/ witparking  ##将公司内部的registry添加到nrm的管理中</code></pre>
### 将目前的npm源切换为witparking
<pre><code>nrm use witparking</code></pre>
## 通过npm安装KUI
<pre><code>npm install kui --save</code></pre>