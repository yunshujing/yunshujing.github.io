---
title: 暑期ACM-Week3
createTime: 2024/08/05 22:00:00
tags:
  - 学习
  - 代码
  - ACM
permalink: /article/p073rs7n/
---
<a name="lYPCh"></a>
## 贪心算法
贪心算法（Greedy Algorithm），也称贪婪算法，是一种在每一步决策中都选择当前状态下最优的选项，以期达到全局最佳结果的优化算法。其核心思想是通过一系列局部最优选择来实现整体最优解。
<a name="e9zKT"></a>
### 定义
贪心算法的基本定义如下：<br />在每一步决策时，总是采取在当前状态下的最好选择，从而希望导致结果是最好或最优的。<br />贪心算法不考虑未来可能产生的影响，只关注当前的局部最优解。<br />贪心算法通常运行迅速，因为它们不涉及复杂的回溯或多次迭代。
<a name="z4r4l"></a>
### 特性
**局部最优选择**：在每步只选择当前看似最优的决策，不考虑长远后果。<br />**不回溯**：一旦做出选择，不会回溯或重新评估这些决策。<br />**简单直接**：由于算法逻辑简单，易于编码和快速实现。<br />**高效性**：运行迅速，因为不需要复杂的回溯或多次迭代。
<a name="EPyz5"></a>
### 原理与使用方法
贪心算法的基本原理是从问题的某个初始解出发，逐步地进行选择，直到达到最终求解的过程。每一步选择都是基于当前的局部最优，并且不能回退。因此累积到的这些局部最优的选择结果，就是全局最优解。<br />使用贪心算法需要满足以下两个条件：<br />问题具有贪心选择性质，即使用当前最优解能够得到全局最优解；<br />问题的子问题具有最优子结构性质，即原问题的最优解可以通过对子问题的最优解组合而得到。
<a name="ylpmz"></a>
### 设计步骤
设计贪心算法一般包括以下几个步骤：<br />确定问题的最优子结构；<br />基于问题的最优子结构设计一个递归算法；<br />证明我们做出的贪心选择，只剩下一个子问题；<br />证明贪心选择总是安全的；<br />设计一个递归算法实现贪心策略；<br />将贪心算法转化为迭代算法。
<a name="BrSqp"></a>
### 贪心算法的应用示例：
**最小生成树**：在加权无向图中，Prim算法和Kruskal算法都是基于贪心策略的算法，用于求解最小生成树。<br />**活动选择问题**：给定一系列活动，每个活动都有一个开始时间和一个结束时间，求可以安排的最大活动数，使得没有两个活动的时间重叠。这个问题可以通过贪心算法求解。<br />**背包问题（部分情况）**：虽然背包问题通常使用动态规划求解，但在某些特定条件下（如0-1背包问题的贪心版本，即“分数背包问题”），贪心算法也可以得到最优解。<br />**哈夫曼编码**：在数据压缩中，哈夫曼编码是一种使用贪心算法构建的用于无损数据压缩的广泛使用的可变长编码方式。<br />**例如**：在找零钱问题中，假设我们有面值为1元、5元、10元、50元、100元、500元的货币，现在要找零786元，贪心算法会从最大面额开始逐步减少，直到找到最优解。
<a name="nTN6L"></a>
### 贪心算法的优缺点：
**优点**：<br />算法简单，易于实现。<br />在某些问题中，能够产生最优解或近似最优解。<br />时间复杂度低，效率高。<br />**缺点**：<br />不适用于所有问题，特别是那些需要全局最优解的问题。<br />贪心策略的选择对结果有很大影响，如果贪心策略选择不当，可能导致无法得到最优解。
<a name="k656w"></a>
### 例题
[P1478 陶陶摘苹果（升级版）](https://www.luogu.com.cn/problem/P1478)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;

struct apple{
    int high;
    int power;
}ap[N];

int cmp(apple a,apple b){
    return a.power<b.power;
}


signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n,s;//苹果数，力气
    cin>>n>>s;

    int a,b;//椅子高度，手臂长
    cin>>a>>b;

    for(int i=1;i<=n;i++){
        cin>>ap[i].high>>ap[i].power;
    }

    sort(ap+1,ap+n+1,cmp);//对苹果按照力气从小到大排序

    //摘苹果
    int ans=0;
    for(int i=1;i<=n;i++){
        //判断高度是否足够
        if(ap[i].high>a+b){//超出高度
            continue;
        }
        else if(s>=ap[i].power){
            s-=ap[i].power;
            ans++;
        }
    }
    cout << ans<<endl;
    return 0;
}
```
[P2240 【深基12.例1】部分背包问题](https://www.luogu.com.cn/problem/P2240)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;

struct gold{
    int x;
    int y;
    double pj;
}jb[N];

int cmp(gold a,gold b){
    return a.pj>b.pj;
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n,t;
    cin>>n>>t;

    for(int i=0;i<n;i++){
        cin>>jb[i].x>>jb[i].y;
        jb[i].pj=(double)jb[i].y/(double)jb[i].x;
    }

    sort(jb,jb+n,cmp);

    double sum=0;
    for(int i=0;i<n;i++){
        if(t>=jb[i].x){
            sum+=jb[i].y;
            t-=jb[i].x;
        }
        else if(t>0){
            sum+=(t)*jb[i].pj;
            break;
        }
    }
    cout<<fixed<<setprecision(2)<<sum;
    return 0;
}
```
[P1803 凌乱的yyy / 线段覆盖](https://www.luogu.com.cn/problem/P1803)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;

struct time1{
    int x;
    int y;
} bs[N];

bool cmp(time1 a, time1 b){
    return a.y < b.y;
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);//关闭同步流

    int n;
    cin >> n;
    for (int i = 0; i < n;i++){
        cin >> bs[i].x >> bs[i].y;
    }

    sort(bs, bs + n,cmp);
    int cnt=0;int last = -1;
    for (int i = 0; i < n;i++){
        if(last<=bs[i].x){
            cnt++;
            last = max(last, bs[i].y);
        }
    }
    cout << cnt << endl;
    return 0;
}
```
[P1106 删数问题](https://www.luogu.com.cn/problem/P1106)
<a name="OqkMA"></a>
## 双指针
<a name="vvmAJ"></a>
### 概念
双指针（Two Pointers）是一种在遍历对象过程中，使用两个指针进行访问以达到特定目的的算法思想。根据两个指针的移动方向和相对位置，可以分为以下几种类型：<br />**快慢指针**：两个指针从同一侧开始遍历数组或链表，一个指针移动速度快（快指针），另一个移动速度慢（慢指针）。这种模式常用于解决需要判断某个条件是否满足的问题，如寻找有序数组中的某个值、判断是否存在某对元素等。<br />**对撞指针**：两个指针分别从数组的两端开始向中间移动，通常一个指针向前移动，另一个向后移动。这种模式适用于需要找到一对特定条件下的元素对，例如两数之和问题。<br />**滑动窗口**：当两个指针指向同一数组且遍历方向相同且不相交时，称为滑动窗口。这种模式常用于区间搜索问题，如寻找最长的子串满足某种条件
<a name="UDIli"></a>
### 例题
<a name="o5xWC"></a>
#### 回文数
```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    string s;cin>>s;

    int i=0,j=s.size()-1;

    while(i<j){
        if(s[i]!=s[j]){
            cout<<"No"<<endl;
            return 0;
        }
        i++;j--;
    }
    cout<<"Yes"<<endl;
    return 0;
}
```
<a name="aY9lJ"></a>
#### 找指定和的整数对
输入n个整数，放入数组a。找出其中的两个数，他们的和等于m。<br />**输入样例**：
```cpp
9 28
21 4 5 6 13 65 32 9 23
```
**输出**
```cpp
5 23
```
**解题代码**
```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,m;
    cin>>n>>m;
    int a[10000];
    for(int i=0;i<n;i++){
        cin>>a[i];
    }

    sort(a,a+n);

    int i=0,j=n-1;
    while(i<j){
        if(a[i]+a[j]>m){
            j--;
        }
        if(a[i]+a[j]<m){
            i++;
        }
        if(a[i]+a[j]==m){
            cout<<a[i]<<" "<<a[j]<<endl;
            i++;
        }
    }
    return 0;
}
```
<a name="CyTA0"></a>
#### 移动0
给定一个数组nums，编写一个函数将所有0移动到数组的末尾，同时保持非零元素的相对顺序<br />**输入**：nums = [0,1,0,3,12]<br />**输出**：[1,3,12,0,0]<br />**解题代码**
```cpp
int a[5] = { 0,1,0,3,12 };
int i = 0, j = 0;
while (j <= 4) {
    if (a[i] != 0) {
        i++, j++;
    }
    else if (a[j] != 0) {
        swap(a[i], a[j]);
        i++;
    }
    j++;
}
for (int i = 0; i < 5; i++) {
    cout << a[i] << " ";
}
return 0;
```
<a name="QJjEs"></a>
#### 寻找区间和
给定一个长度为n的数组a和一个数s；在这个数组中寻找一个区间，使得这个区间的元素之和等于s，输出区间的起点和终点<br />**输入样例**：
```cpp
15 6
6 1 2 3 4 6 4 2 8 9 10 11 12 13 14
```
**输出样例**
```cpp
0 0
1 3
5 5
6 7
```
**解题代码**<br />略
<a name="GYtmw"></a>
#### A-B 数对
[A-B 数对](https://www.luogu.com.cn/problem/P1102)
```cpp
#include<bits/stdc++.h>
using namespace std;

