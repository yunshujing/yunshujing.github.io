---
title: 暑期ACM-Week5
createTime: 2024/08/19 22:00:00
tags:
  - 学习
  - 代码
  - ACM
permalink: /article/xwbkcez9/
---
<a name="hLNzz"></a>
## VScode配置包
[**VScode配置包下载（sb_CSDN)**](http://47.120.76.63:5244/d/%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8%E4%BA%91%E7%9B%98/%E5%88%86%E4%BA%AB%E7%9B%98/%E6%9A%91%E6%9C%9FACM%E9%9B%86%E8%AE%AD/VScode%E9%85%8D%E7%BD%AE2.zip?sign=p2kGET0ytn4nVh5T_yyx5SLtmMgltOfM1_WMnsdh4a4=:0)
<a name="mGajL"></a>
## 知识点
<a name="lyXlZ"></a>
### BFS广度优先搜索
广度优先搜索（Breadth-First Search, BFS）是一种用于遍历或搜索树或图的算法。<br />这个算法从一个节点开始，探索该节点的所有直接邻居，然后再对每一个邻居节点进行同样的操作，直到找到目标节点或遍历完所有可达的节点。<br />BFS通常使用队列（Queue）来实现。
<a name="uoId0"></a>
#### bfs和dfs的区别：
`dfs`往一个方向深搜后返回再搜<br />`bfs`往多个方向广搜（水波）
<a name="CSIh1"></a>
#### 基本步骤

1. **初始化**：选择一个起始节点，将其放入队列中。
2. **循环**：当队列非空时，执行以下步骤：
   - 从队列中移除一个节点（通常是队首节点）。
   - 访问该节点（例如，打印节点值或进行其他处理）。
   - 将该节点的所有未访问过的直接邻居节点加入队列中。
1. **结束**：当队列为空时，算法结束。
<a name="v6RBW"></a>
#### 基本作用

- BFS在搜索最短路径时非常有用，因为它总是先访问起始节点附近的节点。
- BFS在无权图中特别有效，但在有权图中，如果边的权重不同，则可能需要使用其他算法（如Dijkstra算法）来找到最短路径。
- BFS的时间复杂度依赖于图的表示和图的结构。在最坏的情况下（图是完全连接的），时间复杂度为O(V + E)，其中V是顶点数，E是边数。在最好的情况下（图是线性的），时间复杂度为O(V)。
- BFS的空间复杂度主要由队列决定，最坏情况下为O(V)，因为所有节点都可能被加入队列中。
<a name="XvyNw"></a>
#### 样例：波浪形扩散原理
```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long

int n, m, vis[1001][1001], dist[1001][1001];
struct point{
int x, y;
};

int dx[] = {1, -1,  0,  0};  
int dy[] = {0,  0,  1, -1};//上下左右

signed main(){
    cin >> n >> m;

    queue<point> q;

    q.push({1, 1});  //起点 
    vis[1][1] = 1;
    dist[1][1] = 0;
    while(!q.empty()){
        point t = q.front();
        q.pop();
        for(int i=0;i<4;i++){
            point s;
            s.x = t.x + dx[i];
            s.y = t.y + dy[i];
            if(s.x <= 0 || s.y <= 0 || s.x > n || s.y > m) continue;
            if(vis[s.x][s.y] == 1) continue;
            vis[s.x][s.y] = 1;
            dist[s.x][s.y] = dist[t.x][t.y] + 1;
            q.push(s);
        }
    }

    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            cout << dist[i][j] << " \n"[j==m];
        }
    }
    return 0;
}
```
<a name="sl9IM"></a>
#### 样例：走迷宫营救
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1723809607644-58f18181-d0fc-4f4a-9465-ade770fa88b4.png#averageHue=%23f5f4f4&clientId=ub1856da5-f22e-4&from=paste&height=819&id=u74414d39&originHeight=1228&originWidth=1118&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=104384&status=done&style=none&taskId=ue2dc7c5a-bc53-4769-abb2-a7217e162f3&title=&width=745.3333333333334)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define double long double
const int maxn = 1e6 + 100;
const double eps = 1e-5;

//上下左右
int dx[] = { 0,0,-1,1 };
int dy[] = { -1,1,0,0 };

int mapp[100][100], vis[100][100];
int ok = 0;

struct point {
    int x, y;
    int step;
};
queue<point> s;

signed main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr); cout.tie(nullptr);

    int n, m; cin >> n >> m;
    //输入地图
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            cin >> mapp[i][j];
        }
    }

    int startx, starty, endx, endy; 
    cin >> startx >> starty >> endx >> endy;
    
    //初始化起点并入队
    point start; //结构体
    start.x = startx, start.y = starty, start.step = 1;
    s.push(start); 
    vis[startx][starty] = 1;//vis 打标记，记录已经走过的点
    //go
    while (!s.empty()) {
        int x = s.front().x, y = s.front().y;
        s.pop();
        if (x == endx && y == endy) {
            ok = 1;
            cout << s.front().step << endl;
            break;
        }
        for (int choose = 0; choose <= 3; choose++) {
            int tx = x + dx[choose]; 
            int ty = y + dy[choose];//方向
            if (mapp[tx][ty] == 0 && vis[tx][ty] == 0) {
                point tmp; 
                tmp.x = tx; 
                tmp.y = ty; 
                tmp.step = s.front().step + 1;
                s.push(tmp); 
                vis[tx][ty] = 1;
            }
        }
    }
    if (ok == 0) {
        cout << "no ans" << endl;
    }
    return 0;
}
```
<a name="p9f0N"></a>
### 动态规划
动态规划（Dynamic Programming, DP）是一种在数学、计算机科学和经济学中使用的，通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。在C++中实现动态规划通常涉及定义一个或多个数组（或向量）来存储子问题的解，以避免重复计算。
<a name="A1qjz"></a>
#### 定义
动态规划通过把原问题分解为相对简单的子问题的方式求解复杂问题。它通常涉及以下几个关键步骤：

1. **定义状态**：将问题分解为一系列子问题，并定义状态来表示这些子问题的解。
2. **状态转移方程**：找出状态之间的关系，即如何从已知状态推导出新的状态（或解）。
3. **初始化**：确定初始状态的值。
4. **计算顺序**：确定计算状态的顺序，通常是自底向上（从简单到复杂）的顺序。
5. **存储结果**：使用数组、向量或其他数据结构来存储中间结果，以便后续使用。
<a name="T4N7s"></a>
#### 语法
由于动态规划是一种算法设计思想，而不是具体的语法结构，因此它没有特定的语法。但是，在C++中实现动态规划时，通常会使用到以下语法元素：

- **数组**（或`std::vector`）：用于存储状态（即子问题的解）。
- **循环**（如`for`、`while`）：用于遍历状态空间，计算状态转移方程。
- **条件语句**（如`if`、`else`）：用于处理特殊情况或边界条件。
- **函数**：将动态规划的逻辑封装在函数中，以便复用或测试。
<a name="fVLP6"></a>
#### 用途
动态规划广泛应用于各种领域，特别是在计算机科学中，用于解决优化和计数问题。以下是一些常见的应用场景：

- **优化问题**：如最短路径问题、最长公共子序列（LCS）、背包问题等。
- **计数问题**：如不同路径的数量、排列组合问题等。
- **决策过程**：如编辑距离、字符串匹配问题等。
<a name="sHETk"></a>
#### 示例
下面是一个使用C++实现的动态规划经典问题——斐波那契数列（Fibonacci Sequence）的示例。斐波那契数列是这样一个数列：0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...，其中每个数是前两个数的和。<br />**斐波那契数列的C++实现（动态规划）**
```cpp
#include <iostream>
#include <vector>

