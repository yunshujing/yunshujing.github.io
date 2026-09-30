---
title: 暑期ACM-Week6
createTime: 2024/08/26 22:00:00
tags:
  - 学习
  - 代码
  - ACM
permalink: /article/mly4n9vq/
---

<a name="dn7Mv"></a>
## 知识点
<a name="KFvm6"></a>
### 回顾
```cpp
"+\n"[i == g.size() - 1]
a>b?a:b
for(auto x:s)
```
**多行输出**
```cpp
#include <iostream>
using namespace std;

int main()
{
    cout << R"(
        ####
        #**#
        #**#
        ####
    )"
    return 0;
}
```
```cpp
void buddha_bless(){
	cout << R"( 
				////////////////////////////////////////////////////////////////////
				//                          _ooOoo_                               //
				//                         o8888888o                              //
				//                         88" . "88                              //
				//                         (| ^_^ |)                              //
				//                         O\  =  /O                              //
				//                      ____/`---'\____                           //
				//                    .'  \\|     |//  `.                         //
				//                   /  \\|||  :  |||//  \                        //
				//                  /  _||||| -:- |||||-  \                       //
				//                  |   | \\\  -  /// |   |                       //
				//                  | \_|  ''\---/''  |   |                       //
				//                  \  .-\__  `-`  ___/-. /                       //
				//                ___`. .'  /--.--\  `. . ___                     //
				//              ."" '<  `.___\_<|>_/___.'  >'"".                  //
				//            | | :  `- \`.;`\ _ /`;.`/ - ` : | |                 //
				//            \  \ `-.   \_ __\ /__ _/   .-` /  /                 //
				//      ========`-.____`-.___\_____/___.-`____.-'========         //
				//                           `=---='                              //
				//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^        //
				//            佛祖保佑       永无BUG     永不修改                 //
				////////////////////////////////////////////////////////////////////
				
)";
}
```
<a name="BHW5T"></a>
### 并查集
<a name="hTh3M"></a>
#### 朴素并查集

- 路径压缩
- 按秩合并

例题[P1551](https://www.luogu.com.cn/problem/P1551)
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

vector<int> p(5010);//我的父亲是谁
//初始化
void init(int n){
    for (int i = 1; i <= n; i++)
    {
        p[i] = i;//自己是自己的监护人
    }
    
}
//找自己最上面的祖宗 近乎O(1)
int find(int x){
    /* 
    if(x != p[x]){
        return find(p[x]);//上面还有人
    }
    else{
        return x;//自己就是自己的监护人，即祖宗
    }
    */
    if(x != p[x]){
        p[x] = find(p[x]);//路径压缩[better!]
    }
    return p[x];
}
//合并
void merge(int u,int v){
    int pu = find(u);
    int pv = find(v);
    if(pu != pv){
        p[pu] = pv;//新爹，合并完成
    }
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n, m, q;
    cin >> n >> m >> q;
    init(n);
    while (m--){
        int u, v;
        cin >> u >> v;
        merge(u, v);//有亲戚关系的人合并
    }
    while(q--){
        int a, b;
        cin >> a >> b;
        if(find(a) == find(b)){
            cout << "Yes" << endl;
        }
        else{
            cout << "No" << endl;
        }
    }
    return 0;
}
```
<a name="uwvyW"></a>
#### 带权并查集(size并查集)

- size并查集：查询数组的大小权值