#define int long long
const int maxn = 2e6+10;
int a[maxn];

signed main(){
    int n, c;
    cin >> n >> c;

    for(int i = 1; i <= n; i++) {
        cin >> a[i];
    }

    sort(a + 1, a + n + 1);

    // i 是用来枚举b
    // j and k are used to determine the interval range of a
    // i is used to determine the left endpoint of the interval
    // k is used to determine the right endpoint of the interval
    long long ans = 0;
    for(int i = 1, j = 1, k = 1; i <= n; i++) {
        while(j <= n && a[j] - a[i] < c) j++;
        while(k <= n && a[k] - a[i] <= c) k++;
        ans += k - j;
    }

    cout << ans << "\n";
    return 0;
}
```
<a name="DCHuU"></a>
## 前缀和与差分
<a name="iNKA6"></a>
### 概括
**一维前缀和**：<br />定义：s[i]前i项的和<br />构造：s[i] = s[i-1] + a[i]<br />使用：快速求出区间和<br />求出3-5之间的区间和：s[5] - s[2] = (1+2+3+4+5) - (1+2)

**一维差分**（标记思想）<br />定义：b[i]前ix项的和等于原数组a[i]<br />构造：b[i] = a[i] - a[i-1]<br />使用：快速区间修改<br />在3-5之间都+1，b[3]++,b[6]--<br />求和的时候同时进行前缀和运算即可

**二维前缀和**<br />定义：s[i][j]第i行，第j列的子矩阵的和<br />构造：s[i][j] = s[i-1][j] + s[i][j-1] + a[i][j] - s[i-1][j-1]<br />使用：快速求出矩阵中任意子矩阵（2，2）（5，5）<br />sum = s[5][5] - s[1][5] - s[5][1] + s[2][2]

**二维差分**<br />详见解题集：地毯
<a name="PA0gR"></a>
### 前缀和的概念和用法
**概念**：<br />前缀和是指一个数组的某下标之前的所有数组元素的和（即`数列的前n项求和`）。在算法中，前缀和是一种重要的预处理手段，能够降低算法的时间复杂度，快速地求出某一段的和，对于处理区间之间的问题往往十分高效。<br />**用法**：

1. **预处理前缀和数组**：首先，对原始数组进行一次遍历，累加计算出前缀和数组的每一个元素。具体实现时，可以创建一个与原始数组相同长度的前缀和数组，其中第`i`个元素代表原始数组从下标`0`到下标`i-1`的元素之和（或者从下标`1`到下标`i`的元素之和，具体取决于实现方式）。
2. **查询区间和**：在预处理得到前缀和数组后，可以通过计算两个位置的前缀和之差来快速得到任意区间的和。例如，对于区间`[a, b]`，其和等于前缀和数组中第`b+1`个元素（如果下标从`0`开始）减去第a个元素（如果`a`不为`0`）。

**作用**：<br />1.高效计算区间和：前缀和可以用来快速计算数组中某个区间的和。例如，要计算区间`l,r`之间的和，只需用`s[r]`减去`s[l-1]`即可。<br />2.二维前缀和：在处理二维数组时，如矩阵的最大子矩阵和问题，前缀和同样适用。通过预处理二维前缀和，可以大大降低查询的时间复杂度。
<a name="M3m1W"></a>
### 差分的概念和用法
**概念**：<br />差分，又名差分函数或差分运算，是数学中的一种概念，差分的结果反映了离散量之间的一种变化，是研究离散数学的一种工具。差分运算可以看作是`前缀和的逆运算`，它将原函数映射到其差分表示上。差分运算在数学、物理和信息学等领域有广泛应用。<br />**用法**：

1. **构建差分数组**：对于一维数组，差分数组d的每个元素`d[i]`表示原数组a中第i个元素与第i-1个元素的差（即`d[i] = a[i] - a[i-1]`，注意`d[0]`通常没有定义或设为`0`）。通过差分数组，可以方便地实现对原数组某个区间的批量加减操作。
2. **区间修改**：当需要对原数组的某个区间[l, r]内的所有元素都加上一个值c时，可以通过修改差分数组来实现。具体操作为：`d[l] += c`（表示从l位置开始增加c），`d[r+1] -= c`（表示在r+1位置结束增加，防止对后续区间产生影响）。之后，通过对差分数组进行前缀和运算，即可得到修改后的原数组。
3. **降低时间复杂度**：通过差分，可以将区间修改操作的时间复杂度从`O(n)`降低到`O(1)`（对于差分数组的修改操作）和`O(n)`（对于通过前缀和还原原数组的操作），从而在处理大量区间修改和查询问题时提高效率。

**作用**：<br />1.快速修改区间值：差分法主要用于对数组的某一个区间每个数加上一个常数。例如，如果要将区间`l,r`的所有元素赠加一个常数`d`,则只需将差分数组`c`中的`c[i]`加上`d`,并且`c[r+1]`减去`d`。<br />2.逆向操作：当需要对原数组进行某些特定的修改时（如在某个区间内增加或减少某个值)，可以通过差分数组来实现。首先对差分数组进行相应的修改，然后通过前缀和恢复原数组。

综上所述，前缀和与差分是算法中常用的两种技巧，它们分别通过预处理和逆运算的方式，降低了算法的时间复杂度，提高了处理区间问题的效率。<br />**详见解题集（求区间和~最高的牛奶）**<br />![1722439460586.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722439581061-25955f17-45f1-48e2-a5be-d6181f9b10ff.png#averageHue=%23fefefe&clientId=u3dbdc728-d066-4&from=drop&id=Cw6WD&originHeight=1062&originWidth=498&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=76446&status=done&style=none&taskId=u34b3874c-d727-45a6-b99e-527cdfdf782&title=)
<a name="QHC85"></a>
## 整数二分&&实数二分
<a name="lKoxz"></a>
### 原理理解
搜索法和二分法<br />**搜索法**<br />把区间`[a, b]`分成n等份，每个子区间长度是`x`，计算点`xk = a + k*x`(k=0,1,2,3,4,…,n)的函数值`f(xk)`，<br />若`f(xk) = 0`，则是一个实根，若相邻两点满足`f(xk) * f(xk+1) < 0`，则在`(xk, xk+1)`内至少有一个实根，可以取`(xk+ xk+1)/2`为近似根。　　<br />**二分法**<br />如果确定`f(x)`在区间`[a, b]`内连续，且`f(a) * f(b) < 0`，则至少有一个实根。<br />二分法的操作，就是把`[a, b]`逐次分半，检查每次分半后区间两端点函数值符号的变化，确定有根的区间。<br />**用二分的两个条件**：<br />上下界`[a, b]`确定<br />函数在`[a, b]`内单调。<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722701926554-a02c0565-77ef-4799-bc6f-eadc6bb3e503.png#averageHue=%23f9f7f7&clientId=uf4bbd3b6-ddaa-4&from=paste&height=301&id=u279c063c&originHeight=451&originWidth=691&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=28658&status=done&style=none&taskId=uc4876dac-e946-4cf6-bf0a-b0a11c9edc5&title=&width=460.6666666666667)<br />**二分法复杂度**<br />n次二分后，区间缩小到`(b - a)/2n`。<br />给定a、b和精度要求ε，可以算出二分次数`n`，即满足`(b - a)/2n < ε`。<br />二分法的复杂度是`O(logn)`的。<br />例如，如果函数在区间`[0, 100000]`内单调变化，要求根的精度是`10-8`，那么二分次数是`44`次。
<a name="N5XWd"></a>
### 整数二分
二分模板一共有两个，分别适用于不同情况。<br />**算法思路**：<br />假设目标值在闭区间`[l, r]`中， 每次将区间长度缩小一半，当`l = r`时，我们就找到了目标值。
```cpp
int bin_search(int *a, int n, int x){  //a[0]～a[n-1]是单调递增的
    int left = 0, right = n;              //注意：不是 n-1
    while (left < right) {
        int mid = left + (right-left)/2; 
        //int mid = (left + right) >> 1;  
        if (a[mid] >= x)  right = mid;
        else    left = mid + 1;
    }                   //终止于left = right
    return left;       //特殊情况：a[n-1] < x时，返回n
}
```
（1）代码执行完后，left = right，即答案所处的位置。<br />（2）中间值mid<br />`mid =  left + (right-left)/2 `<br />`mid = (left +  right) >> 1`<br />如果`left + right`很大，用前一种更好。<br />**版本1**：<br />当我们将区间`[l, r]`划分成`[l, mid]`和`[mid + 1, r]`时，其更新操作是`l = mid + 1`或者`r = mid`;（计算`mid`时不需要加1）<br />C++ 代码模板：
```cpp
int bsearch_1(int l, int r)
{
     while (l < r)
     {
        int mid = l + r >> 1;  //等同于mid=(l+r)/2
        if (check(mid)) r = mid;
        else l = mid + 1;  //+1为避免死循环
    }
    return l;
}
```
**版本2**：<br />当我们将区间`[l, r]`划分成`[l, mid - 1]`和`[mid, r]`时，其更新操作是`l = mid`或者`r = mid - 1`;（此时为了防止死循环，计算`mid`时需要加1）<br />C++ 代码模板：
```cpp
int bsearch_2(int l, int r)
{
    while (l < r)
    {
        int mid = l + r + 1 >> 1;
        if (check(mid)) l = mid;
        else r = mid - 1;
    }
    return l;
}
```
<a name="tGVeC"></a>
### 实数二分
```cpp
const double eps =1e-7;        //精度。如果下面用for，可以不要eps
while(right - left > eps){     //for(int i = 0; i<100; i++){
    double mid = left+(right-left)/2;
    if (check(mid)) right = mid;           //判定，然后继续二分
    else            left  = mid;
}
```
循环用2种方法都可以：<br />`while(right - left > eps)  { ... }`<br />`for(inti = 0; i<100; i++) { ... }`<br />如果用`for循环`，由于循环内用了二分，执行100次，相当于 `1/2100`的精度，比`eps`更精确。<br />[8.2二分法.pptx](https://www.yuque.com/attachments/yuque/0/2024/pptx/44491236/1722700339168-6b2863b2-38a5-466e-9d86-c1cfe389666c.pptx)
<a name="ra48n"></a>
## 解题集
<a name="VRwbt"></a>
### 陶陶摘苹果（升级版）
[P1478 陶陶摘苹果（升级版）](https://www.luogu.com.cn/problem/P1478)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722348146407-68968e79-1eb7-4b87-9906-7d645e49edbe.png#averageHue=%23d5d5d5&clientId=u86d13a13-7b95-4&from=paste&height=863&id=u85e0a7a0&originHeight=1295&originWidth=1036&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=105285&status=done&style=none&taskId=uddc18a4d-22a5-4fde-a247-05d6194f6ae&title=&width=690.6666666666666)<br />贪心：先将苹果根据力气从小到大排序，尽量省力；<br />然后开始高度判断，符合高度的就摘下来；<br />因为要求的是最多的苹果数量所以要尽量省力
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;

struct apple{
    int high;
    int power;
}ap[N];

int cmp(apple a,apple b){
    return a.power<b.power;
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n,s;//苹果数，力气
    cin>>n>>s;

    int a,b;//椅子高度，手臂长
    cin>>a>>b;

    for(int i=1;i<=n;i++){
        cin>>ap[i].high>>ap[i].power;
    }

    sort(ap+1,ap+n+1,cmp);//对苹果按照力气从小到大排序

    //摘苹果
    int ans=0;
    for(int i=1;i<=n;i++){
        //判断高度是否足够
        if(ap[i].high>a+b){//超出高度
            continue;
        }
        else if(s>=ap[i].power){
            s-=ap[i].power;
            ans++;
        }
    }
    cout << ans<<endl;
    return 0;
}
```
<a name="V3Ju8"></a>
### 骑士的工作
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722348184465-fecd7431-fbbf-4d50-a40a-4bdc0ff68631.png#averageHue=%23d8d8d8&clientId=u86d13a13-7b95-4&from=paste&height=787&id=ud779a447&originHeight=1180&originWidth=1032&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=76171&status=done&style=none&taskId=ubdc6fdd9-6816-4092-b663-67f8a0d5eee&title=&width=688)<br />例题中5个头和4个头要分开算，每次挑选一次骑士，之前理解错误合并计算报错；<br />这里用了动态数组，因为骑士只能用一次，用完则删<br />最后判断有没有剩余头
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e5 + 10;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);//关闭同步流

    int n, m;
    cin >> n >> m;
    int sum=0;
    vector <int> t;
    for (int i = 0; i < n; i++){
        int tou;
        cin >> tou;//头
        t.push_back(tou);
    }

    vector <int> a;
    for (int i = 0; i < m; i++){
        int qs;
        cin >> qs;//骑士
        a.push_back(qs);
    }

    sort(a.begin(), a.end());//骑士从小到大排序
    int money=0;
    int tou = 0, qis = 0;
    int cnt = n;
    for (int i = 0; i < n; i++){//遍历头
        tou = t[i];
        int size1 = a.size();
        for (int j = 0; j < size1; j++){//遍历骑士
            qis = a[j];
            if (tou <= qis){
                money += a[j];
                a.erase(a.begin() + j);
                cnt--;
                break;
            }
        }
    }

    if(cnt>0)//头没杀完
        cout << "you died!" << endl;
    else
        cout << money << endl;
    return 0;
}
```
<a name="HH9nr"></a>
### 混合牛奶 Mixing Milk
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722348251429-72be0293-d944-421d-a8ab-4375174421a1.png#averageHue=%23d4d4d4&clientId=u86d13a13-7b95-4&from=paste&height=833&id=u4823cee8&originHeight=1249&originWidth=919&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=102588&status=done&style=none&taskId=uc3a60788-5584-4770-b9f8-e00eef25abf&title=&width=612.6666666666666)<br />贪心：为了求性价比，单价从小到大排序；<br />需求量 > 供给 ？全收 : 剩余部分
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;

struct nongmin{
int x;
int y;
double pj;
}jb[N];

int cmp(nongmin a,nongmin b){
    return a.x<b.x;
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n,t;
    cin>>n>>t;//总量，个数

    for(int i=0;i<t;i++){
        cin>>jb[i].x>>jb[i].y;//x为单价y为数量
    }

    sort(jb,jb+t,cmp);//根据单价从小到大采购

    double sum=0;
    for(int i=0;i<n;i++){
        if(n>=jb[i].y){
            sum += jb[i].x * jb[i].y;
            n-=jb[i].y;
        }
        else if(n>0){
            sum += (n)*jb[i].x;
            break;
        }
    }
    cout<<fixed<<setprecision(0)<<sum;
    return 0;
}
```
<a name="RPjvW"></a>
### 排队接水
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722348318627-751f5020-6676-4392-b962-9a349c7f90e6.png#averageHue=%23d7d7d7&clientId=u86d13a13-7b95-4&from=paste&height=545&id=uf9b0e03d&originHeight=817&originWidth=923&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=50480&status=done&style=none&taskId=u53b93d2f-3ffa-4144-a1cd-bfbda13f76b&title=&width=615.3333333333334)<br />等待时间从小到大排序，每个人的等待时间是前面人的总和，求和平均
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;