using namespace std;

// 动态规划求解斐波那契数列
int fibonacciDP(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;

    // 创建一个数组来存储斐波那契数列的值
    vector<int> dp(n + 1, 0);
    dp[1] = 1; // 初始化第一个值

    // 从第二个数开始计算
    for (int i = 2; i <= n; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2]; // 动态规划的核心递推公式
    }

    return dp[n];
}

int main() {
    int n;
    cout << "请输入n的值（斐波那契数列的第n项）: ";
    cin >> n;

    cout << "斐波那契数列的第" << n << "项是: " << fibonacciDP(n) << endl;

    return 0;
}
```
在这个例子中，我们使用了`vector<int>`来存储斐波那契数列的值，以避免重复计算。通过从第二项开始迭代计算，直到第n项，我们得到了整个数列的解。这种方法的时间复杂度是O(n)，空间复杂度也是O(n)，因为我们使用了一个大小为n+1的数组来存储中间结果。<br />动态规划的应用非常广泛，包括但不限于背包问题、最长公共子序列（LCS）、最短路径问题等。每种问题都有其特定的状态定义和转移方程，但基本思想都是类似的：将大问题分解为小问题，并存储已解决的小问题的答案，以避免重复计算。
<a name="RRspC"></a>
### 01背包&&完全背包
① 01背包:每件物品最多使用一次(只能使用0次或1次)<br />(一)状态表示 f(i j)

1. 集合:只考虑前i个物品，且总体积不大于i的所有选法。
2. 属性:Max、Min、数量

(二)状态计算-→集合划分-→f[i,j]= Max( f[i-1,j],f[i-1,j-V[i]]+ W[i])<br />② 完全背包:每件物品有无限个<br />(一)状态表示 f(i,j)

1. 集合:只考虑前i个物品，且总体积不大于i的所有选法
2. 属性:Max、Min、数量

(二)状态计算--→集合划分--→f[i,j]= Max( f[i-1,j],f[i, j-V[i]]+ W[i])
<a name="lbaKr"></a>
#### 01背包问题
有$N$件物品和一个容量是$V$的背包，每件物品只能使用一次。<br />第$i$件物品的体积是$Vi$，价值是$Wi$。<br />求解将哪些物品装入背包，可使这些物品的总体积不超过背包容量，且总价值最大。<br />输出最大价值。
```cpp
//先输入 n  m
4  5
1  2
2  4
3  4
4  5
```
```cpp
#include <iostream>
#include <algorithm>
using namespace std;