例题[P1551](https://www.luogu.com.cn/problem/P1551)
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

vector<int> p(5010);//我的父亲是谁
vector<int> size(5010);//集合大小
//初始化
void init(int n){
    for (int i = 1; i <= n; i++)
    {
        p[i] = i;//自己是自己的监护人
        size[i] = 1;
    }
    
}
//找自己最上面的祖宗 近乎O(1)
int find(int x){
    if(x != p[x]){
        p[x] = find(p[x]);//路径压缩[better!]
    }
    return p[x];
}
//合并
void merge(int u,int v){
    int pu = find(u);
    int pv = find(v);
    if(pu!=pv){
        size[pv] += size[pu];
        p[pu] = pv;
    }
}

void solve(){ 
    int u,v;   
    merge(u,v); // 将u所在集合并到v所在集合
    siz[find(u)]; // 查询u所在集合的大小
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n, m, q;
    cin >> n >> m >> q;
    init(n);
    while (m--){
        int u, v;
        cin >> u >> v;
        merge(u, v);//有亲戚关系的人合并
    }
    while(q--){
        int a, b;
        cin >> a >> b;
        if(find(a) == find(b)){
            cout << "Yes" << endl;
        }
        else{
            cout << "No" << endl;
        }
    }
    return 0;
}
```
<a name="k2lfk"></a>
### 素数判定（Miller-Rabin算法模板）

- 大素数判定：随机一些数去试除n
- 费马小定理：如果n是素数，那么$a^{n-1} mod\ n = 1$  
- 逆命题：如果$a^{n-1} mod\ n = 1$，那么n就是素数（不一定成立）
- 如果$a^{n-1} mod\ n != 1$，那么n肯定不是素数（成立）
- 随机多个a，计算$a^{n-1} mod\ n$，都等于1，$n$ 大概率是素数

（可惜的是有很小很小很小的一部分合数，无论a取什么值他都能通过测试，怎么排除这部分合数？）

- 二次探测定理<br />推论：方程$x^2 mod\ n = 1$，如果$x$有$x=1$和$x=n-1$以外的解，$n$肯定不是素数。

**Miller-Rabin算法模板**
```cpp
#include <bits/stdc++.h>
using namespace std;
#define endl '\n'

typedef long long ll;
typedef unsigned long long ull; // 自然溢出
typedef pair<int,int> PII;
const int S = 50; // 测试数
// 快速乘,防止乘法溢出longlong
ll mult_mod(ll u,ll v,ll p){
    return (u * v - ll((long double)u * v / p) * p + p) % p;
}
// 快速幂
ll fast_pow(ll x,ll y,ll mod){
    ll res = 1;
    x %= mod;
    while(y){
        if(y & 1) res = mult_mod(res,x,mod);
        x = mult_mod(x,x,mod);
        y >>= 1;
    }
    return res;
}

bool witness(ll a,ll n){
    ll u = n - 1;
    int t = 0;
    // 计算t,u,对n-1一直除2,直到是奇数,剩下的奇数是u,除2次数是t
    while(u & 1 == 0){u = u >> 1,t++;} 
    ll x1,x2;
    x1 = fast_pow(a,u,n); // 计算a^u
    // 做t次平方
    for(int i = 1;i <= t;i++){
        x2 = fast_pow(x1,2,n); // 平方后的结果
        // 二次探测定理
        if(x2 == 1 && x1 != 1 && x1 != n - 1) return true; // 必然是合数
        x1 = x2;
    }
    // 最后x1=a^n-1,费马小定理
    if(x1 != 1) return true; // 必然是合数
    return false;
}

int miller_rabin(ll n){
    if(n < 2) return 0; // 小于2是合数
    if(n == 2) return 1; // 2是质数
    if(n % 2 == 0) return 0; // 偶数是合数
    // 剩下做测试
    for(int i = 0;i < S;i++){
        ll a = rand() % (n - 1) + 1; // 随机一个a
        if(witness(a,n)) return 0; // 测试
    }
    return 1;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    cout << fixed << setprecision(6);
    ll n;
    cin >> n;
    if(miller_rabin(n)){
        cout << "P" << endl;
    }
    else{
        cout << "not P" << endl;
    }
    return 0;
}
```

<a name="liMby"></a>
### 逆元
通俗的讲，逆元可以看做一个数的倒数的整数形式，但是一个数的逆元在不同的($mod(n)$)意义下是不一样的。

- $a\times x\equiv1\quad\mathrm{mod~}(n)$ → $a\times\frac1a\equiv1\quad\mathrm{mod~}(n)$

这个方程便是逆元的真正定义，$x$的解即代表$a$在$~mod~n~$意义下的逆元，通俗的讲：此时的$x$就相当于$a$的倒数，这样$a×x$便会等于1，在$~mod~n~$意义下余数必定为一。当然这个式子要建立在$a$与$n$互质<br />的基础上！<br />可是逆元有什么用呢？直接用倒数不行吗？这是因为我们发现一个分数$~mod~$一个整数时是不能直接模运算的，但是可以进行乘法运算，我们就要用到逆元（一个数倒数的整数形式）<br />就像:$\quad\frac ab\quad\mathrm{mod~}(n)\neq\frac{a\mathrm{~mod~}n}{b\mathrm{~mod~}n}\quad\mathrm{mod~}(n)$<br />但是:$\quad\frac ab\quad\mathrm{mod~}(n)=a\times b^{-1}\quad\mathrm{mod~}(n)$<br />所以当除运算碰上我们的模运算时，我们就需要$~mod~模数$意义下的逆元了！

**掌握以下知识点即可**<br />$\quad\frac ab\quad\mathrm{mod~}(n)=a\times b^{-1}\quad\mathrm{mod~}(n) \\=((a\quad\mathrm{mod~}(n))\times fastPower(b, mod(n) - 2, mod(n)))\quad\mathrm{mod~}(n)$
```cpp
(a / b) % mod;
(a % mod * b ^ -1 % mod) % mod;
ans = ((a % mod) * fastPower(b, mod - 2, mod)) % mod;
```

[详细解释](https://www.cnblogs.com/812-xiao-wen/p/10500580.html)<br />用逆计算组合数取模
```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef unsigned long long ull;
typedef pair<int,int> PII;

#define endl '\n'

const ll mod = 998244353;

ll fpow(ll x,ll y,ll mod){
    ll res = 1;
    x %= mod;
    while(y){
        if(y & 1) res = (res * x) % mod;
        x = (x * x) %mod;
        y >>= 1;
    }
    return res;
}

ll inv(ll x){
    ll res = fpow(x,mod - 2,mod);
    return res;
}

ll fac[100005]; // 阶乘 fac[i] = i!
ll invfac[100005]; // 阶乘的逆 

void init(){
    fac[0] = 1;
    invfac[0] = 1;
    for(int i = 1;i <= 100000;i++){
        fac[i] = (fac[i - 1] * i) % mod;
        invfac[i] = (invfac[i - 1] * fpow(i,mod - 2,mod)) % mod;
    }
} 

ll C(ll a,ll b){
    if(a < b){
        return 0;
    }
    ll res = (((fac[a] * invfac[b] ) % mod)* invfac[a - b]) % mod;
    return res;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    init();
    ll a,b;
    cin >> a >> b;
    ll res = C(a,b);
    cout << res << endl;
    return 0;
}
```
<a name="zjEDW"></a>
### 素数筛法
**引入**<br />如果我们想要知道小于等于 n 有多少个素数呢？<br />一个自然的想法是对于小于等于 n 的每个数进行一次质数检验。这种暴力的做法显然不能达到最优复杂度。
<a name="unXb1"></a>
#### 埃氏筛 (省空间)
**过程**<br />考虑这样一件事情：对于任意一个大于 1 的正整数 n，那么它的 x 倍就是合数（x > 1）。利用这个结论，我们可以避免很多次不必要的检测。<br />如果我们从小到大考虑每个数，然后同时把当前这个数的所有（比自己大的）倍数记为合数，那么运行结束的时候没有被标记的数就是素数了。<br />**实现**
```cpp
vector<int> prime;
bool is_prime[N];

void Eratosthenes(int n) {
  is_prime[0] = is_prime[1] = false;
  for (int i = 2; i <= n; ++i) is_prime[i] = true;
  for (int i = 2; i <= n; ++i) {
    if (is_prime[i]) {
      prime.push_back(i);
      if ((long long)i * i > n) continue;
      for (int j = i * i; j <= n; j += i)
        // 因为从 2 到 i - 1 的倍数我们之前筛过了，这里直接从 i
        // 的倍数开始，提高了运行速度
        is_prime[j] = false;  // 是 i 的倍数的均不是素数
    }
  }
}
```
以上为 Eratosthenes 筛法（埃拉托斯特尼筛法，简称埃氏筛法），时间复杂度是 $O(n\log\log n)$。<br />**样例**<br />[【模板】线性筛素数](https://www.luogu.com.cn/problem/P3383)
```cpp
#include <bits/stdc++.h>
#define endl "\n"
using namespace std;
const int N = 1e8;
int prime[N + 5]; // 存放所有素数，下标从0开始
bool vit[N + 5];   // 是否被筛掉
int k = 0;        // 统计素数个数

// 埃氏筛 
void E_sieve(int n){
    // 初始化
    k = 0;
    for (int i = 0; i <= n; i++){
        vit[i] = 0;
    }
    //试除法
    for (int i = 2; i * i <= n; i++){
        if (vit[i] == 0){
            for (int j = i * i; j <= n; j += i){
                vit[j] = 1;
            }
        }
    }
    for (int i = 2; i <= n; i++){
        if (vit[i] == 0){
            prime[k++] = i;
        }
    }
}

int main(){ 
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int n,q;
    cin>>n>>q; 
    E_sieve(n);
    while(q--){
        int x;
        cin>>x;
        cout << prime[x - 1] << endl;
    }
}
```
<a name="dmO7j"></a>
#### 欧拉筛(速度快)
**筛法求欧拉函数 **<br />注意到在线性筛中，每一个合数都是被最小的质因子筛掉。比如设 $p_{1}$ 是 $n$ 的最小质因子，$n^{\prime}=\frac{n}{p_{1}}$ ，那么线性筛的过程中 $n$ 通过 $n^{\prime} \times p_{1}$筛掉。<br />观察线性筛的过程，我们还需要处理两个部分，下面对 $n^{\prime} \bmod p_{1}$ 分情况讨论。<br />如果 $n^{\prime} \bmod p_{1}=0$ ，那么 $n^{\prime}$ 包含了 $n$ 的所有质因子。<br />$\begin{aligned}\varphi(n) & =n \times \prod_{i=1}^{s} \frac{p_{i}-1}{p_{i}} \\& =p_{1} \times n^{\prime} \times \prod_{i=1}^{s} \frac{p_{i}-1}{p_{i}} \\& =p_{1} \times \varphi\left(n^{\prime}\right)\end{aligned}$<br />那如果 $n^{\prime} \bmod p_{1} \neq 0$ 呢，这时 $n^{\prime}  和$ p_{1} $ 是互质的，根据欧拉函数性质，我们有:<br />$\begin{aligned}\varphi(n) \ =\varphi\left(p_{1}\right) \times \varphi\left(n^{\prime}\right) \\ =\left(p_{1}-1\right) \times \varphi\left(n^{\prime}\right)\end{aligned}$<br />**实现**
```cpp
vector<int> pri;
bool not_prime[N];
int phi[N];

void pre(int n) {
  phi[1] = 1;
  for (int i = 2; i <= n; i++) {
    if (!not_prime[i]) {
      pri.push_back(i);
      phi[i] = i - 1;
    }
    for (int pri_j : pri) {
      if (i * pri_j > n) break;
      not_prime[i * pri_j] = true;
      if (i % pri_j == 0) {
        phi[i * pri_j] = phi[i] * pri_j;
        break;
      }
      phi[i * pri_j] = phi[i] * phi[pri_j];
    }
  }
}
```
**样例**<br />[【模板】线性筛素数](https://www.luogu.com.cn/problem/P3383)
```cpp
#include <bits/stdc++.h>
#define endl "\n"
using namespace std;
const int N = 1e8;
int prime[N + 5]; // 存放所有素数，下标从0开始
bool vit[N + 5];   // 是否被筛掉
int k = 0;        // 统计素数个数

// 欧拉筛 O(n)
// 让每一个数只被自己最小的质因子筛掉
void E_sieve(int n){
    // 初始化
    k = 0;
    for (int i = 0; i <= n; i++){
        vit[i] = 0;
    }
    // 做筛子的数 每一个数
    for (int i = 2; i <= n; i++){
        // 是素数直接存入
        if (vit[i] == 0){
            prime[k++] = i;
        }
        // 枚举的倍数乘已经有的素数，这个素数要作为最小质因子
        for (int j = 0; j < k; j++){
            // 超过n退出
            if (i * prime[j] > n){
                break;
            }
            vit[i * prime[j]] = 1; // 合数筛掉
            // 倍数里有小的质因子，后面更大的质因子就不用看了
            if (i % prime[j] == 0) {
                break;
            }
        }
    }
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int n, q;
    cin >> n >> q;
    E_sieve(n);
    while (q--)
    {
        int x;
        cin >> x;
        cout << prime[x - 1] << endl;
    }
}
```
<a name="aREtR"></a>
### 图论
<a name="uRUaT"></a>
#### dfs
```cpp
#include<bits/stdc++.h>
using namespace std;

vector<int> g[4];
int vis[1000];
int u, v;
bool dfs(int x){
    if(x==v)
        return true;
    vis[x] = 1;
    bool ok = 0;
    for (int i = 0; i < g[x].size();i++){
        if(vis[g[x][i]])
            continue;
        if (dfs(g[x][i]) == true){
            ok = true;
        }
    }
    return ok;
}

int main(){
    g[1].push_back(2);
    g[1].push_back(3);
    g[2].push_back(3);

    cin >> u >> v;
    cout << (dfs(u) ? "YES" : "NO");
}
```
<a name="YZxLH"></a>
#### bfs(更好)
[图的遍历（简单版）](https://www.luogu.com.cn/problem/B3862)
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

vector<int> g[1001];
int n, m,vis[1001];

int bfs(int u){
    for (int i = 1; i <= n;i++){
        vis[i] = 0;
    }//清空标记
    queue<int> q;
    q.push(u);//推入初始点
    vis[u] = 1;
    int mx = u;
    while(q.size()){
        int t = q.front();//拿出一个点
        q.pop();
        for(auto i:g[t]){//遍历所有边
            if(vis[i]==1)//如果已经推进去了就跳过
                continue;
            vis[i] = 1;//标记
            mx = max(mx, i);
            q.push(i);//并推入
        }
    }
    return mx;
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    cout << fixed << setprecision(6);

    cin >> n >> m;
    for (int i = 1; i <= m;i++){
        int x, y;
        cin >> x >> y;
        g[x].push_back(y); // 有向图存数
        // g[y].push_back(x); // 无向图存数
    }
    for (int i = 1; i <= n;i++){
        cout << bfs(i) << " \n"[i == n];
    }
        return 0;
}
```
<a name="QQMzR"></a>
#### 反向图
[P3916 图的遍历](https://www.luogu.com.cn/problem/P3916)
<a name="dQYJL"></a>
###### dfs解法
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

vector<int> g[100010];
int n, m,vis[100010];

void dfs(int x,int d){
    if(vis[x]) return;//如果已经被探过了就返回
    vis[x] = d;
    for (int i = 0; i < g[x].size();i++){
        dfs(g[x][i], d);
    }
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    cout << fixed << setprecision(6);

    cin >> n >> m;
    for (int i = 1; i <= m;i++){
        int x, y;
        cin >> x >> y;
        g[y].push_back(x); // 反向图
    }
    for (int i = n; i >=1;i--){//反向探
        dfs(i,i);
    }
    for (int i = 1; i <= n;i++){
        cout << vis[i] << " \n"[i == n];
    }
        return 0;
}
```
<a name="P05pZ"></a>
###### bfs解法
```cpp
#include<bits/stdc++.h>
using namespace std;
vector<int>a[100001];
int v[100001],n,m;
void bfs(int u){
    queue<int>q;
    q.push(u);//推入起始点 
    if(v[u]==0)
    v[u]=u;
    while(q.size()){
        int t=q.front();
        q.pop();
        for(auto i : a[t]){//遍历所以边 
            if(v[i]!=0) continue;
            v[i]=u;
            q.push(i);
        }
    }
}
int main()
{
    for(int i=1;i<=n;i++){
        v[i]=0;
    }
    cin>>n>>m;
    for(int i=1;i<=m;i++){
        int x,y;
        cin>>x>>y;
        a[y].push_back(x);
    }
    for(int i=n;i>=1;i--){
        bfs(i);
    }
    for(int i=1;i<=n;i++){
        cout<<v[i]<<" ";
    }
}
```

<a name="t3PWc"></a>
### 博弈论
若`a == b`,则对面怎么拿我就怎么拿，即必胜<br />可以推导出 `a^b == 0` 为必输态<br />必胜态在一定条件下可以转换成必输态<br />将必输态留给对面则必胜
```cpp
若 a^b^c^d == z 且 z>0
一定存在一个x
使得 (a-x)^b^c^d == 0	//必输态
```
<a name="SV0xj"></a>
### 离散化
```cpp
vector<int> g;
for (int i = 1; i <= n; i++){
    g.push_back(a[i]);
}
sort(g.begin(), g.end());
g.erase(unique(g.begin(), g.end()), g.end());//去重
[ 1, 3, 4 ] 
for (int i = 1; i <= n; i++){
    a[i] = lower bound(g, begin(), g.end(), a[i]) - g.begin() + 1;
    cout << a[i] << " \n"[i == n];
}
```

<a name="GZCCs"></a>
### 去重
`g.erase(unique(g.begin(),g.end()),g.end());`//去重<br />在STL中unique函数是一个去重函数， unique的功能是去除相邻的重复元素(只保留一个),其实它并不真正把重复的元素删除，是把重复的元素移到后面去了，然后依然保存到了原数组中，然后 返回去重后最后一个元素的地址，因为unique去除的是相邻的重复元素，所以一般用之前都会要排一下序。<br />sort，unique和erase的联合使用,可以将一个有重复元素的数组的重复元素去除，从而转化成一个无重复元素的数组
```cpp
end_unique=unique(result.begin(),result.end());
result.erase(end_unique,result.end());
```
由于 end_unique返回去重后最后一个元素的位置，而重复的元素都被移动到后面去了，所以要将从去重后最后一个元素的地址 到 原数组最后一个地址 这些地址中的元素去掉，从而得到无重复元素的数组<br />`lower_bound && upper_bound`<br />内置函数二分$O(logn)$
```cpp
lower_bound(l,r,x)	// 在l~r中找到第一个大于等于x的下标
// [1 2 3 4 5 6] 需要升序
upper_bound(l,r,x)	// 在l~r中找到第一个大于x的下标
```
<a name="Uhall"></a>
### 最小生成树
[【模板】最小生成树 - 洛谷](https://www.luogu.com.cn/problem/P3366)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724400435101-d3993d9e-3ae2-458f-9875-0aa1054b7e1d.png#averageHue=%23dbdbdb&clientId=u46270a1a-3aa1-4&from=paste&height=774&id=u5da47b6d&originHeight=1161&originWidth=771&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=178006&status=done&style=none&taskId=u3834c1aa-f2ad-40b9-b50e-3fd7c0a1e8a&title=&width=514)
```cpp
#include<bits/stdc++.h>
using namespace std;
const int N = 2e5 + 10;

struct node{
int u, v, w;
}p[N];

int f[N];
int find(int x){
    if(f[x] == x) return x;
    return f[x] = find(f[x]);
}

void marge(int x,int y){
    x = find(x);
    y = find(y);
    f[x] = y;
}

int main(){
    int n, m;
    cin >> n >> m;
    for(int i=1;i<=n;i++){
        f[i] = i;
    }
    for(int i=1;i<=m;i++){
        cin >> p[i].u >> p[i].v >> p[i].w;
    }
    sort(p + 1, p + 1 + m, [&](node x,node y){
        return x.w < y.w;
    });
    int ans = 0, sum = 0;
    for(int i=1;i<=m;i++){
        int u = p[i].u;
        int v = p[i].v;
        int w = p[i].w;
        if(find(u) != find(v)){
            ans += w;
            sum += 1;
            marge(u, v);
        }
    }
    if(sum != n - 1) cout << "orz\n";
    else cout << ans << '\n';
}
```

<a name="P3wJG"></a>
## 解题集
<a name="TihXN"></a>
### 亲戚
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724242565299-f901d341-3420-41c3-bad9-203216832d2f.png#averageHue=%23d6d6d6&clientId=u3ce271ee-83f2-4&from=paste&height=679&id=u3e4144d8&originHeight=1018&originWidth=918&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=77026&status=done&style=none&taskId=u2c366ae5-845b-4f89-9c59-dd71b777d4b&title=&width=612)
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

vector<int> p(5010);//我的父亲是谁
//初始化
void init(int n){
    for (int i = 1; i <= n; i++)
    {
        p[i] = i;//自己是自己的监护人
    }
    
}
//找自己最上面的祖宗 近乎O(1)
int find(int x){
	/* 
    if(x != p[x]){
        return find(p[x]);//上面还有人
    }
    else{
        return x;//自己就是自己的监护人，即祖宗
    }
	*/
	if(x != p[x]){
        p[x] = find(p[x]);//路径压缩[better!]
    }
    return p[x];
}
//合并
void merge(int u,int v){
    int pu = find(u);
    int pv = find(v);
    if(pu != pv){
        p[pu] = pv;//新爹，合并完成
    }
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n, m, q;
    cin >> n >> m >> q;
    init(n);
    while (m--){
        int u, v;
        cin >> u >> v;
        merge(u, v);//有亲戚关系的人合并
    }
    while(q--){
        int a, b;
        cin >> a >> b;
        if(find(a) == find(b)){
            cout << "Yes" << endl;
        }
        else{
            cout << "No" << endl;
        }
    }
    return 0;
}
```
<a name="DuV7h"></a>
### 并查集
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724242610154-f9a7291c-2d93-4893-a6ec-a71a11634216.png#averageHue=%23d7d7d7&clientId=u3ce271ee-83f2-4&from=paste&height=730&id=u264de63f&originHeight=1095&originWidth=917&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=74559&status=done&style=none&taskId=u9f5f3afe-a1d1-48de-a215-5c6935d39f4&title=&width=611.3333333333334)
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

vector<int> p(N);//我的父亲是谁
//初始化
void init(int n){
    for (int i = 1; i <= n; i++)
    {
        p[i] = i;//自己是自己的监护人
    }
}
//找自己最上面的祖宗 近乎O(1)
int find(int x){
	if(x != p[x]){
        p[x] = find(p[x]);//路径压缩[better!]
    }
    return p[x];
}
//合并
void merge(int u,int v){
    int pu = find(u);
    int pv = find(v);
    if(pu != pv){
        p[pu] = pv;//新爹，合并完成
    }
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);

    int n, m;
    cin >> n >> m ;
    init(n);
    while (m--){
        int z, x, y;
        cin >> z >> x >> y;
        if(z==1){
        merge(x, y);//有亲戚关系的人合并
        }
        if(z==2){
            if(find(x) == find(y)){
                cout << "Y" << endl;
            }
            else{
                cout << "N" << endl;
            }
        }
    }
    return 0;
}
```
<a name="Afq91"></a>
### Ubiquitous Religions
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724242664426-6101c55c-8711-4445-8f9b-3baa47b3fbec.png#averageHue=%23cdcdcd&clientId=u3ce271ee-83f2-4&from=paste&height=694&id=u33a9b058&originHeight=1041&originWidth=584&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=151019&status=done&style=none&taskId=u24b4520e-5425-4535-a219-437de70a47c&title=&width=389.3333333333333)
```cpp
#include <vector>  
#include <iostream>  
#include <cstdio>  
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

vector<int> p(N);//我的父亲是谁
vector<int> siz(N);//集合大小
//初始化
void init(int n){
    for (int i = 1; i <= n; i++)
    {
        p[i] = i;//自己是自己的监护人
        siz[i] = 1;
    }
    
}
//找自己最上面的祖宗 近乎O(1)
int find(int x){
    if(x != p[x]){
        p[x] = find(p[x]);//路径压缩[better!]
    }
    return p[x];
}
//合并
void merge(int u,int v){
    int pu = find(u);
    int pv = find(v);
    if(pu!=pv){
        siz[pv] += siz[pu];
        p[pu] = pv;
    }
}

signed main(){
    int n, m;
    int cnt = 1,sum=0;
    while(scanf("%lld %lld", &n, &m)&&n!=0&&m!=0){
        init(n);
        while(m--){
            int a, b;
            scanf("%lld %lld", &a, &b);
            merge(a, b);
        }

        sum = 0;
        for (int i = 1; i <= n; i++)
            if (p[i] == i)
                sum++;

        printf("Case %lld: %lld\n", cnt, sum);
        cnt++;
    }
    return 0;
}
```
<a name="jZwhh"></a>
### 朋友
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724242714241-33ea0e68-cc03-4cbd-8678-1ebe090ae30d.png#averageHue=%23d5d5d5&clientId=u3ce271ee-83f2-4&from=paste&height=577&id=u9eb85039&originHeight=866&originWidth=574&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=65785&status=done&style=none&taskId=u34a390d7-7adf-47e6-8e42-cc5603b4ceb&title=&width=382.6666666666667)
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

vector<int> p(N);//我的父亲是谁
vector<int> sise(N);//集合大小
//初始化
void init(int n){
    for (int i = 1; i <= n; i++)
    {
        p[i] = i;//自己是自己的监护人
        sise[i] = 1;
    }
    
}
//找自己最上面的祖宗 近乎O(1)
int find(int x){
	if(x != p[x]){
        p[x] = find(p[x]);//路径压缩[better!]
    }
    return p[x];
}
//合并
void merge(int u,int v){
    int pu = find(u);
    int pv = find(v);
    if(pu!=pv){
        sise[pv] += sise[pu];
        p[pu] = pv;
    }
}

signed main(){
    int n, m, p, q;
    scanf("%lld %lld %lld %lld", &n, &m, &p, &q);

    init(n);
    while (p--){
        int u, v;
        cin >> u >> v;
        merge(u, v);//有亲戚关系的人合并
    }
    int x = sise[find(1)];

    init(m);
    while (q--){
        int u, v;
        cin >> u >> v;
        u *= -1, v *= -1;
        merge(u, v);//有亲戚关系的人合并
    }
    int y = sise[find(1)];
    int sum = min(x, y);
    printf("%lld\n", sum);
    return 0;
}
```
<a name="X1uHI"></a>
### 银河英雄传说
[[NOI2002] 银河英雄传说 - 洛谷](https://www.luogu.com.cn/problem/P1196)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724242772361-4a97f84f-8c7d-4e3e-890f-6f475444458e.png#averageHue=%23d6d4d3&clientId=u3ce271ee-83f2-4&from=paste&height=959&id=u4cb2fc83&originHeight=1438&originWidth=579&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=142914&status=done&style=none&taskId=ub0f598fe-0b68-485f-a38e-06509100f6f&title=&width=386)
```cpp
#include<bits/stdc++.h>
using namespace std;
// #define int long long
#define double long double
#define endl "\n"
#define fi first
#define se second
#define mod3 998244353
#define mod7 1000000007
const int N = 1e6 + 10;
const double eps =1e-4;

int p[30005];  //我的父亲是谁 
int dis[30005]; //我到祖宗的距离 
int siz[30005];

//初始化n个人（独立的个体） 
void init(int n){
	for(int i=1;i<=n;i++){
		p[i] = i; //自己是自己的监护人 
		dis[i] = 0;
		siz[i] = 1;  //自己是第一 
	}
}

//查询（找自己最上面的祖宗） 
int find(int x){
	if(x != p[x]){
		int root = find(p[x]);
		dis[x] += dis[p[x]];
		p[x] = root;
	}
	return p[x];
}

//合并有亲戚关系的 
void merge(int u, int v){
	int pu = find(u);  //找u的爹 
	int pv = find(v);  //找v的爹 
	if(pu != pv){
		dis[pu] = siz[pv];
		siz[pv] += siz[pu]; 
		p[pu] = pv;
	}
	
}


signed main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);
    cout << fixed << setprecision(6);
    
    int q;
	cin >> q;
	
	init(30000); 
	
	while(q--){
		char op;
		int i, j;
		cin >> op >> i >> j;
		if(op == 'M'){
			merge(i, j);
		}else if(op == 'C'){
			if(find(i) == find(j)){  //同为一个祖宗 
				int ans = max(0, abs(dis[i] - dis[j])- 1 ); 
				cout << ans << endl;
			} else{
				cout << "-1\n";
			}
		}
		
	}
	return 0;
}
```
<a name="e67xK"></a>
### 寻找素数对
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724242958154-a153e42d-917b-40bb-ad0c-cdbec4ed06c8.png#averageHue=%23d3d3d3&clientId=u3ce271ee-83f2-4&from=paste&height=365&id=ud1acd819&originHeight=547&originWidth=925&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=46773&status=done&style=none&taskId=ua590c0dc-fa2f-41a9-85ad-0d939214622&title=&width=616.6666666666666)
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

bool miller_rabin(int x) {
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
    cin.tie(0);
    cout.tie(0);
    cout << fixed << setprecision(6);
    int n;
    while(cin >> n){
    int x1=0, x2=0, cnt=0x3f3f3f3f;
    for (int i = 1; i < n;i++){
        if(miller_rabin(i)&&miller_rabin(n-i)){
                if(abs(n-2*i)<cnt){
                    x1 = min(i, n - i);
                    x2 = max(i, n - i);
                    cnt=abs(n - 2 * i);
                }
            
        }
    }
    cout << x1 << " " << x2 << endl;
    }
    return 0;
}
```
<a name="MiQdN"></a>
### Max Factor
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724243008254-e76a2b17-98aa-494b-a069-c4675bbad825.png#averageHue=%23d2d2d2&clientId=u3ce271ee-83f2-4&from=paste&height=849&id=ud32fc389&originHeight=1273&originWidth=925&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=160814&status=done&style=none&taskId=ud8c94a28-be33-45d2-a183-f66a8ea2b82&title=&width=616.6666666666666)
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

vector<int> su(20010,0);

typedef long long ll;
typedef unsigned long long ull; // 自然溢出
typedef pair<int,int> PII;
const int S = 50; // 测试数
// 快速乘,防止乘法溢出longlong
ll mult_mod(ll u,ll v,ll p){
    return (u * v - ll((double)u * v / p) * p + p) % p;
}
// 快速幂
ll fast_pow(ll x,ll y,ll mod){
    ll res = 1;
    x %= mod;
    while(y){
        if(y & 1) res = mult_mod(res,x,mod);
        x = mult_mod(x,x,mod);
        y >>= 1;
    }
    return res;
}

bool witness(ll a,ll n){
    ll u = n - 1;
    int t = 0;
    // 计算t,u,对n-1一直除2,直到是奇数,剩下的奇数是u,除2次数是t
    while(u & 1 == 0){u = u >> 1,t++;} 
    ll x1,x2;
    x1 = fast_pow(a,u,n); // 计算a^u
    // 做t次平方
    for(int i = 1;i <= t;i++){
        x2 = fast_pow(x1,2,n); // 平方后的结果
        // 二次探测定理
        if(x2 == 1 && x1 != 1 && x1 != n - 1) return true; // 必然是合数
        x1 = x2;
    }
    // 最后x1=a^n-1,费马小定理
    if(x1 != 1) return true; // 必然是合数
    return false;
}

int miller_rabin(ll n){
    if(n < 2) return 0; // 小于2是合数
    if(n == 2) return 1; // 2是质数
    if(n % 2 == 0) return 0; // 偶数是合数
    // 剩下做测试
    for(int i = 0;i < S;i++){
        ll a = rand() % (n - 1) + 1; // 随机一个a
        if(witness(a,n)) return 0; // 测试
    }
    return 1;
}


signed main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    cout << fixed << setprecision(6);

    for (int i = 0; i <= 20000; i++)
    {
        if(miller_rabin(i)){
            su[i] = 1;
        }
    }

    int n;
    while(cin >> n){
        int max1 = 0,max2=0,m=0;
        int x;
        for (int i = 1; i <= n; i++){
            cin >> x;
            for (int j = x-1; j > 1;j--){
                if(su[j]==1&&x%j==0){//是质因子
                    max1 = j;
                    if(max1>max2){
                        max2 = max1;
                        m = x;
                    }
                    break;
                }
            }
        }
        cout << m << endl;
    }

    return 0;
}
```
<a name="e45Qd"></a>
### How many prime numbers 
[Problem - 2138](https://acm.hdu.edu.cn/showproblem.php?pid=2138)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724243100238-c2ca673e-1365-4f9b-87d3-a8bdcf0adce8.png#averageHue=%23d3d3d3&clientId=u3ce271ee-83f2-4&from=paste&height=409&id=u7376b65c&originHeight=613&originWidth=871&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=69007&status=done&style=none&taskId=u983fd36c-1068-4295-9c71-8c6569e13b6&title=&width=580.6666666666666)
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
    cin.tie(0);
    cout.tie(0);
    cout << fixed << setprecision(6);
    int n,x;
    while(cin >> n){
        int cnt = 0;
        for (int i = 1; i <= n; i++){
            cin >> x;
            if(isPrime(x)){
                cnt++;
            }
        }
        cout << cnt << endl;
    }
    return 0;
}
```
<a name="M0sDT"></a>
### A/B
[Problem - 1576](https://acm.hdu.edu.cn/showproblem.php?pid=1576)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724243157111-716a802a-06b4-4792-8519-13a8915f2e21.png#averageHue=%23d6d6d6&clientId=u3ce271ee-83f2-4&from=paste&height=327&id=ue81a542a&originHeight=490&originWidth=871&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=39544&status=done&style=none&taskId=ubf656bb3-61a9-4711-84c0-b36196fbe8b&title=&width=580.6666666666666)
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
#define mod1 9973

int fastPower(int a, int b, int mod/* 取模 */) {
    int result = 1; // 初始化结果为1
    a = a % mod; // 将a对m取模
    while (b > 0) {
        // 如果b的当前位是1，则将当前的a乘到result上
        if (b & 1) { // 等价于 if (b % 2 == 1)
            result *= a;
            result %= mod;
        }
        // 将a平方，准备处理下一位
        a *= a;
        a %= mod;
        // b右移一位
        b >>= 1; // 等价于 b = b / 2;
    }
    return result;
}

void solve(){
    int a, b;
    cin >> a >> b;
    // (a / b) % mod;
    // (a % mod * b ^ -1 % mod) % mod;
    int ans = ((a % mod1) * fastPower(b, mod1 - 2, mod1)) % mod1;
    cout << ans << endl;
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    cout << fixed << setprecision(6);
    int t;
    cin >> t;
    while(t--){
        solve();
    }
    return 0;
}
```
<a name="Otx62"></a>
### 线性筛素数
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724243302176-934f199f-0936-4cf0-b340-30787c40cad8.png#averageHue=%23d8d8d8&clientId=u3ce271ee-83f2-4&from=paste&height=677&id=uee203b26&originHeight=1016&originWidth=860&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=64505&status=done&style=none&taskId=u08ea58f7-d7bd-4593-a031-beb400ee170&title=&width=573.3333333333334)
```cpp
#include <bits/stdc++.h>
#define endl "\n"
using namespace std;
const int N = 1e8;
int prime[N + 5]; // 存放所有素数，下标从0开始
int vit[N + 5];   // 是否被筛掉
int k = 0;        // 统计素数个数

/* // 埃氏筛
void E_sieve(int n){
    // 初始化
    k = 0;
    for (int i = 0; i <= n; i++){
        vit[i] = 0;
    }
    //
    for (int i = 2; i * i <= n; i++){
        if (vit[i] == 0){
            for (int j = i * i; j <= n; j += i){
                vit[j] = 1;
            }
        }
    }
    for (int i = 2; i <= n; i++){
        if (vit[i] == 0){
            prime[k++] = i;
        }
    }
}
 */
// 欧拉筛 O(n)
// 让每一个数只被自己最小的质因子筛掉
void E_sieve(int n){
    // 初始化
    k = 0;
    for (int i = 0; i <= n; i++){
        vit[i] = 0;
    }
    // 做筛子的数 每一个数
    for (int i = 2; i <= n; i++){
        // 是素数直接存入
        if (vit[i] == 0){
            prime[k++] = i;
        }
        // 枚举的倍数乘已经有的素数，这个素数要作为最质因子
        for (int j = 0; j < k; j++){
            // 超过n退出
            if (i * prime[j] > n){
                break;
            }
            vit[i * prime[j]] = 1; // 合数筛掉
            // 倍数里有小的质因子，后面更大的质因子就不用看了
            if (i % prime[j] == 0){
                break;
            }
        }
    }
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int n, q;
    cin >> n >> q;
    E_sieve(n);
    while (q--)
    {
        int x;
        cin >> x;
        cout << prime[x - 1] << endl;
    }
}
```
<a name="ugQRW"></a>
### 分数
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724243341246-b0c1dacb-d925-4c2b-afac-588856a53318.png#averageHue=%23d6d6d6&clientId=u3ce271ee-83f2-4&from=paste&height=769&id=uf099d56b&originHeight=1153&originWidth=581&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=92604&status=done&style=none&taskId=ua738deb6-3263-4317-b1ba-46ab669bc10&title=&width=387.3333333333333)
```cpp
#include<bits/stdc++.h>
using namespace std;
const int n=2e6;
int p[n+5];
int v[n+5];
int ans[n+5];
int k=0;
void Euler_sieve(int n){
	for(int i=0;i<=n;i++){
		v[i]=0;
	}
	for(int i=2;i<=n;i++){
		if(v[i]==0) p[k++]=i;
		for(int j=0;j<k;j++){
			if(i*p[j]>n) break;
			v[i*p[j]]=1;
			if(i%p[j]==0) break;
		}
	}
}
void init(){
	int now=0;
	for(int i=1;i<=n;i++){
		if(!v[i]) now=i;
		ans[i]=now;
	}
}
int main()
{
	int t;
	cin>>t;
	Euler_sieve(n);
	init();
	while(t--){
		int x;
		cin>>x;
		cout<<ans[x]<<endl;
	}
}
```
<a name="bR0Fx"></a>
### 选数
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724243380218-f56a2b12-0595-44ca-8c66-1d97d98e0e26.png#averageHue=%23d8d8d8&clientId=u3ce271ee-83f2-4&from=paste&height=474&id=uec751aca&originHeight=711&originWidth=577&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=46314&status=done&style=none&taskId=u41b3cc09-8d11-4d8d-9197-725d11767d9&title=&width=384.6666666666667)
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
const int N = 5e6 + 10;
const double eps =1e-4;

vector<int> s;
int n, k, num = 0;

typedef long long ll;
typedef unsigned long long ull; // 自然溢出
typedef pair<int,int> PII;
const int S = 50; // 测试数
// 快速乘,防止乘法溢出longlong
ll mult_mod(ll u,ll v,ll p){
    return (u * v - ll((/*long*/ double)u * v / p) * p + p) % p;
}
// 快速幂
ll fast_pow(ll x,ll y,ll mod){
    ll res = 1;
    x %= mod;
    while(y){
        if(y & 1) res = mult_mod(res,x,mod);
        x = mult_mod(x,x,mod);
        y >>= 1;
    }
    return res;
}
bool witness(ll a,ll n){
    ll u = n - 1;
    int t = 0;
    // 计算t,u,对n-1一直除2,直到是奇数,剩下的奇数是u,除2次数是t
    while(u & 1 == 0){u = u >> 1,t++;} 
    ll x1,x2;
    x1 = fast_pow(a,u,n); // 计算a^u
    // 做t次平方
    for(int i = 1;i <= t;i++){
        x2 = fast_pow(x1,2,n); // 平方后的结果
        // 二次探测定理
        if(x2 == 1 && x1 != 1 && x1 != n - 1) return true; // 必然是合数
        x1 = x2;
    }
    // 最后x1=a^n-1,费马小定理
    if(x1 != 1) return true; // 必然是合数
    return false;
}
int miller_rabin(ll n){
    if(n < 2) return 0; // 小于2是合数
    if(n == 2) return 1; // 2是质数
    if(n % 2 == 0) return 0; // 偶数是合数
    // 剩下做测试
    for(int i = 0;i < S;i++){
        ll a = rand() % (n - 1) + 1; // 随机一个a
        if(witness(a,n)) return 0; // 测试
    }
    return 1;
}

int vis[N+10];
void dfs(vector<int> g,int cnt,int mx){
    if(cnt == k){
        int sum = 0;
        for(int i = 0 ;i < k; i++){
            sum += g[i];
        }
        if(miller_rabin(sum)){
            num++;
        }
        return;
    }
    for(int i = 1 ; i <= n; i++){
        if(vis[i] == 1 || i < mx) continue;//已经标记就跳过
        g.push_back(s[i]);
        vis[i] = 1;//标记
        dfs(g, cnt + 1,i);
        g.pop_back();
        vis[i] = 0;//取消标记
    }
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    cout << fixed << setprecision(6);
    
    cin >> n >> k;
    s.push_back(0);
    int sx = 0;
    for (int i = 1; i <= n;i++){
        cin >> sx;
        s.push_back(sx);
    }
    sort(s.begin(), s.end());
    dfs({}, 0, 0);

    cout << num << endl;

    return 0;
}
```
<a name="Op0Je"></a>
### 素数个数
![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724243411111-25ffb85e-384e-4665-9b72-f583d9fa6a9f.png#averageHue=%23d9d9d9&clientId=u3ce271ee-83f2-4&from=paste&height=328&id=u6c783051&originHeight=492&originWidth=577&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=22614&status=done&style=none&taskId=u426aebfe-2e2a-448c-a8f1-ff0c8fbce5d&title=&width=384.6666666666667)
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
const int N = 1e8 + 5;
const double eps =1e-4;

int prime[N + 5]; // 存放所有素数，下标从0开始
bool vit[N + 5];   // 是否被筛掉
int k = 0;        // 统计素数个数

void E_sieve(int n){
    // 初始化
    k = 0;
    for (int i = 0; i <= n; i++){
        vit[i] = 0;
    }
    //
    for (int i = 2; i * i <= n; i++){
        if (vit[i] == 0){
            for (int j = i * i; j <= n; j += i){
                vit[j] = 1;
            }
        }
    }
    for (int i = 2; i <= n; i++){
        if (vit[i] == 0){
            k++;
        }
    }
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    cout << fixed << setprecision(6);
    
    int n ;
    while (cin >> n){   
        E_sieve(n);
        cout << k << endl;
    }
    
    return 0;
}
```
<a name="eY2qi"></a>
### 炸铁路 
[炸铁路 - 洛谷](https://www.luogu.com.cn/problem/P1656)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724380574289-f81c2742-b57e-4b6d-95d4-a11b808cfc6e.png#averageHue=%23d5d5d5&clientId=u6343fd15-8258-4&from=paste&height=761&id=u76318cb4&originHeight=1142&originWidth=1033&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=102894&status=done&style=none&taskId=udcbf47ba-9f33-4704-98ae-398d95b955c&title=&width=688.6666666666666)<br />![53702677.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/44491236/1724380575234-8ccd8245-f180-47c6-a33f-327c76089e4d.jpeg#averageHue=%232c2b2b&clientId=u6343fd15-8258-4&from=paste&height=949&id=u3db50c30&originHeight=1424&originWidth=962&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=113799&status=done&style=none&taskId=uc24cc64f-422b-4518-89e8-c0e5df84aeb&title=&width=641.3333333333334)
<a name="ETlab"></a>
### 图的遍历
[图的遍历 - 洛谷](https://www.luogu.com.cn/problem/P3916)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724380802525-a8e5bdad-c0bd-4475-972a-d74a6a86ced0.png#averageHue=%23d8d8d8&clientId=u46270a1a-3aa1-4&from=paste&height=617&id=ue6594e6d&originHeight=925&originWidth=1037&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=65614&status=done&style=none&taskId=ue2353b9b-22e8-4e6a-bda8-ab700d40411&title=&width=691.3333333333334)
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

vector<int> g[100010];
int n, m,vis[100010];

void dfs(int x,int d){
    if(vis[x]) return;//如果已经被探过了就返回
    vis[x] = d;
    for (int i = 0; i < g[x].size();i++){
        dfs(g[x][i], d);
    }
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    cout << fixed << setprecision(6);

    cin >> n >> m;
    for (int i = 1; i <= m;i++){
        int x, y;
        cin >> x >> y;
        g[y].push_back(x); // 反向图
    }
    for (int i = n; i >=1;i--){//反向探
        dfs(i,i);
    }
    for (int i = 1; i <= n;i++){
        cout << vis[i] << " \n"[i == n];
    }
        return 0;
}
```
<a name="vy4GK"></a>
### 图的遍历（简单版）
[图的遍历（简单版） - 洛谷](https://www.luogu.com.cn/problem/B3862)![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724380913228-a1a27436-4a23-40e9-9fd5-d41c29823d16.png#averageHue=%23d8d8d8&clientId=u46270a1a-3aa1-4&from=paste&height=597&id=u5f54b163&originHeight=896&originWidth=1040&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=59397&status=done&style=none&taskId=u64e136e7-7c13-4313-a74b-bb6911fd277&title=&width=693.3333333333334)
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

vector<int> g[1001];
int n, m,vis[1001];

int bfs(int u){
    for (int i = 1; i <= n;i++){
        vis[i] = 0;
    }//清空标记
    queue<int> q;
    q.push(u);//推入初始点
    vis[u] = 1;
    int mx = u;
    while(q.size()){
        int t = q.front();//拿出一个点
        q.pop();
        for(auto i:g[t]){//遍历所有边
            if(vis[i]==1)//如果已经推进去了就跳过
                continue;
            vis[i] = 1;//标记
            mx = max(mx, i);
            q.push(i);//并推入
        }
    }
    return mx;
}

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    cout << fixed << setprecision(6);

    cin >> n >> m;
    for (int i = 1; i <= m;i++){
        int x, y;
        cin >> x >> y;
        g[x].push_back(y); // 有向图存数
        // g[y].push_back(x); // 无向图存数
    }
    for (int i = 1; i <= n;i++){
        cout << bfs(i) << " \n"[i == n];
    }
        return 0;
}
```
<a name="o25kW"></a>
### 悼念512汶川大地震遇难同胞——选拔志愿者 
[Problem - 2188](https://acm.hdu.edu.cn/showproblem.php?pid=2188)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724380977310-e1b41a4a-33dc-4d32-b079-add5e319c432.png#averageHue=%23cfcfcf&clientId=u46270a1a-3aa1-4&from=paste&height=597&id=uf8156911&originHeight=896&originWidth=1034&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=117376&status=done&style=none&taskId=u1bbb3f2d-6090-45ff-bb94-5fda5074f0e&title=&width=689.3333333333334)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define double long double
#define endl "\n"
#define mod3 998244353
#define mod7 1000000007
const int N = 1e6 + 10;
const double eps =1e-4;

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    cout << fixed << setprecision(6);

    int n;
    cin >> n;
    while(n--){
        int a, b;
        cin >> a >> b;
        if(a%(b+1)==0)  cout<<"Rabbit"<<endl;
        else cout<<"Grass"<<endl;
    }

    return 0;
}
```
<a name="nOcjc"></a>
### Being a Good Boy in Spring Festival 
[Problem - 1850](https://acm.hdu.edu.cn/showproblem.php?pid=1850)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/44491236/1724381064341-65a4a4e4-c928-4e4d-8e77-4367e7f2cdff.png#averageHue=%23d4d4d4&clientId=u46270a1a-3aa1-4&from=paste&height=737&id=u08e8bd18&originHeight=1105&originWidth=1037&originalType=binary&ratio=1.5&rotation=0&showTitle=false&size=104534&status=done&style=none&taskId=u33848dd4-e053-4cf7-b77c-2b71c911213&title=&width=691.3333333333334)
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define double long double
#define endl "\n"
#define mod3 998244353
#define mod7 1000000007
const int N = 1e6 + 10;
const double eps =1e-4;
int a[1001000];

signed main(){
    ios::sync_with_stdio(false);
    cin.tie(0);cout.tie(0);
    cout << fixed << setprecision(6);

    int n;
    while(cin>>n&&n){
        int sum = 0;
        for (int i = 1; i <= n;i++){
            cin >> a[i];
            sum ^= a[i];
        }
    
        int ans=0;
        for (int i = 1; i <= n;i++){
            if(a[i] >= (sum^a[i])){
                ans++;
            }
        }
        if (sum == 0)
            ans = 0;
        cout << ans << endl;
    }
    return 0;
}
```