struct paidui{
    int id;
    double time;
} pd[N];

int cmp(paidui a,paidui b){
    return a.time < b.time;
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n;
    cin >> n;
    for (int i = 0; i < n; i++){
        cin >> pd[i].time;
        pd[i].id = i+1;
    }

    sort(pd, pd + n,cmp);

    for (int i = 0; i < n;i++){
        cout << pd[i].id << " ";
    }
    double sum = 0.00,x=0.00;
    for (int i = 0; i < n; i++){
        for (int j = 0; j < i; j++){
            x += pd[j].time;
        }
        sum += x;
        x = 0;
    }
    sum = sum / (double)n;
    cout <<endl << fixed << setprecision(2) << sum << endl;
    return 0;
}
```
<a name="tSMOc"></a>
### 凌乱的yyy / 线段覆盖
[P1803 凌乱的yyy / 线段覆盖](https://www.luogu.com.cn/problem/P1803)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722348391480-9cb3d44c-c825-443b-843f-b0d6c88f7daa.png#averageHue=%23d7d7d7&clientId=u86d13a13-7b95-4&from=paste&height=747&id=u513d5658&originHeight=1121&originWidth=921&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=75909&status=done&style=none&taskId=ud0b2b5dd-cf7f-451b-9e82-e6c39caac36&title=&width=614)<br />为了参加更多的比赛，所以结束时间越靠前越容易参加的多<br />则排序结束时间，再与开始时间比较
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;

struct time1{
    int x;
    int y;
} bs[N];

bool cmp(time1 a, time1 b){
    return a.y < b.y;
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);//关闭同步流
    
    int n;
    cin >> n;
    for (int i = 0; i < n;i++){
        cin >> bs[i].x >> bs[i].y;
    }

    sort(bs, bs + n,cmp);
    int cnt=0;int last = -1;
    for (int i = 0; i < n;i++){
        if(last<=bs[i].x){
            cnt++;
            last = max(last, bs[i].y);
        }
    }
    cout << cnt << endl;
    return 0;
}
```
<a name="jbKnk"></a>
### 小A的糖果
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722348439692-27829e48-4914-40c1-9e5b-461777631ee6.png#averageHue=%23d7d7d7&clientId=u86d13a13-7b95-4&from=paste&height=877&id=ud6c5f9c0&originHeight=1315&originWidth=772&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=76971&status=done&style=none&taskId=u77d4ac3b-0100-4940-9bb4-08711f26d47&title=&width=514.6666666666666)<br />如果超出，先看后者够不够？后者减少 ：后者清零前者再减少还需减的量
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e5+10;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n, x;
    cin >> n >> x;
    int a[N];int sum = 0;//总共要吃的糖
    cin >> a[0];//先吃第一个，否则最后一个算不到！！！
    for (int i = 1; i < n; i++){
        cin >> a[i];//糖果列表
        if (a[i] + a[i - 1] > x){//如果超出
            int cnt = a[i] + a[i - 1] - x;//要吃的量
            if(cnt>a[i]){//如果后者不够
                a[i-1] = cnt - a[i];//前者吃掉剩余的糖
                a[i] = 0;//后者清空
            }
            else{
                a[i] -= cnt;
            }
            sum += cnt;
        }
    }
    cout << sum << endl;
    return 0;
}
```
<a name="qUsTJ"></a>
### 部分背包问题
[P2240 【深基12.例1】部分背包问题](https://www.luogu.com.cn/problem/P2240)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722348512464-20a5424b-01bf-46dd-8e4f-38268fb2d216.png#averageHue=%23d5d5d5&clientId=u86d13a13-7b95-4&from=paste&height=438&id=ub8f5dd2e&originHeight=657&originWidth=772&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=44723&status=done&style=none&taskId=u0e38efa7-c94d-4373-9f4c-a48145d72f5&title=&width=514.6666666666666)<br />贪心：排序性价比，从大到小拿；<br />总重量 < 承重量 ？全拿 ：拿部分
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;

struct gold{
    int x;
    int y;
    double pj;
}jb[N];

int cmp(gold a,gold b){
    return a.pj>b.pj;
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n,t;
    cin>>n>>t;

    for(int i=0;i<n;i++){
        cin>>jb[i].x>>jb[i].y;
        jb[i].pj=(double)jb[i].y/(double)jb[i].x;
    }

    sort(jb,jb+n,cmp);

    double sum=0;
    for(int i=0;i<n;i++){
        if(t>=jb[i].x){
            sum+=jb[i].y;
            t-=jb[i].x;
        }
        else if(t>0){
            sum+=(t)*jb[i].pj;
            break;
        }
    }
    cout<<fixed<<setprecision(2)<<sum;
    return 0;
}
```
<a name="qO8I0"></a>
### 铺设道路
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722348541419-e768aa47-51f1-40e6-bde7-f32aa5fc1102.png#averageHue=%23d6d6d6&clientId=u86d13a13-7b95-4&from=paste&height=742&id=u00280773&originHeight=1113&originWidth=763&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=80794&status=done&style=none&taskId=ubcef6769-ffaf-445e-bcf8-bbf2d0247c7&title=&width=508.6666666666667)<br />先找最低点，然后计算比最低点多出多少，同时更新低点<br />![](https://cdn.nlark.com/yuque/0/2024/jpeg/44491236/1722516634095-e562b5c3-a5d1-44d2-8e01-e640b6fa8356.jpeg)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e5 + 10;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n;
    cin >> n;
    int a[N];
    cin >> a[0];
    int min = a[0];
    int sum = a[0];
    for (int i = 1; i < n; i++)
    {
        cin >> a[i];
        if(min<a[i]){
            sum += a[i] - min;
        }
        min = a[i];
    }
    cout << sum << endl;
    return 0;
}
```
<a name="LdlCD"></a>
### 今年暑假不AC
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722348597343-2b19c7a3-635a-4148-b223-c3155f88c780.png#averageHue=%23d1d1d1&clientId=u86d13a13-7b95-4&from=paste&height=563&id=u9e578890&originHeight=845&originWidth=765&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=69637&status=done&style=none&taskId=u57ba9885-3f3e-4296-98b4-2de1340e4de&title=&width=510)<br />贪心：排序结束时间，比较开始时间，累计个数
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;

struct time1{
    int x;
    int y;
} bs[N];

bool cmp(time1 a, time1 b){
    return a.y < b.y;
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n;
    while (cin >> n && n != 0)
    {
        for (int i = 0; i < n; i++)
        {
            cin >> bs[i].x >> bs[i].y;
        }

        sort(bs, bs + n, cmp);
        int cnt = 0;
        int last = -1;
        for (int i = 0; i < n; i++)
        {
            if (last <= bs[i].x)
            {
                cnt++;
                last = max(last, bs[i].y);
            }
        }
        cout << cnt << endl;
    }
    return 0;
}
```
<a name="oiBmM"></a>
### 回文串
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722348684547-7e6db284-e63c-4c2e-a786-d9c869c0c625.png#averageHue=%23d4d4d4&clientId=u86d13a13-7b95-4&from=paste&height=293&id=u402de759&originHeight=439&originWidth=765&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=29075&status=done&style=none&taskId=ubf52f6fe-f061-410a-acb3-ad4331b656c&title=&width=510)
```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    string s;cin>>s;

    int i=0,j=s.size()-1;

    while(i<j){
        if(s[i]!=s[j]){
            cout<<"No"<<endl;
            return 0;
        }
        i++;j--;
    }
    cout<<"Yes"<<endl;
    return 0;
}
```
<a name="xt9Nq"></a>
### 统计硬币
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722348760600-85a3589a-ae3b-4de1-a56b-fe757c945f37.png#averageHue=%23d6d6d6&clientId=u86d13a13-7b95-4&from=paste&height=306&id=u8f479f2c&originHeight=459&originWidth=769&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=30125&status=done&style=none&taskId=ufb2cf067-5910-46de-8bd2-73c106c56f9&title=&width=512.6666666666666)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e5 + 10;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int t;
    cin >> t;

    while(t--){
        int n, m;
        cin >> n >> m;

        int cnt = 0;
        for (int i = 0; i <= n; i++)
        {
            for (int j = 0; j <= n - i; j++)
            {
                int k = n - i - j;
                {
                    if ( i + 2 * j + 5 * k == m)
                    {
                        cnt++;
                    }
                }
            }
        }
    cout << cnt << endl;
    }
    return 0;
}
```
<a name="k9283"></a>
### A-B 数对
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722348822152-fd3b4420-8e4a-497a-a3e4-2622c9baddf1.png#averageHue=%23d7d7d7&clientId=u86d13a13-7b95-4&from=paste&height=625&id=ue3e5b9ab&originHeight=938&originWidth=766&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=60236&status=done&style=none&taskId=uda572f25-0e41-40df-9203-271a84a3fb8&title=&width=510.6666666666667)
```cpp
#include<bits/stdc++.h>
using namespace std;