const int N=1010;

int n, m;
int v[N], w[N];
int f[N];

int main(){
    cin >> n >> m;
    
    for(int i=1;i<=n;i++){
        cin >> v[i] >> w[i];
    }
    
    for(int i=1;i<=n;i++){
        for(int j=m;j>=v[i];j--){  //从大到小循环
            f[j] = max(f[j], f[j-v[i]] + w[i]);
        }
    }
    
    cout << f[m] << endl;
                
    return 0;
}
```















<a name="JDntc"></a>
## 解题集
<a name="e8Xvn"></a>
### B3635 硬币问题
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1723724468847-4e2555c1-5bf3-4e72-acda-2baa0cc6411f.png#averageHue=%23f9f9f9&clientId=uf8b46600-68ca-4&from=paste&height=783&id=u88d94177&originHeight=1174&originWidth=1147&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=118962&status=done&style=none&taskId=u6ff6e6db-9acb-40ad-ade1-8356391216c&title=&width=764.6666666666666)
```cpp
#include<iostream>
#include<cstdio>
using namespace std;

int n, f[1000000];//用f数组存放数量

/*
f[0]=0;
f[1]=f[0]+1=1;
f[2]=f[1]+1=2;
*/

int main(){
	cin >> n;  //n元 
	for(int i=1;i<=n;i++){  //从最底层判断开始
	
		if(i >= 11){  //i>=11,可以用一张11元钱的替换
			f[i] = min(f[i-1], min(f[i-5],f[i-11])) + 1;  //钱币数量叠加(最小)
			
		}else if(i>=5){ //i=5~10,可以用一张5元钱的替换5张1元钱的
			f[i]=min(f[i-1],f[i-5])+1;  //钱币数量叠加(最小)
			
		}else{ //i=1~4,只能用1元钱的 
			f[i]=f[i-1]+1;  //钱币数量叠加
		}
		
	}
	cout<<f[n]<<endl;//f[n]代表凑出n块钱需要的最少钱币数
	
	
	return 0;
}
```
```cpp
#include<bits/stdc++.h>
using namespace std;