#define int long long
const int maxn = 2e6+10;
int a[maxn];

signed main(){
    int n, c;
    cin >> n >> c;

    for(int i = 1; i <= n; i++) {
        cin >> a[i];
    }

    sort(a + 1, a + n + 1);

    // i 是用来枚举b
    // j and k are used to determine the interval range of a
    // i is used to determine the left endpoint of the interval
    // k is used to determine the right endpoint of the interval
    long long ans = 0;
    for(int i = 1, j = 1, k = 1; i <= n; i++) {
        while(j <= n && a[j] - a[i] < c) j++;
        while(k <= n && a[k] - a[i] <= c) k++;
        ans += k - j;
    }

    cout << ans << "\n";
    return 0;
}
```
<a name="uYzx5"></a>
### 求区间和
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722438625413-e4c0ce96-6b0b-408b-81bc-3d9fd35aebb6.png#averageHue=%23d8d8d8&clientId=u3dbdc728-d066-4&from=paste&height=693&id=u943a2fb6&originHeight=1040&originWidth=864&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=68877&status=done&style=none&taskId=u18c0766e-7a7c-49e3-ad12-115ba1641a5&title=&width=576)
```cpp
#include<bits/stdc++.h>
using namespace std;

#define int long long
#define double long double
const int maxn = 1e5 + 100;

int s[maxn];
int s2[maxn];

signed main() {
	int n; cin >> n;
	for (int i = 1; i <= n; i++) {
		cin >> s[i];
		s2[i] = s[i] + s2[i - 1];//累计前i个的和的数组
	}
	int m; cin >> m;
	for (int i = 1; i <= m; i++) {
		int l, r; cin >> l >> r;//区间
		cout << s2[r] - s2[l - 1] << endl;//前r个的和 - 前l-1个的和 == l~r之间的和
	}
	return 0;
}
```
<a name="Nrf6w"></a>
### 最大加权矩形
![1722438676798.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722438715806-532af75a-9cab-41d5-9094-c09d83728433.png#averageHue=%23dadada&clientId=u3dbdc728-d066-4&from=drop&id=u0b7185c7&originHeight=1296&originWidth=861&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=79050&status=done&style=none&taskId=u6c37bd3d-b147-4c80-97c7-44bb1c7bd9e&title=)
```cpp
#include<bits/stdc++.h>
using namespace std;

#define int long long
#define double long double
const int maxn = 1e3 + 100;

int a[maxn][maxn];
int sum[maxn][maxn];

signed main() {
	int n; cin >> n;
	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= n; j++) {
			cin >> a[i][j];//导入矩阵
			sum[i][j] = sum[i - 1][j] + sum[i][j - 1] + a[i][j] - sum[i - 1][j - 1];
            //求和矩阵：左d和+上d和+自身-左上d和（重复）
		}
	}
	int maxx = -10000;
	for (int x1 = 1; x1 <= n; x1++) {
		for (int y1 = 1; y1 <= n; y1++) {
			for (int x2 = x1; x2 <= n; x2++) {
				for (int y2 = y1; y2 <= n; y2++) {
					int s = sum[x2][y2] - sum[x1-1][y2] - sum[x2][y1-1] + sum[x1-1][y1-1];
                    //坐标x2y2到x1y1的矩阵之和，要减去x1y2和x2y1的重复部分
					maxx = max(maxx, s);
				}
			}
		}
	}
	cout << maxx << endl;
	return 0;
}
```
<a name="OckVj"></a>
### 语文成绩
![1722438761856.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722438783468-d5f9718d-ba9f-4b7d-abfe-487afaf22ee6.png#averageHue=%23d7d7d7&clientId=u3dbdc728-d066-4&from=drop&id=udd6d3823&originHeight=955&originWidth=860&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=53910&status=done&style=none&taskId=u7a0b2868-92ba-43f9-af27-732b5d494f0&title=)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722475749893-784a633e-c9f3-4114-bbb6-193ba20d465e.png#averageHue=%23f3f2f2&clientId=udd57d6e4-5b57-4&from=paste&height=608&id=ufc9e3631&originHeight=912&originWidth=865&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=111905&status=done&style=none&taskId=u0389e375-1eb5-414b-b38e-4f34494e13c&title=&width=576.6666666666666)
```cpp
#include<bits/stdc++.h>
using namespace std;

#define int long long
#define double long double
const int maxn = 1e7 + 100;

//前缀和 ：某一序列前 n 项的和  (我昨天的C题就是用前缀和过的，否则会 TL)

/*
差分数组
原数组（差分数组的前缀和数组）
前缀和数组（原数组的前缀和数组）
*/
//修改差分 -> 原数组
//s2[x]+1 s2[x+1]-1 -> [x-y]

int a[maxn] = { 0 };
int b[maxn] = { 0 };

signed main() {
	int n, p; cin >> n >> p;
	for (int i = 1; i <= n; i++) {
		cin >> a[i];//原数组
	}
	while (p--) {
		int x, y, z; cin >> x >> y >> z;//调整
		b[x] += z;
		b[y + 1] -= z;//y之后不要加分，提前减去用来后续不加上
	}
	int minn = a[1] + b[1];
	for (int i = 1; i <= n; i++) {
		b[i] = b[i] + b[i - 1];//将差分数组变成原数组，根据前面的差分进行相加
		a[i] = a[i] + b[i];    //将两个数组相加//原数字加上差分
		minn = min(minn, a[i]);
	}
	cout << minn << endl;
}
```
<a name="J5zig"></a>
### 地毯
![1722438832678.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722438861739-a12ebfb3-bac4-4ef9-a1e2-9ab8484a3976.png#averageHue=%23d9d9d9&clientId=u3dbdc728-d066-4&from=drop&id=u0ffb9687&originHeight=1248&originWidth=575&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=44464&status=done&style=none&taskId=ue0a43958-0bf3-4519-b090-a7e4b0e4174&title=)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722475773979-e964c96c-57d4-4901-9bdd-11c0f0b52224.png#averageHue=%23f2f2f2&clientId=udd57d6e4-5b57-4&from=paste&height=267&id=uffdcaef0&originHeight=409&originWidth=864&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=83706&status=done&style=none&taskId=u9682456b-6a4e-452b-8f1c-7e05c255cc4&title=&width=564)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e5 + 10;

int a[2000][2000];

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n, m;
    cin >> n >> m;
    
    int x1, y1, x2, y2;
    while(m--){
        cin >> x1 >> y1 >> x2 >> y2;

        for (int i = x1; i <= x2;i++){
            a[i][y1]++;//首列记录
            a[i][y2 + 1]--;//尾列减少截至
        }
    }
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            a[i][j] += a[i][j - 1];//根据上一排的压缩数据展开
            cout << a[i][j]<<(j < n ? " " : "\n");
        }
    }

    return 0;
}
```
<a name="QoKW8"></a>
### 气球涂颜色
![1722438968275.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722438985986-0f89afc9-a26a-463e-a4b4-730cd61a0868.png#averageHue=%23d3d3d3&clientId=u3dbdc728-d066-4&from=drop&id=uc0e8fc23&originHeight=661&originWidth=921&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=45371&status=done&style=none&taskId=u61e8eab4-b589-4522-ba2c-b7914866d80&title=)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e5 + 10;
int x[N];
signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n;
    while(cin >> n&&n!=0){
        fill(x, x + N, 0);
        for (int i = 0; i < n; i++)
        {
            int a, b;
            cin >> a >> b;
            x[a]++;
            x[b + 1]--;
        }
        for (int k = 1; k <= n;k++){
            x[k] += x[k - 1];
            cout << x[k] << (k < n ? " " : "\n");
        }
    }
    return 0;
}
```
<a name="viTw4"></a>
### 最高的奶牛
![1722439025862.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722439042144-a95a12a7-8263-43e4-b94c-ae97e78e5259.png#averageHue=%23d3d3d3&clientId=u3dbdc728-d066-4&from=drop&id=ue43fe84e&originHeight=787&originWidth=921&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=55987&status=done&style=none&taskId=u28954cf8-feb8-4f77-a158-d02ef2cab5f&title=)<br />**思路**<br />每次 [ a , b ] 颜色次数+1，典型的区间修改，最后求每个气球颜色修改次数，区间操作即对差分数组操作，对差分数组求前缀和就是原数组，因此此题差分
```cpp
#include<iostream>
#include<map>
#include<algorithm>
using namespace std;

#define int long long
#define double long double
const int maxn = 1e5 + 100;

map<pair<int, int>, bool>cow;//去重
int s[maxn] = { 0 };