#define int long long
#define double long double
const int maxn = 1e6 + 100;
const double eps = 1e-5;

signed main() {
	int a[3] = { 1,5,11 };
	int n; cin >> n;
	
	vector<int>dp(n + 1, 0x3f3f3f3f);//dp(长度，值)
    //0x3f3f3f3f 是一个很大的数  默认需要无穷的金币
	dp[0] = 0;//需要的金币的数量
	for (int i = 0; i < 3; i++) {//遍历每一种金币
		for (int j = a[i]; j <= n; j++) {// j 是 钱的sum
			dp[j] = min(dp[j - a[i]]+ 1, dp[j]) ;//类似记忆
		}
	}
	cout << dp[n] << endl;//输出组成金额n 所需要的最少金币的数量
	return 0;
}

//也可以使用 BFS
```
<a name="Dzgtr"></a>
### P10250 [GESP样题 六级] 下楼梯
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1723724580868-f46e831a-f35a-4926-b71d-4cdec2a74d6e.png#averageHue=%23f9f9f9&clientId=uf8b46600-68ca-4&from=paste&height=613&id=u6c379c06&originHeight=920&originWidth=1138&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=90755&status=done&style=none&taskId=u32fc4316-e876-4f93-b9b2-7f15fb269fb&title=&width=758.6666666666666)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define double long double
#define endl "\n"
#define fi first
#define se second
#define mod3 998244353
#define mod7 1000000007
const int N = 1e6 + 10;
const double eps =1e-4;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n;
    cin >> n;
    vector<int> dp(n + 1, 0);
    dp[0] = 1;
    for (int i = 0; i <= n;i++){
        for (int j = 1; j <= 3;j++){
            if( i+j > n) break;
            dp[i + j] += dp[i];
        }
    }
    cout << dp[n] << endl;

    return 0;
}
```
<a name="Mpih2"></a>
### 过河卒
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1723724648800-07fd9ac7-9f2c-4d10-ab19-8e6a691641dc.png#averageHue=%23d7d7d7&clientId=uf8b46600-68ca-4&from=paste&height=832&id=u6ed1898b&originHeight=1248&originWidth=769&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=76913&status=done&style=none&taskId=u5cd9536c-b442-4bbc-a1ec-beb1ca5f1f0&title=&width=512.6666666666666)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define double long double
#define endl "\n"
#define fi first
#define se second
#define mod3 998244353
#define mod7 1000000007
const int N = 1e6 + 10;
const double eps =1e-4;