signed main() {
	int n, I, h, r; cin >> n >> I >> h >> r;
	// 几头  编号  高度  行
	while (r--) {
		int a, b;
		cin >> a >> b;
		if (a > b) {
			swap(a, b);
		}
		if (cow[make_pair(a, b)]) {
			continue;
		}
		s[a+1]--; s[b]++;
		cow[make_pair(a, b)] = true;
	}
	for (int i = 1; i <= n; i++) {
		s[i] = s[i] + s[i - 1];
		cout << s[i] + h << "\n";
	}
	return 0;
}
```
<a name="ynpjG"></a>
### 纪念品分组
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722511559144-8d38d5f2-f48f-477d-8250-26b1da266760.png#averageHue=%23d6d6d6&clientId=u36688078-9a01-4&from=paste&height=738&id=u7a00b767&originHeight=1107&originWidth=765&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=73539&status=done&style=none&taskId=ud7f93d95-f49b-4130-8adc-cd798d3aa25&title=&width=510)<br />贪心：一组两个，则先从小到大排序，再头尾选择组合，累计组数
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e5 + 10;

int a[N];
signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int w;
    cin >> w;
    int n;
    cin >> n;
    int cnt = 0;
    for (int i = 0; i < n; i++){
        cin >> a[i];
    }

    sort(a, a + n);

    int i = 0, j = n - 1;
    while(i<=j){
        if(i==j){
            cnt++;
            break;
        }
        if(a[i]+a[j]<=w){
            cnt++;
            i++;
            j--;
        }
        else{
            j--;
            cnt++;
        }
    }
    cout << cnt << endl;
    return 0;
}
```
<a name="izdCU"></a>
### 小 E 与美食
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722511682503-dad02541-60ab-4701-b506-6f24061c4cf4.png#averageHue=%23d7d7d7&clientId=u36688078-9a01-4&from=paste&height=824&id=u073774ac&originHeight=1236&originWidth=761&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=85933&status=done&style=none&taskId=u76ff95d2-e850-4ec7-b1c7-aa378276208&title=&width=507.3333333333333)<br />贪心：满意度从大到小排序，先吃前面，计算max
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 3e5 + 10;

bool cmp(int a, int b){
    return a > b;
}
int a[N];

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n;
    cin >> n;
    for (int i = 0; i < n; i++){
        cin >> a[i];
    }

    sort(a, a + n, cmp);

    double sum=0.00,pj=0.00,max=0.00;
    for (int j = 0; j < n;j++){
        sum += a[j];
        pj = (double)(sum * sum) / (double)(j+1);
        if(pj>max){
            max = pj;
        }
    }
    cout << fixed << setprecision(8) << max << endl;
    return 0;
}
```
<a name="fhnk9"></a>
### 机器猫斗恶龙
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722511757026-33857758-997f-4901-ac32-92b90efb4713.png#averageHue=%23d6d6d6&clientId=u36688078-9a01-4&from=paste&height=741&id=ubb9a993f&originHeight=1112&originWidth=763&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=69453&status=done&style=none&taskId=u867ef9aa-1835-4b96-a52e-dac84b1b535&title=&width=508.6666666666667)<br />控制血条，如果负了就累加到初始值
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e5 + 10;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n;
    cin >> n;
    int sum=0, max=0;
    int xt = 0;
    for (int i = 0; i < n; i++)
        {
            int x;
            cin >> x;
            xt += x;
            if(xt<0 && -1*xt>max){
                max = xt * -1;
            }
        }
    cout << max + 1 << endl;
    return 0;
}
```
<a name="mMEU7"></a>
### 做题
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722511814152-ccefc64e-3f9d-4caf-937a-bc971e48e50f.png#averageHue=%23d6d6d6&clientId=u36688078-9a01-4&from=paste&height=531&id=uaeb24509&originHeight=796&originWidth=765&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=55190&status=done&style=none&taskId=udaf52590-53c2-4633-bcb1-1018e6a82bb&title=&width=510)<br />天数越多题目越多，先题库从小到大排序，然后符合就看下一天
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;

int a[N];
signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n;
    cin >> n;

    for (int i = 1; i <= n; i++)
        {
            cin >> a[i];
        }

    sort(a+1, a + n+1);

    int k = 1;
    int cnt = 0;
    for (int i = 1; i <=n; i++)
        {
            if(a[i]>=k){
                k++;
            }
        }
    cout << k-1 << endl;
    return 0;
}
```
<a name="nbjdj"></a>
### 学生分组
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722511860530-3a58e98f-50c6-4aa2-b724-c1262a4574d3.png#averageHue=%23d7d7d7&clientId=u36688078-9a01-4&from=paste&height=499&id=uf0960787&originHeight=748&originWidth=762&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=48066&status=done&style=none&taskId=u1e5d180f-868d-4834-ba79-5711dc7188a&title=&width=508)<br />先要考虑边缘问题，总共低于下限或高于上限都不行；<br />然后考虑调整，则考虑超出和缺少的数量，优先考虑下限缺少部分
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e5 + 10;

int a[60];

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n;
    cin >> n;
    for (int i = 0; i < n; i++)
        {
            cin >> a[i];
        }
    int l, r;
    cin >> l >> r;
    int sum = 0;
    for (int i = 0; i < n; i++)
        {
            sum += a[i];
        }
    if (sum < n * l || sum > n * r)
    {
        cout << "-1";
        return 0;
    }
    int more = 0, less = 0;
    for (int i = 0; i < n; i++)
        {
            if(a[i]>r){
                more += (a[i] - r);
            }
            if(a[i]<l){
                less += (l - a[i]);
            }
        }
    cout << (less > more ? less : more) << endl;
    return 0;
}
```
<a name="r7bcB"></a>
### 连续自然数和
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722511914075-6c5be6f1-f802-470d-b065-fd206b0e376f.png#averageHue=%23d5d5d5&clientId=u36688078-9a01-4&from=paste&height=419&id=u1f8e39ed&originHeight=628&originWidth=762&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=46434&status=done&style=none&taskId=u89b8bb72-617b-4150-9975-2d7ba0320dd&title=&width=508)<br />遍历，双指针，多了减左边，少了加右边
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n;
    cin >> n;
    int p1 = 0, p2 = 1;
    int sum = p1+p2;
    while(p1<p2&&p2<=n){
        if(sum==n){
            cout << p1 << " " << p2 << endl;
            sum -= p1;
            p1++;
        }
        if (sum > n){
            sum -= p1;
            p1++;
        }
        if(sum<n){
            p2++;
            sum += p2;
        }
    }

    return 0;
}
```
<a name="q8Wbu"></a>
### 宝箱
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722511979609-5395bc04-aaad-4c0f-8e91-f0e365b6647d.png#averageHue=%23d6d6d6&clientId=u36688078-9a01-4&from=paste&height=569&id=u56939516&originHeight=854&originWidth=766&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=59929&status=done&style=none&taskId=uc8c7cb83-d522-492f-a9c6-52d6cfc43b9&title=&width=510.6666666666667)<br />从大到小排序，双指针，求最高和最低的差值，求符合条件的区间的和的max；<br />如果只是取第一个和后面符合差值比较会报错，理解题目错误，因为可能第一个很大超出差值，导致数量少总和不一定多
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;
int a[1010];

bool cmp(int a, int b){
    return a > b;
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n, k;
    cin >> n >> k;

    for (int i = 0; i < n;i++){
        cin >> a[i];
    }

    sort(a, a + n,cmp);

    int p1 = 0, p2 = 1;
    int sum = a[p1];
    int cz = 0;
    int max = 0;
    while(p1<p2&&p2<=n){
        cz = a[p1] - a[p2];
        if (cz > k){
            if(sum>max){
                max = sum;
            }
            sum -= a[p1];
            p1++;
        }
        if(cz <= k){
            sum += a[p2];
            p2++;
        }
    }
    cout << max << endl;
    return 0;
}
```
<a name="tycbj"></a>
### 排列排序
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722512855524-cccf87e6-46ed-4991-b510-389284dbfc11.png#averageHue=%23d7d7d7&clientId=u36688078-9a01-4&from=paste&height=791&id=uee1de219&originHeight=1187&originWidth=764&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=77951&status=done&style=none&taskId=u35d9bb0d-7c8c-4308-b350-5daf960aee7&title=&width=509.3333333333333)
```cpp
#include<bits/stdc++.h>
#define int long long
using namespace std;
const int maxn=1e6;
int a[maxn];
signed main()
{
	int t;
	cin>>t;
	while(t--){
		int n;
		cin>>n;
		for(int i=1;i<=n;i++){
			cin>>a[i];
		}
		int i=1;
		int ans=0;
		while(i<=n){//所有数1对1对应且连续
			if(a[i]==i) i++;//数字在原来该在的位置
			else{//没有在原来位置，则开始记录区间
            //找到乱序中最大的数，因为要排到他原来位置，所有长度即为就要排序的长度
				int maxx=a[i];
				int j=i+1;
				maxx=max(maxx,a[j]);
				while(maxx>j){//找最大值原来的位置，至少到这个位置都要重新排序
					j++;
					maxx=max(maxx,a[j]);
				}
				ans+=j-i+1;
				i=j+1;//更新区间
			}
		}
		cout<<ans<<endl;
	}
}
```
<a name="gy2oH"></a>
### 合并果子 / [USACO06NOV] Fence Repair G
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722512908367-a8e8b5f3-95f0-4e6b-aa14-185d806fbf51.png#averageHue=%23d3d3d3&clientId=u36688078-9a01-4&from=paste&height=673&id=u2f8e7eca&originHeight=1010&originWidth=762&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=93026&status=done&style=none&taskId=u45d865fd-657c-4830-986a-7918273f5fe&title=&width=508)<br />双向队列先进先出，但是这里排序了，从小到大（省力），<br />取出两个小的合并成大的，因为要再次合并，则重新放入数组，<br />每次合并前端小的两个数字最省力
```cpp
#include <bits/stdc++.h>
using namespace std;
const int N = 1e6 + 10;
#define ll long long int
int main() {
	int n;
	cin >> n;
	int t;
	priority_queue<int,vector<int>,greater<int> > a;
	for (int i = 0; i < n; i++) {
		cin >> t;
		a.push(t);
	}
	int sum = 0;
	for (int i = 0; i < n - 1; i++) {
		int sum1 = 0;
		sum1 += a.top();
		a.pop();
		sum1 += a.top();
		a.pop();
		sum += sum1;
		a.push(sum1);
	}
	cout << sum;
	return 0;
}
```
<a name="oaRUw"></a>
### 最大正方形
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722512958375-755af2b0-bf17-4be2-adb9-5c6a048b0d10.png#averageHue=%23d8d8d8&clientId=u36688078-9a01-4&from=paste&height=349&id=u7b20f129&originHeight=524&originWidth=764&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=27898&status=done&style=none&taskId=u95f62ae1-fd4a-44ef-a7c2-c84a8361b02&title=&width=509.3333333333333)<br />二维前缀和&&二维差分，创建两个二位数组，一个放原数据，一个放前缀和数据，<br />后续两个坐标之间的数据和则用差分处理；<br />因为数据1or0，则坐标之间的数据和则为边长积（面积）
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;

int a[1000][1000], sum[1000][1000];

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n, m;
    cin >> n >> m;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= m; j++)
        {
            cin >> a[i][j];
            sum[i][j] = sum[i - 1][j] + sum[i][j - 1] + a[i][j] - sum[i - 1][j - 1];
        }
    }

    int max = 0;
    for (int x1 = 1; x1 <= n;x1++){
        for (int y1 = 1; y1 <= m;y1++){
            for (int x = 0; x <= (n-x1); x++)
            {
                int x2 = x1 + x;
                int y2 = y1 + x;
                int s = sum[x2][y2] - sum[x2][y1 - 1] - sum[x1 - 1][y2] + sum[x1 - 1][y1 - 1];
                if(s==(x+1)*(x+1)&&(x+1)>max)
                    max = x+1;
            }/* 
            for (int x2 = x1; x2 <= n; x2++)
            {
                int len = x2 - x1 + 1;
                int y2 = y1 + len - 1;
                int s = sum[x2][y2] - sum[x2][y1 - 1] - sum[x1 - 1][y2] + sum[x1 - 1][y1 - 1];
                if (s == len * len && len > max)
                {
                    max = len;
                }
            } */
        }
        
    }
    cout << max;

    return 0;
}
```
<a name="vuPfi"></a>
### 一元三次方程求解
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722601265290-8999ec7e-b852-4684-b775-3a6e2ed20ae5.png#averageHue=%23d6d6d6&clientId=ua610accc-36ff-4&from=paste&height=727&id=u536c4313&originHeight=1091&originWidth=1151&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=127848&status=done&style=none&taskId=ubcb049c8-796d-479b-bc03-2ca2fad86e0&title=&width=767.3333333333334)
```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    double a, b, c, d;
    scanf("%lf%lf%lf%lf", &a, &b, &c, &d);
    double l, r, m, x1, x2;
    int s = 0;
    for (int i = -100; i < 100; i++){
        l = i;
        r = i + 1;
        x1 = a * l * l * l + b * l * l + c * l + d;
        x2 = a * r * r * r + b * r * r + c * r + d;
        if (!x1){
            printf("%.2lf ", l);
            s++;
        }
        if (x1 * x2 < 0){
            while (r - l >= 0.001){
                m = (l + r) / 2;
                if ((a * m * m * m + b * m * m + c * m + d) * (a * r * r * r + b * r * r + c * r + d) <= 0)
                    l = m;
                else
                    r = m;
            }
            printf("%.2lf ", r);
            s++;
        }
    }
}
```
<a name="bhCSX"></a>
### 立方根
![1722601433396.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722601459835-d2e1c89c-6e7b-49ab-82af-2f8156d5df52.png#averageHue=%23d9d9d9&clientId=ua610accc-36ff-4&from=drop&id=uea9c773d&originHeight=1112&originWidth=1029&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=40034&status=done&style=none&taskId=ue75abe23-0e05-4930-9b9f-0cb0c479525&title=)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n;
    cin >> n;

    int i=0, j=sqrt(n);
    while (i<j) {
        int mid = i + (j-i+1)/2;
        if(fabs(mid*mid*mid)<=n)
            i = mid;
        else
            j = mid-1;
    }
    cout << i << endl;
    return 0;
}
```
<a name="xLuyt"></a>
### 机器人繁殖
![1722601510186.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722601526897-5e2084d9-b258-4ec3-9b75-7a963ff5282b.png#averageHue=%23d6d6d6&clientId=ua610accc-36ff-4&from=drop&id=u4cd315a5&originHeight=979&originWidth=915&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=55724&status=done&style=none&taskId=u2f2c8f0f-6325-482a-8f3e-15742f4fc20&title=)<br />**python**
```python
def f(z, n):  
    if z == 1:  
        return n + n * 2 - 1  
    return f(z - 1, 2 * n - 1) + n  

def main():  
    import sys  
    input = sys.stdin.read  
    data = input().split()  
    n = int(data[0])  
    s = int(data[1])  

    l = 0  
    r = 100  
    while l < r:  
        m = (l + r) // 2  
        if f(n, m) >= s:  
            r = m  
        else:  
            l = m + 1  

    print(l)  

if __name__ == "__main__":  
    main()
```
<a name="KiwuN"></a>
### 小车问题
![1722660438478.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722660462151-30fc719a-5a8b-42be-a3b6-0bbde31a925b.png#averageHue=%23d7d7d7&clientId=u4ce67a44-0cdc-4&from=drop&id=ucf77026c&originHeight=770&originWidth=916&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=42123&status=done&style=none&taskId=ue181e4a2-28ee-48ff-a8ed-a75d539e44f&title=)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;
const double eps =1e-7;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    double s, a, b;
    cin >> s >> a >> b;

    double l,r, t1, t2, tj, ty, m;
    l = 0;
    r = s;
    do{
        m = (l+r) / 2.0;
        t1 = m / b;
        t2 = (m - t1 * a) / (a + b);
        tj = t1 + (s - m) / a;
        ty = t1 + t2 + (s - (t1 + t2) * a) / b;
        if (tj < ty)
            r = m;
        else
            l = m;
    }while (fabs(tj - ty) > 1e-8);
    cout << fixed << setprecision(6) << tj << endl;
    return 0;
}
```
<a name="iqHGq"></a>
### 小玉在游泳
![1722700421935.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722700464787-2354405a-150f-42ea-9cd3-ba113cdf0bc2.png#averageHue=%23d6d6d6&clientId=uf4bbd3b6-ddaa-4&from=drop&id=u2fa79a6c&originHeight=926&originWidth=1147&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=82906&status=done&style=none&taskId=uc4b4beee-5434-420c-9eeb-bb26e5c7d5f&title=)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;
const double eps =1e-7;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    double s;
    cin >> s;

    double sum = 0.00;
    int cnt = 0;
    double x = 2.0;
    while(sum<s){
        sum += x;
        cnt++;
        x *= 0.98;
    }
    cout << cnt << endl;
    return 0;
}
```
<a name="AdnRJ"></a>
### Sanitize Hands
![1722700518989.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722700555276-195bf8a7-7373-41ae-8e3a-db668bb8d452.png#averageHue=%23d7d7d7&clientId=uf4bbd3b6-ddaa-4&from=drop&id=ufef77073&originHeight=1414&originWidth=770&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=66228&status=done&style=none&taskId=u4f1da8e3-2719-4463-9a08-34833e53824&title=)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;
const double eps =1e-7;
int a[N];
signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n, m;
    cin >> n>>m;

    for (int i = 1; i <= n; i++)
    {
        cin >> a[i];
    }

    int cnt = 0;
    for (int i = 1; i <= n;i++){
        if(m>=a[i]){
            m -= a[i];
            cnt++;
        }
        else
            break;
    }
    cout << cnt << endl;
    return 0;
}
```
<a name="WgZXZ"></a>
### Subsegment Reverse
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722700692511-61c3b2f4-fb74-45cd-8ffe-f9b86475dc56.png#averageHue=%23dadada&clientId=uf4bbd3b6-ddaa-4&from=paste&height=803&id=uc38a9759&originHeight=1204&originWidth=763&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=66468&status=done&style=none&taskId=u3e875c2a-301a-4fda-9618-7119ff77a01&title=&width=508.6666666666667)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;
const double eps =1e-7;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n, l, r;
    cin >> n >> l >> r;

    vector<int> a;
    for (int i = 1; i <=n; i++){
        a.push_back(i);
    }
    if(l!=r)
        reverse(a.begin()+l-1, a.begin()+r);

    for (int i = 0; i < n; i++){
        cout << a[i] << (i < n - 1 ? " " : "\n");
    }
    return 0;
}
```
<a name="fry34"></a>
### Adjacent Product
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722700751862-10e51b17-cd82-44d8-80a5-b39b4deef336.png#averageHue=%23dadada&clientId=uf4bbd3b6-ddaa-4&from=paste&height=649&id=ua6c9717f&originHeight=973&originWidth=767&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=50879&status=done&style=none&taskId=u69135558-b913-41dc-a5ff-39a0119e061&title=&width=511.3333333333333)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;
const double eps =1e-7;
int a[N], b[N];
signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n;
    cin >> n;
    for (int i = 0; i < n; i++){
        cin >> a[i];
    }
    for (int i = 0; i < n-1; i++){
        b[i]=a[i]*a[i+1];
        cout<<b[i]<<(i < n - 1 ? " " : "\n");
    }
    return 0;
}
```
<a name="HLZWE"></a>
### Uppercase and Lowercase
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722700804870-3600973d-7170-40e9-aeed-43774337439e.png#averageHue=%23d7d7d7&clientId=uf4bbd3b6-ddaa-4&from=paste&height=765&id=u2a7bd698&originHeight=1148&originWidth=767&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=65561&status=done&style=none&taskId=u19a64e30-2255-4648-a5dd-ad29efecf7e&title=&width=511.3333333333333)
```cpp
#include<bits/stdc++.h>  
using namespace std;  
#define int long long  
#define endl "\n"  
const int N = 1e6 + 10; // 注意这个常量在代码中没有直接使用，但定义也没问题  
const double eps = 1e-7; // 这个常量同样在代码中没有使用  