int n, m, x, y, dp[1001][1001];

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    cin >> n >> m >> x >> y;
    dp[0][0] = 1;
    for (int i = 0; i <= n; i++)
    {
        for (int j = 0; j <= m; j++)
        {
            if(i == 0 && j == 0)
                continue;
            if(i != 0)
                dp[i][j] += dp[i - 1][j];
            if(j != 0)
                dp[i][j] += dp[i][j - 1];
            if(i == x && j == y)
                dp[i][j] = 0;
            else if(abs(i-x)==1&&abs(j-y)==2)
                dp[i][j] = 0;
            else if(abs(i-x)==2&&abs(j-y)==1)
                dp[i][j] = 0;
        }
    }
    cout << dp[n][m] << endl;

    return 0;
}
```
<a name="aXgQ6"></a>
### 母牛的故事
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1723725035675-2ee928dc-ea86-438a-addf-8a41c387d2b7.png#averageHue=%23d5d5d5&clientId=uf8b46600-68ca-4&from=paste&height=319&id=u4823baef&originHeight=478&originWidth=762&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=31109&status=done&style=none&taskId=u62646eab-8ff4-42da-952f-6e675aa161e&title=&width=508)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define double long double
#define endl "\n"
#define fi first
#define se second
#define mod3 998244353
#define mod7 1000000007
const int N = 1e6 + 10;
const double eps =1e-4;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    vector<int> dp(56);
    dp[1] = 1, dp[2] = 2, dp[3] = 3,dp[4]=4;	//第1年到第4年都只有一只老母牛在生产一只小母牛 
    //往后的年份中，计算上一年的母牛数和三年前的母牛数（今年是第四年，他们已经长大了）
    for(int i=5;i<=55;i++){
        dp[i] = dp[i-1] + dp[i-3]; 
    }

    int n;
    while(cin >> n&&n!=0){
        cout << dp[n] << endl;
    }
    return 0;
}
```
<a name="ZRIa8"></a>
### 超级楼梯
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1723725037670-da80f956-7d72-4eb0-b342-856fe9b4d78c.png#averageHue=%23d5d5d5&clientId=uf8b46600-68ca-4&from=paste&height=273&id=ucbdeb80d&originHeight=409&originWidth=768&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=27357&status=done&style=none&taskId=u51ec65be-5621-4c17-a4df-61dbc0ba987&title=&width=512)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define double long double
#define endl "\n"
#define fi first
#define se second
#define mod3 998244353
#define mod7 1000000007
const int N = 1e6 + 10;
const double eps =1e-4;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);
    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;
        vector<int> dp(n + 1, 0);
        dp[1] = 1;
        for (int i = 1; i <= n; i++)
        {
            for (int j = 1; j <= 2; j++)
            {
                if (i + j > n) break;
                dp[i + j] += dp[i];
            }
        }
        cout << dp[n] << endl;
    }
    return 0;
}
```
<a name="vuBeI"></a>
### 折线分割平面
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1723725039821-69295dc2-60a5-40a4-8299-6fc3172aed03.png#averageHue=%23e2e2e2&clientId=uf8b46600-68ca-4&from=paste&height=561&id=uf6c6c9d4&originHeight=841&originWidth=765&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=92091&status=done&style=none&taskId=u76eb5296-e3c1-4933-b900-40639cac179&title=&width=510)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define double long double
#define endl "\n"
#define fi first
#define se second
#define mod3 998244353
#define mod7 1000000007
const int N = 1e6 + 10;
const double eps =1e-4;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);
    
    vector<int> dp(10001); 
	dp[0]=1;	
	for(int i=1;i<=10000;i++){
		dp[i] = ((i-1)*2-1)*2 + dp[i-1]+3; 
	}

	int c;
	cin >> c;
	
	while(c--){
		int n;
		cin >> n;
		printf("%d\n", dp[n]);
	}
    return 0;
}
```
<a name="dnc7k"></a>
### Coin Change
假设有5种硬币：50美分、25美分、10美分、5美分和1美分。我们想要用这些硬币来支付给定金额的钱。<br />例如，如果我们有11美分，那么我们可以用1个10美分的硬币和1个1美分的硬币来支付，或者用2个5美分的硬币和1个1美分的硬币来支付，或者用1个5美分的硬币和6个1美分的硬币来支付，或者用11个1美分的硬币来支付。因此，用上述硬币支付11美分有4种不同的方式。请注意，我们将1种支付0美分的方式也计算在内。<br />编写一个程序，找出用上述5种硬币支付任何金额的钱的不同方式的总数。您的程序应能处理多达100种硬币。<br />**输入**：<br />输入文件包含任意数量的行，每行包含一个金额（≤250），以美分为单位。<br />**输出**：<br />对于每条输入行，输出一行，包含用上述5种硬币支付该金额的不同方式的数量。<br />**Input**
```cpp
11
26
```
Output
```cpp
4
13
```
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define double long double
#define endl "\n"
#define fi first
#define se second
#define mod3 998244353
#define mod7 1000000007
const int N = 1e6 + 10;
const double eps =1e-4;
int a[5] = {1, 5, 10, 25, 50}; //表示5种硬币各自的价值 
int dp[110][260];  //表示dp[i][v]，用i个硬币凑成价值为v的方法数  
signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);
    
    int n;
	while (cin >> n){
		memset(dp, 0, sizeof(dp)); //初始化dp数组全变为0 
		
		dp[0][0] = 1;  //边界，用0个硬币凑成0美分，有1种方法
		 
		for (int i=0;i<5;i++){  //5种硬币的价值 
			for (int k=1;k<=100;k++){  //k个硬币
				for (int v=a[i];v<=n;v++){
					dp[k][v] += dp[k-1][v-a[i]];//状态转移方程
				}                        
			}
		}
		
		int ans=0;
		for (int i=0;i<=100;i++){
			ans += dp[i][n];
		}
		
		cout << ans << endl;
	}
    return 0;
}
```
<a name="The8o"></a>
### AtCoder Janken 3
**问题陈述**<br />高桥和青木玩了 $N$ 次剪刀石头布。注：在这个游戏中，石头赢剪刀，剪刀赢纸，纸赢石头。<br />青木的动作由长度为{624444356}的字符串 $S$ 表示，字符串由 "R"、"P "和 "S "组成。 $S$ 中的 $i$ -th字符表示青木在 $i$ -th对局中的棋步：R "表示 "石头"，"P "表示 "纸"，"S "表示 "剪刀"。<br />高桥的棋步满足以下条件：

- 高桥从未输给过青木。
- 对于 $i=1,2,\ldots,N-1$ ，高桥在 $i$ /th对局中的棋步与他在 $(i+1)$ /th对局中的棋步不同。

请确定高桥的最大胜局数。<br />可以保证存在一个满足上述条件的高桥下棋顺序。<br />**限制因素**

- $1\leq N\leq2\times10 ^ 5$
- $S$ 是长度为 $N$ 的字符串，由 `R`、`P` 和 `S` 组成。
- $N$ 是一个整数。

**输入**<br />输入内容由标准输入法提供，格式如下<br />$N$<br />$S$<br />**输出**<br />打印高桥可能赢得的最大局数。<br />**输入样本 1**
```cpp
6
PRSSRS
```
**样本输出 1**
```cpp
5
```
在六局剪刀石头布游戏中，青木分别玩了剪刀石头布、剪刀石头布、剪刀石头布和剪刀石头布。<br />高桥可以玩剪刀、布、石头、剪刀、布和石头，赢得第一、第二、第三、第五和第六局。<br />对于高桥来说，不存在满足条件并赢得所有六盘棋的下棋顺序，因此打印 $5$ 。<br />**输入样本 2**
```cpp
10
SSSSSSSSSS
```
**输出示例 2**
```cpp
5
```
**输入样本 3**
```cpp
24
SPRPSRRRRRPPRPRPSSRSPRSS
```
**输出示例 3**
```cpp
18
```
**解题代码**
```cpp
略
```
<a name="ur36f"></a>
### Charm Bracelet S
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1723809213657-ad938d5f-493f-4329-9c35-f94698f076bf.png#averageHue=%23d3d3d3&clientId=ub1856da5-f22e-4&from=paste&height=838&id=cii5g&originHeight=1257&originWidth=1038&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=286660&status=done&style=none&taskId=uf5d71fc1-936f-4a2e-b118-66270b0efb4&title=&width=692)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define double long double
#define endl "\n"
#define fi first
#define se second
#define mod3 998244353
#define mod7 1000000007
const int N = 1e6 + 10;
const double eps =1e-4;

int n, m;
int v[N], w[N];
int f[N];

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);
    
    cin >> n >> m;
	
	for(int i=1;i<=n;i++){
		cin >> v[i] >> w[i];
	}
	
	for(int i=1;i<=n;i++){
		for(int j=m;j>=v[i];j--){  //从大到小循环
			f[j] = max(f[j], f[j-v[i]] + w[i]);
		}
	}
	
	cout << f[m] << endl;
    
    return 0;
}
```
<a name="OyoNg"></a>
### NASA的食物计划
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1723809215529-53ee2b78-968a-4e99-aed3-b5cc59019363.png#averageHue=%23d5d5d5&clientId=ub1856da5-f22e-4&from=paste&height=886&id=u19a95d61&originHeight=1329&originWidth=1035&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=113756&status=done&style=none&taskId=uc71ef702-4767-4953-bf40-0b72ce05093&title=&width=690)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define double long double
#define endl "\n"
#define fi first
#define se second
#define mod3 998244353
#define mod7 1000000007
const int N = 1e6 + 10;
const double eps =1e-4;