signed main(){  
    ios::sync_with_stdio(false);  
    cin.tie(nullptr);  
    cout.tie(nullptr);  

    string s, sx = "", sk = ""; // 初始化 sx 和 sk 为空字符串  
    cin >> s;  

    int a = 0, b = 0;  
    for(char x : s){  
        if(x >= 'a' && x <= 'z'){  
            a++;  
            sx += x;  
            sk += (x - 'a' + 'A'); // 将小写转换为大写并添加到 sk  
        }  
        else if(x >= 'A' && x <= 'Z'){ // 确保只处理大写字母  
            b++;  
            sx += (x - 'A' + 'a'); // 将大写转换为小写并添加到 sx  
            sk += x;  
        }  
    }  
    if(a > b){  
        cout << sx << endl; // 输出小写字母组成的字符串  
    }  
    else{  
        cout << sk << endl; // 输出大写字母组成的字符串  
    }  
    return 0;  
}
```
<a name="yN4Z7"></a>
### Nutrients
![1722700849856.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722700874290-2b3960c5-474e-44a7-ac03-db3e3f93830a.png#averageHue=%23d9d9d9&clientId=uf4bbd3b6-ddaa-4&from=drop&id=ub580e82b&originHeight=1300&originWidth=764&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=59979&status=done&style=none&taskId=uae1213aa-4afe-45c3-9540-5b6b8d20b23&title=)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;
const double eps =1e-7;
int a[1000],x[1000][1000],sum[1000];
signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n, m;
    cin >> n >> m;

    for (int i = 1; i <= m; i++){
        cin >> a[i];
    }
    memset(sum, 0, sizeof(sum));
    for (int i = 1; i <= n; i++){
        for (int j = 1; j <= m; j++){
            cin >> x[i][j];
            sum[j] += x[i][j];
        }
    }
    for (int z = 1; z <= m;z++){
        if(a[z]>sum[z]){
            cout << "No" << endl;
            return 0;
        }
    }
    cout << "Yes" << endl;
    return 0;
}
```
<a name="pkTD6"></a>
### Piano
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722700954056-07a795ac-3572-439b-9b36-0aaf0ec79a09.png#averageHue=%23d8d8d8&clientId=uf4bbd3b6-ddaa-4&from=paste&height=797&id=u7c836b41&originHeight=1196&originWidth=763&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=66799&status=done&style=none&taskId=u592337fb-b30e-40c5-bbd1-faaeebb905d&title=&width=508.6666666666667)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;
const double eps =1e-7;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int w, b;
    cin >> w >> b;

    string s = "wbwbwwbwbwbw";

    for (int i = 0; i < 12; i++) {
        int numw = 0, numb = 0;//w的数量，b的数量
        //以i，j为双指针，j移动w+b的长度；
        for (int j = 0; j < w + b; j++) {
            if (s[(i + j) % 12] == 'w') numw++;
            else numb++;
        }
        //ij子集若满足条件则yes
        if (w == numw and b == numb) {
            cout << "Yes" << endl;
            return 0;
        }
    }
    cout << "No" << endl;
}
```
<a name="qFkXA"></a>
### Sierpinski carpet
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722701018168-2a464937-484c-470d-9765-7cbaf7bc6ebb.png#averageHue=%23d6d6d6&clientId=uf4bbd3b6-ddaa-4&from=paste&height=743&id=ub17aa1c4&originHeight=1114&originWidth=578&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=62876&status=done&style=none&taskId=ufeee0d7a-3cad-4352-845d-abf2c7b8606&title=&width=385.3333333333333)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;
const double eps =1e-7;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n,l=1;
    char a[729][730];
    for(int i=0;i<729;i++)for(int j=0;j<730;j++)a[i][j]=0;

    cin>>n;
    a[0][0]='#';
    for(int k=0;k<n;k++){
        for(int x=0;x<3;x++){
            for(int y=0;y<3;y++){
                if((x==0)&&(y==0))continue;
                if((x==1)&&(y==1)){
                    for(int i=0;i<l;i++)for(int j=0;j<l;j++)a[x*l+i][y*l+j]='.';
                }
                else{
                    for(int i=0;i<l;i++){
                        for(int j=0;j<l;j++){
                            a[x*l+i][y*l+j]=a[i][j];
                        }
                    }
                }
            }
        }
        l*=3;
    }

    for(int i=0;i<l;i++)cout<<a[i]<<endl;

    return 0;
}
```
```cpp
#include <bits/stdc++.h>
using namespace std;

int x;
char s[2005][2005];

void fill(int x, int y, int k) {
	if (k == 0) return s[x][y] = 1, void();
	int t = k / 3;
	fill(x, y, t);
	fill(x + t, y, t);
	fill(x + t * 2, y, t);
	fill(x, y + t, t);
	fill(x, y + t * 2, t);
	fill(x + t, y + t * 2, t);
	fill(x + t * 2, y + t, t);
	fill(x + t * 2, y + t * 2, t);
}

signed main() {
	ios::sync_with_stdio(false);
	cin.tie(nullptr), cout.tie(nullptr);
	cin >> x;
	if (x == 0) return cout << "#", 0;
	int t = pow(3, x);
	fill(1, 1, t);
	for (int i = 1; i <= t; i++) {
		for (int j = 1; j <= t; j++) cout << (s[i][j] == 0 ? '.' : '#');
		cout << '\n';
	}
	return 0;
}
```
<a name="KzFTQ"></a>
### Rudolf and the Ugly String
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1722701096306-39155299-cac1-42e3-a89e-861d955f1a3a.png#averageHue=%23d3d3d3&clientId=uf4bbd3b6-ddaa-4&from=paste&height=847&id=u924429c1&originHeight=1271&originWidth=858&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=104723&status=done&style=none&taskId=u2c9162c2-fc9d-42e0-b3e7-3b426908915&title=&width=572)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl "\n"
const int N = 1e6 + 10;
const double eps =1e-7;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int t;
    cin >> t;
    while(t--){
        int n;
        cin >> n;
        string s;
        cin >> s;
        int cnt=0;
        for (int x = 0; x < n-2;x++){
            if(s[x]=='m'&&s[x+1]=='a'&&s[x+2]=='p'){
                cnt++;
                x += 2;
            }
            else if(s[x]=='p'&&s[x+1]=='i'&&s[x+2]=='e'){
                cnt++;
                x += 2;
            }
        }
        cout << cnt << endl;
    }
    return 0;
}
```