int hi[1000],ti[1000],ki[1000];
int dp[10000][10000];

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int hmax, tmax,n;
    cin >> hmax >> tmax >> n;
    for (int i = 1; i <= n;i++){
        cin >> hi[i] >> ti[i] >> ki[i];
    }

    for (int i = 1; i <= n;i++){
		for (int j = hmax; j >= hi[i]; j--){
			for(int z = tmax;z >= ti[i];z--){
				dp[j][z] = max(dp[j][z], dp[j - hi[i]][z - ti[i]] + ki[i]);
			}
		}
	}
    cout << dp[hmax][tmax] << endl;
    return 0;
}
```
<a name="h5Fow"></a>
### A+B Problem（再升级）
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1723809382518-2fbbebe8-0fd7-42e9-adb8-a0752e917493.png#averageHue=%23d9d9d9&clientId=ub1856da5-f22e-4&from=paste&height=811&id=uc8b2cc9a&originHeight=1216&originWidth=859&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=65894&status=done&style=none&taskId=u1a0f58bd-a93f-443b-871c-12c6dd23b50&title=&width=572.6666666666666)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define double long double
#define endl "\n"
#define fi first
#define se second
#define mod3 998244353
#define mod7 1000000007
const int N = 1e6 + 10;
const double eps =1e-4;

int dp[10010];
bool isPrime(int x) {
    if (x < 2)
    {
        return false;
    }
    //试除法
    for (int i = 2; i <= x/i; i++)
    {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n;
    cin >> n;
    dp[0] = 1;
    for (int i = 2; i <= n; i++){
        if(!isPrime(i))continue;
        for (int j = 0; j <= n; j++){
            if(j+i>n)
                break;
            dp[j + i] += dp[j];
        }
    }
    cout << dp[n] << endl;

    return 0;
}
```
<a name="v8yxj"></a>
### 小书童——刷题大军
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1723809384459-84a5f321-c728-41b6-b4d5-c0b7ea9dbc96.png#averageHue=%23d6d6d6&clientId=ub1856da5-f22e-4&from=paste&height=628&id=ue1f5af6f&originHeight=942&originWidth=863&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=69551&status=done&style=none&taskId=ucc179597-93b8-4018-93d9-964bbfcf3d4&title=&width=575.3333333333334)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define double long double
#define endl "\n"
#define fi first
#define se second
#define mod3 998244353
#define mod7 1000000007
const int N = 1e6 + 10;
const double eps =1e-4;
int a[1000],t[1000],s[1000];
vector<int> dp(1000, 0);
signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n, m, k, r;
    cin >> n >> m >> k >> r;
    for (int i = 1; i <= n;i++){cin >> a[i];}
    for (int i = 1; i <= m;i++){cin >> t[i];}
    for (int i = 1; i <= m;i++){cin >> s[i];}

    for (int i = 1; i <= m;i++){
        for (int j = r; j >= t[i];j--){
            dp[j] = max(dp[j], dp[j - t[i]] + s[i]);
        }
    }
    
	for (int i = 0; i <= r; i++) {
		if (dp[i] >= k) {
			r -= i; break;
		}
	}

    int ans = 0;
    sort(a+1, a+1+n);
    for (int i = 1; i <= n; i++){
        if(r-a[i]>=0){
            ans++;
            r -= a[i];
        }
        else
            break;
    }
    cout << ans << endl;

    return 0;
}
```
<a name="zDsAj"></a>
### 浙工院养奶牛
[U289374 浙工院养奶牛](https://www.luogu.com.cn/problem/U289374)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1723901665228-8ddd9652-e479-4c09-a56f-8282c8f8cab3.png#averageHue=%23d7d7d7&clientId=uc1ec3c0a-a0a9-4&from=paste&height=639&id=u6d6e0be8&originHeight=958&originWidth=865&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=64588&status=done&style=none&taskId=u1c2b2a1c-9987-414d-bc0d-693e4fcfc14&title=&width=576.6666666666666)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define double long double
#define endl "\n"
#define fi first
#define se second
#define mod3 998244353
#define mod7 1000000007
const int N = 1e6 + 10;
const double eps =1e-4;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    vector<int> dp(56);
    dp[1] = 1, dp[2] = 1, dp[3] = 1,dp[4]=2,dp[5]=3;	//第1年到第4年都只有一只老母牛在生产一只小母牛 
    //往后的年份中，计算上一年的母牛数和三年前的母牛数（今年是第四年，他们已经长大了）
    for(int i=6;i<=55;i++){
        dp[i] = dp[i-1] + dp[i-3]; 
    }
    
    cout << dp[50] << endl;
    return 0;
}
```
<a name="HRBhG"></a>
### 学长会旋转
[U281369](https://www.luogu.com.cn/problem/U281369)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1723901839302-f3bf64df-4af0-40bf-a15f-26bbac6b602e.png#averageHue=%23d9d9d9&clientId=uc1ec3c0a-a0a9-4&from=paste&height=719&id=ucfa39fe6&originHeight=1078&originWidth=862&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=45208&status=done&style=none&taskId=ua82b7cbc-0388-4a65-9a0d-e6047ce8847&title=&width=574.6666666666666)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define double long double
#define endl "\n"
#define fi first
#define se second
#define mod3 998244353
#define mod7 1000000007
const int N = 1e6 + 10;
const double eps =1e-4;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n,k;
    cin >> n >> k;
    int a[n + 1][n + 1],b[n + 1][n + 1];
    for (int i = 1; i <= n; i++){
        for (int j = 1; j <= n;j++){
            cin >> a[i][j];
        }
    }
    k = k % 4;
    if(k==0){
        for (int i = 1; i <= n; i++){
            for (int j = 1; j <= n;j++){
                cout << a[i][j]<<" ";
            }
        cout << endl;
        }
        return 0;
    }
    if(k==1){
        for (int i = 1; i <= n; i++){
            for (int j = n; j >= 1;j--){
                cout << a[j][i]<<" ";
            }
        cout << endl;
        }
        return 0;
    }
    if(k==2){
        for (int i = n; i >= 1; i--){
            for (int j = n; j >= 1;j--){
                cout << a[i][j]<<" ";
            }
        cout << endl;
        }
        return 0;
    }
    if(k==3){
        for (int i = n; i >= 1; i--){
            for (int j = 1; j <= n;j++){
                cout << a[j][i]<<" ";
            }
        cout << endl;
        }
        return 0;
    }
    return 0;
}
```
<a name="CsrV7"></a>
### 学长的数(1) 
[U280826](https://www.luogu.com.cn/problem/U280826)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1723901938180-42d08bdf-5bb7-4a5c-b5c7-00a07a527a0a.png#averageHue=%23d8d8d8&clientId=uc1ec3c0a-a0a9-4&from=paste&height=767&id=u11c050ca&originHeight=1151&originWidth=868&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=63368&status=done&style=none&taskId=uefee605b-2e8f-4b8f-a9b8-055052f4ccf&title=&width=578.6666666666666)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define double long double
#define endl "\n"
#define fi first
#define se second
#define mod3 998244353
#define mod7 1000000007
const int N = 1e6 + 10;
const double eps =1e-4;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n;
    cin >> n;
    
    int x = 1, ans = 0;
    while (x <= n){
        ans = x;
        x = x*2 +1;
    }
    cout << ans;
    return 0;
}
```
